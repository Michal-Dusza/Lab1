function validatePassword() {// pobranie dokumentacji do hasła i komunikatu o błędzie
    var passwordInput = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");

    // Walidacja hasła:  w tym wypadkuhasło musi mieć co najmniej 5 znaków
    if (passwordInput.value.length < 5) {
        passwordError.textContent = "Wymagane 5 lub więcej znaków.";// informacja jaka zostanie wyświetlona przyt podaniu złego hasła
    } else {
        passwordError.textContent = "";  // Wyczyszczenie komunikatu o błędzie
        alert("Zalogowano");// komunikat wyświetlany po poprawnym zalogowaniu
    }
}