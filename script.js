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
reaveltospan();
//gsap animation code
var tl = gsap.timeline();
tl
.from(".child span",{
      x:100,
      duration:2,
      stagger : .2,
      delay : 1,
      ease : Power3.easeInOut
})
.to(".parent .child",{
    y:"-100%",
    duration:1,
    ease: Circ.easeInOut
})



