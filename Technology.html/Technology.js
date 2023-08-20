var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x+30 +"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x -200 + "px"
    blur.style.top = dets.y -200 + "px"
    

})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});


    
    




gsap.to("#nav",{
    backgroundColor :"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2,
    }
})

gsap.to("#main" ,{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        marker:true,
        start:"top -30%",
        end:" -80%",
        scrub: 2,
    }
})

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 3,
  },
});
gsap.from(".card", {
  scale:0.8,
  opacity: 0,
  duration: 2,
  stagger:0.1,
  scrollTrigger: {
    trigger: ".card" ,
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from("#colon1",{
  y: -70,
  x: -70,
  scrollerTrigger:{
    trigger: "#colon1" ,
    scroller: "Body",
    markers: true,
    start: "top 55%",
    end: "55%",
    scrub: 5,

  }
})
gsap.from("#colon2",{
  y: 70,
  x: 70,
  scrollerTrigger:{
    trigger: "#colon1" ,
    scroller: "Body",
    markers: true,
    start: "top 55%",
    end: "55%",
    scrub: 5,

  }
})
gsap.from("#page4 h1",{
  y: 70,
  x: 70,
  scrollerTrigger:{
    trigger: "#page4 h1" ,
    scroller: "Body",
    markers: true,
    start: "top 75%",
    end: "70%",
    scrub: 5,

  }
})


