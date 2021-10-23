// "use strict"

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerSearchBar = $('.header-main__search-bar-default');
const headerSeachOptions = $('#header-main__search-options');
const headerSearchItems = $$('.header-main__search-options li');


// Choose header search bar
var isHeaderSearch = false;
if (headerSearchBar) {
    headerSearchBar.onclick = function() {
        headerSeachOptions.classList.add('actived');
        isHeaderSearch = true;
    }
}

if (isHeaderSearch) {
    document.onclick = function() {
        headerSeachOptions.classList.remove('actived')
        isHeaderSearch = false;
    }
}

headerSearchItems.forEach((item, index) => {
    item.onclick = function() {
        headerSearchBar.textContent = item.textContent;
        headerSeachOptions.classList.remove('actived');
    
        isHeaderSearch = false;
    }
})



const headerNavOverlay = $$('.header-nav__overlay');
const headerNavMenu = $('.header-nav__menu');

// Show header nav menu (PC)
function openHeaderNavMenu() {
    headerNavOverlay[0].style.display = 'block';
    headerNavMenu.classList.add('actived');
}
function closeHeaderNavMenu() {
    headerNavOverlay[0].style.display = 'none';
    headerNavMenu.classList.remove('actived');
}
// auto close header nav menu when overlays was clicked
headerNavOverlay.forEach(navOverlay => {
    navOverlay.onclick = function() {
        navOverlay.style.display = 'none';
        headerNavMenu.classList.remove('actived');
        tabletNavMenu.classList.remove('actived');
    }
})

// Show tablet header nav
const tabletNavMenu = $('.header-nav-tablet__lists')
function openTabletMenu() {
    headerNavOverlay[1].style.display = 'block';
    tabletNavMenu.classList.add('actived')
}
function closeTabletMenu() {
    headerNavOverlay[1].style.display = 'none';
    tabletNavMenu.classList.remove('actived')
}


if ($$('.tour__img')) {
    var slideIndex = 0;
    showPic(slideIndex);
    
    function plusPic(n) {
        showPic(slideIndex += n);
    }
    
    function currentBadge(n) {
        showPic(slideIndex = n);
    }
    
    function showPic(n) {
        var tourPics = $$('.tour__img');
        var badges = $$('.badge');
    
        if (n > tourPics.length) slideIndex = 1;
        if (n < 1) slideIndex = tourPics.length - 1;
        for (let i = 0; i < tourPics.length; i++) {
            tourPics[i].style.display = 'none';
        }
        for (let i = 0; i < badges.length; i++) {
            badges[i].classList.remove('actived');
        }
        badges[slideIndex - 1].classList.add('actived')
        tourPics[slideIndex - 1].style.display = 'block';
    }
}



// 
// function createStorage(key) {
//     const store = JSON.parse(localStorage.getItem(key)) ?? {}

//     const save = function() {
//         localStorage.setItem(key, JSON.stringify(store))
//     }

//     return {
//         get(key) {
//             return store[key]
//         },
//         set(key, value) {
//             store[key] = value;
//             save();
//         },
//         remove(key) {
//             delete store[key];
//             save();
//         },
//     }
// }

// const profileSetting = createStorage('profile_setting');