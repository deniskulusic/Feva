//Menu open
var MenuOpenButton=document.querySelector(".nav-menu-button");
var Nav=document.querySelector("nav");
MenuOpenButton.addEventListener('click',function(){
    Nav.classList.toggle("menu-active");
   
});

//Cursor follow
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
let drag=document.querySelector(".drag");
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
drag.addEventListener("mouseover", function(){
      cursor.style.backdropFilter="blur(20px) saturate(2)";
  });

//Reset values on mouseout
HoverElement[i].addEventListener("mouseout", function(){
    
    cursor.classList.remove("hover-active");
    document.body.style.backgroundColor="rgb(27, 27, 27)";
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
let scrollSpeed=0;
let Paragraph= document.querySelector('.content__title');
let footer=document.querySelector(' #footer'); 
let Rotateimg=document.querySelector('#rotateimg'); 
let sideScroll=document.querySelectorAll('#side2 ,#paralax'); 
let footerText=document.querySelectorAll("#footer-text-1 , #footer-text-2");
let ScrollImg = document.querySelector('#img11');
let ScrollimgFromTop=window.pageYOffset + ScrollImg.getBoundingClientRect().top;
let footerFromTop=window.pageYOffset + footer.getBoundingClientRect().top;
let ScrollImgMultiple = document.querySelectorAll('#img1 , #img2 , #img4 , #img3');
let UpSection= document.querySelectorAll('#up-section ');
let UpContainer= document.querySelectorAll('#up-container , #up-container-2');
let UpContent=document.querySelector('#upcontent');
let UpImg=document.querySelectorAll('#up-img');
let upFromTop=[
    window.pageYOffset + UpSection[0].getBoundingClientRect().top 
]
let paragraphFromTop=window.pageYOffset + Paragraph.getBoundingClientRect().top;
//Apply on load
ScrollImg.animate({
    transform : "translateY(calc(" + 0.25*( getScroll - ScrollimgFromTop ) + "px + 5%)"
  },{duration:0,fill:"forwards"})

let ScrollimgMultipleFromTop=[
    window.pageYOffset + ScrollImgMultiple[0].getBoundingClientRect().top,
    window.pageYOffset + ScrollImgMultiple[1].getBoundingClientRect().top,
    window.pageYOffset + ScrollImgMultiple[2].getBoundingClientRect().top,
    window.pageYOffset + ScrollImgMultiple[3].getBoundingClientRect().top
]
  function Repeat(){
    //Retake distance from top
    ScrollimgFromTop=window.pageYOffset + ScrollImg.getBoundingClientRect().top;
    footerFromTop=window.pageYOffset + footer.getBoundingClientRect().top;
    ScrollimgMultipleFromTop=[
        window.pageYOffset + ScrollImgMultiple[0].getBoundingClientRect().top,
        window.pageYOffset + ScrollImgMultiple[1].getBoundingClientRect().top,
        window.pageYOffset + ScrollImgMultiple[2].getBoundingClientRect().top,
        window.pageYOffset + ScrollImgMultiple[3].getBoundingClientRect().top
    ]
    let upFromTop=[
      window.pageYOffset + UpSection[0].getBoundingClientRect().top 
    ]

    //Scroll speed for flashing images(Brightness)
    scrollSpeed=(historicGetScroll - getScroll)/time;
    
    //Rotating circle
    Rotateimg.animate({
        transform : "rotate(" + 0.1*(getScroll) + "deg )"
      },{duration:0,fill:"forwards"})

      //Paragraph animate
      Paragraph.animate({
        transform : "translateY(" + 0.4*( getScroll -paragraphFromTop+0.3*screen.height) + "px )"
      },{duration:500,fill:"forwards"})

      //On section with .side and .side2 one moves faster and everythig that follows
    for(let i=0;i<sideScroll.length;i++){
        sideScroll[i].animate({
          transform : "translateY(" + 0.1*(getScroll) + "px )"
        },{duration:1000,fill:"forwards"})
      }
      //Move all the images in .side and .side2 section
        for(let i=0;i<ScrollImgMultiple.length;i++){
        ScrollImgMultiple[i].animate({
          transform : "translateY(calc(" + 0.12*( getScroll - ScrollimgMultipleFromTop[i] ) + "px + 5%)"
        },{duration:2000,fill:"forwards"})
        ScrollImgMultiple[i].animate({
          filter : "brightness("+ (1+0.2*Math.abs(scrollSpeed))+")"
        },{duration:1000,fill:"forwards"})
        
      }
    //Footer animate
    footerText[0].animate({
        transform : "translateY(calc(-50% + " + 0.5*(getScroll - footerFromTop  ) + "px))"
      },{duration:0,fill:"forwards"})
      footerText[1].animate({
          transform : "translateY(calc( " + 0.5*(getScroll - footerFromTop  ) + "px))"
        },{duration:0,fill:"forwards"})       
    
    //Side img animate
    ScrollImg.animate({
        transform : "translateY(calc(" + 0.2*( getScroll - ScrollimgFromTop ) + "px + 5%)"
      },{duration:2000,fill:"forwards"})
      ScrollImg.animate({
        filter : "brightness("+ (1+0.2*Math.abs(scrollSpeed))+")"
      },{duration:1000,fill:"forwards"})
    //Opening section open
  if(0.05*(upFromTop-getScroll)<10){
    for(let i=0;i<UpContainer.length;i++)
    UpContainer[i].style.width=(0.05*(upFromTop-getScroll))+"vw";
  }
  if(0.05*(upFromTop-getScroll)<0){
    for(let i=0;i<UpContainer.length;i++)
    UpContainer[i].style.width="0";
  }
  if(upFromTop-getScroll<0)
  UpContent.style.opacity=1;
else
  UpContent.style.opacity=1/(1.3*upFromTop/getScroll-1) -1;      
        
    };
    window.addEventListener("scroll",function(){
        getScroll=this.pageYOffset;
        requestAnimationFrame(Repeat);
      }); 


      //slider
      const slider = document.querySelector('.container-c')
const cards = document.querySelector('.cards')
const cards2 = document.querySelector('.cards-2')
let isPressed = false;
var matrix;
let cursorX;
function getTranslateX() {
    var style = window.getComputedStyle(cards);
    matrix = new WebKitCSSMatrix(style.transform);
    console.log('translateX: ', matrix.m41);
  }
slider.addEventListener("mousedown", (e) => {
    getTranslateX()
    isPressed = true;
    cursorX = e.offsetX - matrix.m41;
  });
  window.addEventListener("mouseup", () => {
    isPressed = false;
  });
  
  slider.addEventListener("mousemove", (e) => {
    if (!isPressed) return;
    e.preventDefault();
    cards.animate({
        transform : "translateX(" + ( e.offsetX - cursorX ) + "px )"
      },{duration:1000,fill:"forwards"})
      cards2.animate({
        transform : "translateX(" + ( e.offsetX - cursorX ) + "px )"
      },{duration:1200,fill:"forwards"})
      boundSlides(e.offsetX - cursorX)
  });

  function boundSlides(position) {
    const containerRect = slider.getBoundingClientRect();
    const cardsRect = cards.getBoundingClientRect();
    if (position > 0) {
        cards.animate({
            transform : "translateX(" +0+ "px )"
          },{duration:500,fill:"forwards"})
          cards2.animate({
            transform : "translateX(" +0+ "px )"
          },{duration:700,fill:"forwards"})
    } else if (cardsRect.width - containerRect.width < -position) {
        console.log(cardsRect.width - containerRect.width,-position)
        cards.animate({
            transform : "translateX(-" +(cardsRect.width - containerRect.width)+ "px )"
          },{duration:500,fill:"forwards"})
          cards2.animate({
            transform : "translateX(-" +(cardsRect.width - containerRect.width)+ "px )"
          },{duration:700,fill:"forwards"})
    }
   
  }

  //accordation
  const acordation=document.getElementsByClassName('faq');
for(i=0;i<acordation.length;i++){
  
    acordation[i].addEventListener('click',function(){
    var faqa=this.classList.contains("active");
        var elems = document.querySelectorAll(".faq.active");
[].forEach.call(elems, function(el) {
    el.classList.remove("active");
});

if(faqa) {
  this.classList.remove("active");
        }
        else{
          this.classList.add("active");
        }
    })
}