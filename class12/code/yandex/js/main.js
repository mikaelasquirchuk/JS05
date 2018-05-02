const outputDiv = document.querySelector("#output");
const recordButton = document.querySelector(".record");

function translate(words) {
  const BASE_URL = "https://translate.yandex.net/api/v1.5/tr.json/translate?";
  const API_KEY =
    "trnsl.1.1.20180423T103948Z.60e86b9832a4089b.e90dba2944c802e016e2625512bee96db9723644";
  const PARAMS = `key=${API_KEY}&text=${words}&lang=en-fr`;
  const URL = BASE_URL + PARAMS;
  return fetch(URL).then(response => response.json());
}

function displayData(data) {
  const [translation] = data.text;
  outputDiv.innerHTML = `<p>${translation}</p>`;
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(translation);
  utterThis.lang = "fr";
  utterThis.voice = ;
  debugger;
  synth.speak(utterThis);
}

recordButton.addEventListener("click", function() {
  const recog = new webkitSpeechRecognition();
  recog.onresult = function(data) {
    const words = data.results[0][0].transcript;
    translate(words).then(displayData);
  };
  recog.start();
});
