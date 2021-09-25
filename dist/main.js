/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Creates a home page.
const homePage = (function () {
    function createHomePage() {
        const hero = document.createElement('section');
        hero.classList.add('hero');
        hero.appendChild(createHeroLeft());
        hero.appendChild(createHeroRight());

        return hero;
    };

    function createHeroLeft() {
        const heroLeft = document.createElement('div');
        heroLeft.classList.add('hero-section-left');

        const heroImgContainer = document.createElement('div')
        heroImgContainer.classList.add('hero-img-container');

        const heroImg = document.createElement('img');
        heroImg.src = "./images/hero.webp"
        heroImg.alt = "Good times."

        heroImgContainer.appendChild(heroImg);
        heroLeft.appendChild(heroImgContainer);

        return heroLeft;
    };

    function createHeroRight() {
        const heroRight = document.createElement('div');
        heroRight.classList.add('hero-section-right');

        const heroDescription = document.createElement('div');
        heroDescription.classList.add('hero-description');

        const heroDescriptionText = document.createElement('h1');

        heroDescription.textContent = `Simply Delicious.`;

        heroDescription.appendChild(heroDescriptionText);
        heroRight.appendChild(heroDescription);

        return heroRight;
    };
    return {
        load: createHomePage,
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const init = (function () {
    const container = document.getElementById('content');
    const main = document.createElement('main');
    main.classList.add('main')
    container.appendChild(main);
    main.appendChild(_home__WEBPACK_IMPORTED_MODULE_0__["default"].load());

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
            main.appendChild(_menu__WEBPACK_IMPORTED_MODULE_1__["default"].load());
        };

        if (link === 'contact') {
            main.innerHTML = '';
            main.appendChild(_contact__WEBPACK_IMPORTED_MODULE_2__["default"].load());
        };
    };

})();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ2pEZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ2pEdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsUUFBUTs7Ozs7O1VDekR2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDQTtBQUNNOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFhOztBQUVsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixrREFBYTtBQUMxQzs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFnQjtBQUM3QztBQUNBOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlcyBjb250YWN0IHBhZ2UuXG5cbmNvbnN0IGNvbnRhY3RQYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgICAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnLCAncHMnKTtcbiAgICAgICAgY29udGFjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcblxuICAgICAgICBjb250YWN0LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgICAgICAgY29udGFjdC5hcHBlbmRDaGlsZChib2R5KCkpO1xuXG4gICAgICAgIHJldHVybiBjb250YWN0O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1oZWFkZXInLCAnbXItdCcpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gYENvbnRhY3RgO1xuXG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcblxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChocik7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gYm9keSgpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGV0YWlscycsICdtci10Jyk7XG5cbiAgICAgICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IGBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTW9sZXN0aWFlIGVhIHRlbXBvcmlidXMgbW9sbGl0aWEgYWIsIGZ1Z2l0LCBkb2xvcmVzIGl1cmUgaWxsbyBpbnZlbnRvcmUgYXBlcmlhbSB1bmRlLmBcblxuICAgICAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYWRkcmVzcycpO1xuICAgICAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ21yLXQnKTtcbiAgICAgICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IGA0MjAgQnZsZCBTdHJlZXQgTEEsIExBIDEwMDE0YDtcblxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gICAgICAgIHJldHVybiBib2R5O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkOiBjcmVhdGVDb250YWN0LFxuICAgIH1cbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBjb250YWN0UGFnZSIsIi8vIENyZWF0ZXMgYSBob21lIHBhZ2UuXG5jb25zdCBob21lUGFnZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKSB7XG4gICAgICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICAgICAgICBoZXJvLmFwcGVuZENoaWxkKGNyZWF0ZUhlcm9MZWZ0KCkpO1xuICAgICAgICBoZXJvLmFwcGVuZENoaWxkKGNyZWF0ZUhlcm9SaWdodCgpKTtcblxuICAgICAgICByZXR1cm4gaGVybztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlSGVyb0xlZnQoKSB7XG4gICAgICAgIGNvbnN0IGhlcm9MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlcm9MZWZ0LmNsYXNzTGlzdC5hZGQoJ2hlcm8tc2VjdGlvbi1sZWZ0Jyk7XG5cbiAgICAgICAgY29uc3QgaGVyb0ltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGhlcm9JbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVyby1pbWctY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgaGVyb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBoZXJvSW1nLnNyYyA9IFwiLi9pbWFnZXMvaGVyby53ZWJwXCJcbiAgICAgICAgaGVyb0ltZy5hbHQgPSBcIkdvb2QgdGltZXMuXCJcblxuICAgICAgICBoZXJvSW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9JbWcpO1xuICAgICAgICBoZXJvTGVmdC5hcHBlbmRDaGlsZChoZXJvSW1nQ29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gaGVyb0xlZnQ7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhlcm9SaWdodCgpIHtcbiAgICAgICAgY29uc3QgaGVyb1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlcm9SaWdodC5jbGFzc0xpc3QuYWRkKCdoZXJvLXNlY3Rpb24tcmlnaHQnKTtcblxuICAgICAgICBjb25zdCBoZXJvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVyb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2hlcm8tZGVzY3JpcHRpb24nKTtcblxuICAgICAgICBjb25zdCBoZXJvRGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICBoZXJvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgU2ltcGx5IERlbGljaW91cy5gO1xuXG4gICAgICAgIGhlcm9EZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChoZXJvRGVzY3JpcHRpb25UZXh0KTtcbiAgICAgICAgaGVyb1JpZ2h0LmFwcGVuZENoaWxkKGhlcm9EZXNjcmlwdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGhlcm9SaWdodDtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWQ6IGNyZWF0ZUhvbWVQYWdlLFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlOyIsIi8vIENyZWF0ZXMgTWVudSBQYWdlXG5jb25zdCBtZW51UGFnZSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnLCAncHMnKTtcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChtZW51SGVhZGVyKCkpO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVMaXN0KCkpO1xuXG4gICAgICAgIHJldHVybiBtZW51O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBtZW51SGVhZGVyKCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJywgJ21yLXQnKTtcblxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdtZW51JztcblxuICAgICAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQoaHIpXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKVxuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG1lbnVMaXN0KCkge1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnbWVudS1saXN0JywgJ21yLXQnKTtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKCdtZW51LWxpc3QtY2F0ZWdvcnknKTtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjYXRlZ29yeUhlYWRpbmcudGV4dENvbnRlbnQgPSBgQ2F0ZWdvcnlgO1xuXG4gICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKGNhdGVnb3J5SGVhZGluZyk7XG5cbiAgICAgICAgY29uc3QgbGlzdEVsZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICBsaXN0RWxlbWVudHMuY2xhc3NMaXN0LmFkZCgnbXItdCcpO1xuXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnRzKTtcblxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG4gICAgLy8gZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgLy8gICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhtYWluKTtcbiAgICAvLyAgICAgLy8gbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIC8vICAgICAvLyBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gICAgLy8gfVxuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWQ6IGNyZWF0ZU1lbnUsXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IGluaXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhvbWVQYWdlLmxvYWQoKSk7XG5cbiAgICBmdW5jdGlvbiBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gbWFpbjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0OiBnZXRNYWluKCksXG4gICAgfVxufSkoKTtcblxuY29uc3QgbmF2QmFyID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IG1haW4gPSBpbml0LmdldDtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbWVudSA+IHVsID4gbGknKTtcblxuICAgIGxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuYXZpZ2F0ZSlcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG5hdmlnYXRlKGUpIHtcbiAgICAgICAgY29uc3QgbGluayA9IGUudGFyZ2V0LmlkO1xuXG4gICAgICAgIGlmIChsaW5rID09PSAnbWVudScpIHtcbiAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVQYWdlLmxvYWQoKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGxpbmsgPT09ICdjb250YWN0Jykge1xuICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdFBhZ2UubG9hZCgpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG59KSgpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==