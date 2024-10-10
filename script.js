function valueSet() {
     // @ts-ignore
     gsap.set(".nav a", { y:"-100%" , opacity:0});
     // @ts-ignore
     gsap.set(".home .parent .child" ,{ y:"100%" });

     document.querySelectorAll("#Visual>g").forEach(function(e){
        var car = e.childNodes[0].childNodes[0];
        // @ts-ignore
        car.style.strokeDasharray = car.getTotalLength( ) + 'px';
        // @ts-ignore
        car.style.strokeDashoffset = car.getTotalLength( ) + 'px';
    });
 
}



function reaveltospan () {
document.querySelectorAll(".rev")
.forEach(function (elem) {
    //create two spans
    var parent = document.createElement("span");
    var child = document.createElement("span");

    //parent and child both set their class
    parent.classList.add("parent");
    child.classList.add("child");
    
    //set the text of the child span to the text of the parent span
    child.innerHTML = elem.innerHTML;
    
    //append the child span to the parent span
    parent.appendChild(child);

    //elem replace its value with parent span
    elem.innerHTML ="";
    elem.appendChild(parent);
    

    

});
}

//gsap animation code
function loaderanimation() {
    // @ts-ignore
    var tl = gsap.timeline();
tl
.from("#loader .child span",{
      x:100,
      duration:2,
      stagger : .2,
      delay : 1,
      // @ts-ignore
      ease : Power3.easeInOut
})
.to("#loader .parent .child",{
    y:"-100%",
    duration:1,
    // @ts-ignore
    ease: Circ.easeInOut
})
.to("#loader",{
    height:0,
    duration:1,
    // @ts-ignore
    ease: Circ.easeInOut
})
.to("#green",{
    height:"100%",
    top:0,
    duration:1,
    delay:-.8,
    // @ts-ignore
    ease: Circ.easeInOut,

})
.to("#green",{
    height:"0%",
    duration:1,
    delay:-.5,
    // @ts-ignore
    ease: Circ.easeInOut,
    onComplete :function (){
       animatehome();
    }
})
}

//svg animation of visual

function animateSvg() {
   
    // @ts-ignore
    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
        strokeDashoffset:0,
        duration:5,
        
        // @ts-ignore
        ease : Power3.easeInOut,
    });
}

function animatehome() {
   
    // @ts-ignore
    var tl = gsap.timeline();
    tl.to(".nav a",{
        y:0,
        opacity:1,
        stagger : 1,
        // @ts-ignore
        ease: Expo.easeInOut,
    });
    tl.to(".home .parent .child",{
        y:0,
        delay:0,
        duration:2,
        stagger:1.3,
        // @ts-ignore
        ease: Expo.easeInOut,
    });
    tl.to("#Visual>g>g>path, #Visual>g>g>polyline",{
        delay:0.2,
        strokeDashoffset:0,
        duration:2,
        // @ts-ignore
        ease : Power3.easeInOut,
    });
        

    

    
}

     
reaveltospan();
valueSet();
loaderanimation();

