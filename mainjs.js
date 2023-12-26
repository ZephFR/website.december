function LoginFormOn() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}

function SignUpFormOn() {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

function LogInValidation() {
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;

    if (loginEmail === '' || loginPassword === '') {
        alert('Veuillez remplir tous les champs');
        return false;
    }
    else {
        alert("Identifiants incorrects. En vrai je voulais rajouter une petite blague, mais j'ai pas eu d'idée ni d'inspiration, donc voila je vais juste faire une pub comme ça : https://twitch.tv/mael_zephyrius. (pour ma défense c'est un gage de mettre ça la)");
    }
}

function SignUpValidation() {
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (email === '' || username === '' || password === '' || confirmPassword === '') {
        alert('Veuillez remplir tous les champs');
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Veuillez entrer une adresse email valide');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return false;
    }

    alert("Formulaire d'inscription soumis avec succès !");
    return true;
}