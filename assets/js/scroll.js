function scrollToElement(id) {
    var element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop - 100, // Ajuste la valeur pour déplacer la section plus haut ou plus bas
      behavior: 'smooth'
    });
  }
