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

export default homePage;