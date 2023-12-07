const debounce = function(func, delay, ...args) {
  let timeoutID;
  return function() {
    clearTimeout(timeoutID);
    const that = this;
    timeoutID = setTimeout(function() {
      func.apply(that, args);
    }, delay);
  };
};
const supportsLocalStorage = function() {
  let supports = true;
  try {
    const test = "__vue-localStorage-check";
    window.localStorage.setItem(test, test);
    window.localStorage.removeItem(test);
  } catch (e) {
    supports = false;
  }
  return supports;
};

export { debounce as d, supportsLocalStorage as s };
//# sourceMappingURL=Functions-2f230c98.mjs.map
