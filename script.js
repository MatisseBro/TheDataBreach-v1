let health = 50; // Valeur initiale de la vie

    function updateHealthBar() {
      const healthBar = document.getElementById('healthBar');
      const healthText = document.getElementById('healthText');

      // Empêche la vie de dépasser les limites
      health = Math.max(0, Math.min(100, health));

      // Met à jour la largeur de la barre et le texte
      healthBar.style.width = health + '%';
      healthText.textContent = `Vie : ${health}%`;
    }

    function increaseHealth() {
      health += 10; // Augmente de 10
      updateHealthBar();
    }

    function decreaseHealth() {
      health -= 10; // Diminue de 10
      updateHealthBar();
    }