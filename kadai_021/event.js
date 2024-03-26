const h2text=document.getElementById('text');
const textBtn=document.getElementById('btn');
textBtn.addEventListener('click',()=>{
  setTimeout(() => {
    h2text.textContent='ボタンをクリックしました';
  }, 2000); 
});
