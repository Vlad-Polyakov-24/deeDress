const accordion = () => {
    const accordions = document.querySelectorAll('[data-accordion]');
    if (!accordions) return;

    const open = (item, content) => {
        item.dataset.accordionItem = 'open';
        requestAnimationFrame(() => content.style.setProperty('height', `${content.scrollHeight}px`));
        content.addEventListener('transitionend', () => {
            if (item.dataset.accordionItem !== 'close') content.style.setProperty('overflow', 'initial');
        }, {
            once: true,
        });
    };

    const close = (item, content) => {
        item.dataset.accordionItem = 'close';
        content.style.setProperty('height', `${content.scrollHeight}px`);
        requestAnimationFrame(() => content.style.setProperty('height', '0px'));
        requestAnimationFrame(() => content.style.setProperty('overflow', 'hidden'));
    };

    accordions.forEach((accordion) => {
        const items = accordion.querySelectorAll('[data-accordion-item]');

        items.forEach(item => {
            const trigger = item.querySelector('[data-accordion-trigger]');
            const accordionContent = item.querySelector('[data-accordion-content]');

            accordionContent.style.transition = '.4s';
            if (item.dataset.accordionItem !== 'open') close(item, accordionContent);

            trigger.addEventListener('click', () => {
                const contentClientHeight = accordionContent.clientHeight;

                contentClientHeight === 0
                    ? open(item, accordionContent)
                    : close(item, accordionContent);
            });
        });
    });
}

accordion();
