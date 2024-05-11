const count=document.querySelector('.count')

setInterval(()=>{
    if(Number(count.innerHTML)<2023){
        count.innerHTML=Number(count.innerHTML)+1;
    }
},28);
gsap.fromTo(".count",{scale:.3},{scale:1,duration:1});
gsap.fromTo(".count",{scale:1},{scale:2.5,duration:1,opacity:0,delay:2});