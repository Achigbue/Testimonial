const testimonial = [
 {
    name: "Brunhilde S",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    text: "Heavy equipments is the next killer app. This is simply unbelievable! I don't always clop, but when I do, it's because of heavy equipments",
 },
 {
    name: "Sharl X",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80",
    text: "I will let my mum know about this, she could really make use of heavy equipments! Needless to say we are extremely satisfied with the results.",
 },
 {
    name: "Janessa U",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    text: "I will recommend you to my colleagues. I love heavy equipments. Wow what great service, I love it!",
 },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector('.text');
const usernameEl = document.querySelector('.username');

let idx = 0;

updateTestimonial()

function updateTestimonial() {
    const {name, photoUrl, text} =
    testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    setTimeout(()=>{
        updateTestimonial()
    }, 2000)
}