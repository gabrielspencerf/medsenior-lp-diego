import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.10.2/dist/web.js';

window.Typebot = Typebot;
window.dispatchEvent(new CustomEvent('typebot-sdk-ready'));
