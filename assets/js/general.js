//Menu open 
var MenuOpenButton=document.querySelector(".nav-menu-button");
var Nav=document.querySelector("nav");
MenuOpenButton.addEventListener('click',function(){
    Nav.classList.toggle("menu-active");
   
});

//Cursor events

let cursor=document.querySelector("#cursor");
let cursorimg=document.querySelectorAll("#cursor-img , #cursor-img-1 , #cursor-img-2 , #cursor-img-3 , #cursor-img-4");
let time=200;
let totalX = 0;
let totalY = 0;
let historicTouchX=0;
let historicGetScroll=0;
let x=0;
let y=0;
let MouseON=false;
let HoverElement=document.querySelectorAll(".hover");
let HoverElementImg=document.querySelectorAll(".hover-img");
let WhichCursor=0;

for(let i=0;i<HoverElement.length;i++){
HoverElement[i].addEventListener("mouseover", function(){
  WhichCursor=1;
    cursor.classList.add("hover-active");

    //Color change based on set dataset values
    document.body.style.backgroundColor=HoverElement[i].dataset.color;
    document.body.style.color=HoverElement[i].dataset.textColor;
    cursor.style.backgroundColor=HoverElement[i].dataset.cursorColor;
});


//Reset values on mouseout
HoverElement[i].addEventListener("mouseout", function(){
    
    cursor.classList.remove("hover-active");
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
});
}
for(let i=0;i<HoverElementImg.length;i++){
HoverElementImg[i].addEventListener("mouseover", function(){
  WhichCursor=0;
  HoverElementImg[i].parentElement.classList.add("hover-active-img");
});
HoverElementImg[i].addEventListener("mouseout", function(){
  
  HoverElementImg[i].parentElement.classList.remove("hover-active-img");

});
}
//Track cursor speed
var tracker = setInterval(function(){
    historicTouchX = totalX;
    historicGetScroll=getScroll;
}, time);

//Get cursor location
document.addEventListener("mousemove", function(ev){
    //X and Y are coordinates of cursor
    x=ev.clientX;
    y=ev.clientY;

    //totalX and totalY are the amount of space that cursor passed
    totalX += Math.abs(ev.movementX);
    totalY += Math.abs(ev.movementY);
    speed = (historicTouchX - totalX) / time;
    //Set custom cursor to cursor location
    if(WhichCursor){
      cursor.animate({
        transform : "translateX( calc(-4vw + " + x + "px)) translateY( calc(-6vw + " + y + "px)) scale("+ (1+0.5*speed) +")"
      },{duration:1200,fill:"forwards"})
    }
    else{
      let j=0;
      for(let i=0;i<cursorimg.length;i++){
        if(i>2)
        j=3;
      cursorimg[i].animate({
        transform : "translateX( calc("+ -320*(i+1-j) +"px + " + x + "px)) translateY( calc(-500px + " + y + "px)) scale(1) rotate(" + ev.movementX + "deg)"
      },{duration:1200,fill:"forwards"})
    }
    }
    
  }, false);    


//Scroll events
let getScroll=0;
let FullPageScroll = document.getElementById('full-page-scroll'); 
let sideScroll=document.querySelectorAll('#side2 , #footer'); 
let footerText=document.querySelectorAll("#footer-text-1 , #footer-text-2");
let footerFromTop=window.pageYOffset + sideScroll[1].getBoundingClientRect().top;
let ScrollImg = document.querySelectorAll('#img1 , #img2 , #img4 , #img3 , #img5 , #img6');
let scrollSpeed=0;
let ScrollimgFromTop=[
    window.pageYOffset + ScrollImg[0].getBoundingClientRect().top,
    window.pageYOffset + ScrollImg[1].getBoundingClientRect().top,
    window.pageYOffset + ScrollImg[2].getBoundingClientRect().top,
    window.pageYOffset + ScrollImg[3].getBoundingClientRect().top,
    window.pageYOffset + ScrollImg[4].getBoundingClientRect().top,
    window.pageYOffset + ScrollImg[5].getBoundingClientRect().top
]
//Set transform at page load
    FullPageScroll.animate({
        transform : "translateY(-" + 0.2*(getScroll ) + "px )"
      },{duration:0,fill:"forwards"})
      for(let i=0;i<sideScroll.length;i++){
      sideScroll[i].animate({
        transform : "translateY(" + 0.1*(getScroll) + "px )"
      },{duration:0,fill:"forwards"})
    }
    console.log(getScroll- footerFromTop)
      for(let i=0;i<ScrollImg.length;i++){
      ScrollImg[i].animate({
        transform : "translateY(calc(" + 0.25*( getScroll - ScrollimgFromTop[i] ) + "px + 5%)"
      },{duration:0,fill:"forwards"})
    }
        footerText[0].animate({
          transform : "translateY(calc(-50% + " + 0.5*(getScroll - footerFromTop  ) + "px))"
        },{duration:0,fill:"forwards"})
        footerText[1].animate({
            transform : "translateY(calc( " + 0.5*(getScroll - footerFromTop  ) + "px))"
          },{duration:0,fill:"forwards"})
  



  //redefining variables when resising screen
  window.addEventListener("resize",function(){
    footerFromTop=window.pageYOffset + sideScroll[1].getBoundingClientRect().top;
    ScrollimgFromTop=[
        window.pageYOffset + ScrollImg[0].getBoundingClientRect().top,
        window.pageYOffset + ScrollImg[1].getBoundingClientRect().top,
        window.pageYOffset + ScrollImg[2].getBoundingClientRect().top,
        window.pageYOffset + ScrollImg[3].getBoundingClientRect().top,
        window.pageYOffset + ScrollImg[4].getBoundingClientRect().top,
        window.pageYOffset + ScrollImg[5].getBoundingClientRect().top
    ]
    for(let i=0;i<ScrollImg.length;i++){
        ScrollImg[i].animate({
          transform : "translateY(calc(" + 0.25*(getScroll- ScrollimgFromTop[i] ) + "px + 5%)"
        },{duration:1200,fill:"forwards"})
      }
      FullPageScroll.animate({
        transform : "translateY(-" + 0.2*(getScroll ) + "px )"
      },{duration:1200,fill:"forwards"})
      for(let i=0;i<sideScroll.length;i++){
      sideScroll[i].animate({
        transform : "translateY(" + 0.3*(getScroll) + "px )"
      },{duration:1200,fill:"forwards"})
    }
  });

  function Repeat(){
    scrollSpeed=(historicGetScroll - getScroll)/time;
    //redefining from top variables because whole page scrolls
    ScrollimgFromTop=[
        window.pageYOffset + ScrollImg[0].getBoundingClientRect().top,
        window.pageYOffset + ScrollImg[1].getBoundingClientRect().top,
        window.pageYOffset + ScrollImg[2].getBoundingClientRect().top,
        window.pageYOffset + ScrollImg[3].getBoundingClientRect().top,
        window.pageYOffset + ScrollImg[4].getBoundingClientRect().top,
        window.pageYOffset + ScrollImg[5].getBoundingClientRect().top
    ]
    footerFromTop=window.pageYOffset + sideScroll[1].getBoundingClientRect().top;

    //Scrolling animations
    FullPageScroll.animate({
        transform : "translateY(-" + 0.2*(getScroll ) + "px )"
      },{duration:1200,fill:"forwards"})
      for(let i=0;i<sideScroll.length;i++){
      sideScroll[i].animate({
        transform : "translateY(" + 0.1*(getScroll) + "px )"
      },{duration:1200,fill:"forwards"})
    }
      for(let i=0;i<ScrollImg.length;i++){
      ScrollImg[i].animate({
        transform : "translateY(calc(" + 0.25*( getScroll - ScrollimgFromTop[i] ) + "px + 5%)"
      },{duration:2000,fill:"forwards"})
      ScrollImg[i].animate({
        filter : "brightness("+ (1+0.2*Math.abs(scrollSpeed))+")"
      },{duration:1000,fill:"forwards"})
      
    }
        footerText[0].animate({
          transform : "translateY(calc(-50% + " + 0.5*(getScroll - footerFromTop  ) + "px))"
        },{duration:1200,fill:"forwards"})
        footerText[1].animate({
            transform : "translateY(calc( " + 0.5*(getScroll - footerFromTop  ) + "px))"
          },{duration:1200,fill:"forwards"})

    if(( footerFromTop - getScroll)<0){
        window.scroll({
            top: footerFromTop,
            left: 0,
            behavior: "smooth",
          });
    }
    
  };
  window.addEventListener("scroll",function(){
    getScroll=this.pageYOffset;
    requestAnimationFrame(Repeat);
  });