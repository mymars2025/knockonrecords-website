// 메일 주소 복사(v1.8.1): mailto로 메일 앱을 띄우지 않고 주소만 복사한다(마르스님 요청)
(function(){
  var toast=document.getElementById('toast');
  function show(msg){ if(!toast){toast=document.createElement('div');toast.className='toast';document.body.appendChild(toast);} toast.textContent=msg; toast.classList.add('on'); clearTimeout(show.t); show.t=setTimeout(function(){toast.classList.remove('on');},1600); }
  document.addEventListener('click',function(e){
    var el=e.target.closest('.copy[data-copy]'); if(!el) return; e.preventDefault();
    var v=el.getAttribute('data-copy');
    var done=function(){ show(v+' 복사했습니다'); el.classList.add('did'); setTimeout(function(){el.classList.remove('did');},1600); };
    if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(v).then(done,function(){fallback(v);done();}); } else { fallback(v); done(); }
  });
  function fallback(v){ var t=document.createElement('textarea'); t.value=v; t.style.position='fixed'; t.style.opacity='0'; document.body.appendChild(t); t.select(); try{document.execCommand('copy');}catch(err){} document.body.removeChild(t); }
})();
