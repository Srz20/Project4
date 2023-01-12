const header= document.querySelector('.header1')
fetch('header.html').then(res=>res.text()).then(data=>{
header.innerHTML=data
})


const foot= document.querySelector('.footer1')
fetch('footer.html').then(res=>res.text()).then(data=>{
foot.innerHTML=data
})