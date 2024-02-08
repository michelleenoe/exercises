"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
      {text: "her comes das indhold - ich bin ein berliner danke", location: ".content-section"}
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
      {text: "her kommer indholdet - forhåbentligt", location: ".content-section",  },
    ],
  },
};
let locale = "da";

function updateTexts() {
    const languageTexts = texts[locale].texts;
    languageTexts.forEach(item => {
      document.querySelector(item.location).textContent = item.text;
    });
  }

  function changeLanguage(newLocale) {
    locale = newLocale;
    updateTexts();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('language-selector');
    selector.addEventListener('change', (event) => {
      changeLanguage(event.target.value);
    });
  

    updateTexts();
  });