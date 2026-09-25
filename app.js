let DATA=[],ready=false;
const $=x=>document.getElementById(x);
const norm=x=>(x??"").toString().toLowerCase().replace(/\s+/g,"").replace(/-/g,"");
fetch("data/voters.json").then(r=>r.json()).then(d=>{
 DATA=d;ready=true;
 [...new Set(DATA.map(x=>x.area).filter(Boolean))].sort().forEach(a=>{
  const o=document.createElement("option");o.value=a;o.textContent="ප්‍රදේශය "+a;$("area").appendChild(o);
 });
 $("info").textContent=`මුළු වාර්තා: ${DATA.length.toLocaleString()}`;
}).catch(()=>$("info").textContent="දත්ත load වීමේ දෝෂයකි.");

$("q").addEventListener("input",()=>{
 const q=norm($("q").value); if(q.length<2){$("suggest").innerHTML="";return}
 const arr=DATA.filter(x=>[x.name,x.nic,x.house,x.serial].some(v=>norm(v).includes(q))).slice(0,12);
 $("suggest").innerHTML=arr.length?`<div class="sbox">${arr.map((x,i)=>`<div class="sitem" onclick="pick(${DATA.indexOf(x)})"><b>${esc(x.name)}</b><br><small>NIC: ${esc(x.nic)} • ගෙදර: ${esc(x.house)}</small></div>`).join("")}</div>`:"";
});
function pick(i){$("q").value=DATA[i].name;$("suggest").innerHTML="";render([DATA[i]],"තෝරාගත් වාර්තාව");}
function doSearch(){const q=norm($("q").value),a=$("area").value;render(DATA.filter(x=>(!a||x.area===a)&&(!q||[x.name,x.nic,x.house,x.serial].some(v=>norm(v).includes(q)))),"සෙවුම් ප්‍රතිඵල")}
function houseSearch(){const h=norm($("house").value);render(DATA.filter(x=>norm(x.house)===h),"Household ප්‍රතිඵල")}
function showAll(){render(DATA,"සම්පූර්ණ ලැයිස්තුව")}
function render(list,title){$("results").innerHTML=`<div class="muted"><b>${title}</b> — ${list.length.toLocaleString()} වාර්තා</div>`+
(list.length?list.slice(0,500).map(x=>`<div class="person"><div class="name">${esc(x.name)}</div><div>${esc(x.nic)}</div><div class="tags"><span class="tag">ගෙදර: ${esc(x.house)}</span><span class="tag">අනු: ${esc(x.serial)}</span><span class="tag">ප්‍රදේශය: ${esc(x.area)}</span><span class="tag">${esc(x.gender)}</span></div></div>`).join(""):`<div class="empty">ගැළපෙන වාර්තාවක් හමු නොවීය.</div>`)}
function esc(x){return String(x??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
