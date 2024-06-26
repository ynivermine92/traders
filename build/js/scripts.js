
// Custom Scripts
function updatePriceRange() {

  const minPrice = document.getElementById('min-price').value;
  const maxPrice = document.getElementById('max-price').value;

  document.getElementById('min-price-display').innerText = `${minPrice}`;
  document.getElementById('max-price-display').innerText = `${maxPrice}`;

  const minValue = 1.0762;
  const maxValue = 1.0810;

  const minProgress = ((minPrice - minValue) / (maxValue - minValue)) * 100;
  const maxProgress = ((maxPrice - minValue) / (maxValue - minValue)) * 100;

  const minProgressBar = document.getElementById('progress-bar-inner');
  const maxProgressBar = document.getElementById('progress-wrapper-inner');

  minProgressBar.style.width = `${minProgress}%`;
  minProgressBar.style.backgroundColor = '#539100';

  maxProgressBar.style.width = `${maxProgress}%`;
  maxProgressBar.style.backgroundColor = '#CC5249';
}


updatePriceRange();




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

document.addEventListener('DOMContentLoaded', function() {
    function setupSelector(selectorId, cardClass) {
        const select = document.getElementById(selectorId);
        const cards = document.querySelectorAll(cardClass);

        function showSelectedCard() {
            const selectedValue = select.value;
            cards.forEach(function(card) {
                if (card.id === selectedValue) {
                    card.classList.add('active');
                    card.style.display = 'block'; 
                } else {
                    card.classList.remove('active');
                    card.style.display = 'none'; 
                }
            });
        }


        select.addEventListener('change', showSelectedCard);


        cards.forEach(card => card.style.display = 'none'); 
        const firstCard = document.getElementById(select.value);
        if (firstCard) {
            firstCard.style.display = 'block';
        }
    }


    setupSelector('card-selector', '.card');

    setupSelector('card-selector2', '.card2');
});

// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()






﻿
class DynamicAdapt {
  constructor(type) {
    this.type = type;
  }
  init() {
    this.оbjects = [];
    this.daClassname = '_dynamic_adapt_';
    this.nodes = [...document.querySelectorAll('[data-da]')];

    this.nodes.forEach((node) => {
      const data = node.dataset.da.trim();
      const dataArray = data.split(',');
      const оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
      оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
    });

    this.arraySort(this.оbjects);

    this.mediaQueries = this.оbjects
      .map(
        ({ breakpoint }) =>
          `(${this.type}-width: ${breakpoint}px),${breakpoint}`
      )
      .filter((item, index, self) => self.indexOf(item) === index);


    this.mediaQueries.forEach((media) => {
      const mediaSplit = media.split(',');
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];

      const оbjectsFilter = this.оbjects.filter(
        ({ breakpoint }) => breakpoint === mediaBreakpoint
      );
      matchMedia.addEventListener('change', () => {
        this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
    });
  }
 
  mediaHandler(matchMedia, оbjects) {
    if (matchMedia.matches) {
      оbjects.forEach((оbject) => {
        this.moveTo(оbject.place, оbject.element, оbject.destination);
      });
    } else {
      оbjects.forEach(({ parent, element, index }) => {
        if (element.classList.contains(this.daClassname)) {
          this.moveBack(parent, element, index);
        }
      });
    }
  }

  moveTo(place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
      destination.append(element);
      return;
    }
    if (place === 'first') {
      destination.prepend(element);
      return;
    }
    destination.children[place].before(element);
  }

  moveBack(parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
      parent.children[index].before(element);
    } else {
      parent.append(element);
    }
  }

  indexInParent(parent, element) {
    return [...parent.children].indexOf(element);
  }

  arraySort(arr) {
    if (this.type === 'min') {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }
          if (a.place === 'first' || b.place === 'last') {
            return -1;
          }
          if (a.place === 'last' || b.place === 'first') {
            return 1;
          }
          return 0;
        }
        return a.breakpoint - b.breakpoint;
      });
    } else {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }
          if (a.place === 'first' || b.place === 'last') {
            return 1;
          }
          if (a.place === 'last' || b.place === 'first') {
            return -1;
          }
          return 0;
        }
        return b.breakpoint - a.breakpoint;
      });
      return;
    }
  }
}
const da = new DynamicAdapt('max');
da.init();




