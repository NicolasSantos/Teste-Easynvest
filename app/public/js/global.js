var countToasts = 0; 

const openSidebar = (event) => {
    document.getElementsByClassName("sidebar")[0].classList.remove("sidebar-hide");
    stopPropagation(event);
}
  
const closeSideBar = (event) => {
    document.getElementsByClassName("sidebar")[0].classList.add("sidebar-hide");
    stopPropagation(event);
}

const stopPropagation = (event) => {
    if(event) {
        event.stopPropagation();
    }
}

const setActiveMenuItem = () => {
    let splitPath = window.location.pathname.split("/");
    let path = (splitPath[splitPath.length - 1]).replace(".html", "");

    if(path == "index") {
        document.getElementById("form-item").classList.add("active");
    } else {
        document.getElementById("listusers-item").classList.add("active");
    }
}

const clickOutsideMenu = () => {
    document.getElementsByTagName("html")[0].addEventListener("click", function() { 
        closeSideBar();
    });

    document.getElementsByTagName("body")[0].addEventListener("click", function() { 
        closeSideBar();
    });
}

const showLoading = () => {
    let button = document.querySelector("form button");
    button.classList.add("loading");
}

const hideLoading = () => {
    let button = document.querySelector("form button");
    button.classList.remove("loading");
}

const showToast = (message) => {
    let toast = document.querySelector(".toast");
    let toastMessage = document.querySelector(".toast .toast-message");
    toastMessage.innerText = message;

    toast.classList.remove("toast-hide");
    countToasts += 1;

    setTimeout(() => {
        if(countToasts === 1) {
            hideToast();
        }

        countToasts -= 1;
    }, 2000);
}

const hideToast = () => {
    let toast = document.querySelector(".toast");
    toast.classList.add("toast-hide");
}

document.addEventListener("DOMContentLoaded", (event) => {
    setActiveMenuItem();
    clickOutsideMenu();

    let sidebar = document.getElementsByTagName('nav')[0];
    let menuIconSidebar = document.querySelector('.sidebar .menu-icon i');
    let menuIconHeader = document.querySelector('header .menu-icon i');
    
    menuIconSidebar.addEventListener("click", (event) => {
        closeSideBar(event);
    })

    menuIconHeader.addEventListener("click", (event) => {
        openSidebar(event)
    })

    sidebar.addEventListener("click", (event) => {
        stopPropagation(event)
    })
})

module.exports = {
    showLoading: showLoading,
    hideLoading: hideLoading,
    showToast: showToast,
    hideToast: hideToast
}