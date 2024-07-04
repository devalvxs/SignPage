document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.querySelector('.card-container');
    const btnSignUp = document.querySelector('.btn-sign-up');
    const btnSignIn = document.querySelector('.btn-sign-in');

    btnSignUp.addEventListener('click', function () {
        cardContainer.classList.add('clicked');
    });

    btnSignIn.addEventListener('click', function () {
        cardContainer.classList.remove('clicked');
    });

    function addSocialLoginButtons() {
        const socialLoginButtons = `

            <div class="mobile"><a href="#"> <img src="https://img.icons8.com/?size=25&id=17949&format=png&color=000000" alt="Google"></a></div>
            <div class="mobile"><a href="#"> <img src="https://img.icons8.com/?size=25&id=62856&format=png&color=000000" alt="GitHub"></a></div>
            <div class="mobile"><a href="#"> <img src="https://img.icons8.com/?size=25&id=30998&format=png&color=000000" alt="Discord"></a></div>
            
            `;
        document.querySelectorAll('.social-login-buttons').forEach(element => {
            element.innerHTML = socialLoginButtons;
        });
    }

    function removeSocialLoginButtons() {
        document.querySelectorAll('.social-login-buttons').forEach(element => {
            element.innerHTML = '';
        });
    }

    function handleResize() {
        if (window.innerWidth < 768) {
            addSocialLoginButtons();
        }
    }

    window.addEventListener('resize', handleResize);

    handleResize();
});