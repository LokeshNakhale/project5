// cursore making
var curs = document.querySelector("#cursor")
var cursBlur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
   curs.style.left=dets.x + 20+"px"
   curs.style.top=dets.y+"px"

   cursBlur.style.left=dets.x-150+"px"
   cursBlur.style.top=dets.y -150 +"px"
    
})
//  cursore hover effect on nav h4
var h4 = document.querySelectorAll("#nav h4,#page4 h2")
h4.forEach(function(e){
    console.log(e)
    e.addEventListener("mouseenter",function(){
        curs.style.scale=3
        curs.style.border="1px solid white"
        curs.style.backgroundColor="transparent"
        
    })
    e.addEventListener("mouseleave",function(){
        curs.style.scale=1
        curs.style.border="0px solid white"
        curs.style.backgroundColor="rgba(43, 255, 0, 0.473)"
        
    })
})



// scroll karne ke bad navbar me kyy changes aayenge
gsap.to("#nav",{
    backgroundColor:"black",
    color:"white",
    height:"90px",
    duration:1,
    delay:0.6,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -13%",
        end:"top -10",
        scrub:1
        
    }
}) 

// main tak  scroll scroll hone par background black ho jai ga
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -15%",
        end:"top -40%",
        scrub:2
        
    }
})
// scroll karne ke baad about us ki movement
gsap.from("#about img,#about-in",{
    y:700,
   x:1000,
    opacity:0,
    stagger:3,
    duration:6,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:3

    }
})
// scroll karen ke baad cards ko ky hoga
gsap.from(".card",{
   
   scale:0.8,
    opacity:0,
   
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:2

    }
})
// scroll hone ke bad hert ka animation change honga
gsap.from("#icon1",{
    x:-70,
    opacity:0,
    duration:4,
    scrollTrigger:{
        trigger:"#icon1",
        scroller:"body",
        start:"top 50%",
        end:"top 40%",
        scrub:2,
    }
})

gsap.from("#icon2",{
    x:70,
    opacity:0,
    duration:4,
    scrollTrigger:{
        trigger:"#icon1",
        scroller:"body",
        start:"top 50%",
        end:"top 40%",
        scrub:2,
    }
})
gsap.from("#page4 h1",{

})