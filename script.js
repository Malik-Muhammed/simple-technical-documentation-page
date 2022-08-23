 /* ===========================================================
            |------------VARIABLES DECLARATION AND DEFINITION-------------|
            ==============================================================*/

            let navLinkItem = document.getElementsByClassName("nav-link");

            let navLinksContainer = document.querySelector(".navLinksContainer");

            let cancelBtn = document.querySelector(".bi-x");

            let burgerBtn = document.querySelector(".bi-list");

            let navBarHeight = document.querySelector("#navbar");

            const screenSize = window.matchMedia("(min-width: 929px)");
            const date = document.getElementById("date");

            /* ===========================================================
            |------------WORK ON THE NAV BUTTONS-------------|
            ==============================================================*/

            burgerBtn.addEventListener("click", function () {

                navLinksContainer.style.display = "flex";
                navLinksContainer.style.transform = "translateY(0px)";
                // navLinksContainer.style.right= "0px";
                burgerBtn.style.display = "none";
                cancelBtn.style.display = "block";

                // SMALL CONDITIONAL MANIPULATION

                if(cancelBtn.style.display === "block") {

                    for (let j = 0; j < navLinkItem.length; j++) {

                        navLinkItem[j].addEventListener("click", function (){
                            navLinksContainer.style.display = "none";
                            cancelBtn.style.display = "none";
                            burgerBtn.style.display = "block";
                        })
                    }
                }

                        
            })

            cancelBtn.addEventListener("click", function(){
                navLinksContainer.style.display = "none";
                cancelBtn.style.display = "none";
                burgerBtn.style.display = "block";
            
            })


            // SMALL MEDIA QUERY FOR THE NAV
            function myFunction(screenSize) {
                if (screenSize.matches) { // If media query matches
                    navLinksContainer.style.display = "flex";

                    for (let j = 0; j < navLinkItem.length; j++) {
                        navLinkItem[j].addEventListener("click", function (){
                        navLinksContainer.style.display = "flex";
                       
                        })
                    }

                } 
                
                else {
                navLinksContainer.style.display = "none";
                }
            }

            myFunction(screenSize) // Call listener function at run time
            screenSize.addListener(myFunction)


            date.innerHTML = new Date().getFullYear();
