/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        const container = document.getElementById('content');
        const main = document.createElement('main');
        container.appendChild(main);

        main.appendChild(createHero());

        return container;
    };

    function createHero() {
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
        heroImg.src = "./images/photo-1611765083444-a3ce30f1c885.webp"
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


// homePage.load();

const navBar = (function () {
    const links = document.querySelectorAll('.nav-menu > ul > li');
    links.forEach(link => {
        link.addEventListener('click', navigate)
    });

    function navigate(e) {
        const link = e.target.id;
        if (link === 'menu') {
            // menuPage.load();
            console.log('load menu');
        }
        if (link === 'about') {
            // menuPage.load();
            console.log('load about');
        }
        if (link === 'contact') {
            // menuPage.load();
            console.log('load contact');
        }
    };

})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsUUFBUTs7Ozs7O1VDM0R2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlcyBhIGhvbWUgcGFnZS5cbmNvbnN0IGhvbWVQYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSGVybygpKTtcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIZXJvKCkge1xuICAgICAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgICAgICAgaGVyby5hcHBlbmRDaGlsZChjcmVhdGVIZXJvTGVmdCgpKTtcbiAgICAgICAgaGVyby5hcHBlbmRDaGlsZChjcmVhdGVIZXJvUmlnaHQoKSk7XG5cbiAgICAgICAgcmV0dXJuIGhlcm87XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhlcm9MZWZ0KCkge1xuICAgICAgICBjb25zdCBoZXJvTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZXJvTGVmdC5jbGFzc0xpc3QuYWRkKCdoZXJvLXNlY3Rpb24tbGVmdCcpO1xuXG4gICAgICAgIGNvbnN0IGhlcm9JbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBoZXJvSW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlcm8taW1nLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGhlcm9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaGVyb0ltZy5zcmMgPSBcIi4vaW1hZ2VzL3Bob3RvLTE2MTE3NjUwODM0NDQtYTNjZTMwZjFjODg1LndlYnBcIlxuICAgICAgICBoZXJvSW1nLmFsdCA9IFwiR29vZCB0aW1lcy5cIlxuXG4gICAgICAgIGhlcm9JbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVyb0ltZyk7XG4gICAgICAgIGhlcm9MZWZ0LmFwcGVuZENoaWxkKGhlcm9JbWdDb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiBoZXJvTGVmdDtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlSGVyb1JpZ2h0KCkge1xuICAgICAgICBjb25zdCBoZXJvUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVyb1JpZ2h0LmNsYXNzTGlzdC5hZGQoJ2hlcm8tc2VjdGlvbi1yaWdodCcpO1xuXG4gICAgICAgIGNvbnN0IGhlcm9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZXJvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaGVyby1kZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIGNvbnN0IGhlcm9EZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgIGhlcm9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBTaW1wbHkgRGVsaWNvdXMuYDtcblxuICAgICAgICBoZXJvRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaGVyb0Rlc2NyaXB0aW9uVGV4dCk7XG4gICAgICAgIGhlcm9SaWdodC5hcHBlbmRDaGlsZChoZXJvRGVzY3JpcHRpb24pO1xuXG4gICAgICAgIHJldHVybiBoZXJvUmlnaHQ7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkOiBjcmVhdGVIb21lUGFnZSxcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBob21lUGFnZSBmcm9tIFwiLi9ob21lXCI7XG5cbi8vIGhvbWVQYWdlLmxvYWQoKTtcblxuY29uc3QgbmF2QmFyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbWVudSA+IHVsID4gbGknKTtcbiAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmF2aWdhdGUpXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBuYXZpZ2F0ZShlKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgaWYgKGxpbmsgPT09ICdtZW51Jykge1xuICAgICAgICAgICAgLy8gbWVudVBhZ2UubG9hZCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvYWQgbWVudScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5rID09PSAnYWJvdXQnKSB7XG4gICAgICAgICAgICAvLyBtZW51UGFnZS5sb2FkKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9hZCBhYm91dCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5rID09PSAnY29udGFjdCcpIHtcbiAgICAgICAgICAgIC8vIG1lbnVQYWdlLmxvYWQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkIGNvbnRhY3QnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=