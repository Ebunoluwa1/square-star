//  import Typed from "/node_modules/typed.js/dist/typed.min.js";
const text = [
  'I am a <strong>Software Engineer</strong>.',
  'I <em>work</em> with React, JavaScript, and Node.js.',
  'I am dedicated to building high-quality software, crafting seamless and engaging user experiences that solve real-life problems and make people\'s lives easier.',
  'I like solving problems and bringing ideas to life through code.'
];

let textIndex = 0;
let charIndex = 0;
const speed = 100;
const eraseSpeed = 50;
const delayBetweenTexts = 1500; //pause before erasing
const typedElement = document.getElementById('typed-text');

function typeText() {
    if(charIndex < text[textIndex].length) {
        typedElement.innerHTML += text[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, speed);
    } else {
        setTimeout(eraseText, delayBetweenTexts);
    }
}

function eraseText() {
    //    typedElement.innerHTML='';
    // charIndex= 0;
    // textIndex = (textIndex + 1) % text.length;
    // setTimeout(typeText, speed)
 if(charIndex > 0){
    typedElement.innerHTML = text[textIndex].substring(0, charIndex - 4);
    charIndex--;
    setTimeout(eraseText,eraseSpeed);
 } else {
    textIndex = (textIndex + 1) % text.length
    setTimeout(typeText,speed);
 }
}

document.addEventListener('DOMContentLoaded', typeText);

// download cv 

  document.getElementById("downloadBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/12pJLGi7Ud0DjGfx5pqVjFsdrN4NqFkqj/view?usp=drive_link"; // Path to your CV
    link.download = "EBUNOLUWA'S_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  