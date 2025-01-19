const words = ["Developer", "Student", "Programmer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenWords = 1000;

const typingText = document.getElementById("typing-text");

function type() {
    if (i < words.length) {
        if (!isDeleting && j <= words[i].length) {
            currentWord = words[i].substring(0, j + 1);
            j++;
        } else if (isDeleting && j >= 0) {
            currentWord = words[i].substring(0, j - 1);
            j--;
        }

        typingText.textContent = currentWord;

        if (!isDeleting && j === words[i].length) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords);
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
        }
    }
}
type();

function navChange(para) {
    const element = document.getElementById(para);
    if (element) {
        element.style.color = "aliceblue";
        element.style.borderBottomColor = "brown";
    } else {
        console.warn(`Element with ID "${para}" not found.`);
    }
}

window.onload = () => {
    navChange("intro");
};





