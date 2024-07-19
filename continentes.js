const countriesData = {
    Argentina: { capital: "Buenos Aires", poblacion: "45 millones", idioma: "Español", moneda: "Peso argentino" },
    Brasil: { capital: "Brasilia", poblacion: "212 millones", idioma: "Portugués", moneda: "Real brasileño" },
    Chile: { capital: "Santiago", poblacion: "19 millones", idioma: "Español", moneda: "Peso chileno" },
    Colombia: { capital: "Bogotá", poblacion: "51 millones", idioma: "Español", moneda: "Peso colombiano" },
    Ecuador: { capital: "Quito", poblacion: "17 millones", idioma: "Español", moneda: "Dólar estadounidense" },
    Perú: { capital: "Lima", poblacion: "33 millones", idioma: "Español", moneda: "Sol peruano" },
    Uruguay: { capital: "Montevideo", poblacion: "3.5 millones", idioma: "Español", moneda: "Peso uruguayo" },
    Venezuela: { capital: "Caracas", poblacion: "28 millones", idioma: "Español", moneda: "Bolívar soberano" },
    Alemania: { capital: "Berlín", poblacion: "83 millones", idioma: "Alemán", moneda: "Euro" },
    España: { capital: "Madrid", poblacion: "47 millones", idioma: "Español", moneda: "Euro" },
    Francia: { capital: "París", poblacion: "67 millones", idioma: "Francés", moneda: "Euro" },
    Italia: { capital: "Roma", poblacion: "60 millones", idioma: "Italiano", moneda: "Euro" },
    "Reino Unido": { capital: "Londres", poblacion: "68 millones", idioma: "Inglés", moneda: "Libra esterlina" },
    Rusia: { capital: "Moscú", poblacion: "144 millones", idioma: "Ruso", moneda: "Rublo ruso" },
    Egipto: { capital: "El Cairo", poblacion: "104 millones", idioma: "Árabe", moneda: "Libra egipcia" },
    Nigeria: { capital: "Abuja", poblacion: "206 millones", idioma: "Inglés", moneda: "Naira" },
    "Sudáfrica": { capital: "Pretoria", poblacion: "59 millones", idioma: "Afrikáans, Inglés", moneda: "Rand" },
    Kenia: { capital: "Nairobi", poblacion: "54 millones", idioma: "Swahili, Inglés", moneda: "Chelín keniano" },
    Marruecos: { capital: "Rabat", poblacion: "37 millones", idioma: "Árabe, Bereber", moneda: "Dirham marroquí" },
    Australia: { capital: "Canberra", poblacion: "25 millones", idioma: "Inglés", moneda: "Dólar australiano" },
    "Nueva Zelanda": { capital: "Wellington", poblacion: "5 millones", idioma: "Inglés, Maorí", moneda: "Dólar neozelandés" },
    Fiyi: { capital: "Suva", poblacion: "0.9 millones", idioma: "Inglés, Fiyiano", moneda: "Dólar fiyiano" },
    "Papúa Nueva Guinea": { capital: "Puerto Moresby", poblacion: "9 millones", idioma: "Inglés, Tok Pisin, Hiri Motu", moneda: "Kina" },
    China: { capital: "Pekín", poblacion: "1400 millones", idioma: "Chino mandarín", moneda: "Yuan" },
    India: { capital: "Nueva Delhi", poblacion: "1380 millones", idioma: "Hindi, Inglés", moneda: "Rupia india" },
    Japón: { capital: "Tokio", poblacion: "126 millones", idioma: "Japonés", moneda: "Yen japonés" },
    "Corea del Sur": { capital: "Seúl", poblacion: "52 millones", idioma: "Coreano", moneda: "Won surcoreano" },
    Indonesia: { capital: "Yakarta", poblacion: "273 millones", idioma: "Indonesio", moneda: "Rupia indonesia" }
  };
  
  const continentCountries = {
    sudamerica: ["Argentina", "Brasil", "Chile", "Colombia", "Ecuador", "Perú", "Uruguay", "Venezuela"],
    europa: ["Alemania", "España", "Francia", "Italia", "Reino Unido", "Rusia"],
    africa: ["Egipto", "Nigeria", "Sudáfrica", "Kenia", "Marruecos"],
    oceania: ["Australia", "Nueva Zelanda", "Fiyi", "Papúa Nueva Guinea"],
    asia: ["China", "India", "Japón", "Corea del Sur", "Indonesia"]
  };
  
  function populateCountries() {
    const continentSelect = document.getElementById("continent-select");
    const countrySelect = document.getElementById("country-select");
    const selectedContinent = continentSelect.value;
    
    // Limpiar las opciones previas
    countrySelect.innerHTML = "";
    
    // Añadir las opciones de países según el continente seleccionado
    continentCountries[selectedContinent].forEach(country => {
      const option = document.createElement("option");
      option.textContent = country;
      countrySelect.appendChild(option);
    });
  }
  
  function showCountryInfo() {
    const countrySelect = document.getElementById("country-select");
    const countryInfoDiv = document.getElementById("country-info");
    const selectedCountry = countrySelect.value;
    
    // Obtener los datos del país seleccionado
    const countryData = countriesData[selectedCountry];
    
    // Mostrar la información del país
    countryInfoDiv.innerHTML = `
      <h3>${selectedCountry}</h3>
      <p><strong>Capital:</strong> ${countryData.capital}</p>
      <p><strong>Población:</strong> ${countryData.poblacion}</p>
      <p><strong>Idioma:</strong> ${countryData.idioma}</p>
      <p><strong>Moneda:</strong> ${countryData.moneda}</p>
    `;
  }
  
  // Llenar el menú de países inicialmente
  populateCountries();
  
  // Mostrar información del país cuando se selecciona uno
  document.getElementById("country-select").addEventListener("change", showCountryInfo);
  
  
a  