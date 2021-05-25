import React from "react";
import ReactDOM from "react-dom";
import Vue from "vue";

import ReactApp from "./React/App.jsx";
import VueApp from "./Vue/App.vue";
// import AngularApp from './Angular/App.angular';
import TypeScriptApp from "./TypeScript/App.ts";
import JavaScriptApp from "./JavaScript/App.js";
import SvelteApp from "./Svelte/App.svelte";
import { Elm } from "./Elm/App.elm";

import reportWebVitals from "./reportWebVitals";
import "./index.scss";

ReactDOM.render(<ReactApp />, document.getElementById("react-app"));

document.getElementById("javascript-app").appendChild(JavaScriptApp);

Vue.config.productionTip = false;
Vue.config.devtools = false;
new Vue({ render: h => h(VueApp) }).$mount("#vue-app");

// angular-app

document.getElementById("typescript-app").appendChild(TypeScriptApp);

// window.app = new SvelteApp({target: document.getElementById("svelte-app")});
new SvelteApp({ target: document.getElementById("svelte-app") });

Elm.App.init({ node: document.getElementById("elm-app") });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
