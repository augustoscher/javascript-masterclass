import { registerGaEvent, LEGAL_RESEARCH_SUCCESS_PROXIES, DEFAULT_EVENT_VALUE } from './util.js';

global.window = global.window || {}
global.window.dataLayer = global.window.dataLayer || []
registerGaEvent(LEGAL_RESEARCH_SUCCESS_PROXIES, 'copy', 'Content', DEFAULT_EVENT_VALUE)
console.log("LEGAL_RESEARCH_SUCCESS_PROXIES: ", LEGAL_RESEARCH_SUCCESS_PROXIES)
console.log("DEFAULT_EVENT_VALUE: ", DEFAULT_EVENT_VALUE)
