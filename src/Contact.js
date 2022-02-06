import { GenerateFooter, GenerateHeader, GenerateMain } from './Global';


const GenerateContactPage = () => {
    /*
    * HEADER
    */
    let header = GenerateHeader();

    /*
    * MAIN
    */
    let main = GenerateMain();
    main.innerText = 'Contact Page';

    /*
    * FOOTER
    */
    let footer = GenerateFooter();

    return { header, main, footer };
}

export default GenerateContactPage;