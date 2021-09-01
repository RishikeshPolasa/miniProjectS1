const menuBtn= document.querySelector('.toggle');
const showcase=document.querySelector('.showcase');
let menuOpen=false;
menuBtn.addEventListener('click',()=>{
        console.log('as');
        if(!menuOpen){
                menuBtn.classList.add('open');
                showcase.classList.add('open');
                menuOpen=true;
        }else{
                menuBtn.classList.remove('open');
                showcase.classList.remove('open');
                menuOpen=false;
        }
})