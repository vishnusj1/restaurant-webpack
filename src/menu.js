// Creates Menu Page
const menuPage = (function () {

    function createMenu() {
        const menu = document.createElement('section');
        menu.classList.add('menu', 'ps');
        menu.appendChild(menuHeader());
        menu.appendChild(menuList());

        return menu;
    };

    function menuHeader() {
        const header = document.createElement('div');
        header.classList.add('menu-header', 'mr-t');

        const heading = document.createElement('h2');
        heading.textContent = 'menu';

        const hr = document.createElement('hr');
        heading.appendChild(hr)
        header.appendChild(heading)

        return header;
    };

    function menuList() {
        const list = document.createElement('div');
        list.classList.add('menu-list', 'mr-t');

        const category = document.createElement('div');
        category.classList.add('menu-list-category');

        const categoryHeading = document.createElement('h3');
        categoryHeading.textContent = `Category`;

        category.appendChild(categoryHeading);

        const listElements = document.createElement('ul')
        listElements.classList.add('mr-t');

        list.appendChild(category)
        list.appendChild(listElements);

        return list;
    }
    // function loadMenu() {
    //     const main = document.querySelector('.main');
    //     console.log(main);
    //     // main.textContent = '';
    //     // main.appendChild(createMenu());
    // }
    return {
        load: createMenu,
    }
})();

export default menuPage;