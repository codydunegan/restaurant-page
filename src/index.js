import './style.css';
import GenerateHomePage from './Home'
import GenerateMenuPage from './Menu';
import GenerateContactPage from './Contact';

const showHome = () => {
    let { header, main, footer } = GenerateHomePage();
    
    showPage(header, main, footer);
}

const showMenu = () => {
    let { header, main, footer } = GenerateMenuPage();
    
    showPage(header, main, footer);
}

const showContact = () => {
    let { header, main, footer } = GenerateContactPage();
    
    showPage(header, main, footer);
}

const showPage = (header, main, footer) => {
    content.innerText = '';
    
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);

    let homeBtn = document.querySelector("#homebtn");
    homeBtn.addEventListener('click', showHome);
    
    let menuBtn = document.querySelector("#menubtn");
    menuBtn.addEventListener('click', showMenu);
    
    let contactBtn = document.querySelector("#contactbtn");
    contactBtn.addEventListener('click', showContact);
}

let content = document.querySelector("#content");

showHome();