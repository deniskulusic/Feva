var MenuOpenButton=document.querySelector(".nav-menu-button");
var Nav=document.querySelector("nav");
MenuOpenButton.addEventListener('click',function(){
    Nav.classList.toggle("menu-active");
   
});
window.scroll(0,0);
let getScroll=0;
let cursor=document.querySelector("#cursor");
let CursorImgNav=document.querySelectorAll("#cursor-img , #cursor-img-1 , #cursor-img-2 , #cursor-img-3 , #cursor-img-4");
let CursorImgSmall=document.querySelectorAll("#small-cursor-img-1, #small-cursor-img-2 , #small-cursor-img-3 , #small-cursor-img-4 , #small-cursor-img-5");
let CursorImgStories=document.querySelectorAll("#stories-cursor-1, #stories-cursor-2, #stories-cursor-3");
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
let HoverElementImgSmall=document.querySelectorAll(".hover-img-small");
let HoverElementImgStories=document.querySelectorAll(".stories-element");
let WhichCursor=0;
let Stories=window.pageYOffset + HoverElementImgStories[0].getBoundingClientRect().top;

//For dot cursor
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


//For Nav img cursor
for(let i=0;i<HoverElementImg.length;i++){
    HoverElementImg[i].addEventListener("mouseover", function(){
      WhichCursor=0;
      HoverElementImg[i].parentElement.classList.add("hover-active-img");
    });
    HoverElementImg[i].addEventListener("mouseout", function(){
      HoverElementImg[i].parentElement.classList.remove("hover-active-img");

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


//For Small img cursor
for(let i=0;i<HoverElementImgSmall.length;i++){
  HoverElementImgSmall[i].addEventListener("mouseover", function(){
    WhichCursor=2;
    HoverElementImgSmall[i].parentElement.classList.add("hover-active-img");
    document.body.style.backgroundColor=HoverElementImgSmall[i].dataset.color;
      document.body.style.color=HoverElementImgSmall[i].dataset.textColor;
  });
  HoverElementImgSmall[i].addEventListener("mouseout", function(){
    
    HoverElementImgSmall[i].parentElement.classList.remove("hover-active-img");
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
  });
}

//For Stories section cursor
for(let i=0;i<HoverElementImgStories.length;i++){
  HoverElementImgStories[i].addEventListener("mouseover", function(){
    WhichCursor=3;
    HoverElementImgStories[i].classList.add("hover-active-img");
    document.body.style.backgroundColor=HoverElementImgStories[i].dataset.color;
      document.body.style.color=HoverElementImgStories[i].dataset.textColor;
  });
  HoverElementImgStories[i].addEventListener("mouseout", function(){
    
    HoverElementImgStories[i].classList.remove("hover-active-img");
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
  });
}
//Track cursor speed
var tracker = setInterval(function(){
    historicTouchX = totalX;
    historicGetScroll=getScroll;
}, time);
let cursorev=0;
//Get cursor location
document.addEventListener("mousemove", function(ev){
    //X and Y are coordinates of cursor
    cursorev=ev;
    MoveCursor(ev);

  }, false);
  document.addEventListener("scroll", function(){
    //X and Y are coordinates of cursor
    MoveCursor(cursorev);

  }, false);
function MoveCursor(ev){
  x=ev.clientX;
    y=ev.clientY;
    console.log(x,y)
    //totalX and totalY are the amount of space that cursor passed
    totalX += Math.abs(ev.movementX);
    totalY += Math.abs(ev.movementY);
    speed = (historicTouchX - totalX) / time;
    //Set custom cursor to cursor location
    if(WhichCursor==1){
      cursor.animate({
        transform : "translateX( calc(-4vw + " + x + "px)) translateY( calc(-6vw + " + y + "px)) scale("+ (1+0.5*speed) +")"
      },{duration:1200,fill:"forwards"})
    }
    else if(WhichCursor==2){
        for(let i=0;i<CursorImgSmall.length;i++){
        CursorImgSmall[i].animate({
            transform : "translateX( calc(-100px + " + x + "px)) translateY(calc(20px + " + y + "px)) scale(1) rotate(" + ev.movementX + "deg)"
          },{duration:1200,fill:"forwards"})}
    }
    else if(WhichCursor==3){
      for(let i=0;i<CursorImgStories.length;i++){
        CursorImgStories[i].animate({
          transform : "translateY(calc("+(-12.5)*(i+1) +"vw + "+ (y + getScroll - Stories) + "px)) translateX(calc(-5vw + "+ 0.1*x + "px)) scale(1) "
        },{duration:1200,fill:"forwards"})}
        console.log(getScroll-Stories)
  }
    else{
      let j=0;
      for(let i=0;i<CursorImgNav.length;i++){
        if(i>2)
        j=3;
        
      CursorImgNav[i].animate({
        transform : "translateX( calc("+ -320*(i+1-j) +"px + " + x + "px)) translateY( calc(-500px + " + y + "px)) scale(1) rotate(" + ev.movementX + "deg)"
      },{duration:1200,fill:"forwards"})
    }
  }
}

let footer=document.querySelector(' #footer'); 
let footerText=document.querySelectorAll("#footer-text-1 , #footer-text-2");
let WallpaperScroll = document.querySelectorAll('#wallpaper-scroll , #wallpaper-content');
let Sections= document.querySelectorAll('#section1');
let Paragraph= document.querySelector('#paragraph');
let Choose= document.querySelector('#choose ');
let UpSection= document.querySelectorAll('#up-section ');
let UpContainer= document.querySelectorAll('#up-container , #up-container-2');
let UpContent=document.querySelector('#upcontent');
let UpImg=document.querySelectorAll('#up-img');
let ScrollImg = document.querySelector('#img1');
let ScrollimgFromTop=window.pageYOffset + ScrollImg.getBoundingClientRect().top;
let paragraphFromTop=window.pageYOffset + Paragraph.getBoundingClientRect().top;
let footerFromTop=window.pageYOffset + footer.getBoundingClientRect().top;
let upFromTop=[
    window.pageYOffset + UpSection[0].getBoundingClientRect().top 
]
function Repeat(){
  
//Paragraph animate
Paragraph.animate({
  transform : "translateY(" + 0.7*( getScroll -paragraphFromTop+0.3*screen.height) + "px )"
},{duration:500,fill:"forwards"})
//Paragraph fade
if(screen.height-getScroll<0)
  Paragraph.style.opacity=1;
else
  Paragraph.style.opacity=1/(1.3*screen.height/getScroll-1) -1;

//Wallpaper animate
WallpaperScroll[1].animate({
  transform : "translateY(" + 1*(getScroll ) + "px )"
},{duration:500,fill:"forwards"})
WallpaperScroll[0].animate({
  transform : "translateY(" + 0.8*(getScroll ) + "px )"
},{duration:0,fill:"forwards"})
//Wallpaper fade
WallpaperScroll[0].style.opacity=0.5*screen.height/getScroll;


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
      
    
};
window.addEventListener("scroll",function(){
    getScroll=this.pageYOffset;
    requestAnimationFrame(Repeat);
  }); 