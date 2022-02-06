const GenerateHeader = () => {
    let header = document.createElement('header');
    
    let logo = document.createElement('div');
    logo.id = 'logo';
    logo.innerText = 'Awesome Restaurant';

    let nav = document.createElement('nav');

    let homeBtn = document.createElement('button');
    homeBtn.id = "homebtn";
    homeBtn.innerText = "Home";

    let menuBtn = document.createElement('button');
    menuBtn.id = "menubtn";
    menuBtn.innerText = "Menu";

    let contactBtn = document.createElement('button');
    contactBtn.id = "contactbtn";
    contactBtn.innerText = "Contact";

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    header.appendChild(logo);
    header.appendChild(nav);

    return header;
}

let GenerateMain = () => {
    let main = document.createElement('main');

    return main;
}

let GenerateFooter = () => {
    let footer = document.createElement('footer');

    return footer;
}

export {
    GenerateHeader,
    GenerateMain,
    GenerateFooter
}