
document.addEventListener("DOMContentLoaded", function () {


    const hamburger = document.querySelector(".hamburger-menu");
    const headerLinksMain = document.querySelector(".header-links-main");
    const body = this.documentElement.getElementsByTagName("body")[0]
    const footerLinksExpandCollapseButtons = document.querySelectorAll(".footer-links-expand-collapse")

    handleHamburger();
    handleFooterLinkClick();


    function handleHamburger() {

        hamburger.addEventListener('click', () => {
            if (hamburger.classList.contains('fa-bars')) {
                hamburger.classList.remove('fa-bars');
                hamburger.classList.add('fa-close');
                body.style.overflow = 'hidden'
            } else {
                hamburger.classList.add('fa-bars');
                hamburger.classList.remove('fa-close');
                body.style.overflow = 'auto'
            }
            if (headerLinksMain.classList.contains("hidden")) {
                headerLinksMain.classList.remove("hidden")
                headerLinksMain.classList.add("visible")
            } else {
                headerLinksMain.classList.add("hidden")
                headerLinksMain.classList.remove("visible")
            }
        });
    }

    function handleFooterLinkClick() {
        footerLinksExpandCollapseButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.nextElementSibling.firstElementChild.classList.toggle('hidden')
                const addCloseIcon = button.firstElementChild.nextElementSibling
                console.log(addCloseIcon)
                if (addCloseIcon.classList.contains('fa-add')) {
                    addCloseIcon.classList.remove('fa-add')
                    addCloseIcon.classList.add('fa-close')
                } else {
                    addCloseIcon.classList.add('fa-add')
                    addCloseIcon.classList.remove('fa-close')
                }
            })
        })
    }

})


