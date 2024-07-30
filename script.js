const navbarStatus = document.querySelector('#res_nav_ul');
const menuIcon = document.querySelector('#menu_icon');
const crossImg = document.querySelector("#crossImg");

menuIcon.addEventListener("click",function(){
    
    navbarStatus.style.display = "block";
   


});


crossImg.addEventListener("click", ()=>{
    // console.log("hello");
    
    navbarStatus.style.display = "none";
   



})






function mouseEffectPage1 (){
let page1Content = document.querySelector("#content");
let cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function(e){
    // cursor.style.left = e.x +"px" 
    // cursor.style.top = e.y +"px" 

    gsap.to (cursor,{
        x:e.x,
        y:e.y,
    })
    
})

gsap.to(cursor,{
    scale:0,
    opacity:0 
})

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1 
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})


}
mouseEffectPage1();







let TL = gsap.timeline({scrollTrigger:{
    trigger:"#page4",
    start:"60% 60%",
    end:"100% 50%",
    scrub:2,
    pin:true,
    // markers:true
}})

TL
.to("#top",{
    top:"-50%",
}, "a")

.to("#bottom",{
    bottom:"-50%",
},"a")
.to("#t-t",{
    top:"80%"
},"a")
.to("#b-t",{
    bottom:"-80%"
},"a")
// .from("#center > h2 ",{
//     y:500,
    
// },"a")


const formButton = document.querySelector("#button");
const formName = document.querySelector("#name_input");
const formEmail = document.querySelector("#email_input");
const formMessage = document.querySelector("#message_input");
const result = document.querySelector("#result");

formName.addEventListener("click",(e)=>{
    e.preventDefault();
    formName.focus();

})
formEmail.addEventListener("click",(e)=>{
    e.preventDefault();
    formEmail.focus();

})
formMessage.addEventListener("click",(e)=>{
    e.preventDefault();
    formMessage.focus();

})



// formButton.addEventListener('click',(e)=>{
//     e.preventDefault();
//     if(formName.value ===""||formEmail.value ===""||formMessage.value ===""){
//         result.innerHTML="Enter Data First !!!!!!"
//         result.style.color="red"
//         result.style.display = "block"
//         const check = setTimeout(()=>{

//             result.style.display = "none";



//         },5000)
//         check();

//     }
//     else{
//         result.innerHTML="Data Submitted Successfully !!!!!"
//         result.style.color="#00ff51"
//         result.style.display = "block"
        
//         const dataClear = setTimeout(()=>{
//             formName.value = "";
//             formEmail.value = "";
//             formMessage.value = "";

//             result.style.display = "none";



//         },5000)
//         dataClear();

//     }
    
    
    


// });




var tl = gsap.timeline();
tl.from("#navbar>h2 ,#nav_ul>li,#menu_icon",{
    y:-100,
    duration:1,
    opacity: 0,
    stagger:0.3

})
tl.from("#content>img",{
    // y:-100,
    duration:1,
    opacity: 0,
    stagger:0.3

})

tl.from("#leftelement>h1",{
    duration:2,
    opacity: 0,
    stagger:0.3

})

tl.from("#leftelement>p",{
    x:-100,
    duration:1,
    opacity: 0,
    stagger:0.3

})





// page 2


gsap.from("#heading_page2>h1",{
    y:100,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"#heading_page2>h1",
        start:"50% 50%",
        end: "70% 50%",
        // scrub:2,
        
        // markers:true
    }


})

gsap.from(".part1>p,.part2>p",{
    y:100,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:".part1>p,.part2>p",
        start:"-20% 50%",
        end: "100% 50%",
        // scrub:2,
        
        // markers:true
    }


})
gsap.from("#img1_page2,#img2_page2",{
    // y:300,
    opacity:-3,
    duration:3,
    // stagger:0.3,
    dealy:2,
    scrollTrigger:{
        trigger:"#img1_page2,#img2_page2",
        start:"-50% 50%",
        end: "70% 50%",
        // scrub:2,
        
        // markers:true
    }


})



// page3


gsap.from("#leftContent>h1,.card",{
    y:100,
    duration:1,
    opacity: 0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#leftContent>h1,.card",
        start:"50% 50%",
        end: "70% 50%",
        // scrub:2,
        
        // markers:true
    }

})

gsap.from("#rightContent > video",{
    y:100,
    duration:3,
    opacity: 0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#rightContent > video",
        start:"-20% 50%",
        end: "100% 50%",
        // scrub:2,
        
        // markers:true
    }

})
gsap.from("#container",{
    y:100,
    duration:3,
    opacity: 0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#container",
        start:"-530% 50%",
        end: "-520% 50%",
        // scrub:2,
        
        // markers:true
    }

})



// page4






gsap.from("#top>h1",{
    y:-100,
    duration:3,
    opacity: 0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#top>h1",
        start:"-530% 50%",
        end: "-520% 50%",
        // scrub:2,
        
        // markers:true
    }

})
gsap.from("#bottom>h1",{
    y:100,
    duration:3,
    opacity: 0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#top>h1",
        start:"-530% 50%",
        end: "-520% 50%",
        // scrub:2,
        
        // markers:true
    }

})
gsap.from("#text_page4>p",{
    // y:500,
    duration:3,
    opacity: 0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#center>p",
        start:"0% 50%",
        end: "-40% 50%",
        // scrub:2,
        
        // markers:true
    }

})