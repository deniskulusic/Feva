var MenuOpenButton=document.querySelector(".nav-menu-button");
var Nav=document.querySelector("nav");
MenuOpenButton.addEventListener('click',function(){
    Nav.classList.toggle("menu-active");
    
      window.scroll({
          top: 0,
          left: 0
          
        });
});
let getScroll=0;
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
  let footer=document.querySelector(' #footer'); 
let footerText=document.querySelectorAll("#footer-text-1 , #footer-text-2");

let WallpaperScroll = document.querySelectorAll('#wallpaper-scroll , #wallpaper-content');
let Sections= document.querySelectorAll('#section1');
let Paragraph= document.querySelector('#paragraph');
let UpSection= document.querySelectorAll('#up-section , #up-section-2 , #up-section-3,#up-section-4');
let UpContainer= document.querySelectorAll('#up-container , #up-container-2');
let UpImg=document.querySelectorAll('#up-img, #up-img-2 , #up-img-3, #up-img-4');
let concept=document.querySelector('#concept');
window.scroll(0,0);
let paragraphFromTop=window.pageYOffset + Paragraph.getBoundingClientRect().top;
let footerFromTop=window.pageYOffset + footer.getBoundingClientRect().top;
let upFromTop=[
    window.pageYOffset + UpSection[0].getBoundingClientRect().top ,
    window.pageYOffset + UpSection[1].getBoundingClientRect().top,
    window.pageYOffset + UpSection[2].getBoundingClientRect().top,
    window.pageYOffset + UpSection[3].getBoundingClientRect().top,
]
function Repeat(){
    console.log(1/(screen.height/getScroll-1) -1)
    upFromTop=[
        window.pageYOffset + UpSection[0].getBoundingClientRect().top ,
        window.pageYOffset + UpSection[1].getBoundingClientRect().top, 
        window.pageYOffset + UpSection[2].getBoundingClientRect().top, 
        window.pageYOffset + UpSection[3].getBoundingClientRect().top, 
    ]
    paragraphFromTop=window.pageYOffset + Paragraph.getBoundingClientRect().top;
    footerFromTop=window.pageYOffset + footer.getBoundingClientRect().top
    /*
    if(100-0.05*(upFromTop-getScroll)>80)
    UpContainer.style.width=(100-0.05*(upFromTop-getScroll))+"vw";*/
if(0.05*(upFromTop[0]-getScroll)<10){
    for(let i=0;i<UpContainer.length;i++)
    UpContainer[i].style.width=(0.05*(upFromTop[0]-getScroll))+"vw";
}
if(0.05*(upFromTop[0]-getScroll)<0){
    for(let i=0;i<UpContainer.length;i++)
    UpContainer[i].style.width="0";
}
for(let i=0;i<UpSection.length;i++){
    UpImg[i].animate({
        transform : "translateY(" + 0.91*(getScroll + screen.height - upFromTop[i] ) + "px )"
      },{duration:0,fill:"forwards"})
      UpSection[i].animate({
        transform : "translateY(-" + 1*(getScroll ) + "px )"
      },{duration:0,fill:"forwards"})
    }
    concept.animate({
        transform : "translateY(-" + 1*(getScroll ) + "px )"
      },{duration:500,fill:"forwards"})
    WallpaperScroll[0].animate({
        transform : "translateY(" + 0.3*(getScroll ) + "px )"
      },{duration:500,fill:"forwards"})
      WallpaperScroll[1].animate({
        transform : "translateY(" + 0.6*(getScroll ) + "px )"
      },{duration:1200,fill:"forwards"});
      Sections[0].animate({
        transform : "translateY(-" + 0.4*(getScroll ) + "px )"
      },{duration:500,fill:"forwards"})
      
      WallpaperScroll[0].style.opacity=300/getScroll;
      if(screen.height-getScroll<0)
      Paragraph.style.opacity=1;
      
      else
      Paragraph.style.opacity=1/(screen.height/getScroll-1) -1;
      Paragraph.animate({
        transform : "translateY(" + 1*( getScroll -paragraphFromTop+0.3*screen.height) + "px )"
      },{duration:500,fill:"forwards"})
      footerText[0].animate({
        transform : "translateY(calc(-50% + " + 0.5*(getScroll - footerFromTop  ) + "px))"
      },{duration:0,fill:"forwards"})
      footerText[1].animate({
          transform : "translateY(calc( " + 0.5*(getScroll - footerFromTop  ) + "px))"
        },{duration:0,fill:"forwards"})
        footer.animate({
            transform : "translateY(-" + 1*(getScroll ) + "px )"
          },{duration:0,fill:"forwards"})
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