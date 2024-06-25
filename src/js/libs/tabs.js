function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSelector),
          contents = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        contents.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        contents[i].style.display = display;
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', e => {
        const target = e.target;
        if (target.classList.contains(tabSelector.replace(/\./, '')) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tabs.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}


tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'active');
tabs('.tabs-currency__header', '.tabs-currency__header-item', '.tabs-currency__content-item', 'active');
tabs('.tabs__header2', '.tabs__header-item2', '.tabs__content-item2', 'active');
tabs('.tabs__header3', '.tabs__header-item3', '.tabs__content-item3', 'active');
tabs('.tabs__header4', '.tabs__header-item4', '.tabs__content-item4', 'active');


const tabHeader = document.querySelector('.tabs__header');
const tabItems = document.querySelectorAll('.tabs__header-item');
const tabsContent = document.querySelectorAll('.tabs__content');
