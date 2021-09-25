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

        heroDescription.textContent = `Simply Delicous.`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ2pEZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ2pEdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsUUFBUTs7Ozs7O1VDekR2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDQTtBQUNNOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFhOztBQUVsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixrREFBYTtBQUMxQzs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFnQjtBQUM3QztBQUNBOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlcyBjb250YWN0IHBhZ2UuXG5cbmNvbnN0IGNvbnRhY3RQYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgICAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnLCAncHMnKTtcbiAgICAgICAgY29udGFjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcblxuICAgICAgICBjb250YWN0LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgICAgICAgY29udGFjdC5hcHBlbmRDaGlsZChib2R5KCkpO1xuXG4gICAgICAgIHJldHVybiBjb250YWN0O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1oZWFkZXInLCAnbXItdCcpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gYENvbnRhY3RgO1xuXG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcblxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChocik7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gYm9keSgpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGV0YWlscycsICdtci10Jyk7XG5cbiAgICAgICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IGBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTW9sZXN0aWFlIGVhIHRlbXBvcmlidXMgbW9sbGl0aWEgYWIsIGZ1Z2l0LCBkb2xvcmVzIGl1cmUgaWxsbyBpbnZlbnRvcmUgYXBlcmlhbSB1bmRlLmBcblxuICAgICAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYWRkcmVzcycpO1xuICAgICAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ21yLXQnKTtcbiAgICAgICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IGA0MjAgQnZsZCBTdHJlZXQgTEEsIExBIDEwMDE0YDtcblxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gICAgICAgIHJldHVybiBib2R5O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkOiBjcmVhdGVDb250YWN0LFxuICAgIH1cbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBjb250YWN0UGFnZSIsIi8vIENyZWF0ZXMgYSBob21lIHBhZ2UuXG5jb25zdCBob21lUGFnZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKSB7XG4gICAgICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICAgICAgICBoZXJvLmFwcGVuZENoaWxkKGNyZWF0ZUhlcm9MZWZ0KCkpO1xuICAgICAgICBoZXJvLmFwcGVuZENoaWxkKGNyZWF0ZUhlcm9SaWdodCgpKTtcblxuICAgICAgICByZXR1cm4gaGVybztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlSGVyb0xlZnQoKSB7XG4gICAgICAgIGNvbnN0IGhlcm9MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlcm9MZWZ0LmNsYXNzTGlzdC5hZGQoJ2hlcm8tc2VjdGlvbi1sZWZ0Jyk7XG5cbiAgICAgICAgY29uc3QgaGVyb0ltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGhlcm9JbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVyby1pbWctY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgaGVyb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBoZXJvSW1nLnNyYyA9IFwiLi9pbWFnZXMvaGVyby53ZWJwXCJcbiAgICAgICAgaGVyb0ltZy5hbHQgPSBcIkdvb2QgdGltZXMuXCJcblxuICAgICAgICBoZXJvSW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9JbWcpO1xuICAgICAgICBoZXJvTGVmdC5hcHBlbmRDaGlsZChoZXJvSW1nQ29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gaGVyb0xlZnQ7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhlcm9SaWdodCgpIHtcbiAgICAgICAgY29uc3QgaGVyb1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlcm9SaWdodC5jbGFzc0xpc3QuYWRkKCdoZXJvLXNlY3Rpb24tcmlnaHQnKTtcblxuICAgICAgICBjb25zdCBoZXJvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVyb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2hlcm8tZGVzY3JpcHRpb24nKTtcblxuICAgICAgICBjb25zdCBoZXJvRGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICBoZXJvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgU2ltcGx5IERlbGljb3VzLmA7XG5cbiAgICAgICAgaGVyb0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGhlcm9EZXNjcmlwdGlvblRleHQpO1xuICAgICAgICBoZXJvUmlnaHQuYXBwZW5kQ2hpbGQoaGVyb0Rlc2NyaXB0aW9uKTtcblxuICAgICAgICByZXR1cm4gaGVyb1JpZ2h0O1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZDogY3JlYXRlSG9tZVBhZ2UsXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZVBhZ2U7IiwiLy8gQ3JlYXRlcyBNZW51IFBhZ2VcbmNvbnN0IG1lbnVQYWdlID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScsICdwcycpO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIoKSk7XG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUxpc3QoKSk7XG5cbiAgICAgICAgcmV0dXJuIG1lbnU7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG1lbnVIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInLCAnbXItdCcpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ21lbnUnO1xuXG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICAgICAgaGVhZGluZy5hcHBlbmRDaGlsZChocilcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpXG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbWVudUxpc3QoKSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdtZW51LWxpc3QnLCAnbXItdCcpO1xuXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlzdC1jYXRlZ29yeScpO1xuXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNhdGVnb3J5SGVhZGluZy50ZXh0Q29udGVudCA9IGBDYXRlZ29yeWA7XG5cbiAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlIZWFkaW5nKTtcblxuICAgICAgICBjb25zdCBsaXN0RWxlbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgIGxpc3RFbGVtZW50cy5jbGFzc0xpc3QuYWRkKCdtci10Jyk7XG5cbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChjYXRlZ29yeSlcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0RWxlbWVudHMpO1xuXG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cbiAgICAvLyBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICAvLyAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG1haW4pO1xuICAgIC8vICAgICAvLyBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgLy8gICAgIC8vIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbiAgICAvLyB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZDogY3JlYXRlTWVudSxcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBtZW51UGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBob21lUGFnZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RcIjtcblxuY29uc3QgaW5pdCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaG9tZVBhZ2UubG9hZCgpKTtcblxuICAgIGZ1bmN0aW9uIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiBtYWluO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQ6IGdldE1haW4oKSxcbiAgICB9XG59KSgpO1xuXG5jb25zdCBuYXZCYXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgbWFpbiA9IGluaXQuZ2V0O1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1tZW51ID4gdWwgPiBsaScpO1xuXG4gICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdmlnYXRlKVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gbmF2aWdhdGUoZSkge1xuICAgICAgICBjb25zdCBsaW5rID0gZS50YXJnZXQuaWQ7XG5cbiAgICAgICAgaWYgKGxpbmsgPT09ICdtZW51Jykge1xuICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudVBhZ2UubG9hZCgpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobGluayA9PT0gJ2NvbnRhY3QnKSB7XG4gICAgICAgICAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0UGFnZS5sb2FkKCkpO1xuICAgICAgICB9O1xuICAgIH07XG5cbn0pKCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9