

var v= document.getElementById("v");
console.log(v)
/*
v.addEventListener("click",popup());

function popup()
{
    console.log("hola");
    var pop=document.createElement("div");
    pop.setAttribute("style", "background-color: #dad6d6; width: 300px; height: 200px;");
    //pop.style.display=block;
   // pop.style.backgroundColor= "#dad6d6";
    v.appendChild(pop);
}
*/

var s=document.getElementsByClassName("about");



function getRelativeCoordinates(mouse, element){
    let rect = element.getBoundingClientRect();
    return {
      x: mouse.clientX - rect.left,
      y: mouse.clientY - rect.top
    };
  }

console.log(s)


const avani = document.getElementById("avani")
const alima= document.getElementById("alima")
avani.addEventListener("click", e=> {
    console.log(e);
})

avani.addEventListener("mouseover", e=> {
    avani.style.backgroundColor="#dad6d6";
    text=document.getElementById("av_text");
    text.style.top= "0";
})

avani.addEventListener("mouseleave", e=> {
    text=document.getElementById("av_text");
    text.style.top= "85%";
    
})

alima.addEventListener("mouseover", e=> {
    avani.style.backgroundColor="#dad6d6";
    text=document.getElementById("al_text");
    text.style.top= "0";
})

alima.addEventListener("mouseleave", e=> {
    avani.style.backgroundColor="#dad6d6";
    text=document.getElementById("al_text");
    text.style.top= "85%";
})
/*
  for(let i = 0; i < about.length; i++)
  {
     // m_coord=getRelativeCoordinates(mouse, s[i]);
      //s[i].addEventListener('onclick', function(){
         // s[i].style.backgroundColor="#dad6d6";

      //})

      s[0].onmouseenter =MouseEnter;
  }
*/