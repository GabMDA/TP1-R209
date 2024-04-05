function validateForm() {
    const password = document.getElementById('password');
    const privacy = document.getElementById('privacy');
  
    if (password.value.length < 8) {
      alert('Le mot de passe doit contenir au moins 8 caractères.');
      return false;
    }
  
    if (!privacy.checked) {
      alert('Vous devez accepter la politique de confidentialité.');
      return false;
    }
  
    return true;
  }