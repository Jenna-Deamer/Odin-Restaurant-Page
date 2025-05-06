import "./styles.css"
const content = document.querySelector("#content");

// Home Content
const homeBanner = document.createElement('div');
const homeHeading = document.createElement('h1');
const homeSubHeading = document.createElement('h2');

homeBanner.id = 'home-banner';
homeHeading.textContent = 'Some Restaurant Name';
homeSubHeading.textContent = 'Some Super Awesome Restaurant Slogan!';

content.appendChild(homeBanner);
homeBanner.appendChild(homeHeading);
homeBanner.append(homeSubHeading);


