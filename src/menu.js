import { clearPage } from ".";
import chickenImage from './images/chicken.jpg';
import saladImage from './images/salad.jpg';
import steakImage from './images/steak.jpg';
import tacosImage from './images/tacos.jpg';
import burgerImage from './images/burger.jpg';
import pastaImage from './images/pasta.jpg';

class menuItem {
    constructor(title, img, price, desc) {
        this.title = title,
            this.img = img,
            this.price = price,
            this.desc = desc
    }
};
const menuArray = [];
// create 3 menu items
let menuItem1 = new menuItem("Chicken", chickenImage, "20.99", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")
let menuItem2 = new menuItem("Salad", saladImage, "15.99", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")
let menuItem3 = new menuItem("Steak", steakImage, "50.99", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")
let menuItem4 = new menuItem("Tacos", tacosImage, "10.99", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")
let menuItem5 = new menuItem("Burger", burgerImage, "10.99", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")
let menuItem6 = new menuItem("Pasta", pastaImage, "22.99", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")

menuArray.push(menuItem1, menuItem2, menuItem3, menuItem4, menuItem5, menuItem6);

const menuPage = () => {
    clearPage();
    // remove bg img class
    content.classList.remove("background-image");
    
    const menuHeading = document.createElement('h1');
    menuHeading.textContent = "Our Menu";
    content.appendChild(menuHeading);

    const menu = document.createElement('div');
    menu.classList.add('menu-grid');
    content.appendChild(menu);

    menu.textContent = '';
    for (let i = 0; i < menuArray.length; i++) {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        const menuContent = `<div class='menu-card'>
        <div class="menu-card-title"> <h3>${menuArray[i].title}</h3>
          <p>$${menuArray[i].price}</p></div>
     
      <img src=${menuArray[i].img}>
      <div class="menu-card-body">
        <p>${menuArray[i].desc}</p>
      </div>
        
  
      </div>`

        menu.innerHTML += menuContent;
    }

};



export { menuPage }