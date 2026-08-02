const words = [
"Penetration Tester",
"Ethical Hacker",
"Bug Bounty Learner",
"Cybersecurity Enthusiast"
];

let i = 0;
let j = 0;
let current = "";
let deleting = false;

function type() {

const typing = document.getElementById("typing");

if (!typing) return;

if (!deleting) {

current = words[i].substring(0, j++);
typing.textContent = current;

if (j > words[i].length) {

deleting = true;

setTimeout(type, 1500);

return;

}

} else {

current = words[i].substring(0, j--);

typing.textContent = current;

if (j === 0) {

deleting = false;

i = (i + 1) % words.length;

}

}

setTimeout(type, deleting ? 60 : 120);

}

type();
const sections = document.querySelectorAll(".hidden-section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});