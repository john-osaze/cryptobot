var searchIcon = document.getElementById('search'),
    notification = document.getElementById('bell');

    function changeIcon() {
        notification.classList.remove("ion-ios-notifications-outline")
        notification.classList.add("ion-ios-notifications")
    }

    function restoreIcon() {
        notification.classList.remove("ion-ios-notifications")
        notification.classList.add("ion-ios-notifications-outline")
    }

    function closeNav(){
        document.getElementById("dashboard").style.left = "-90%";
        document.querySelector("main").style.left = "5rem";
    }

    function openNav()  {
        document.getElementById("dashboard").style.left = "0";
        document.querySelector("main").style.left = "30rem";

        if (window.innerWidth < 1250) {
            document.querySelector("main").style.left = "5rem";
        } 
        else {
            document.getElementById("dashboard").style.left = "0";
            document.querySelector("main").style.left = "30rem";
        }
    }

