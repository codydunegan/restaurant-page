import Icon from './images/pexels-lisa-fotios-776538.jpg';
import { GenerateFooter, GenerateHeader, GenerateMain } from './Global';

const generateHourListItem = (day, hours) => {
    let li = document.createElement('li');
    li.innerText = hours;

    let strong = document.createElement('strong');
    strong.innerText = day;

    li.appendChild(strong);
    return li;
}

const GenerateHomePage = () => {
    /*
    * HEADER
    */
    let header = GenerateHeader();

    /*
    * MAIN
    */
    let main = GenerateMain();

    // imageheader section
    let imageHeader = document.createElement('section');
    imageHeader.id = 'imageheader';

    let interiorImg = document.createElement('div');
    interiorImg.id = 'interior-img';

    let image = document.createElement('img');
    image.src = Icon;
    image.alt = 'restaurant interior image';

    let imageH3 = document.createElement('h3');
    imageH3.innerText = 'Awesome Restaurant';

    interiorImg.appendChild(image);
    interiorImg.appendChild(imageH3);

    let hours = document.createElement('div');
    hours.id = 'hours';

    let hoursH3 = document.createElement('h3');
    hoursH3.innerText = 'Awesome Restaurant!';

    let list = document.createElement('ul');
    let li1 = generateHourListItem('Mon - Thurs', '12:00pm - 10:00pm');
    let li2 = generateHourListItem('Friday', '12:00pm - 12:00am');
    let li3 = generateHourListItem('Saturday', '10:00am - 12:00am');
    let li4 = generateHourListItem('Sunday', '8:00am - 10:00pm');

    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);
    list.appendChild(li4);

    hours.appendChild(hoursH3);
    hours.appendChild(list);

    imageHeader.appendChild(interiorImg);
    imageHeader.appendChild(hours);

    main.appendChild(imageHeader);

    // testimonials sections
    let testimonialH3 = document.createElement('h3');
    testimonialH3.innerText = 'Testimonials!';
    main.appendChild(testimonialH3);

    let testimonialsSection = document.createElement('section');
    testimonialsSection.id = 'testimonials';

    for (let i = 1; i <= 3; i++) {
        let quote = document.createElement('div');
        quote.classList.add('quote');

        let p = document.createElement('p');
        p.innerText = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec ultrices tincidunt arcu non sodales neque. Phasellus egestas tellus rutrum tellus pellentesque."';

        let span = document.createElement('span');
        span.innerText = ' - Some guy';

        quote.appendChild(p);
        quote.appendChild(span);

        testimonialsSection.appendChild(quote);
    }

    main.appendChild(testimonialsSection);

    /*
    * FOOTER
    */
    let footer = GenerateFooter();

    let imageCredit = document.createElement('span');
    imageCredit.innerText = 'pexels-lisa-fotios-776538.jpg by ';

    let link = document.createElement('a');
    link.href = 'https://www.pexels.com/photo/restaurant-interior-776538/';
    link.innerText = 'Lisa Fotios from Pexels';

    imageCredit.appendChild(link);
    footer.appendChild(imageCredit);

    return { header, main, footer };
}

export default GenerateHomePage;