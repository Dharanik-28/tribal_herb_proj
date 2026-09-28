
function showToast(message){
  const t=document.getElementById('toast');
  if(!t)return;
  t.textContent=message;t.style.display='block';
  setTimeout(()=>t.style.display='none',2200);
}
function goRegister(){window.location.href='registration.html'}
function searchPlants(){
  const el=document.getElementById('siteSearch')||document.getElementById('heroSearch');
  const q=el?el.value.trim():'';
  if(q){window.location.href='plants.html?search='+encodeURIComponent(q);}
}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.login-btn').forEach(b=>b.addEventListener('click',goRegister));
  const btn=document.getElementById('searchBtn');
  if(btn)btn.addEventListener('click',searchPlants);
  const input=document.getElementById('heroSearch');
  if(input)input.addEventListener('keydown',e=>{if(e.key==='Enter')searchPlants()});
});

const q=new URLSearchParams(location.search).get('search'); if(q) showToast('Searching for '+q);






  
