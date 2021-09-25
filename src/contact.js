// Creates contact page.

const contactPage = (function () {
    function createContact() {
        const contact = document.createElement('section');
        contact.classList.add('contact', 'ps');
        contact.setAttribute('id', 'contact');

        contact.appendChild(header());
        contact.appendChild(body());

        return contact;
    };

    function header() {
        const header = document.createElement('div');
        header.classList.add('contact-header', 'mr-t');

        const heading = document.createElement('h3');
        heading.textContent = `Contact`;

        const hr = document.createElement('hr');

        header.appendChild(heading);
        header.appendChild(hr);

        return header;
    };

    function body() {
        const body = document.createElement('div');
        body.classList.add('contact-details', 'mr-t');

        const para = document.createElement('p');
        para.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea temporibus mollitia ab, fugit, dolores iure illo inventore aperiam unde.`

        const address = document.createElement('address');
        address.classList.add('mr-t');
        address.textContent = `420 Bvld Street LA, LA 10014`;

        body.appendChild(para);
        body.appendChild(address);

        return body;
    }
    return {
        load: createContact,
    }
})();
export default contactPage