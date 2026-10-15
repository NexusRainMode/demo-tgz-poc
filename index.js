// simple-logger demo package (legit)
function log(msg) { console.log(`[${new Date().toISOString()}] ${msg}`); }
module.exports = { log };
