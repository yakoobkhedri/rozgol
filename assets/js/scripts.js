// mobile menu

let nav = document.querySelector(' header nav');
let hamIcon = document.getElementById('hamIcon');
let overlay = document.getElementById('overlay');

hamIcon.addEventListener('click', function () {
  nav.classList.add('active');
  overlay.classList.add('show');
  overlay.addEventListener('click', function () {
    this.classList.remove('show');
    nav.classList.remove('active');
  })
})

// single product

let smallImg = Array.from(document.querySelectorAll('img[alt="small-img"]'));

smallImg.forEach((item) => {
  item.addEventListener('click', function () {
    smallImg.forEach((items) => { items.classList.remove('active') });
    item.classList.add('active');
    let smallImgSrc = item.src;
    let largeImg = document.getElementById('big-img');
    largeImg.src = smallImgSrc;
  })
})

// size
let size = Array.from(document.getElementsByClassName('size'));

size.forEach((item) => {
  item.addEventListener('click', function () {
    size.forEach((items) => { items.classList.remove('active') });
    item.classList.add('active');
  })
})

// swiper
var menuSwiper = new Swiper(".menuSwiper", {
  loop: true,
  autoplay: true,
  slidesPerView: 7,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    }
  },
});
var swiper = new Swiper(".banner", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
});
var swiper2 = new Swiper(".special-sale", {
  loop: true,
  autoplay: true,
  slidesPerView: 6,
  spaceBetween: 29,
  breakpoints: {
    400: {
      slidesPerView: 2
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    }
  }
});
var swiper3 = new Swiper(".card", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 29,
  breakpoints: {
    400: {
      slidesPerView: 2
    },
    576: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  }
});

// animation

ScrollReveal().reveal('.top', {
  duration: 2000,
  origin: 'top',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});

ScrollReveal().reveal('.left', {
  duration: 2000,
  origin: 'left',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});

// filter acardion

let filterBtn = Array.from(document.getElementsByClassName('filter-btn'));
let acardionContent = Array.from(document.getElementsByClassName('filter-content'));
let plus = Array.from(document.getElementsByClassName('plus'));
let mines = Array.from(document.getElementsByClassName('mines'));

filterBtn.forEach((item) => {
  item.addEventListener('click', function () {
    acardionContent.forEach((items) => { items.classList.remove('active') });
    mines.forEach((items) => { items.classList.remove('active') });
    plus.forEach((items) => { items.classList.add('active') });
    item.nextElementSibling.classList.add('active');
    item.querySelector('.mines').classList.add('active');
    item.querySelector('.plus').classList.remove('active');
  })
})

// remove compare product

let removeProduct = Array.from(document.querySelectorAll('.removeProduct'));

removeProduct.forEach((item) => {
  item.addEventListener('click', function () {
    item.parentElement.parentElement.parentElement.remove()
  })
})

// remove cart

let removeCart = Array.from(document.querySelectorAll('.remove-cart'));

removeCart.forEach((item) => {
  item.addEventListener('click', function () {
    item.parentElement.remove()
  })
})

// quantity

let increase = Array.from(document.getElementsByClassName('increase'));
let decrease = Array.from(document.getElementsByClassName('decrease'));
let quantity = Array.from(document.getElementsByClassName('quantity'));

// fancybox

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// profile

let profileMenu = Array.from(document.querySelectorAll('.profileMenu li'));
let AccountDetails = document.getElementById('AccountDetails');
let profileMenuContent = Array.from(document.querySelectorAll('.profileMenuContent > div'));
let orderTab=Array.from(document.getElementsByClassName('orderTab'));
let orderContent = Array.from(document.querySelectorAll('.orderContent > div'));
let listTab=Array.from(document.getElementsByClassName('listTab'));
let listTabContent = Array.from(document.querySelectorAll('.listTabContent > div'));
let commentTab=Array.from(document.getElementsByClassName('commentTab'));
let commentContent = Array.from(document.querySelectorAll('.commentContent > div'));
let notifTabs = Array.from(document.querySelectorAll('.notifTabs > span'));
let notifTabsContent = Array.from(document.querySelectorAll('.notifTabsContent > div'));
let suggest=Array.from(document.querySelectorAll('.suggest > div'));


  AccountDetails.addEventListener('click', function () {
    profileMenu.forEach((tabs) => { tabs.classList.remove('active') });
    let tabId = AccountDetails.dataset.id;
    profileMenuContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    })
  });

profileMenu.forEach((tab) => {
  tab.addEventListener('click', function () {
    profileMenu.forEach((tabs) => { tabs.classList.remove('active') });
    tab.classList.add('active');
    let tabId = tab.dataset.id;
    profileMenuContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    })
  })
});

orderTab.forEach((tab) => {
  tab.addEventListener('click', function () {
    orderTab.forEach((tabs) => { tabs.classList.remove('active') });
    tab.classList.add('active');
    let tabId = tab.dataset.id;
    orderContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    })
  })
});

listTab.forEach((tab) => {
  tab.addEventListener('click', function () {
    listTab.forEach((tabs) => { tabs.classList.remove('active') });
    tab.classList.add('active');
    let tabId = tab.dataset.id;
    listTabContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    })
  })
});

commentTab.forEach((tab) => {
  tab.addEventListener('click', function () {
    commentTab.forEach((tabs) => { tabs.classList.remove('active') });
    tab.classList.add('active');
    let tabId = tab.dataset.id;
    commentContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    })
  })
});

notifTabs.forEach((tab) => {
  tab.addEventListener('click', function () {
    notifTabs.forEach((tabs) => { tabs.classList.remove('active') });
    tab.classList.add('active');
    let tabId = tab.dataset.id;
    notifTabsContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    })
  })
});

suggest.forEach((tab) => {
  tab.addEventListener('click', function () {
    suggest.forEach((tabs) => { tabs.classList.remove('active') });
    tab.classList.add('active');
  })
});