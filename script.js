document.addEventListener('DOMContentLoaded', function () {
    var emailInput = document.getElementById("inp-email");
    var passwordInput = document.getElementById("inp-password");
    var mailPlaceholder = emailInput.placeholder;
    var passPlaceholder = passwordInput.placeholder;
    var selectedLang = document.getElementById('langs');

    selectedLang.addEventListener('change', function() {
  
    // İngilizce seçilmişse
    if (selectedLang.value === 'en-lang') {
        translateToEnglish();
    }      
    // Türkçe seçilmişse
    else if (selectedLang.value === 'tr-lang') {
        translateToTurkish();
    }
      });
    
    emailInput.addEventListener('focus', function () {
        addFloatingLabel(emailInput, "E-posta");
        emailInput.placeholder = "";
    });

    passwordInput.addEventListener('focus', function () {
        addFloatingLabel(passwordInput, "Parola");
        passwordInput.placeholder = "";
    });

    emailInput.addEventListener('blur', function () {
        checkInput(emailInput, "Lütfen geçerli bir telefon numarası veya e‑posta adresi girin.");
        emailInput.placeholder = mailPlaceholder;
        removeFloatingLabel(emailInput);
    });

    passwordInput.addEventListener('blur', function () {
        checkInput(passwordInput, "Parolanız 4 ila 60 karakter olmalıdır.");
        passwordInput.placeholder = passPlaceholder;
        removeFloatingLabel(passwordInput);
    });
});

function checkInput(inputElement, errorMessage) {
    var errorElement = document.getElementById(inputElement.id + "-error");

    if (inputElement.value.trim() === "") {
        if (!errorElement) {
            errorElement = document.createElement("h3");
            errorElement.id = inputElement.id + "-error";
            errorElement.className = "error-message";
            inputElement.parentNode.appendChild(errorElement);
            inputElement.classList.add("input-field-error");
        }
        errorElement.innerText = errorMessage;
    } else {
        if (errorElement) {
            errorElement.remove();
            inputElement.classList.remove("input-field-error");
        }
    }
}

function addFloatingLabel(inputElement, labelText) {
    var labelElement = document.createElement("h5");
    labelElement.className = "floating-label";
    labelElement.innerText = labelText;
    inputElement.parentNode.appendChild(labelElement);
}

function removeFloatingLabel(inputElement) {
    var labelElement = inputElement.parentNode.querySelector(".floating-label");
    if (labelElement) {
        labelElement.remove();
    }
}

function translateToTurkish() {
    document.getElementById('login-title').innerText = 'Oturum Aç';
    document.getElementById('inp-email').placeholder = 'E-posta';
    document.getElementById('inp-password').placeholder = 'Parola';
    document.getElementById('buttonSub').innerText = 'Oturum Aç';
    document.getElementById('rememberMeClick').innerText = 'Beni Hatırla';
    document.getElementById('helping').innerText = 'Yardım ister misiniz?';
    document.getElementById('join-request').innerHTML = "Netflix'e katılmak ister misiniz? <a href=`#`>Şimdi kaydolun.</a>";
    document.getElementById('robot').innerHTML = 'Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor. <a href="#" id="learn-more">Daha fazlasını öğrenin.</a>';
    document.getElementById('learn-more').innerText = 'Daha fazlasını öğrenin.';
    document.getElementById('haveQuestion').innerHTML = 'Sorularınız mı var? <a href="#">0850-390-7444</a> numaralı telefonu arayın';
    document.getElementById('faq').innerText = 'SSS';
    document.getElementById('cookies').innerText = 'Çerez Tercihleri';
    document.getElementById('helpcenter').innerText = 'Yardım Merkezi';
    document.getElementById('infos').innerText = 'Kurumsal Bilgiler';
    document.getElementById('uses').innerText = 'Kullanım Koşulları';
    document.getElementById('security').innerText = 'Gizlilik';
  }
  
function translateToEnglish() {
    document.getElementById('login-title').innerText = 'Sign In';
    document.getElementById('inp-email').placeholder = 'Email';
    document.getElementById('inp-password').placeholder = 'Password';
    document.getElementById('buttonSub').innerText = 'Sign In';
    document.getElementById('rememberMeClick').innerText = 'Remember Me';
    document.getElementById('helping').innerText = 'Need help?';
    document.getElementById('join-request').innerHTML = 'Want to join Netflix? <a href="#">Sign up now.</a>';
    document.getElementById('robot').innerHTML = 'This page is protected by Google reCAPTCHA to ensure you are not a robot. <a href="#" id="learn-more"></a>';
    document.getElementById('learn-more').innerText = 'Learn more.';
    document.getElementById('haveQuestion').innerHTML = 'Do you have questions? Call <a href="#">0850-390-7444</a>';
    document.getElementById('faq').innerText = 'FAQ';
    document.getElementById('cookies').innerText = 'Cookie Preferences';
    document.getElementById('helpcenter').innerText = 'Help center';
    document.getElementById('infos').innerText = 'Corporate Information';
    document.getElementById('uses').innerText = 'Terms of Use';
    document.getElementById('security').innerText = 'Security';
}