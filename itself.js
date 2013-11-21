
var cache = { }

module.exports = function itself(code) {
  return cache[code] || (cache[code] = new Function('its', 'return its' + code))
}

