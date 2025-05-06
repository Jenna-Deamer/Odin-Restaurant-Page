import "./styles.css"
import {initialPageLoad} from "./initalPageLoad";
import { homePage } from "./home";
import { aboutPage } from "./about";
import { menuPage } from "./menu";

const content = document.querySelector('#content');

export const clearPage = () =>{
        // reset content to avoid duplicating content
        content.textContent = "";
}

const homeButton = document.querySelector('#homeBtn').addEventListener('click', homePage)
const menuButton = document.querySelector('#menuBtn').addEventListener('click', menuPage)
const aboutButton = document.querySelector('#aboutBtn').addEventListener('click', aboutPage)





