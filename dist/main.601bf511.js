// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var str = "/* \u4F60\u597D\uFF0C\u6211\u53EB\u5C0F\u767D\n * \u63A5\u4E0B\u6765\u6211\u6F14\u793A\u4E00\u4E0B\u6211\u7684\u524D\u7AEF\u529F\u5E95\n * \u9996\u5148\u6211\u8981\u51C6\u5907\u4E00\u4E2Adiv\n **/\n#div1{\n    width: 200px;\n    height: 200px;\n    border:1px solid red;\n}\n/* \u63A5\u4E0B\u6765\u6211\u628A div \u53D8\u6210\u4E00\u4E2A\u516B\u5366\u56FE\n * \u6CE8\u610F\u770B\u597D\u4E86\n * \u9996\u5148\uFF0C\u628A div \u53D8\u6210\u4E00\u4E2A\u5706\n **/\n#div1{\n    border-radius:50%;\n    box-shadow:0 0 2px rgb(0 0 0 / 50%);\n    border:none;\n}\n/* \u516B\u5366\u662F\u9634\u9633\u5F62\u6210\u7684\n * \u4E00\u9ED1\u4E00\u767D\n **/\n#div1{\n    background: linear-gradient(90deg, rgba(2,0,36,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);\n}\n/* \u6700\u540E\u6765\u4E2A\u70B9\u775B\u4E4B\u7B14*/\n#div1::after{\n    position: absolute;\n    content:'';\n    left:25%;top:0;\n    width:50%;\n    height:50%;\n    background-color: white;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n#div1::before{\n    position: absolute;\n    content:'';\n    right:25%;bottom:0;\n    width:50%;\n    height:50%;\n    background-color: black;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(2,0,36,1) 25%);\n}";
var codeHtml = document.querySelector('.code');
var style = document.querySelector('style');
var i = 0;
var strTemp = '';

var step = function step() {
  if (i < str.length) {
    setTimeout(function () {
      if (str[i] === '\n') {
        strTemp += '<br>';
      } else if (str[i] === ' ') {
        strTemp += '&nbsp';
      } else {
        strTemp += str[i]; // 获取一个修改一个，如果直接赋值substring(0,i+1)前面的修改会被覆盖
      }

      codeHtml.innerHTML = strTemp;
      style.innerHTML = str.substring(0, i + 1);
      window.scrollTo(0, 9999);
      codeHtml.scrollTo(0, 9999);
      i++;
      step();
    }, 10);
  }
};

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.601bf511.js.map