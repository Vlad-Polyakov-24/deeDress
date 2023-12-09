const setStarsFill = () => {
    const starWrappers = document.querySelectorAll('[data-stars]');
    const html = `
        <li class="star">
            <span class="icon size-16">
                <svg>
                    <use xlink:href="assets/images/icons/sprites.svg#star"></use>
                </svg>
            </span>
        </li>
        <li class="star">
            <span class="icon size-16">
                <svg>
                    <use xlink:href="assets/images/icons/sprites.svg#star"></use>
                </svg>
            </span>
        </li>
        <li class="star">
            <span class="icon size-16">
                <svg>
                    <use xlink:href="assets/images/icons/sprites.svg#star"></use>
                </svg>
            </span>
        </li>
        <li class="star">
            <span class="icon size-16">
                <svg>
                    <use xlink:href="assets/images/icons/sprites.svg#star"></use>
                </svg>
            </span>
        </li>
        <li class="star">
            <span class="icon size-16">
                <svg>
                    <use xlink:href="assets/images/icons/sprites.svg#star"></use>
                </svg>
            </span>
        </li>
    `

    starWrappers.forEach(starsWrapper => {
        starsWrapper.insertAdjacentHTML("afterbegin", html);
        const num = starsWrapper.dataset.stars;
        const stars = starsWrapper.querySelectorAll('.star');

        stars.forEach((star, i) => {
            if (i < num) star.classList.add('active');
        });
    });
}

setStarsFill();
