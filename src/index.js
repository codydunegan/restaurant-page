import './style.css';
import GenerateHomePage from './Home'


let content = document.querySelector("#content");

let { header, main, footer } = GenerateHomePage();

content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);
