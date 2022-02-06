import { GenerateFooter, GenerateHeader, GenerateMain } from './Global';


const GenerateMenuPage = () => {
    /*
    * HEADER
    */
    let header = GenerateHeader();

    /*
    * MAIN
    */
    let main = GenerateMain();
    main.innerText = 'Menu Page';

    /*
    * FOOTER
    */
    let footer = GenerateFooter();

    return { header, main, footer };
}

export default GenerateMenuPage;