const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function FirstAnim(){
    var tl=gsap.timeline();
    tl.from(".nav",{
        y:'-10',
        opacity:0,
        duration:1.3,
        ease:Expo.easeInOut
    })
    .to(".bound-elem",{
        y:0,
        duration:1.1,
        ease:Expo.easeInOut,
        stagger:0.2
    })
    .from(".home-footer",{
        y:'-10',
        opacity:0,
        duration:1.3,
        ease:Expo.easeInOut
    })
}

function CircleSmall(){
    var xscale=1;
    var yscale=1;

    var prevx=0;
    var prevy=0;
    window.addEventListener("mousemove",function(dets){
        xscale=gsap.utils.clamp(.8,1.2,dets.clientX-prevx);
        yscale=gsap.utils.clamp(.8,1.2,dets.clientY-prevy);

     prevx=dets.clientX;
     prevy=dets.clientY;

     mouseMove(xscale,yscale);
    })
};

function mouseMove(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector(".mini-circle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
};

FirstAnim();
CircleSmall();
mouseMove();


document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var diffrotate=0;

    elem.addEventListener("mousemove",function(dets){
        var diff=dets.clientY-elem.getBoundingClientRect().top;
        diffrotate=dets.clientX-rotate;
        rotate=dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top:diff,
            left:dets.clientX,
            rotate:gsap.utils.clamp(-20,20,diffrotate*0.5),
        })
    })

    elem.addEventListener("mouseleave",function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration:0.5,
        })
    })
})