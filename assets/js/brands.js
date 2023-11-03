//Menu open 
var MenuOpenButton=document.querySelector(".nav-menu-button");
var Nav=document.querySelector("nav");
MenuOpenButton.addEventListener('click',function(){
    Nav.classList.toggle("menu-active");
   
});
let time=200;
let historicGetScroll=0;
var tracker = setInterval(function(){
    historicGetScroll=getScroll;
}, time);


let getScroll=0;
let scrollSpeed=0;
let footer=document.querySelector(' #footer'); 
let footerText=document.querySelectorAll("#footer-text-1 , #footer-text-2");
let ScrollImg = document.querySelector('#img1');
let ScrollimgFromTop=window.pageYOffset + ScrollImg.getBoundingClientRect().top;
let footerFromTop=window.pageYOffset + footer.getBoundingClientRect().top;

  function Repeat(){
    scrollSpeed=(historicGetScroll - getScroll)/time;
    
    //Footer animate
      footerText[0].animate({
        transform : "translateY(calc(-50% + " + 0.5*(getScroll - footerFromTop  ) + "px))"
      },{duration:500,fill:"forwards"})
      footerText[1].animate({
          transform : " matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0,"+ 0.5*(getScroll - footerFromTop  ) +", 0, 1)"
        },{duration:500,fill:"forwards"})        
    
    //Side img animate
    ScrollImg.animate({
        transform : "translateY(calc(" + 0.25*( getScroll - ScrollimgFromTop ) + "px + 5%)"
      },{duration:2000,fill:"forwards"})
      ScrollImg.animate({
        filter : "brightness("+ (1+0.2*Math.abs(scrollSpeed))+")"
      },{duration:1000,fill:"forwards"})
          
        
    };
    window.addEventListener("scroll",function(){
        getScroll=this.pageYOffset;
        requestAnimationFrame(Repeat);
      }); 