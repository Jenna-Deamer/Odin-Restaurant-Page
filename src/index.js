import "./styles.css"
import {initialPageLoad} from "./initalPageLoad";
import { homePage } from "./home";
import { aboutPage } from "./about";
import { menuPage } from "./menu";

const content = document.querySelector('#content');

const buttons = document.querySelectorAll('.btn');
let activeButton = document.querySelector('.btn.active');

export const clearPage = () =>{
        // reset content to avoid duplicating content
        content.textContent = "";
}

const homeButton = document.querySelector('#homeBtn').addEventListener('click', homePage)
const menuButton = document.querySelector('#menuBtn').addEventListener('click', menuPage)
const aboutButton = document.querySelector('#aboutBtn').addEventListener('click', aboutPage)


// Switch active class to clicked button (starts on Home btn)
buttons.forEach(button => {
    button.addEventListener('click', () =>{
        if(activeButton){
            activeButton.classList.remove('active');
        }
        button.classList.add('active');
        activeButton = button;
    });
    
});


