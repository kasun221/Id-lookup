let DATA=[];
let MAP=new Map();
let ELDERLY=[];
const ELDERLY_FALLBACK=[{"hh":"HH-2-2-18-01-140-00336","name":"Malani Somalatha Ranathunga","nic":""},{"hh":"HH-2-2-18-01-140-00335","name":"Kinsly Perera","nic":""},{"hh":"HH-2-2-18-01-140-00333","name":"Chandrakanthi Desanayaka Uduwawala","nic":""},{"hh":"HH-2-2-18-01-140-00333","name":"Kaal Ashoka Uduwaawal","nic":"453402339V"},{"hh":"HH-2-2-18-01-140-00327","name":"Sheela Kottagodage","nic":""},{"hh":"HH-2-2-18-01-140-00327","name":"Jinadasa Kottagodage","nic":"452334003V"},{"hh":"HH-2-2-18-01-140-00326","name":"Withanaarachchige Premawathi","nic":"486013648V"},{"hh":"HH-2-2-18-01-140-00326","name":"Weerakoon Mudalige Don Ananda Gamini Weerakoon","nic":"531873319V"},{"hh":"HH-2-2-18-01-140-00324","name":"Ranasingha Arachchige Fransiska Marline Perera","nic":"194376010077"},{"hh":"HH-2-2-18-01-140-00322","name":"Kulugammana Nadunge Siriwardana","nic":"195311104271"},{"hh":"HH-2-2-18-01-140-00320","name":"Rasu Pathmawathi","nic":""},{"hh":"HH-2-2-18-04-130-00102","name":"Maslamani Mani","nic":"556838542V"},{"hh":"HH-2-2-18-01-140-00386","name":"Srinarayana Brahakmana Wasala Adikari Ekanayake Mudiyanselage Padmini","nic":"487270849V"},{"hh":"HH-2-2-18-01-140-00383","name":"Delpe Arachchige Godling Swarnalatha","nic":"497520592V"},{"hh":"HH-2-2-18-01-140-00381","name":"Wejesingha Arachchige Swarnalatha","nic":"517290947V"},{"hh":"HH-2-2-18-01-140-00372","name":"Welu Kumuduni","nic":"478473699V"},{"hh":"HH-2-2-18-01-140-00358","name":"Muththalagan Ramaiya","nic":"542061260X"},{"hh":"HH-2-2-18-01-140-00350","name":"Ramalingam Karnagi Devi","nic":"518222611X"},{"hh":"HH-2-2-18-01-140-00348","name":"Atambagoda Gedara Lilawathi","nic":"194765310086"},{"hh":"HH-2-2-18-01-140-00337","name":"Kadar Sabu Jethhun Misiriya","nic":"476551447V"},{"hh":"HH-2-2-18-01-140-00314","name":"Adhikari Mudiyansela Gamage Dara Muthu Manike","nic":"415940572V"},{"hh":"HH-2-2-18-01-140-00311","name":"Rambanda Abekoon","nic":"501490440V"},{"hh":"HH-2-2-18-01-140-00311","name":"Wanigaseekara Wasala Bandaranayaka Mudiyanselage Damayantha","nic":"505771893V"},{"hh":"HH-2-2-18-01-140-00310","name":"Karuppana Abdul Rahuman","nic":"195311802421"},{"hh":"HH-2-2-18-01-140-00308","name":"Habeeb Mohomad Kaleel","nic":""},{"hh":"HH-2-2-18-01-140-00308","name":"Mohedeen Pichei Kadeeja","nic":"338090889V"},{"hh":"HH-2-2-18-01-140-00307","name":"Arumugam Ponnamma","nic":"535333807V"},{"hh":"HH-2-2-18-01-140-00306","name":"Udawatte Gedara Siriwardana","nic":"451702416V"},{"hh":"HH-2-2-18-01-140-00304","name":"Sakuththala Jayayaweerawardana","nic":""},{"hh":"HH-2-2-18-01-140-00304","name":"Rathnayake Mudiyanselage Rabel Pathmasiri","nic":"441274254V"},{"hh":"HH-2-2-18-01-140-00302","name":"Wimala Liyanage","nic":"485630856V"},{"hh":"HH-2-2-18-01-140-00283","name":"Panchawatte Gedara Kiree","nic":""},{"hh":"HH-2-2-18-01-140-00279","name":"Hondaran Gedara Premawathi","nic":""},{"hh":"HH-2-2-18-01-140-00278","name":"Disanayaka Mudiyanselage Bandara Manike","nic":""},{"hh":"HH-2-2-18-01-140-00276","name":"Segu Abdhul Kaadar Sipardeen","nic":""},{"hh":"HH-2-2-18-01-140-00276","name":"Mohedeen Adumei Ummu Saida","nic":""},{"hh":"HH-2-2-18-01-140-00275","name":"Marimuththu Murugai","nic":""},{"hh":"HH-2-2-18-01-140-00275","name":"Sangu Ramachandran","nic":""},{"hh":"HH-2-2-18-01-140-00274","name":"Wickramasinghalage Saranawathi Wickramasingha","nic":""},{"hh":"HH-2-2-18-01-140-00274","name":"Migammana Gedara Abeerathna","nic":""},{"hh":"HH-2-2-18-01-140-00272","name":"Subramaniyam Sundarambigei","nic":"525593380V"},{"hh":"HH-2-2-18-01-140-00265","name":"Delgahawatte Gedara Somawathi","nic":"486062827V"},{"hh":"HH-2-2-18-01-140-00260","name":"Vishwalingam Lechcchami","nic":"497652855V"},{"hh":"HH-2-2-18-01-140-00253","name":"Andapola Gedara Nimal","nic":""},{"hh":"HH-2-2-18-01-140-00253","name":"Rathnayaka Mudiyanselage Lalitha Podimanike","nic":"556322538V"},{"hh":"HH-2-2-18-01-140-00249","name":"Dasanayake Mudiyanselage Podi Manike","nic":"485990623V"},{"hh":"HH-2-2-18-01-140-00248","name":"Thangaraja Pushparani","nic":"547301730V"},{"hh":"HH-2-2-18-01-140-00235","name":"Thumpana Kumbure Gedara Magrat Nona","nic":"486482435V"},{"hh":"HH-2-2-18-01-140-00222","name":"Palle Walawwe Ayarin Aluvihare","nic":"335723734V"},{"hh":"HH-2-2-18-01-140-00219","name":"Martheen Irudayam","nic":"437611815V"},{"hh":"HH-2-2-18-01-140-00216","name":"Jayasingha Arachige Athar Perera","nic":"490122338V"},{"hh":"HH-2-2-18-01-140-00216","name":"Rajapaksha Pathiranage Wemala","nic":"477994199V"},{"hh":"HH-2-2-18-01-140-00215","name":"Hettikankanamge Charls Perera","nic":"402100982V"},{"hh":"HH-2-2-18-01-140-00215","name":"Rajapaksha Pathiranage Sudarma","nic":"457960808V"},{"hh":"HH-2-2-18-01-140-00214","name":"Sandanam Pakyam","nic":"566452820V"},{"hh":"HH-2-2-18-01-140-00208","name":"Tikiriilage Watte Gedara Sirisena","nic":"561114811V"},{"hh":"HH-2-2-18-01-140-00204","name":"Sinnayya Malani","nic":"194258110068"},{"hh":"HH-2-2-18-01-140-00202","name":"Sinnayya Wejeylechchami","nic":"555902859V"},{"hh":"HH-2-2-18-01-140-00193","name":"Muttai Allimuttu Chithra","nic":"516372060X"},{"hh":"HH-2-2-18-01-140-00191","name":"Wellasami Govindasami Rajamani","nic":"195172903636"},{"hh":"HH-2-2-18-01-140-00191","name":"Raman Karupayya Krishnasami","nic":"452702037X"},{"hh":"HH-2-2-18-01-140-00190","name":"Sandanam Gurunadan","nic":"194923902081"},{"hh":"HH-2-2-18-01-140-00189","name":"Delpe Arachchige Gunawathi","nic":"477411673V"},{"hh":"HH-2-2-18-01-140-00184","name":"Gangalawalawwe Miuriyal Aluvihare","nic":"526561228V"},{"hh":"HH-2-2-18-01-140-00181","name":"Herath Mudiyanselage Kulawathi Manike","nic":"487432283V"},{"hh":"HH-2-2-18-01-140-00179","name":"Seelawathi Desanayake","nic":"438480730V"},{"hh":"HH-2-2-18-01-140-00178","name":"Dewasinghage Gnanarathna Deewasingha","nic":"195212210123"},{"hh":"HH-2-2-18-01-140-00177","name":"Paingamuwe Geeja Ariyawathi","nic":"195171210092"},{"hh":"HH-2-2-18-01-140-00176","name":"Herath Mudiyanselage Yasomanike","nic":"525931641V"},{"hh":"HH-2-2-18-01-140-00174","name":"Karupayya Muttaiya Ponnayya","nic":"441152060V"},{"hh":"HH-2-2-18-01-140-00174","name":"Suppayya Indrani","nic":"546912639X"},{"hh":"HH-2-2-18-01-140-00172","name":"Mayadunnage Sunethra Weeraratna","nic":"566030985V"},{"hh":"HH-2-2-18-01-140-00169","name":"Rmaya Pille","nic":""},{"hh":"HH-2-2-18-01-140-00169","name":"Rengasami Kamalam","nic":"465572418V"},{"hh":"HH-2-2-18-01-140-00166","name":"Pansalawatte Gedara Punchwathi","nic":"527063299V"},{"hh":"HH-2-2-18-01-140-00162","name":"Yatinuwara Gedara Bandara","nic":"19480330113"},{"hh":"HH-2-2-18-01-140-00161","name":"Bokaragodage Karalainie","nic":"485322450V"},{"hh":"HH-2-2-18-01-140-00154","name":"Marahale Syambalage Gedara Chandrani","nic":""},{"hh":"HH-2-2-18-01-140-00154","name":"Koongaha Gedara Weerasooriya","nic":"511972043V"},{"hh":"HH-2-2-18-01-140-00150","name":"Kadawath Pedi Gedara Jayarathna","nic":"531973089V"},{"hh":"HH-2-2-18-01-140-00150","name":"Karunapedi Gedara Premawathi","nic":"536852913V"},{"hh":"HH-2-2-18-01-140-00142","name":"Edirisingha Arachchilage Anulawathi","nic":"486533064V"},{"hh":"HH-2-2-18-01-140-00136","name":"Juwanisge Pemawathi Hewath Pingahawatte Gedara Indrani","nic":"195568702406"},{"hh":"HH-2-2-18-01-140-00133","name":"Thennakoon Mudiyansela Wimalawathi","nic":"498412998V"},{"hh":"HH-2-2-18-01-140-00131","name":"Hettiyakandage Wijewardana Nonis","nic":""},{"hh":"HH-2-2-18-01-140-00131","name":"Kulugammana Gedara Dayawathi","nic":"506962692V"},{"hh":"HH-2-2-18-01-140-00126","name":"Yasawaththida Siva","nic":""},{"hh":"HH-2-2-18-01-140-00122","name":"Weerab Kaliamma","nic":"455452465V"},{"hh":"HH-2-2-18-01-140-00115","name":"Rathnayaka Mudiyanselage Senavirathna Banda","nic":"490355154V"},{"hh":"HH-2-2-18-01-140-00109","name":"Nagur Umma","nic":""},{"hh":"HH-2-2-18-01-140-00109","name":"Gammamhale Gedara Jeinul Arbdeen Thadujeen","nic":"523100971V"},{"hh":"HH-2-2-18-01-140-00109","name":"Jamaaldeen Fareeda Umma","nic":"566783339V"},{"hh":"HH-2-2-18-01-140-00108","name":"Madasami Anna Pakkiyam","nic":"488323580X"},{"hh":"HH-2-2-18-01-140-00103","name":"Medagedara Nandawathi","nic":"486132418V"},{"hh":"HH-2-2-18-01-140-00095","name":"Renganadan","nic":""},{"hh":"HH-2-2-18-01-140-00095","name":"Danapakyam Sidambaram","nic":""},{"hh":"HH-2-2-18-01-140-00095","name":"Sidamparam Rukmani","nic":"508032307V"},{"hh":"HH-2-2-18-01-140-00094","name":"Sivanu Mariyal","nic":"527004292X"},{"hh":"HH-2-2-18-01-140-00094","name":"Sebasthiyan Sinnappan","nic":"194620003412"},{"hh":"HH-2-2-18-01-140-00087","name":"Gamage Asilin Nona","nic":""},{"hh":"HH-2-2-18-01-140-00087","name":"Herath Mudiyanselage Desanayake","nic":"491621745V"},{"hh":"HH-2-2-18-01-140-00081","name":"Palaniyamma Suppayya","nic":"435901271X"},{"hh":"HH-2-2-18-01-140-00080","name":"Hekter Madanayaka","nic":"194233210012"},{"hh":"HH-2-2-18-01-140-00070","name":"Kengan Ramayya","nic":"550771934V"},{"hh":"HH-2-2-18-01-140-00061","name":"Vairavan Letchumi","nic":"195057110056"},{"hh":"HH-2-2-18-01-140-00059","name":"Herath Mudiyanselage Aluthwalawwe Wishaka Kumarihami Thalagune","nic":"195079510020"},{"hh":"HH-2-2-18-01-140-00055","name":"Mawalage Gunawathi Weerasingha","nic":"536839038V"},{"hh":"HH-2-2-18-01-140-00042","name":"Subramaniyam Muttu Lechchami","nic":"465681840V"},{"hh":"HH-2-2-18-01-140-00040","name":"Jayasingha Gedara Chandrawathi Jayasingha","nic":"446013629V"},{"hh":"HH-2-2-18-01-140-00039","name":"Subramaniyam Pille","nic":""},{"hh":"HH-2-2-18-01-140-00026","name":"Thalawinne Gedara Ranbanda","nic":"432990486V"},{"hh":"HH-2-2-18-01-140-00020","name":"Nambideewan Leela","nic":"195659610108"},{"hh":"HH-2-2-18-01-140-00015","name":"Sangudewar Wellasami","nic":"453512053X"},{"hh":"HH-2-2-18-01-140-00014","name":"Mahagedara Piyasena","nic":"532545161V"},{"hh":"HH-2-2-18-01-140-00014","name":"Welayudam Kaliamma","nic":""},{"hh":"HH-2-2-18-01-140-00010","name":"Pansala Watte Ukku Amma","nic":""},{"hh":"HH-2-2-18-01-140-00007","name":"Petikirige Sujatha Peiris","nic":""},{"hh":"HH-2-1-09-02-015-00271","name":"N G Samanpala","nic":""}];
const $=id=>document.getElementById(id);
function norm(s){return String(s||'').toUpperCase().replace(/\s+/g,'').replace(/[^0-9VX]/g,'')}
function phoneDisplay(s){
  const p=phoneNorm(s);
  if(/^94\d{9}$/.test(p)) return '0'+p.slice(2);
  return s||'';
}
function phoneNorm(s){
  let p=String(s||'').replace(/[^0-9+]/g,'');
  if(p.startsWith('+94')) return '94'+p.slice(3);
  if(p.startsWith('0094')) return '94'+p.slice(4);
  if(p.startsWith('0')) return '94'+p.slice(1);
  return p;
}
async function getPhone(id){
  try{const r=await fetch('/api/phones?id='+encodeURIComponent(id)); if(!r.ok)return ''; const j=await r.json(); return j}catch(e){return ''}
}
function updateWhatsapp(name, phone, btnId='whatsappBtn'){
  const p=phoneNorm(phone); const btn=$(btnId);
  if(/^947\d{8}$/.test(p)){
    btn.href='https://wa.me/'+p;
    btn.style.display='inline-flex';
  }else{btn.removeAttribute('href');btn.style.display='none'}
}


function nicBirthInfo(raw){
 const id=norm(raw); let year, doy, gender;
 if(/^\d{9}[VX]$/.test(id)){ year=1900+parseInt(id.slice(0,2),10); let n=parseInt(id.slice(2,5),10); gender=n>=500?'ස්ත්‍රී':'පුරුෂ'; if(n>=500)n-=500; doy=n; }
 else if(/^\d{12}$/.test(id)){ year=parseInt(id.slice(0,4),10); let n=parseInt(id.slice(4,7),10); gender=n>=500?'ස්ත්‍රී':'පුරුෂ'; if(n>=500)n-=500; doy=n; }
 else return null;
 if(!year || doy<1 || doy>366) return null;
 const d=new Date(Date.UTC(year,0,1)); d.setUTCDate(d.getUTCDate()+doy-1);
 if(d.getUTCFullYear()!==year) return null;
 const today=new Date();
 let age=today.getFullYear()-year; const birthMonth=d.getUTCMonth(); const birthDay=d.getUTCDate();
 if(today.getMonth()<birthMonth || (today.getMonth()===birthMonth && today.getDate()<birthDay)) age--;
 const pad=n=>String(n).padStart(2,'0');
 const dob=`${d.getUTCFullYear()}-${pad(birthMonth+1)}-${pad(birthDay)}`;
 const dobSi=`${pad(birthDay)}/${pad(birthMonth+1)}/${d.getUTCFullYear()}`;
 return {year,doy,gender,age,dob,dobSi};
}
function birthYearFromRecord(x){const b=nicBirthInfo(x.id); return b?b.year:null}
function displayBirthDate(x){const b=nicBirthInfo(x.id); return b?b.dobSi:'-'}
function addressFromRecord(x){ return x.house && x.gn ? `ගෘහ අංකය ${x.house}, ${x.gn}` : (x.house?`ගෘහ අංකය ${x.house}`:(x.gn||'-')); }
function downloadBlob(content,name,type){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([content],{type}));a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function csvCell(v){return '"'+String(v??'').replace(/"/g,'""')+'"'}
function exportRows(rows,yearFrom,yearTo){
 const data=[['ID Number','සම්පූර්ණ නම','උපන් දිනය','වයස','ස්ත්‍රී/පුරුෂ','ලිපිනය / ගෘහ අංකය','ග්‍රා.නි.කො.','අනු අංකය']];
 rows.forEach(x=>{const b=nicBirthInfo(x.id)||{};data.push([x.id,x.name||'',b.dobSi||'',b.age??'',b.gender||'',addressFromRecord(x),x.gn||'',x.serial||'']);});
 const fn=`Aluvihare_Birth_${yearFrom}${yearTo&&yearTo!==yearFrom?'-'+yearTo:''}`;
 if(window.XLSX){const ws=XLSX.utils.aoa_to_sheet(data);ws['!cols']=[{wch:16},{wch:40},{wch:14},{wch:10},{wch:14},{wch:28},{wch:20},{wch:10}];const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'Birth List');XLSX.writeFile(wb,fn+'.xlsx');}
 else {const lines=data.map(r=>r.map(csvCell).join(',')).join('\r\n');downloadBlob('\ufeff'+lines,fn+'.csv','text/csv;charset=utf-8');}
}
function printRows(rows,yearFrom,yearTo){
 const title=`අලුවිහාරේ — ${yearFrom}${yearTo&&yearTo!==yearFrom?' සිට '+yearTo+' දක්වා':''} උපන් අය`;
 const body=rows.map((x,i)=>{const b=nicBirthInfo(x.id)||{};return `<tr><td>${i+1}</td><td>${escapeHtml(x.id)}</td><td>${escapeHtml(x.name||'')}</td><td>${escapeHtml(b.dobSi||'-')}</td><td>${escapeHtml(String(b.age??'-'))}</td><td>${escapeHtml(b.gender||'-')}</td><td>${escapeHtml(addressFromRecord(x))}</td></tr>`}).join('');
 const w=window.open('','_blank'); if(!w){alert('Print window එක block කරලා. Browser එකෙන් pop-up allow කරන්න.');return;}
 w.document.write(`<!doctype html><html lang="si"><head><meta charset="utf-8"><title>${title}</title><style>body{font-family:Arial,"Noto Sans Sinhala",sans-serif;padding:20px}h2{text-align:center}table{border-collapse:collapse;width:100%;font-size:12px}th,td{border:1px solid #999;padding:6px;text-align:left}th{background:#eee}@media print{button{display:none}}</style></head><body><h2>${title}</h2><p>මුළු ගණන: ${rows.length}</p><table><thead><tr><th>#</th><th>ID</th><th>සම්පූර්ණ නම</th><th>උපන් දිනය</th><th>වයස</th><th>ස්ත්‍රී/පුරුෂ</th><th>ලිපිනය / ගෘහ අංකය</th></tr></thead><tbody>${body}</tbody></table><script>window.onload=()=>setTimeout(()=>window.print(),300)</script></body></html>`);w.document.close();
}
function showBirthSuggestions(){
 const q=$('idInput').value.trim(); const box=$('suggestions'); if(!q){box.innerHTML='';box.style.display='none';return}
 const digits=q.replace(/\D/g,''); let matches=[];
 if(/^\d{1,4}$/.test(digits)){
   if(digits.length<=2){const yy=digits.padStart(2,'0'); matches=DATA.filter(x=>{const b=birthYearFromRecord(x);return b===1900+parseInt(yy,10)}).slice(0,10);}
   else {matches=DATA.filter(x=>norm(x.id).startsWith(digits)).slice(0,10);}
 } else {matches=DATA.filter(x=>norm(x.id).startsWith(norm(q))).slice(0,10);}
 if(!matches.length){box.innerHTML='';box.style.display='none';return}
 box.innerHTML=matches.map(x=>{const b=nicBirthInfo(x.id);return `<div class="suggestion" role="option" data-id="${escapeHtml(x.id)}"><div class="suggestionId">${escapeHtml(x.id)} ${b?`• ${escapeHtml(b.dobSi)} • ${escapeHtml(String(b.age))} වයස`:''}</div><div class="suggestionName">${escapeHtml(x.name||'')}</div></div>`}).join('');box.style.display='block';box.querySelectorAll('.suggestion').forEach(el=>el.onclick=()=>{$('idInput').value=el.dataset.id;hideSuggestions();search();});
}
function hideSuggestions(){const box=$('suggestions'); if(box){box.style.display='none';box.innerHTML='';}}
function escapeHtml(s){return String(s||'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function normHouse(s){return String(s||'').trim().toLowerCase().replace(/\s+/g,'');}
function houseMatches(x,q){return normHouse(x.house)===normHouse(q);}
function showHouseSuggestions(){
 const q=normHouse($('houseSearchInput').value); const box=$('houseSuggestions');
 if(!q){box.innerHTML='';box.style.display='none';return;}
 const seen=new Set(), matches=[];
 DATA.forEach(x=>{const h=String(x.house||'').trim(); if(!h||seen.has(h))return; if(normHouse(h).startsWith(q)){seen.add(h);matches.push(h);}});
 matches.sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})).slice(0,12);
 if(!matches.length){box.innerHTML='';box.style.display='none';return;}
 box.innerHTML=matches.map(h=>`<div class="suggestion" role="option" data-house="${escapeHtml(h)}"><div class="suggestionId">🏠 ${escapeHtml(h)}</div></div>`).join('');
 box.style.display='block'; box.querySelectorAll('.suggestion').forEach(el=>el.onclick=()=>{$('houseSearchInput').value=el.dataset.house;box.style.display='none';runHouseSearch();});
}
async function runHouseSearch(){
 const q=normHouse($('houseSearchInput').value);
 const box=$('houseSuggestions'); if(box)box.style.display='none';
 const base=Array.isArray(DATA)?DATA:[];
 const online=await loadAddedPeople();
 const all=base.slice();
 const seen=new Set(base.map(x=>String(x.id||x.nic||'').toUpperCase()));
 online.forEach(x=>{
   const id=String(x.nic||'').toUpperCase();
   if(id && !seen.has(id)){all.push({id:x.nic,name:x.name,house:x.hh,hh:x.hh,gn:'',addedOnline:true});seen.add(id);}
 });
 const rows=q?all.filter(x=>normHouse(x.house||x.hh)===q).sort((a,b)=>String(a.serial||'').localeCompare(String(b.serial||''),undefined,{numeric:true})):[];
 $('houseCount').textContent=rows.length?`🏠 ගෘහ අංක ${$('houseSearchInput').value.trim()} — ${rows.length} දෙනෙක් හමු විය`:'ගෘහ අංකයක් ඇතුළත් කරන්න හෝ දත්ත හමු නොවීය';
 const tbody=$('houseResultsBody');

 // Load saved phone numbers for everyone in the selected house.
 const phoneRows=await Promise.all(rows.map(async x=>{
   const id=x.id||x.nic||'';
   let ph={};
   if(id) ph=await getPhone(id);
   return {...x, phone:ph?.phone||'', phone2:ph?.phone2||''};
 }));

 tbody.innerHTML=phoneRows.map((x,i)=>{
   const b=nicBirthInfo(x.id)||{};
   const phones=[x.phone,x.phone2].filter(Boolean).map(phoneDisplay);
   const phoneHtml=phones.length
     ? phones.map((p,n)=>`<a class="housePhone" href="tel:${escapeHtml(p.replace(/\\s/g,''))}">📞 ${escapeHtml(p)}</a>`).join(' ')
     : '<span class="noPhone">No phone number</span>';
   return `<tr>
     <td>${i+1}</td>
     <td>${escapeHtml(x.id||'-')}</td>
     <td>${escapeHtml(x.name||'')}</td>
     <td>${escapeHtml(b.dobSi||'-')}</td>
     <td>${escapeHtml(String(b.age??'-'))}</td>
     <td>${escapeHtml(b.gender||'-')}</td>
     <td>${escapeHtml(x.house||x.hh||'-')}</td>
     <td>${escapeHtml(x.gn||'-')}</td>
     <td>${phoneHtml}</td>
   </tr>`;
 }).join('');
 $('houseResults').style.display=rows.length?'block':'none';
}
function initYearSelectors(){
 const from=$('yearFrom'), to=$('yearTo');
 const current=new Date().getFullYear();
 const min=1900, max=Math.min(2026,current);
 const opts=['<option value="">අවුරුද්ද තෝරන්න</option>'];
 for(let y=max;y>=min;y--) opts.push(`<option value="${y}">${y}</option>`);
 from.innerHTML=opts.join(''); to.innerHTML=opts.join('');
 from.value=''; to.value='';
 from.onchange=()=>{ if(!to.value) to.value=from.value; else if(+to.value < +from.value) to.value=from.value; };
}

function runElderlySearch(){
 const q=String($('elderlyQ')?.value||'').trim().toLowerCase();
 const drop=$('elderlyDropdown'), out=$('elderlyResults');
 const list=Array.isArray(ELDERLY)?ELDERLY:[];
 const hits=q?list.filter(x=>String(x.nic||x.id||'').toLowerCase().includes(q)||String(x.hh||x.house||'').toLowerCase().includes(q)):[];
 if(drop){
  drop.innerHTML=hits.slice(0,30).map((x,i)=>`<div class="elderlyOption" data-i="${i}">🪪 ${escapeHtml(x.nic||x.id||'')} — 🏠 ${escapeHtml(x.hh||x.house||'')} — ${escapeHtml(x.name||'')}</div>`).join('');
  drop.style.display=hits.length?'block':'none';
  drop.querySelectorAll('.elderlyOption').forEach(el=>el.onclick=()=>{
    const x=hits[Number(el.dataset.i)];
    if($('elderlyQ'))$('elderlyQ').value=x.nic||x.id||x.hh||'';
    drop.style.display='none';
    renderElderlyRows([x]);
  });
 }
 if(!q){out.innerHTML='';return;}
 renderElderlyRows(hits);
}
function renderElderlyRows(rows){
 const out=$('elderlyResults'); if(!out)return;
 out.innerHTML=rows.length?rows.map(x=>`<div class="elderlyItem"><div class="elderlyName">${escapeHtml(x.name||'-')}</div><div class="elderlyMeta">ID Number: <b>${escapeHtml(x.nic||x.id||'Not available')}</b><br>HH Number: <b>${escapeHtml(x.hh||x.house||'-')}</b></div></div>`).join(''):'<div class="elderlyItem">No matching record found</div>';
}


const SUPABASE_URL = "https://vvrtvabcbdwswyqqwjdi.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Pc8370XcNy_r35C8srCU4w_0aszI6Fv";


let selectedHouseNumber = "";

function normalizeHouse(v){ return String(v||"").trim().toLowerCase(); }

function localBaseRecords(){
  return Array.isArray(DATA) ? DATA.slice() : [];
}

async function loadAddedPeople(){
  if(!SUPABASE_URL || !SUPABASE_ANON_KEY) return [];
  try{
    const url=`${SUPABASE_URL.replace(/\/$/,'')}/rest/v1/household_people?select=hh,name,nic,created_at&order=created_at.asc`;
    const res=await fetch(url,{headers:{
      apikey:SUPABASE_ANON_KEY,
      Authorization:`Bearer ${SUPABASE_ANON_KEY}`,
      Accept:'application/json'
    }});
    if(!res.ok){
      console.error('Supabase load failed',res.status,await res.text());
      return [];
    }
    const data=await res.json();
    return Array.isArray(data)?data:[];
  }catch(e){
    console.error('Supabase load error',e);
    return [];
  }
}

async function getAllHouseholds(){
  const online=await loadAddedPeople();
  const all=localBaseRecords().concat(online.map(x=>({hh:x.hh,name:x.name,nic:x.nic,addedOnline:true})));
  const map=new Map();
  all.forEach(x=>{
    const hh=String(x.hh||x.house||x.house_no||"").trim();
    if(hh && !map.has(normalizeHouse(hh))) map.set(normalizeHouse(hh),hh);
  });
  return [...map.values()];
}

function showHouseSuggestions(list){
  const box=$('houseSuggestions'); if(!box)return;
  if(!list.length){box.style.display='none';box.innerHTML='';return;}
  box.innerHTML=list.slice(0,30).map(hh=>
    `<div class="houseSuggestion" data-house="${escapeHtml(hh)}">🏠 ${escapeHtml(hh)}</div>`
  ).join('');
  box.style.display='block';
  box.querySelectorAll('.houseSuggestion').forEach(el=>{
    el.addEventListener('click',()=>{
      selectHouse(el.dataset.house);
    });
  });
}

async function updateHouseSuggestions(){
  const q=String($('newHH')?.value||"").trim().toLowerCase();
  const houses=await getAllHouseholds();
  const filtered=q ? houses.filter(x=>x.toLowerCase().includes(q)) : houses;
  showHouseSuggestions(filtered);
}

function selectHouse(hh){
  selectedHouseNumber=String(hh).trim();
  if($('newHH')) $('newHH').value=selectedHouseNumber;
  if($('selectedHouse')){
    $('selectedHouse').textContent=`Selected House / HH Number: ${selectedHouseNumber}`;
    $('selectedHouse').style.display='block';
  }
  if($('houseSuggestions')) $('houseSuggestions').style.display='none';
}

async function addNewPerson(){
  const hh=String(selectedHouseNumber||$('newHH')?.value||'').trim();
  const name=String($('newName')?.value||'').trim();
  const nic=String($('newNIC')?.value||'').trim();
  const msg=$('addPersonMsg');
  if(!hh||!name||!nic){if(msg)msg.textContent='Select a House / HH Number, then enter Name and ID Number.';return;}
  await savePersonOnline(hh,name,nic);
}

async function addNewHouse(){
  const hh=String($('newHH')?.value||'').trim();
  const name=String($('newName')?.value||'').trim();
  const nic=String($('newNIC')?.value||'').trim();
  const msg=$('addPersonMsg');
  if(!hh||!name||!nic){if(msg)msg.textContent='Enter a new House / HH Number, Name and ID Number.';return;}
  const houses=await getAllHouseholds();
  if(houses.some(x=>normalizeHouse(x)===normalizeHouse(hh))){
    if(msg)msg.textContent='That House / HH Number already exists. Please select it from the list.';
    await updateHouseSuggestions();
    return;
  }
  await savePersonOnline(hh,name,nic,true);
}

async function savePersonOnline(hh,name,nic,isNewHouse=false){
  const msg=$('addPersonMsg');
  if(!SUPABASE_URL||!SUPABASE_ANON_KEY){if(msg)msg.textContent='Online database is not configured.';return;}
  try{
    if(msg)msg.textContent='Saving online...';
    const check=await fetch(`${SUPABASE_URL}/rest/v1/household_people?select=id&nic=eq.${encodeURIComponent(nic)}&limit=1`,
      {headers:{apikey:SUPABASE_ANON_KEY,Authorization:`Bearer ${SUPABASE_ANON_KEY}`}});
    if(!check.ok) throw new Error('Database check failed');
    if((await check.json()).length){if(msg)msg.textContent='This ID Number is already added.';return;}
    const res=await fetch(`${SUPABASE_URL}/rest/v1/household_people`,{
      method:'POST',
      headers:{apikey:SUPABASE_ANON_KEY,Authorization:`Bearer ${SUPABASE_ANON_KEY}`,'Content-Type':'application/json',Prefer:'return=minimal'},
      body:JSON.stringify({hh,name,nic})
    });
    if(!res.ok) throw new Error(await res.text());
    selectedHouseNumber=hh;
    if(msg)msg.textContent=isNewHouse?'New house and person added successfully.':'Person added to the selected house successfully.';
    ['newName','newNIC'].forEach(id=>{if($(id))$(id).value='';});
    if(typeof runSearch==='function') runSearch();
    await updateHouseSuggestions();
  }catch(e){
    console.error(e);
    if(msg)msg.textContent='Could not save online: " + (e.message || "Database error") + "';
  }
}

async function getAllAppRecords(){
  const online=await loadAddedPeople();
  const base=localBaseRecords();
  const seen=new Set(base.map(x=>String(x.nic||x.id||'').toLowerCase()));
  online.forEach(x=>{
    const k=String(x.nic||'').toLowerCase();
    if(k&&!seen.has(k)){base.push({hh:x.hh,name:x.name,nic:x.nic,addedOnline:true});seen.add(k);}
  });
  return base;
}


async function dbRequest(path, options={}){
  const url=`${SUPABASE_URL.replace(/\/$/,'')}/rest/v1/${path}`;
  const headers=Object.assign({
    apikey:SUPABASE_ANON_KEY,
    Authorization:`Bearer ${SUPABASE_ANON_KEY}`,
    'Content-Type':'application/json',
    Accept:'application/json'
  }, options.headers||{});
  const res=await fetch(url,{...options,headers});
  const txt=await res.text();
  let data=null; try{data=txt?JSON.parse(txt):null}catch(e){}
  if(!res.ok) throw new Error(data?.message||data?.hint||txt||`HTTP ${res.status}`);
  return data;
}

function managementPrompt(title, fields){
  return new Promise(resolve=>{
    const modal=$('manageModal'), form=$('manageForm'), titleEl=$('manageModalTitle'), err=$('manageFormError');
    if(!modal||!form){ resolve(null); return; }
    titleEl.textContent=title; err.textContent='';
    form.innerHTML=fields.map((f,i)=>`<div class="manageField"><label for="manage_${i}">${escapeHtml(f.label)}</label><input id="manage_${i}" name="${escapeHtml(f.key)}" type="text" autocomplete="off" placeholder="${escapeHtml(f.placeholder||f.label)}" required></div>`).join('');
    modal.style.display='flex'; modal.setAttribute('aria-hidden','false');
    const first=form.querySelector('input'); setTimeout(()=>first?.focus(),50);
    const finish=(value)=>{ modal.style.display='none'; modal.setAttribute('aria-hidden','true'); cleanup(); resolve(value); };
    const onSubmit=e=>{
      e.preventDefault(); const values={};
      for(const f of fields){ const el=form.elements[f.key]; const v=String(el?.value||'').trim(); if(!v){ err.textContent=`${f.label} අවශ්‍යයි.`; el?.focus(); return; } values[f.key]=v; }
      finish(values);
    };
    const onCancel=()=>finish(null);
    const onBackdrop=e=>{if(e.target===modal)finish(null)};
    const onKey=e=>{if(e.key==='Escape')finish(null)};
    function cleanup(){form.removeEventListener('submit',onSubmit); $('manageCancel')?.removeEventListener('click',onCancel); $('manageClose')?.removeEventListener('click',onCancel); modal.removeEventListener('click',onBackdrop); document.removeEventListener('keydown',onKey);}
    form.addEventListener('submit',onSubmit); $('manageCancel')?.addEventListener('click',onCancel); $('manageClose')?.addEventListener('click',onCancel); modal.addEventListener('click',onBackdrop); document.addEventListener('keydown',onKey);
  });
}

async function addHouseholdAction(){
  const x=await managementPrompt("Add Household",[
    {key:"hh",label:"New House / HH Number"},
    {key:"name",label:"First Member Name"},
    {key:"nic",label:"First Member ID Number"}
  ]);
  if(!x)return;
  const msg=$('householdManageMsg'); msg.textContent="Saving...";
  try{
    const existing=await dbRequest(`household_people?select=nic&hh=eq.${encodeURIComponent(x.hh)}&limit=1`);
    if(existing?.length){msg.textContent="That household already exists.";return;}
    await dbRequest("household_people",{method:"POST",headers:{Prefer:"return=minimal"},body:JSON.stringify(x)});
    msg.textContent="Household added successfully.";
  }catch(e){console.error(e);msg.textContent=`Could not save: ${e.message}`;}
}

async function addMemberAction(){
  const x=await managementPrompt("Add Member",[
    {key:"hh",label:"House / HH Number"},
    {key:"name",label:"Member Name"},
    {key:"nic",label:"ID Number"}
  ]);
  if(!x)return;
  const msg=$('householdManageMsg'); msg.textContent="Saving...";
  try{
    const house=await dbRequest(`household_people?select=nic&hh=eq.${encodeURIComponent(x.hh)}&limit=1`);
    if(!house?.length){msg.textContent="Household not found. Use Add Household first.";return;}
    const dup=await dbRequest(`household_people?select=nic&nic=eq.${encodeURIComponent(x.nic)}&limit=1`);
    if(dup?.length){msg.textContent="This ID Number already exists.";return;}
    await dbRequest("household_people",{method:"POST",headers:{Prefer:"return=minimal"},body:JSON.stringify(x)});
    msg.textContent="Member added successfully.";
  }catch(e){console.error(e);msg.textContent=`Could not save: ${e.message}`;}
}

async function removeMemberAction(){
  const x=await managementPrompt("Remove Member",[{key:"nic",label:"ID Number"}]);
  if(!x)return;
  if(!confirm(`Remove member with ID ${x.nic}?`))return;
  const msg=$('householdManageMsg'); msg.textContent="Removing...";
  try{
    await dbRequest(`household_people?nic=eq.${encodeURIComponent(x.nic)}`,{method:"DELETE",headers:{Prefer:"return=minimal"}});
    msg.textContent="Member removed successfully.";
  }catch(e){console.error(e);msg.textContent=`Could not remove: ${e.message}`;}
}

async function removeHouseholdAction(){
  const x=await managementPrompt("Remove Household",[{key:"hh",label:"House / HH Number"}]);
  if(!x)return;
  if(!confirm(`Remove ALL added members in household ${x.hh}?`))return;
  const msg=$('householdManageMsg'); msg.textContent="Removing...";
  try{
    await dbRequest(`household_people?hh=eq.${encodeURIComponent(x.hh)}`,{method:"DELETE",headers:{Prefer:"return=minimal"}});
    msg.textContent="Household removed successfully.";
  }catch(e){console.error(e);msg.textContent=`Could not remove: ${e.message}`;}
}

async function init(){
 DATA=await fetch('data.json').then(r=>r.json());
 try{const r=await fetch('elderly.json'); if(!r.ok) throw new Error('elderly.json'); ELDERLY=await r.json();}catch(e){ELDERLY=ELDERLY_FALLBACK;}
 runElderlySearch();
 initYearSelectors();
 for(const x of DATA) MAP.set(norm(x.id),x);
 $('idInput').addEventListener('input',showBirthSuggestions);
 $('idInput').addEventListener('keydown',e=>{if(e.key==='Enter'){hideSuggestions();search()} if(e.key==='Escape')hideSuggestions()});
 $('idInput').addEventListener('focus',()=>{if($('idInput').value.trim())showBirthSuggestions()});
 $('searchBtn').onclick=()=>{hideSuggestions();search()};
 $('birthSearchBtn').onclick=runBirthSearch; $('houseSearchBtn').onclick=runHouseSearch; $('houseSearchInput').addEventListener('input',showHouseSuggestions); $('houseSearchInput').addEventListener('keydown',e=>{if(e.key==='Enter')runHouseSearch(); if(e.key==='Escape')$('houseSuggestions').style.display='none';}); $('exportExcelBtn').onclick=()=>{const rows=getBirthFilteredRows(); if(!rows.length)return alert('දත්ත නැහැ'); exportRows(rows,+$('yearFrom').value,+$('yearTo').value||+$('yearFrom').value)}; $('exportPdfBtn').onclick=()=>{const rows=getBirthFilteredRows(); if(!rows.length)return alert('දත්ත නැහැ'); printRows(rows,+$('yearFrom').value,+$('yearTo').value||+$('yearFrom').value)};
 document.addEventListener('click',e=>{if(!e.target.closest('.search'))hideSuggestions()});
 $('expandName').onclick=()=>{ $('modalName').textContent=$('name').textContent; $('nameModal').style.display='flex'; };
 $('closeModal').onclick=()=>{ $('nameModal').style.display='none'; };
 $('nameModal').onclick=e=>{if(e.target.id==='nameModal') $('nameModal').style.display='none';};
 $('sourceImageBtn').onclick=()=>{ const pg=$('page').textContent; if(pg&&pg!=='-'){ $('sourceFrame').src='source.pdf#page='+encodeURIComponent(pg); $('sourceModal').style.display='flex'; } };
 $('closeSourceModal').onclick=()=>{ $('sourceModal').style.display='none'; $('sourceFrame').src='about:blank'; };
 $('sourceModal').onclick=e=>{if(e.target.id==='sourceModal'){ $('sourceModal').style.display='none'; $('sourceFrame').src='about:blank'; }};
 $('phoneInput').addEventListener('input',()=>updateWhatsapp($('name').textContent,$('phoneInput').value,'whatsappBtn'));
 $('phoneInput2').addEventListener('input',()=>updateWhatsapp($('name').textContent,$('phoneInput2').value,'whatsappBtn2'));
 $('savePhoneBtn').onclick=saveCurrentPhone;
 $('editPhoneBtn').onclick=()=>{ $('phoneEdit').style.display='block'; $('savedPhoneView').style.display='none'; $('phoneSaved').textContent=''; $('phoneInput').focus(); };
 $('cancelPhoneBtn').onclick=()=>{ $('phoneEdit').style.display='none'; if($('phoneInput').value||$('phoneInput2').value){$('savedPhoneView').style.display='flex';} $('phoneSaved').textContent=''; };
}
async function saveCurrentPhone(){
 const id=norm($('rid').textContent); const phone=$('phoneInput').value.trim(); const phone2=$('phoneInput2').value.trim(); const pin=prompt('Phone number Save / Edit PIN එක ඇතුළත් කරන්න:');
 if(!id)return;
 if(pin===null)return;
 if(!phone && !phone2){$('phoneSaved').textContent='දුරකථන අංකයක් ඇතුළත් කරන්න.';return}
 $('savePhoneBtn').disabled=true; $('phoneSaved').textContent='සුරකිමින්...';
 try{
   const r=await fetch('/api/phones',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({id,phone,phone2,pin})});
   const j=await r.json().catch(()=>({}));
   if(!r.ok) throw new Error(j.error||'Save failed');
   $('phoneSaved').textContent='දුරකථන අංකය online database එකට සුරැකිණි ✓';
   $('savedPhoneNumber').textContent=phoneDisplay(phone); $('savedPhoneNumber2').textContent=phoneDisplay(phone2);
   $('phoneEdit').style.display='none';
   $('savedPhoneView').style.display='flex';
   updateWhatsapp($('name').textContent,phone,'whatsappBtn'); updateWhatsapp($('name').textContent,phone2,'whatsappBtn2');
 }catch(e){$('phoneSaved').textContent=e.message||'සුරැකීමට නොහැකි විය.'}
 finally{$('savePhoneBtn').disabled=false}
}
function getBirthFilteredRows(){
 let a=parseInt($('yearFrom').value,10), b=parseInt($('yearTo').value,10)||a;
 if(!a)return [];
 const lo=Math.min(a,b),hi=Math.max(a,b);
 return DATA.filter(x=>{const y=birthYearFromRecord(x);return y>=lo&&y<=hi}).sort((x,y)=>{const bx=nicBirthInfo(x.id),by=nicBirthInfo(y.id);return (bx?.dob||'').localeCompare(by?.dob||'')});
}
function runBirthSearch(){
 const rows=getBirthFilteredRows(); $('birthCount').textContent=`${rows.length} දෙනෙක් හමු විය`; const tbody=$('birthResultsBody'); tbody.innerHTML=rows.slice(0,200).map((x,i)=>{const b=nicBirthInfo(x.id)||{};return `<tr><td>${i+1}</td><td>${escapeHtml(x.id)}</td><td>${escapeHtml(x.name||'')}</td><td>${escapeHtml(b.dobSi||'-')}</td><td>${escapeHtml(String(b.age??'-'))}</td><td>${escapeHtml(b.gender||'-')}</td><td>${escapeHtml(addressFromRecord(x))}</td></tr>`}).join(''); $('birthResults').style.display=rows.length?'block':'none'; if(rows.length>200)$('birthCount').textContent+=` (පළමු 200 පෙන්වයි; Export එකෙන් සියල්ල ගන්න)`;
}
async function search(){
 const ALL_RECORDS=await getAllAppRecords();

 const id=norm($('idInput').value); const x=MAP.get(id);
 $('result').style.display=x?'block':'none'; $('notfound').style.display=x?'none':'block';
 if(!x)return;
 $('name').textContent=x.name||'නම ලබාගත නොහැක';
 const bi=nicBirthInfo(x.id); $('birthDate').textContent=bi?bi.dobSi:'-'; $('age').textContent=bi?`${bi.age} වසර`:'-'; $('gender').textContent=bi?bi.gender:'-'; $('address').textContent=addressFromRecord(x); $('rid').textContent=x.id; $('house').textContent=x.house||'-'; $('serial').textContent=x.serial||'-'; $('status').textContent=x.status_label||'-';
 $('gn').textContent=x.gn||'327-අලුවිහාරේ';
 $('electoralDistrict').textContent='5 - මාතලේ'; $('pollingDivision').textContent='ඇ - මාතලේ'; $('pollingDistrict').textContent='21'; $('pollingDistrictName').textContent='අලුවිහාරේ'; $('page').textContent=x.page||'-';
 $('pdfLink').href='source.pdf#page='+x.page; $('phoneSaved').textContent=''; $('phoneInput').value=''; $('phoneInput2').value=''; $('phoneEdit').style.display='none'; $('savedPhoneView').style.display='none'; $('savedPhoneNumber').textContent=''; $('savedPhoneNumber2').textContent=''; $('savedPhoneNumber2').style.display='none'; updateWhatsapp(x.name,'','whatsappBtn'); updateWhatsapp(x.name,'','whatsappBtn2');
 const ph=await getPhone(x.id); $('phoneInput').value=ph.phone||''; $('phoneInput2').value=ph.phone2||''; updateWhatsapp(x.name,ph.phone||'','whatsappBtn'); updateWhatsapp(x.name,ph.phone2||'','whatsappBtn2');
 if(ph.phone||ph.phone2){ $('savedPhoneNumber').textContent=phoneDisplay(ph.phone||''); $('savedPhoneNumber2').textContent=phoneDisplay(ph.phone2||''); $('savedPhoneNumber2').style.display=ph.phone2?'block':'none'; $('savedPhoneView').style.display='flex'; } else { $('phoneEdit').style.display='block'; }
 history.replaceState(null,'','#'+encodeURIComponent(x.id));
}
init().then(()=>{if(location.hash){$('idInput').value=decodeURIComponent(location.hash.slice(1));search()}});



document.addEventListener('DOMContentLoaded',()=>{
  const b=$('addPersonBtn'), nb=$('newHouseBtn'), hh=$('newHH');
  if(b)b.addEventListener('click',addNewPerson);
  if(nb)nb.addEventListener('click',addNewHouse);
  if(hh){
    hh.addEventListener('input',()=>{selectedHouseNumber=""; if($('selectedHouse'))$('selectedHouse').style.display='none'; updateHouseSuggestions();});
    hh.addEventListener('focus',updateHouseSuggestions);
    hh.addEventListener('keydown',e=>{
      if(e.key==='Enter'){
        e.preventDefault();
        const first=$('houseSuggestions')?.querySelector('.houseSuggestion');
        if(first)selectHouse(first.dataset.house);
      }
    });
  }
  document.addEventListener('click',e=>{
    if(!e.target.closest('.houseSelectWrap') && $('houseSuggestions')) $('houseSuggestions').style.display='none';
  });
});


async function showHouseholdPhonesForPerson(person){
  const id=String(person?.id||person?.nic||'').trim();
  const hh=String(person?.house||person?.hh||'').trim();
  if(!id && !hh) return;
  const all=await getAllAppRecords();
  const target=hh ? all.filter(x=>String(x.house||x.hh||'').trim().toLowerCase()===hh.toLowerCase()) :
                     all.filter(x=>String(x.id||x.nic||'').trim().toLowerCase()===id.toLowerCase());
  const seen=new Set(), rows=[];
  for(const x of target){
    const nid=String(x.id||x.nic||'').trim();
    if(!nid || seen.has(nid.toLowerCase())) continue;
    seen.add(nid.toLowerCase());
    let ph={};
    try{ ph=await getPhone(nid)||{}; }catch(e){}
    const nums=[ph.phone,ph.phone1,ph.phone2].filter(Boolean);
    nums.forEach(p=>rows.push({name:x.name||'',nic:nid,phone:String(p)}));
  }
  let host=document.getElementById('householdPhonesForId');
  if(!host){
    host=document.createElement('div'); host.id='householdPhonesForId';
    const parent=document.querySelector('#results, #result, .results, .result, main')||document.body;
    parent.appendChild(host);
  }
  host.innerHTML = rows.length ? `<div class="householdPhoneTitle">📞 Household Phone Numbers</div>` +
    rows.map(x=>`<div class="householdPhoneRow"><span><b>${escapeHtml(x.name)}</b><small>${escapeHtml(x.nic)}</small></span><a href="tel:${escapeHtml(x.phone.replace(/\s/g,''))}">📞 ${escapeHtml(x.phone)}</a></div>`).join('')
    : `<div class="householdPhoneEmpty">No saved phone numbers for this household.</div>`;
}

function detectCurrentPersonAndShowHouseholdPhones(){
  // Look for an ID/NIC in the visible result area.
  const root=document.querySelector('#results, #result, .results, .result');
  if(!root) return;
  const text=root.innerText||'';
  const m=text.match(/\b\d{9}[VXvx]\b|\b\d{12}\b/);
  if(!m) return;
  const id=m[0];
  const all=Array.isArray(DATA)?DATA:[];
  const person=all.find(x=>String(x.id||x.nic||'').toLowerCase()===id.toLowerCase());
  if(person) showHouseholdPhonesForPerson(person);
}

document.addEventListener('DOMContentLoaded',()=>{
  const root=document.querySelector('#results, #result, .results, .result');
  if(root){
    const ob=new MutationObserver(()=>setTimeout(detectCurrentPersonAndShowHouseholdPhones,80));
    ob.observe(root,{childList:true,subtree:true});
  }
});


document.addEventListener('DOMContentLoaded',()=>{
 const map={
  addHouseholdBtn:addHouseholdAction,
  removeHouseholdBtn:removeHouseholdAction,
  addMemberBtn:addMemberAction,
  removeMemberBtn:removeMemberAction
 };
 Object.entries(map).forEach(([id,fn])=>{const b=$(id);if(b)b.addEventListener('click',fn);});
});

document.addEventListener('DOMContentLoaded',()=>{
 const toggle=$('elderlyToggle'), panel=$('elderlyPanel');
 if(toggle && panel){
  toggle.addEventListener('click',()=>{
   const open=toggle.getAttribute('aria-expanded')==='true';
   toggle.setAttribute('aria-expanded',String(!open));
   panel.hidden=open;
   if(!open){ setTimeout(()=>{ const q=$('elderlyQ'); if(q) q.focus(); },50); }
  });
 }
 const eq=$('elderlyQ'), full=$('elderlyFullListBtn');
 if(eq){
  eq.addEventListener('input',runElderlySearch);
  eq.addEventListener('focus',runElderlySearch);
 }
 if(full)full.addEventListener('click',()=>{
   if($('elderlyDropdown'))$('elderlyDropdown').style.display='none';
   renderElderlyRows(Array.isArray(ELDERLY)?ELDERLY:[]);
 });
});
