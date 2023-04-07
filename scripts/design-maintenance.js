console.log("dm")
const video = document.querySelector('#video-background-mp4')
const proceedbtn = document.querySelector('#proceed-btn')
const nav = document.querySelector('#nav-login');

// console.log(distanceFromTop);
// window.addEventListener('scroll', () =>{
//     console.log("l")
//     const distanceFromTop = window.pageYOffset - document.documentElement.scrollTop;
//     console.log(distanceFromTop);
//     if (distanceFromTop > 100) {
//       nav.classList.add('dark');
//     } else {
//       nav.classList.remove('dark');
//     }
//   });

proceedbtn.addEventListener('click',()=>{
    video.play()
})
