import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";

const init = (function () {
    const container = document.getElementById('content');
    const main = document.createElement('main');
    main.classList.add('main')
    container.appendChild(main);
    main.appendChild(homePage.load());

    function getMain() {
        return main;
    };

    return {
        get: getMain(),
    }
})();

const navBar = (function () {

    const main = init.get;
    const links = document.querySelectorAll('.nav-menu > ul > li');

    links.forEach(link => {
        link.addEventListener('click', navigate)
    });

    function navigate(e) {
        const link = e.target.id;

        if (link === 'menu') {
            main.innerHTML = '';
            main.appendChild(menuPage.load());
        };

        if (link === 'contact') {
            main.innerHTML = '';
            main.appendChild(contactPage.load());
        };
    };

})();


