// API
var textInput = document.querySelector("textarea");
var input = textInput.value;

function translate(words, inLang, outLang) {
  var baseURL = `https://translate.yandex.net/api/v1.5/tr.json/translate?`;
  var API_KEY = `trnsl.1.1.20180423T103948Z.60e86b9832a4089b.e90dba2944c802e016e2625512bee96db9723644
    `;
  var parameters = `key=${API_KEY}&text=${words}&lang=${inLang}-${outLang}`;
  var URL = baseURL + parameters;
  fetch(URL);
}

translate(`hello`, `en`, `de`);

// UI
