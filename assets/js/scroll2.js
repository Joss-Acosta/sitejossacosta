function scrollToElement2(id) {
    var element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop + 160, // Ajuste la valeur pour déplacer la section plus haut ou plus bas
      behavior: 'smooth'
    });
  }
