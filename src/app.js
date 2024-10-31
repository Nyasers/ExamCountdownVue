import './assets/main.css'

import { $ } from 'jquery';
import { ec } from './ec.js';
import main from './main.js';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

globalThis.$ = $;
globalThis.ec = ec;
globalThis.Time = () => new Date;

main(globalThis, ec);