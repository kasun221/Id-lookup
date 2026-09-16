function normId(s){return String(s||'').toUpperCase().replace(/\s+/g,'').replace(/[^0-9VX]/g,'')}
function normPhone(s){
  let p=String(s||'').replace(/[^0-9+]/g,'');
  if(p.startsWith('+94')) return '94'+p.slice(3);
  if(p.startsWith('0094')) return '94'+p.slice(4);
  if(p.startsWith('0')) return '94'+p.slice(1);
  return p;
}
function headers(){return {'Content-Type':'application/json','apikey':process.env.SUPABASE_SERVICE_ROLE_KEY,'Authorization':'Bearer '+process.env.SUPABASE_SERVICE_ROLE_KEY}}
async function call(base, opts={}){ return fetch(base, {headers:headers(), ...opts, headers:{...headers(),...(opts.headers||{})}}); }
export default async function handler(req,res){
  if(!process.env.SUPABASE_URL||!process.env.SUPABASE_SERVICE_ROLE_KEY){return res.status(500).json({error:'Database is not configured. Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Vercel Environment Variables.'})}
  const root=process.env.SUPABASE_URL.replace(/\/$/,'')+'/rest/v1/phone_numbers';
  try{
    if(req.method==='GET'){
      const id=normId(req.query?.id); if(!id)return res.status(400).json({error:'ID required'});
      // Support both schemas used by earlier versions.
      let r=await call(root+'?id_number=eq.'+encodeURIComponent(id)+'&select=phone_number');
      if(r.ok){const j=await r.json(); return res.status(200).json({phone:j[0]?.phone_number||'',phone2:j[0]?.phone_number2||''})}
      r=await call(root+'?id=eq.'+encodeURIComponent(id)+'&select=phone');
      const j=await r.json().catch(()=>[]); if(!r.ok)return res.status(r.status).json({error:'Database read failed',detail:j});
      return res.status(200).json({phone:j[0]?.phone||'',phone2:j[0]?.phone2||''});
    }
    if(req.method==='PUT'){
      const body=typeof req.body==='string'?JSON.parse(req.body||'{}'):(req.body||{});
      const id=normId(body.id), phone=normPhone(body.phone), phone2=normPhone(body.phone2), pin=String(body.pin||'');
      if(!id||(!phone&&!phone2))return res.status(400).json({error:'ID සහ අවම වශයෙන් එක් phone number එකක් අවශ්‍යයි'});
      if(!process.env.PHONE_SAVE_PIN)return res.status(500).json({error:'PHONE_SAVE_PIN is not configured in Vercel Environment Variables.'});
      if(pin!==process.env.PHONE_SAVE_PIN)return res.status(403).json({error:'PIN වැරදියි.'});
      if(phone && !/^947\d{8}$/.test(phone))return res.status(400).json({error:'Phone 1 සඳහා ශ්‍රී ලංකා mobile number එකක් ඇතුළත් කරන්න.'});
      if(phone2 && !/^947\d{8}$/.test(phone2))return res.status(400).json({error:'Phone 2 සඳහා ශ්‍රී ලංකා mobile number එකක් ඇතුළත් කරන්න.'});
      const payload={id_number:id,phone_number:phone||null,phone_number2:phone2||null,updated_at:new Date().toISOString()};
      let r=await call(root+'?on_conflict=id_number',{method:'POST',headers:{'Prefer':'resolution=merge-duplicates,return=representation'},body:JSON.stringify(payload)});
      if(r.ok)return res.status(200).json({ok:true,phone,phone2});
      // Fallback for tables created with the id/phone schema.
      const payload2={id,phone:phone||null,phone2:phone2||null,updated_at:new Date().toISOString()};
      r=await call(root+'?on_conflict=id',{method:'POST',headers:{'Prefer':'resolution=merge-duplicates,return=representation'},body:JSON.stringify(payload2)});
      const text=await r.text(); if(!r.ok)return res.status(r.status).json({error:'Database save failed',detail:text.slice(0,1000)});
      return res.status(200).json({ok:true,phone,phone2});
    }
    return res.status(405).json({error:'Method not allowed'});
  }catch(e){return res.status(500).json({error:'Server error',detail:String(e.message||e)})}
}
