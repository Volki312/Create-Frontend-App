import JavaScriptLogo from "./javascript-logo.png";

const App = document.createElement("div");

const Logo = document.createElement("img");
Logo.src = JavaScriptLogo;
Logo.alt = "JavaScript";
Logo.className = "logo";

const Title = document.createElement("h1");
Title.innerHTML = "JavaScript";
Title.className = "title title--javascript";

App.appendChild(Logo);
App.appendChild(Title);

export default App;
