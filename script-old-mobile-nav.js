let ifMouseEnter = "mouseenter";
if (
  /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  ifMouseEnter = "click";
}

if (document.querySelector("#logo")) {
    document.querySelector("#logo").addEventListener("click", e => {
        window.location.href = "index.html"; 
    }); 
} 

let phoneNumberEl = document.querySelectorAll(".phone-number"); 
if (phoneNumberEl) {
    phoneNumberEl.forEach(el => {
        el.addEventListener("click", e => {
            updateClipboard("0000000"); // assumes copying was successful  
            e.target.classList.add("success"); 
            window.setTimeout(() => {
                e.target.classList.remove("success"); 
            }, 3000); 
        }); 
    }); 
}
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard 
function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(function() {
      /* clipboard successfully set */
      // return "success"; // I'd rather these not be css class names but instead a boolean value  
    }, function() {
      /* clipboard write failed */
      // return "danger"; 
    });
  }

// About Handle bookings Opening times Location Menus
let hamburger = document.querySelector("#navbar-hamburger");
let hamburgerLinks = [];
if (document.querySelector("#home-page")) {
    /* 
  hamburgerLinks = [
    "Menus",
    "Location & Opening times",
    // "Opening times",
    "Handle bookings",
    "About"
  ];
  */ 
  hamburgerLinks = [
    "Menus",
    "Location & Opening times",
    "Handle bookings",
    "About"
  ];
  handleMobileNav(hamburgerLinks, 2); 
  /* 
    there are 3 scrollable links but JS arrays start from 0 hence the scrollableLinks parameter is 2 
  */ 
} 
if (document.querySelector("#about-page")) {
  hamburgerLinks = [
    "Restaurant",
    "Staff",
    "Handle bookings",
    "About"
  ];
  handleMobileNav(hamburgerLinks, 1); 
} 
if (document.querySelector("#handle-bookings-page")) {
  hamburgerLinks = [
    "Make a booking",
    "Your bookings",
    "Handle bookings",
    "About"
  ];
  handleMobileNav(hamburgerLinks, 1); 
} 

function handleMobileNav(hamburgerLinks, scrollableLinks) {
    let mobileNav = document.querySelector("#mobile-nav");
    hamburger.addEventListener("click", (e) => {
    mobileNav.classList.toggle("display");
    mobileNav.innerHTML = "";
    hamburgerLinks.forEach((link, index) => {
        if (index <= scrollableLinks) {
            if (link == "Location & Opening times") {
                mobileNav.innerHTML += `<a class="animated fadeIn navbar-item" data-can-scroll="true" href="#location">${link}</a>`; 
            } else {
                mobileNav.innerHTML += `<a class="animated fadeIn navbar-item" data-can-scroll="true" href="#${link.replace(/ /g, "-").toLowerCase()}">${link}</a>`; 
            }
        } else {
            mobileNav.innerHTML += `<a class="animated fadeIn navbar-item" data-can-scroll="false" href="#${link.replace(/ /g, "-").toLowerCase()}">${link}</a>`; 
            console.log(link); 
        }
        mobileNav.querySelectorAll("a").forEach((a) => {
            a.addEventListener("click", (e) => {
                e.preventDefault(); 
                // console.log(e.target); 
                if (e.target.dataset.canScroll == "false") {
                    console.log("redirecting"); 
                    console.log(e.target); 
                }
                // console.log(e.target.innerText); 
                if (e.target.dataset.canScroll == "true") {
                    let element = document.getElementById(e.target.href.split("#")[1]); 
                    if (element) {
                        element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "nearest"
                        });
                    }
                    }
                });
            });
        });
    });
} 

document.querySelectorAll(".navbar-item").forEach((a) => {
  a.addEventListener("click", (e) => {
    if (!e.target.classList.value.includes("fa")) {
      e.preventDefault();
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    if (e.target.dataset.canScroll == "false") {
        window.location.href = e.target.href; 
    }
    if (e.target.dataset.canScroll == "true") {
        let element = document.getElementById(e.target.href.split("#")[1]);
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }        
    }
  });
});

let imagesPath = "./images/";
let startersTab = document.querySelector("#starters-tab button");
let mainsTab = document.querySelector("#mains-tab button");
let desertsTab = document.querySelector("#deserts-tab button");
let tabs = [startersTab, mainsTab, desertsTab];
let menu = document.querySelector("#menu");
let startersHTML = `
        <div class="animated fadeIn">
            <div class="heading">
                <h1 class="title">Starters</h1>
                </div> 
                <div class="food-item" id="food-item">
                    <div class="name-and-price columns">
                        <div class="column name"><strong>Food name</strong></div>
                                <div class="column price is-pulled-right"><strong>£20</strong></div>
                                </div>                    
                                <div class="description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, libero?</p>
                                    </div> 
                        </div>
                        <div class="food-item" id="food-item">
                            <div class="name-and-price columns">
                                <div class="column name" id="menu-name"><strong>Food name</strong></div>
                                <div class="column price is-pulled-right"><strong>£20</strong></div>
                                </div>                    
                                <div class="description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, libero?</p>
                                    </div> 
                        </div>
                        <div class="food-item" id="food-item">
                            <div class="name-and-price columns">
                                <div class="column name" id="menu-name"><strong>Food name</strong></div>
                                <div class="column price is-pulled-right"><strong>£20</strong></div>
                            </div>                    
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, libero?</p>
                                </div> 
                        </div>
                        </div>                
                        `;
let desertsHTML = `
        <div class="animated fadeIn">
            <div class="heading">
                <h1 class="title">Deserts</h1>
                </div> 
                <div class="food-item" id="food-item">
                    <div class="name-and-price columns">
                        <div class="column name" id="menu-name"><strong>Food name</strong></div>
                        <div class="column price is-pulled-right"><strong>£20</strong></div>
                        </div>                    
                        <div class="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, libero?</p>
                            </div> 
                            </div>
                            <div class="food-item" id="food-item">
                                <div class="name-and-price columns">
                                    <div class="column name" id="menu-name"><strong>Food name</strong></div>
                                    <div class="column price is-pulled-right"><strong>£20</strong></div>
                                    </div>                    
                                    <div class="description">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, libero?</p>
                                        </div> 
                                        </div>
                                        <div class="food-item" id="food-item">
                                            <div class="name-and-price columns">
                                                <div class="column name" id="menu-name"><strong>Food name</strong></div>
                                <div class="column price is-pulled-right"><strong>£20</strong></div>
                                </div>                    
                                <div class="description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, libero?</p>
                            </div> 
                            </div>
                    </div>                
                    `;
let mainsHTML = `
        <div class="animated fadeIn">
            <div class="heading">
                <h1 class="title">Mains</h1>
            </div> 
            <div class="food-item" id="food-item">
                <div class="name-and-price columns">
                    <div class="column name"><strong>Food name</strong></div>
                    <div class="column price is-pulled-right"><strong>£20</strong></div>
                    </div>                    
                    <div class="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, libero?</p>
                        </div> 
                        </div>
                        <div class="food-item" id="food-item">
                            <div class="name-and-price columns">
                                <div class="column name" id="menu-name"><strong>Food name</strong></div>
                                <div class="column price is-pulled-right"><strong>£20</strong></div>
                                </div>                    
                                <div class="description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, libero?</p>
                                    </div> 
            </div>
            <div class="food-item" id="food-item">
                <div class="name-and-price columns">
                    <div class="column name" id="menu-name"><strong>Food name starter</strong></div>
                    <div class="column price is-pulled-right"><strong>£20</strong></div>
                    </div>                    
                    <div class="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, libero?</p>
                    </div> 
                    </div>
                    </div>                
                    `;

if (menu) {
  menu.innerHTML = startersHTML;
}

tabs.forEach((tab) => {
  if (tab) {
    tab.addEventListener(ifMouseEnter, (e) => {
      console.log(e.target.innerText);
      // display appropriate menu
      // note: #menu-name is unlikely to be used
      // note: I do not like using classes in JS but in this it seems most appropriate
      switch (e.target.innerText.toLowerCase()) {
        case "starters":
          menu.innerHTML = startersHTML;
          handleMenuImageOnItemHover(); // note comfortable with this function's name
          break;
        case "mains":
          menu.innerHTML = mainsHTML;
          handleMenuImageOnItemHover(); // note comfortable with this function's name
          break;
        case "deserts":
          menu.innerHTML = desertsHTML;
          handleMenuImageOnItemHover(); // note comfortable with this function's name
          break;
        default:
          // menu.innerHTML = "def";
          return;
      }
    });
  }
});
handleMenuImageOnItemHover(); // note comfortable with this function's name

function handleMenuImageOnItemHover() {
  let menuFoodItems = document.querySelectorAll(".menu .food-item");
  if (menuFoodItems) {
    menuFoodItems.forEach((menuFoodItems) =>
      menuFoodItems.addEventListener(ifMouseEnter, (e) => {
        if (e.target.querySelector(".name strong")) {
          let menuName = e.target
            .querySelector(".name strong")
            .innerText.replace(/ /g, "-")
            .toLowerCase();
          if (menuName) {
            // decides to place the HTML instead of just changing image source because I have yet to decide how to display the image based on responsiveness
            let menuFoodItemImage = document.querySelector(
              "#menu-food-item-image"
            );
            if (menuFoodItemImage) {
              menuFoodItemImage.innerHTML = `<div class="animated fadeIn"><img src="${imagesPath}${menuName}.jpeg" /></div>`;
            }
          }
        }
      })
    );
  }
}


var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 20000); // Change image every 2 seconds
}

