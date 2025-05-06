import { clearPage } from ".";

const aboutPage = () => {
    clearPage();
    // remove bg img class
    content.classList.remove("background-image");

    const aboutHeading = document.createElement('h1');
    aboutHeading.textContent = "About Us"
    content.appendChild(aboutHeading);


    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    content.appendChild(aboutContainer);

    const aboutCopy = document.createElement('p');
    aboutCopy.textContent = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit.Quisque faucibus ex sapien vitae pellentesque sem placerat.In id cursus mi pretium tellus duis convallis.Tempus leo eu aenean sed diam urna tempor.Pulvinar vivamus fringilla lacus nec metus bibendum egestas.Iaculis massa nisl malesuada lacinia integer nunc posuere.Ut hendrerit semper vel class aptent taciti sociosqu.Ad litora torquent per conubia nostra inceptos himenaeos."
    aboutContainer.appendChild(aboutCopy);
};


export { aboutPage }