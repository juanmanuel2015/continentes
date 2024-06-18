function populateCountries() {
    var continentSelect = document.getElementById("continent-select");
    var selectedContinent = continentSelect.value;
    
    // Aquí puedes agregar la lógica para llenar el segundo select según el continente seleccionado
    // Por ahora, vamos a cambiar solo el color de fondo
    changeBackgroundColor(selectedContinent);
  }
  
  function changeBackgroundColor(continent) {
    var body = document.body;
    
    switch (continent) {
      case "sudamerica":
        body.style.backgroundColor = "yellow";
        break;
      case "europa":
        body.style.backgroundColor = "green";
        break;
      case "africa":
        body.style.backgroundColor = "blue";
        break;
      case "oceania":
        body.style.backgroundColor = "red";
        break;
      case "asia":
        body.style.backgroundColor = "lightblue";
        break;
      default:
        body.style.backgroundColor = "white";
        break;
    }
  }
  