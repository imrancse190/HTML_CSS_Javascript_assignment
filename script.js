// Define the active class name
const activeClassName = 'search-button-click-design';

// Get all the search navbar items
const searchNavbarItems = document.querySelectorAll('.search-navbar-item');

// Function to handle the active class toggle
const handleActiveClassToggle = (event) => {
    // Remove the active class from all items
    searchNavbarItems.forEach(item => item.classList.remove(activeClassName));
    // Add the active class to the clicked item
    event.currentTarget.classList.add(activeClassName);
};

// Add click event listeners to each search navbar item
searchNavbarItems.forEach(item => {
    item.addEventListener('click', handleActiveClassToggle);
});

// Navbar elements
let navbar = document.getElementsByClassName("navbar")[0];
let navbarSearchBox = document.getElementById("navbar-search-apartment");
let searchVar = document.getElementById("search-navbar-id");
let stayExperiencesNavbar = document.getElementById("stay-experiences-navbar-id");

// Navbar click transaction
const searchItemShow = () => {
    searchVar.classList.toggle("hidden");
    navbarSearchBox.classList.toggle("hidden");
    navbar.classList.toggle("border-bottom-navbar");
    stayExperiencesNavbar.classList.toggle("hidden");
    document.querySelector('.navbar').style.justifyContent = '';
}

// Navbar search elements
let navbarSearchMapContainerId = document.getElementById("navbar-search-map-container-id");
let navbarSearchDatePicker = document.getElementsByClassName("navbar-search-date-picker")[0];
let searchNavbarItemGuestsContainer = document.getElementsByClassName("search-navbar-item-guests-container")[0];
let searchNavbarItemMap = document.getElementById("search-navbar-item-map");

// Map toggle on click
const mapToggleOnClick = () => {
    handleActiveClassToggle({ currentTarget: searchNavbarItemMap });
    navbarSearchMapContainerId.classList.toggle("hidden");
    navbarSearchDatePicker.classList.add("hidden");
    searchNavbarItemGuestsContainer.classList.add("hidden");
}

// Get value
function getValue(element) {
    let value = element.querySelector('p').getAttribute('value');
    document.getElementById('map-area').innerText = value;
    document.getElementById("navbar-search-anywhere").placeholder=value;
    mapToggleOnClick();
}

// Date picker elements
let checkInOrOut = 0;
let checkIn=0;
let checkOut=0;
let searchNavbarItemCheckIn = document.getElementById("search-navbar-item-check-in");
let searchNavbarItemCheckOut = document.getElementById("search-navbar-item-check-out");

function searchNavbarItemCheckInClick() {
    handleActiveClassToggle({ currentTarget: searchNavbarItemCheckIn });
    navbarSearchDatePicker.classList.remove("hidden");
    navbarSearchMapContainerId.classList.add("hidden");
    searchNavbarItemGuestsContainer.classList.add("hidden");
    checkInOrOut = 0;
    checkIn=1;
    checkOut=0;
};

function searchNavbarItemCheckOutClick() {
    handleActiveClassToggle({ currentTarget: searchNavbarItemCheckOut });
    navbarSearchDatePicker.classList.remove("hidden");
    navbarSearchMapContainerId.classList.add("hidden");
    searchNavbarItemGuestsContainer.classList.add("hidden");
    checkInOrOut = 0;
    checkIn=0;
    checkOut=1;
};

document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    let programmaticChange = false;

    const datePicker1 = flatpickr("#myDatePicker1", {
        inline: true,
        dateFormat: "d-m", // Display day and month only
        defaultDate: "today", // Default to today's date
        minDate: "today",
        monthSelectorType: "static",
        onChange: function (selectedDates, dateStr, instance) {
            if (selectedDates.length > 0) {
                const selectedDate = selectedDates[0];
                const formattedDate = selectedDate.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                });
                if (checkIn) {
                    document.getElementById('check-in-date').innerText = formattedDate;
                    checkInOrOut++;
                } 
                if (checkOut) {
                    document.getElementById('check-out-date').innerText = formattedDate;
                }
            }
        },
        onMonthChange: function (selectedDates, dateStr, instance) {
            let month1 = datePicker1.currentMonth;
            let month2 = datePicker2.currentMonth;
            if (programmaticChange == false) {
                programmaticChange = true;
                if (month2 - month1 == 0) {
                    datePicker2.changeMonth(1);
                } else {
                    datePicker2.changeMonth(-1);
                }
            }
            programmaticChange = false;
        }
    });

    const datePicker2 = flatpickr("#myDatePicker2", {
        inline: true,
        defaultDate: nextMonth,
        minDate: nextMonth,
        dateFormat: "d-m",
        monthSelectorType: "static",
        yearSelectorType: "disable",
        onChange: function (selectedDates, dateStr, instance) {
            if (selectedDates.length > 0) {
                const selectedDate = selectedDates[0];
                const formattedDate = selectedDate.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                });
                if (checkIn) {
                    document.getElementById('check-in-date').innerText = formattedDate;
                    
                } 
                if (checkOut) {
                    document.getElementById('check-out-date').innerText = formattedDate;
                }
            }
        },
        onMonthChange: function (selectedDates, dateStr, instance) {
            let month1 = datePicker1.currentMonth;
            let month2 = datePicker2.currentMonth;
            if (programmaticChange == false) {
                programmaticChange = true;
                if (month2 - month1 == 0) {
                    datePicker1.changeMonth(-1);
                } else {
                    datePicker1.changeMonth(1);
                }
            }
            programmaticChange = false;
        }
    });
});

// For add +-2 in checkout-checkin
document.addEventListener("DOMContentLoaded", function () {
    const flexibleDates = document.querySelectorAll('.flexible-dates > div');

    flexibleDates.forEach(option => {
        option.addEventListener('click', function () {
            const selectedValue = option.textContent.trim();
           

            // Remove 'selected' class from all options
            flexibleDates.forEach(opt => {
                opt.classList.remove('selected');
            });

            // Add 'selected' class to the clicked option
            option.classList.add('selected');

            // Update check-in and check-out dates directly
            const checkInOutDateElements = document.getElementsByClassName('check-in-out-date-fexible');

            for (let i = 0; i < checkInOutDateElements.length; i++) {
                checkInOutDateElements[i].innerText = selectedValue;
            }
        });
    });
});

// Who Add guests
let searchNavbarTtemAddGuests = document.getElementById("search-navbar-item-add-guests");

const customizeGuestsNumber = () => {
    handleActiveClassToggle({ currentTarget: searchNavbarTtemAddGuests });
    searchNavbarItemGuestsContainer.classList.toggle("hidden");
    navbarSearchDatePicker.classList.add("hidden");
    navbarSearchMapContainerId.classList.add("hidden");
}

let addGuests = document.getElementById("add-guests");

document.addEventListener('DOMContentLoaded', function () {
    // Get all containers
    const guestsContainers = document.querySelectorAll('.search-navbar-item-guests-container');
    let totalGuest = 0;
    // Loop through each container
    guestsContainers.forEach(container => {
        // Find buttons and counts within each container
        const decreaseButtons = container.querySelectorAll('.search-navbar-item-guests-button.decrease');
        const increaseButtons = container.querySelectorAll('.search-navbar-item-guests-button.increase');
        const counts = container.querySelectorAll('.search-navbar-item-guests-count');

        // Add click event listeners to each decrease button
        decreaseButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                let count = parseInt(counts[index].textContent);
                if (count > 0) {
                    counts[index].textContent = count - 1;
                    totalGuest--;
                    addGuests.innerText = totalGuest + " Guests";
                }
            });
        });

        // Add click event listeners to each increase button
        let guestsNumber=document.getElementById("navbar-search-anyguests")
        increaseButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                let count = parseInt(counts[index].textContent);
                counts[index].textContent = count + 1;
                totalGuest++;
                addGuests.innerText = totalGuest + " Guests";
                guestsNumber.placeholder=totalGuest + " Guests";
                
            });
        });
    });
});

// Function to save data to local storage when search button is clicked
function saveDataToLocalStorage() {
    const checkInDate = document.getElementById('check-in-date').innerText;
    const checkOutDate = document.getElementById('check-out-date').innerText;
    const totalGuests = addGuests.innerText;
    const selectedLocation = document.getElementById('map-area').innerText;

    const searchData = {
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        totalGuests: totalGuests,
        selectedLocation: selectedLocation
    };

    localStorage.setItem('searchData', JSON.stringify(searchData));
    showNotification("Search button is clicked");
    searchItemShow();
}

// Add event listener to the search button
document.getElementById('search-button').addEventListener('click', saveDataToLocalStorage);


// ===============================================================================
// Show all images
// ===============================================================================
const hotelImages = [];

for (let i = 1; i <= 12; i++) {
    hotelImages.push(`./assets/images/bedroom${i}.jpg`);
}

let currentIndex = 0;
const currentImage = document.getElementById('currentImage');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let activeImageNumber = document.getElementById("show-all-images-one-by-one-active-image-number");

function updateImage() {
    currentImage.src = hotelImages[currentIndex];
    let num = `${currentIndex + 1}/${hotelImages.length}`
    activeImageNumber.innerText = num;
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % hotelImages.length;
    updateImage();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + hotelImages.length) % hotelImages.length;
    updateImage();
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

// Initialize with the first image
updateImage();


// Show all images button  clicked
let showAllImageButton = document.getElementById("show_all_images_one_by_one");
function showAllImagesOneByOne() {

    showAllImageButton.classList.toggle("hidden");
}

// ========================share button
// Share button
let sharemodal = document.getElementById("header-item-share-modal-all");
let shareButtons = document.getElementById('.header-item-share-main-button');
let closeButton = document.querySelector('.header-item-share-close');

const shareButtonIsClicked = () => {
    sharemodal.classList.toggle("hidden");
    console.log("share")
}
closeButton.onclick = function () {
    sharemodal.classList.add("hidden");
    document.body.classList.remove('no-scroll');
}

// copy link
const copyLinkButtonClick = () => {
    console.log("firstcoy")
    let currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
        .then(() => {
            console.log('URL copied to clipboard:', currentUrl);
        })
        .catch((err) => {
            console.error('Failed to copy URL: ', err);
        });
    showNotification("Link Copy Successfully");
}


// when the save item is clicked
let saveItemImage = document.getElementById("saveitemImage");

const saveItemOnClick = () => {
    let save = localStorage.getItem("saveItem");

    save = save === 'true';

    if (save) {
        localStorage.removeItem("saveItem");
        showNotification("Remove item successfully")
        saveItemImage.classList.remove("save-item-background-color");
    } else {
        localStorage.setItem("saveItem", true);
        showNotification("Save item successfully")
        saveItemImage.classList.add("save-item-background-color");
    }
}

window.onload = () => {
    let save = localStorage.getItem("saveItem");

    if (save === 'true') {
        saveItemImage.classList.add("save-item-background-color");
    }
}

// notification when task is complete
function showNotification(text) {
    const notification = document.getElementById('notification');
    const notificationMessage=document.getElementById('notification-message').innerText=text;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

