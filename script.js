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

let hamburger = document.querySelector("#navbar-hamburger"); 
if (hamburger) {
    let hamburgerShown = false; 
    hamburger.addEventListener("click", e => {
        hamburgerShown = !hamburgerShown; 
        // console.log(hamburgerShown)
        let mobileNav = document.querySelector("#mobile-nav"); 
        if (mobileNav) { 
            // desktop nav 
            let mainNav = document.querySelector("#navbarBasicExample"); 
            mobileNav.innerHTML = ""; 
            if (hamburgerShown == true) {
                mainNav.querySelectorAll(".navbar-item").forEach(navbarItem => {
                    // console.log(navbarItem); 
                    // console.log("class: " + navbarItem.classList + "\n href" + navbarItem.href  + "\n dataset: " + navbarItem.dataset.canScroll + "\n id: " + navbarItem.id  + "\n text: " + navbarItem.innerText); 
                    // mobileNav.innerHTML += `<a class="mobile-nav-item animated fadeIn ${navbarItem.classList}" href="${navbarItem.href.split('#')[1]}" data-can-scroll="${navbarItem.dataset.canScroll}" data-scroll-to="${navbarItem.href.split('#')[1]}">${navbarItem.innerText}</a>`; 
                    mobileNav.innerHTML += `<a class="mobile-nav-item animated fadeIn ${navbarItem.classList}" href="${navbarItem.href.split('#')[1]}" data-can-scroll="${navbarItem.dataset.canScroll}" data-nav-to="${navbarItem.href}">${navbarItem.innerText}</a>`; 
                    document.querySelectorAll(".mobile-nav-item").forEach(item => {
                        item.addEventListener("click", e => {
                            e.preventDefault(); 
                            if (item.dataset.canScroll == "true") { 
                                // console.log(e.target.href); 
                                let loc = window.location.pathname;
                                let dir = loc.substring(0, loc.lastIndexOf('/')); 
                                // console.log(e.target.href.replace(loc)); 
                                let scrollTo = e.target.href.substring(e.target.href.lastIndexOf('/')).replace("/", ""); 
                                let element = document.getElementById(scrollTo);
                                // console.log(element)
                                if (element) {
                                    element.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                        inline: "nearest"
                                    });
                                } 
                            } else {
                                window.location.href = e.target.dataset.navTo; 
                            }
                        }); 
                    }); 
                }); 
            }
        }
    }); 
} 

// About Handle bookings Opening times Location Menus
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

