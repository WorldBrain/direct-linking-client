webpackJsonp([2],{

/***/ "./node_modules/mocha-loader/index.js!./node_modules/multi-entry-loader/index.js?include=./packages/*/test!./":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/mocha-loader/web.js");
if(typeof window !== 'undefined' && window.initMochaPhantomJS) { window.initMochaPhantomJS(); }
mocha.setup({"ui":"bdd"});
__webpack_require__("./node_modules/multi-entry-loader/index.js?include=./packages/*/test!./")
__webpack_require__("./node_modules/mocha-loader/start.js");
if(true) {
	module.hot.accept();
	module.hot.dispose(function() {
		mocha.suite.suites.length = 0;
		var stats = document.getElementById('mocha-stats');
		var report = document.getElementById('mocha-report');
		stats && stats.parentNode.removeChild(stats);
		report && report.parentNode.removeChild(report);
	});
}

/***/ }),

/***/ "./node_modules/multi-entry-loader/index.js?include=./packages/*/test!./":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./packages/selector/index.js + 1 modules
var selector = __webpack_require__("./packages/selector/index.js");

// CONCATENATED MODULE: ./packages/selector/test/index.js

describe('selector', () => {
  it('can be imported', () => {
    assert.isDefined(selector);
  });
});
// CONCATENATED MODULE: ./node_modules/multi-entry-loader?include=./packages/*/test


/***/ }),

/***/ "./packages/selector/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/awaitAsyncGenerator.js
var awaitAsyncGenerator = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/awaitAsyncGenerator.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/wrapAsyncGenerator.js + 1 modules
var wrapAsyncGenerator = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/wrapAsyncGenerator.js");

// CONCATENATED MODULE: ./packages/tee/index.js



/**
 * @license
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
class tee_AsyncTee {
  constructor(iterable) {
    this.it = iterable[Symbol.asyncIterator]();
    this.values = [];
    this.finished = false;
  }

  [Symbol.asyncIterator]() {
    var _this = this;

    return Object(wrapAsyncGenerator["a" /* default */])(function* () {
      let i = 0;

      while (i < _this.values.length || !_this.finished) {
        if (i < _this.values.length) {
          yield _this.values[i++];
        } else {
          let _ref = yield Object(awaitAsyncGenerator["a" /* default */])(_this.it.next()),
              value = _ref.value,
              done = _ref.done;

          if (done) _this.finished = true;else _this.values.push(value);
        }
      }
    })();
  }

}
class Tee {
  constructor(iterable) {
    this.it = iterable[Symbol.iterator]();
    this.values = [];
    this.finished = false;
  }

  *[Symbol.iterator]() {
    let i = 0;

    while (i < this.values.length || !this.finished) {
      if (i < this.values.length) {
        yield this.values[i++];
      } else {
        let _it$next = this.it.next(),
            value = _it$next.value,
            done = _it$next.done;

        if (done) this.finished = true;else this.values.push(value);
      }
    }
  }

}
// EXTERNAL MODULE: ./node_modules/reselect/lib/index.js
var lib = __webpack_require__("./node_modules/reselect/lib/index.js");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./packages/selector/index.js
/* harmony export (immutable) */ __webpack_exports__["createSelectorCreator"] = createSelectorCreator;
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "defaultMemoize", function() { return lib["defaultMemoize"]; });
/**
 * @license
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */



const identity = a => a;

function createSelectorCreator(memoize, ...memoizeOptions) {
  const createSelector = Object(lib["createSelectorCreator"])(memoize, ...memoizeOptions);

  return resultFunc => {
    const wrapperFunc = (...args) => {
      const iterable = resultFunc(...args);
      return new tee_AsyncTee(iterable);
    };

    return createSelector(identity, wrapperFunc);
  };
}
const selector_createSelector = createSelectorCreator(lib["defaultMemoize"]);
/* harmony export (immutable) */ __webpack_exports__["createSelector"] = selector_createSelector;



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/chai/register-assert.js");
module.exports = __webpack_require__("./node_modules/mocha-loader/index.js!./node_modules/multi-entry-loader/index.js?include=./packages/*/test!./");


/***/ })

},[2]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbXVsdGktZW50cnktbG9hZGVyIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3NlbGVjdG9yL3Rlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvdGVlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3NlbGVjdG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJhc3NlcnQiLCJpc0RlZmluZWQiLCJjb25zdHJ1Y3RvciIsIml0ZXJhYmxlIiwiU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInZhbHVlcyIsImZpbmlzaGVkIiwiaSIsImxlbmd0aCIsIm5leHQiLCJ2YWx1ZSIsImRvbmUiLCJwdXNoIiwiVGVlIiwiaXRlcmF0b3IiLCJpZGVudGl0eSIsImEiLCJjcmVhdGVTZWxlY3RvckNyZWF0b3IiLCJtZW1vaXplIiwibWVtb2l6ZU9wdGlvbnMiLCJjcmVhdGVTZWxlY3RvciIsIl9jcmVhdGVTZWxlY3RvckNyZWF0b3IiLCJyZXN1bHRGdW5jIiwid3JhcHBlckZ1bmMiLCJhcmdzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsZ0VBQWdFLDZCQUE2QjtBQUM3RixhQUFhLFdBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQzs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUVBQSxTQUFTLFVBQVQsRUFBcUIsTUFBTTtBQUN6QkMsS0FBRyxpQkFBSCxFQUFzQixNQUFNO0FBQzFCQyxXQUFPQyxTQUFQLENBQWlCLFFBQWpCO0FBQ0QsR0FGRDtBQUdELENBSkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7Ozs7Ozs7OztBQWVPLE1BQU0sWUFBTixDQUFlO0FBQ3BCQyxjQUFZQyxRQUFaLEVBQXNCO0FBQ3BCLFNBQUtKLEVBQUwsR0FBVUksU0FBU0MsT0FBT0MsYUFBaEIsR0FBVjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNEOztBQUVELEdBQVFILE9BQU9DLGFBQWYsSUFBZ0M7QUFBQTs7QUFBQTtBQUM5QixVQUFJRyxJQUFJLENBQVI7O0FBQ0EsYUFBT0EsSUFBSSxNQUFLRixNQUFMLENBQVlHLE1BQWhCLElBQTBCLENBQUMsTUFBS0YsUUFBdkMsRUFBaUQ7QUFDL0MsWUFBSUMsSUFBSSxNQUFLRixNQUFMLENBQVlHLE1BQXBCLEVBQTRCO0FBQzFCLGdCQUFNLE1BQUtILE1BQUwsQ0FBWUUsR0FBWixDQUFOO0FBQ0QsU0FGRCxNQUVPO0FBQUEsMEVBQ3VCLE1BQUtULEVBQUwsQ0FBUVcsSUFBUixFQUR2QjtBQUFBLGNBQ0NDLEtBREQsUUFDQ0EsS0FERDtBQUFBLGNBQ1FDLElBRFIsUUFDUUEsSUFEUjs7QUFFTCxjQUFJQSxJQUFKLEVBQVUsTUFBS0wsUUFBTCxHQUFnQixJQUFoQixDQUFWLEtBQ0ssTUFBS0QsTUFBTCxDQUFZTyxJQUFaLENBQWlCRixLQUFqQjtBQUNOO0FBQ0Y7QUFWNkI7QUFXL0I7O0FBbEJtQjtBQXFCZixNQUFNRyxHQUFOLENBQVU7QUFDZlosY0FBWUMsUUFBWixFQUFzQjtBQUNwQixTQUFLSixFQUFMLEdBQVVJLFNBQVNDLE9BQU9XLFFBQWhCLEdBQVY7QUFDQSxTQUFLVCxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDRDs7QUFFRCxJQUFFSCxPQUFPVyxRQUFULElBQXFCO0FBQ25CLFFBQUlQLElBQUksQ0FBUjs7QUFDQSxXQUFPQSxJQUFJLEtBQUtGLE1BQUwsQ0FBWUcsTUFBaEIsSUFBMEIsQ0FBQyxLQUFLRixRQUF2QyxFQUFpRDtBQUMvQyxVQUFJQyxJQUFJLEtBQUtGLE1BQUwsQ0FBWUcsTUFBcEIsRUFBNEI7QUFDMUIsY0FBTSxLQUFLSCxNQUFMLENBQVlFLEdBQVosQ0FBTjtBQUNELE9BRkQsTUFFTztBQUFBLHVCQUNpQixLQUFLVCxFQUFMLENBQVFXLElBQVIsRUFEakI7QUFBQSxZQUNDQyxLQURELFlBQ0NBLEtBREQ7QUFBQSxZQUNRQyxJQURSLFlBQ1FBLElBRFI7O0FBRUwsWUFBSUEsSUFBSixFQUFVLEtBQUtMLFFBQUwsR0FBZ0IsSUFBaEIsQ0FBVixLQUNLLEtBQUtELE1BQUwsQ0FBWU8sSUFBWixDQUFpQkYsS0FBakI7QUFDTjtBQUNGO0FBQ0Y7O0FBbEJjLEM7Ozs7Ozs7QUNwQ2pCO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTs7QUFLQSxNQUFNSyxXQUFXQyxLQUFLQSxDQUF0Qjs7QUFFTyxTQUFTQyxxQkFBVCxDQUErQkMsT0FBL0IsRUFBd0MsR0FBR0MsY0FBM0MsRUFBMkQ7QUFDaEUsUUFBTUMsaUJBQWlCLG9DQUFBQyxDQUF1QkgsT0FBdkIsRUFBZ0MsR0FBR0MsY0FBbkMsQ0FBdkI7O0FBQ0EsU0FBT0csY0FBYztBQUNuQixVQUFNQyxjQUFjLENBQUMsR0FBR0MsSUFBSixLQUFhO0FBQy9CLFlBQU10QixXQUFXb0IsV0FBVyxHQUFHRSxJQUFkLENBQWpCO0FBQ0EsYUFBTyxJQUFJLFlBQUosQ0FBYXRCLFFBQWIsQ0FBUDtBQUNELEtBSEQ7O0FBSUEsV0FBT2tCLGVBQWVMLFFBQWYsRUFBeUJRLFdBQXpCLENBQVA7QUFDRCxHQU5EO0FBT0Q7QUFFTSxNQUFNLHVCQUFBSCxHQUFpQkgsc0JBQXNCLHFCQUF0QixDQUF2QjtBQUFBO0FBQUEiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoXCIhIS9Vc2Vycy9yaWsvYy9Xb3JsZEJyYWluL2RpcmVjdC1saW5raW5nLWNsaWVudC9ub2RlX21vZHVsZXMvbW9jaGEtbG9hZGVyL3dlYi5qc1wiKTtcbmlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5pbml0TW9jaGFQaGFudG9tSlMpIHsgd2luZG93LmluaXRNb2NoYVBoYW50b21KUygpOyB9XG5tb2NoYS5zZXR1cCh7XCJ1aVwiOlwiYmRkXCJ9KTtcbnJlcXVpcmUoXCIhIS9Vc2Vycy9yaWsvYy9Xb3JsZEJyYWluL2RpcmVjdC1saW5raW5nLWNsaWVudC9ub2RlX21vZHVsZXMvbXVsdGktZW50cnktbG9hZGVyL2luZGV4LmpzP2luY2x1ZGU9Li9wYWNrYWdlcy8qL3Rlc3QhXCIpXG5yZXF1aXJlKFwiISEvVXNlcnMvcmlrL2MvV29ybGRCcmFpbi9kaXJlY3QtbGlua2luZy1jbGllbnQvbm9kZV9tb2R1bGVzL21vY2hhLWxvYWRlci9zdGFydC5qc1wiKTtcbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoKTtcblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuXHRcdG1vY2hhLnN1aXRlLnN1aXRlcy5sZW5ndGggPSAwO1xuXHRcdHZhciBzdGF0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2NoYS1zdGF0cycpO1xuXHRcdHZhciByZXBvcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9jaGEtcmVwb3J0Jyk7XG5cdFx0c3RhdHMgJiYgc3RhdHMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdGF0cyk7XG5cdFx0cmVwb3J0ICYmIHJlcG9ydC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlcG9ydCk7XG5cdH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21vY2hhLWxvYWRlciEuL25vZGVfbW9kdWxlcy9tdWx0aS1lbnRyeS1sb2FkZXI/aW5jbHVkZT0uL3BhY2thZ2VzLyovdGVzdFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvbW9jaGEtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL211bHRpLWVudHJ5LWxvYWRlci9pbmRleC5qcz9pbmNsdWRlPS4vcGFja2FnZXMvKi90ZXN0IS4vXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCAqIGFzIHNlbGVjdG9yIGZyb20gJy4uLyc7XG5cbmRlc2NyaWJlKCdzZWxlY3RvcicsICgpID0+IHtcbiAgaXQoJ2NhbiBiZSBpbXBvcnRlZCcsICgpID0+IHtcbiAgICBhc3NlcnQuaXNEZWZpbmVkKHNlbGVjdG9yKTtcbiAgfSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3NlbGVjdG9yL3Rlc3QvaW5kZXguanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdFxuICogdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2ZcbiAqIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZVxuICogTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiAqIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBjbGFzcyBBc3luY1RlZSB7XG4gIGNvbnN0cnVjdG9yKGl0ZXJhYmxlKSB7XG4gICAgdGhpcy5pdCA9IGl0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpO1xuICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgKltTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChpIDwgdGhpcy52YWx1ZXMubGVuZ3RoIHx8ICF0aGlzLmZpbmlzaGVkKSB7XG4gICAgICBpZiAoaSA8IHRoaXMudmFsdWVzLmxlbmd0aCkge1xuICAgICAgICB5aWVsZCB0aGlzLnZhbHVlc1tpKytdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHsgdmFsdWUsIGRvbmUgfSA9IGF3YWl0IHRoaXMuaXQubmV4dCgpO1xuICAgICAgICBpZiAoZG9uZSkgdGhpcy5maW5pc2hlZCA9IHRydWU7XG4gICAgICAgIGVsc2UgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZWUge1xuICBjb25zdHJ1Y3RvcihpdGVyYWJsZSkge1xuICAgIHRoaXMuaXQgPSBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XG4gIH1cblxuICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChpIDwgdGhpcy52YWx1ZXMubGVuZ3RoIHx8ICF0aGlzLmZpbmlzaGVkKSB7XG4gICAgICBpZiAoaSA8IHRoaXMudmFsdWVzLmxlbmd0aCkge1xuICAgICAgICB5aWVsZCB0aGlzLnZhbHVlc1tpKytdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHsgdmFsdWUsIGRvbmUgfSA9IHRoaXMuaXQubmV4dCgpO1xuICAgICAgICBpZiAoZG9uZSkgdGhpcy5maW5pc2hlZCA9IHRydWU7XG4gICAgICAgIGVsc2UgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy90ZWUvaW5kZXguanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdFxuICogdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2ZcbiAqIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZVxuICogTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiAqIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEFzeW5jVGVlIH0gZnJvbSAnQGFubm90YXRvci90ZWUnO1xuaW1wb3J0IHtcbiAgY3JlYXRlU2VsZWN0b3JDcmVhdG9yIGFzIF9jcmVhdGVTZWxlY3RvckNyZWF0b3IsXG4gIGRlZmF1bHRNZW1vaXplLFxufSBmcm9tICdyZXNlbGVjdCc7XG5cbmNvbnN0IGlkZW50aXR5ID0gYSA9PiBhO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JDcmVhdG9yKG1lbW9pemUsIC4uLm1lbW9pemVPcHRpb25zKSB7XG4gIGNvbnN0IGNyZWF0ZVNlbGVjdG9yID0gX2NyZWF0ZVNlbGVjdG9yQ3JlYXRvcihtZW1vaXplLCAuLi5tZW1vaXplT3B0aW9ucyk7XG4gIHJldHVybiByZXN1bHRGdW5jID0+IHtcbiAgICBjb25zdCB3cmFwcGVyRnVuYyA9ICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBpdGVyYWJsZSA9IHJlc3VsdEZ1bmMoLi4uYXJncyk7XG4gICAgICByZXR1cm4gbmV3IEFzeW5jVGVlKGl0ZXJhYmxlKTtcbiAgICB9O1xuICAgIHJldHVybiBjcmVhdGVTZWxlY3RvcihpZGVudGl0eSwgd3JhcHBlckZ1bmMpO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvckNyZWF0b3IoZGVmYXVsdE1lbW9pemUpO1xuXG5leHBvcnQgeyBkZWZhdWx0TWVtb2l6ZSB9IGZyb20gJ3Jlc2VsZWN0JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3NlbGVjdG9yL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==