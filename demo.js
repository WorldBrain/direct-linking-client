webpackJsonp([1],{

/***/ "./demo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_builtin_es6_asyncIterator__ = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/asyncIterator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_builtin_es6_asyncToGenerator__ = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_typed_array_buffer__ = __webpack_require__("./node_modules/core-js/modules/es6.typed.array-buffer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_typed_array_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_typed_array_buffer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_typed_int8_array__ = __webpack_require__("./node_modules/core-js/modules/es6.typed.int8-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_typed_int8_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_typed_int8_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_modules_es6_typed_uint8_array__ = __webpack_require__("./node_modules/core-js/modules/es6.typed.uint8-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_modules_es6_typed_uint8_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_modules_es6_typed_uint8_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_modules_es6_typed_uint8_clamped_array__ = __webpack_require__("./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_modules_es6_typed_uint8_clamped_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_modules_es6_typed_uint8_clamped_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_modules_es6_typed_int16_array__ = __webpack_require__("./node_modules/core-js/modules/es6.typed.int16-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_modules_es6_typed_int16_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_modules_es6_typed_int16_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_modules_es6_typed_uint16_array__ = __webpack_require__("./node_modules/core-js/modules/es6.typed.uint16-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_modules_es6_typed_uint16_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_modules_es6_typed_uint16_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_modules_es6_typed_int32_array__ = __webpack_require__("./node_modules/core-js/modules/es6.typed.int32-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_modules_es6_typed_int32_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_modules_es6_typed_int32_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_modules_es6_typed_uint32_array__ = __webpack_require__("./node_modules/core-js/modules/es6.typed.uint32-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_modules_es6_typed_uint32_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_modules_es6_typed_uint32_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_modules_es6_typed_float32_array__ = __webpack_require__("./node_modules/core-js/modules/es6.typed.float32-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_modules_es6_typed_float32_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_modules_es6_typed_float32_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_modules_es6_typed_float64_array__ = __webpack_require__("./node_modules/core-js/modules/es6.typed.float64-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_modules_es6_typed_float64_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_modules_es6_typed_float64_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_modules_es6_map__ = __webpack_require__("./node_modules/core-js/modules/es6.map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_modules_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_modules_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_modules_es6_set__ = __webpack_require__("./node_modules/core-js/modules/es6.set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_modules_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_modules_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_modules_es6_weak_map__ = __webpack_require__("./node_modules/core-js/modules/es6.weak-map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_modules_es6_weak_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_modules_es6_weak_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_modules_es6_weak_set__ = __webpack_require__("./node_modules/core-js/modules/es6.weak-set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_modules_es6_weak_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_modules_es6_weak_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_core_js_modules_es6_promise__ = __webpack_require__("./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_core_js_modules_es6_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_core_js_modules_es6_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_core_js_modules_es6_symbol__ = __webpack_require__("./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_core_js_modules_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_core_js_modules_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_core_js_modules_es6_function_name__ = __webpack_require__("./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_core_js_modules_es6_function_name___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_core_js_modules_es6_function_name__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_core_js_modules_es6_array_from__ = __webpack_require__("./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_core_js_modules_es6_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_core_js_modules_es6_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_core_js_modules_es7_object_values__ = __webpack_require__("./node_modules/core-js/modules/es7.object.values.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_core_js_modules_es7_object_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_core_js_modules_es7_object_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_core_js_modules_es7_object_entries__ = __webpack_require__("./node_modules/core-js/modules/es7.object.entries.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_core_js_modules_es7_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_core_js_modules_es7_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_core_js_modules_es7_object_get_own_property_descriptors__ = __webpack_require__("./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_core_js_modules_es7_object_get_own_property_descriptors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_core_js_modules_es7_object_get_own_property_descriptors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_core_js_modules_es7_string_pad_start__ = __webpack_require__("./node_modules/core-js/modules/es7.string.pad-start.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_core_js_modules_es7_string_pad_start___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_core_js_modules_es7_string_pad_start__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_core_js_modules_es7_string_pad_end__ = __webpack_require__("./node_modules/core-js/modules/es7.string.pad-end.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_core_js_modules_es7_string_pad_end___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_core_js_modules_es7_string_pad_end__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_core_js_modules_es7_promise_finally__ = __webpack_require__("./node_modules/core-js/modules/es7.promise.finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_core_js_modules_es7_promise_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_core_js_modules_es7_promise_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__annotator_fragment_identifier__ = __webpack_require__("./packages/fragment-identifier/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__annotator_dom__ = __webpack_require__("./packages/dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__mark_js__ = __webpack_require__("./demo/mark.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__search_js__ = __webpack_require__("./demo/search.js");



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

/* global corpus, debug, module, selectable */

























 // import { createAnySelector } from '@annotator/any';




const ui = __webpack_require__("./demo/ui.js");

const refresh =
/*#__PURE__*/
function () {
  var _ref = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_builtin_es6_asyncToGenerator__["a" /* default */])(function* () {
    corpus.innerHTML = corpus.innerText;
    debug.classList.remove('error');
    const identifier = window.location.hash.slice(1);
    if (!identifier) return;

    try {
      const _fragment$parse = __WEBPACK_IMPORTED_MODULE_26__annotator_fragment_identifier__["parse"](identifier),
            selector = _fragment$parse.selector;

      debug.innerText = JSON.stringify(selector, null, 2);
      const results = Object(__WEBPACK_IMPORTED_MODULE_29__search_js__["default"])(corpus, selector);
      const ranges = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;

      var _iteratorError;

      try {
        for (var _iterator = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_builtin_es6_asyncIterator__["a" /* default */])(results), _step, _value; _step = yield _iterator.next(), _iteratorNormalCompletion = _step.done, _value = yield _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
          let range = _value;
          ranges.push(range);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            yield _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      for (var _i = 0; _i < ranges.length; _i++) {
        let range = ranges[_i];
        Object(__WEBPACK_IMPORTED_MODULE_28__mark_js__["default"])(range);
      }
    } catch (e) {
      debug.classList.add('error');
      debug.innerText = JSON.stringify(e, null, 2);
      if (e instanceof __WEBPACK_IMPORTED_MODULE_26__annotator_fragment_identifier__["SyntaxError"]) return;else throw e;
    }
  });

  return function refresh() {
    return _ref.apply(this, arguments);
  };
}();

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', refresh);
  refresh();
});
document.addEventListener('selectionchange', onSelectionChange);

function onSelectionChange() {
  return _onSelectionChange.apply(this, arguments);
}

function _onSelectionChange() {
  _onSelectionChange = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_builtin_es6_asyncToGenerator__["a" /* default */])(function* () {
    const selection = document.getSelection();

    if (selection === null || selection.isCollapsed) {
      return;
    }

    const range = selection.getRangeAt(0);

    if (!isWithinNode(range, selectable)) {
      return;
    }

    const selectableRange = document.createRange();
    selectableRange.selectNodeContents(selectable);
    const descriptor = yield Object(__WEBPACK_IMPORTED_MODULE_27__annotator_dom__["a" /* describeTextQuoteByRange */])({
      range,
      context: selectableRange
    });
    var hash = __WEBPACK_IMPORTED_MODULE_26__annotator_fragment_identifier__["stringify"](descriptor);
    ui.attach(selection, hash);
  });
  return _onSelectionChange.apply(this, arguments);
}

function isWithinNode(range, node) {
  const nodeRange = document.createRange();
  nodeRange.selectNode(node);
  return range.compareBoundaryPoints(Range.START_TO_START, nodeRange) >= 0 && range.compareBoundaryPoints(Range.END_TO_END, nodeRange) <= 0;
}

if (true) {
  module.hot.accept(["./packages/fragment-identifier/index.js", "./demo/mark.js", "./demo/search.js"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ __WEBPACK_IMPORTED_MODULE_26__annotator_fragment_identifier__ = __webpack_require__("./packages/fragment-identifier/index.js"); /* harmony import */ __WEBPACK_IMPORTED_MODULE_28__mark_js__ = __webpack_require__("./demo/mark.js"); /* harmony import */ __WEBPACK_IMPORTED_MODULE_29__search_js__ = __webpack_require__("./demo/search.js"); (refresh)(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}

/***/ }),

/***/ "./demo/mark.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = mark;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom_highlight_range__ = __webpack_require__("./node_modules/dom-highlight-range/highlight-range.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom_highlight_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dom_highlight_range__);
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

/**
 * Surround the contents of the given range with a mark tag.
 * @param {Range} range
 */

function mark(range) {
  __WEBPACK_IMPORTED_MODULE_0_dom_highlight_range___default()(range, 'highlighted');
}

/***/ }),

/***/ "./demo/search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/asyncIterator.js
var asyncIterator = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/asyncIterator.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/awaitAsyncGenerator.js
var awaitAsyncGenerator = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/awaitAsyncGenerator.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/wrapAsyncGenerator.js + 1 modules
var wrapAsyncGenerator = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/wrapAsyncGenerator.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/asyncGeneratorDelegate.js
var asyncGeneratorDelegate = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/asyncGeneratorDelegate.js");

// EXTERNAL MODULE: ./node_modules/reselect/lib/index.js
var lib = __webpack_require__("./node_modules/reselect/lib/index.js");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./packages/text/index.js
var packages_text = __webpack_require__("./packages/text/index.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/slicedToArray.js
var slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/slicedToArray.js");

// EXTERNAL MODULE: ./packages/selector/index.js + 1 modules
var packages_selector = __webpack_require__("./packages/selector/index.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator.js");

// EXTERNAL MODULE: ./node_modules/cartesian/index.js
var cartesian = __webpack_require__("./node_modules/cartesian/index.js");
var cartesian_default = /*#__PURE__*/__webpack_require__.n(cartesian);

// CONCATENATED MODULE: ./packages/range/cartesian.js






/* harmony default export */ var range_cartesian = (cartesian_cartesian);

function cartesian_cartesian() {
  return _cartesian.apply(this, arguments);
} // eslint-disable-next-line no-unused-vars


function _cartesian() {
  _cartesian = Object(wrapAsyncGenerator["a" /* default */])(function* (...iterables) {
    // We listen to all iterators in parallel, while logging all the values they
    // produce. Whenever an iterator produces a value, we produce and yield all
    // combinations of that value with the logged values from other iterators.
    // Every combination is thus made exactly once, and as soon as it is known.
    const iterators = iterables.map(iterable => iterable[Symbol.asyncIterator]()); // Initialise an empty log for each iterable.

    const logs = iterables.map(() => []);
    const nextValuePromises = iterators.map((iterator, iterableNr) => iterator.next().then(
    /*#__PURE__*/
    function () {
      var _ref = Object(asyncToGenerator["a" /* default */])(function* ({
        value,
        done
      }) {
        return {
          value: yield value,
          done
        };
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).then( // Label the result with iterableNr, to know which iterable produced
    // this value after Promise.race below.
    ({
      value,
      done
    }) => ({
      value,
      done,
      iterableNr
    }))); // Keep listening as long as any of the iterables is not yet exhausted.

    while (nextValuePromises.some(p => p !== null)) {
      // Wait until any of the active iterators has produced a new value.
      const _ref2 = yield Object(awaitAsyncGenerator["a" /* default */])(Promise.race(nextValuePromises.filter(p => p !== null))),
            value = _ref2.value,
            done = _ref2.done,
            iterableNr = _ref2.iterableNr; // If this iterable was exhausted, stop listening to it and move on.


      if (done) {
        nextValuePromises[iterableNr] = null;
        continue;
      } // Produce all combinations of the received value with the logged values
      // from the other iterables.


      const arrays = [...logs];
      arrays[iterableNr] = [value];
      const combinations = cartesian_default()(arrays); // Append the received value to the right log.

      logs[iterableNr] = [...logs[iterableNr], value]; // Start listening for the next value of this iterable.

      nextValuePromises[iterableNr] = iterators[iterableNr].next().then(
      /*#__PURE__*/
      function () {
        var _ref3 = Object(asyncToGenerator["a" /* default */])(function* ({
          value,
          done
        }) {
          return {
            value: yield value,
            done
          };
        });

        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }()).then(({
        value,
        done
      }) => ({
        value,
        done,
        iterableNr
      })); // Yield each of the produced combinations separately.

      yield* Object(asyncGeneratorDelegate["a" /* default */])(Object(asyncIterator["a" /* default */])(combinations), awaitAsyncGenerator["a" /* default */]);
    }
  });
  return _cartesian.apply(this, arguments);
}

function test() {
  return _test.apply(this, arguments);
}

function _test() {
  _test = Object(asyncToGenerator["a" /* default */])(function* () {
    function gen1() {
      return _gen.apply(this, arguments);
    }

    function _gen() {
      _gen = Object(wrapAsyncGenerator["a" /* default */])(function* () {
        yield 1;
        yield Promise.resolve(2);
        yield 3;
      });
      return _gen.apply(this, arguments);
    }

    function gen2() {
      return _gen2.apply(this, arguments);
    }

    function _gen2() {
      _gen2 = Object(wrapAsyncGenerator["a" /* default */])(function* () {
        yield 4;
      });
      return _gen2.apply(this, arguments);
    }

    function gen3() {
      return _gen3.apply(this, arguments);
    }

    function _gen3() {
      _gen3 = Object(wrapAsyncGenerator["a" /* default */])(function* () {
        yield 5;
        yield 6;
      });
      return _gen3.apply(this, arguments);
    }

    const cart = cartesian_cartesian(gen1(), gen2(), gen3()); // eslint-disable-next-line no-unused-vars

    const expected = [[1, 4, 5], [2, 4, 5], [3, 4, 5], [1, 4, 6], [2, 4, 6], [3, 4, 6]];
    const result = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = Object(asyncIterator["a" /* default */])(cart), _step, _value; _step = yield _iterator.next(), _iteratorNormalCompletion = _step.done, _value = yield _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
        let value = _value;
        result.push(value);
      } // TODO assert that result equals expected.

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
  return _test.apply(this, arguments);
}
// CONCATENATED MODULE: ./packages/range/index.js






function createRangeSelector({
  createAnySelector
}) {
  const startSelector = createAnySelector();
  const endSelector = createAnySelector();

  function rangeSelector(_x) {
    return _rangeSelector.apply(this, arguments);
  }

  function _rangeSelector() {
    _rangeSelector = Object(wrapAsyncGenerator["a" /* default */])(function* ({
      descriptors,
      context
    }) {
      const descriptor = descriptors[0]; // TODO handle multiple descriptors

      const startMatches = startSelector({
        descriptors: [descriptor.startSelector],
        context
      });
      const endMatches = endSelector({
        descriptors: [descriptor.endSelector],
        context
      });
      const combinations = range_cartesian(startMatches, endMatches);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;

      var _iteratorError;

      try {
        for (var _iterator = Object(asyncIterator["a" /* default */])(combinations), _step, _value; _step = yield Object(awaitAsyncGenerator["a" /* default */])(_iterator.next()), _iteratorNormalCompletion = _step.done, _value = yield Object(awaitAsyncGenerator["a" /* default */])(_step.value), !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
          let _value2 = _value,
              _value3 = Object(slicedToArray["a" /* default */])(_value2, 2),
              start = _value3[0],
              end = _value3[1];

          if (start.index > end.index) {
            continue;
          }

          const text = rangeBetween({
            start,
            end,
            context
          });
          const result = [text];
          result.index = start.index;
          result.input = context;
          result.descriptor = descriptor;
          yield result;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            yield Object(awaitAsyncGenerator["a" /* default */])(_iterator.return());
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
    return _rangeSelector.apply(this, arguments);
  }

  return Object(packages_selector["createSelector"])(rangeSelector);
}

function rangeBetween({
  start,
  end,
  context
}) {
  const range = context.substring(start.index, end.index);
  return range;
}
// CONCATENATED MODULE: ./packages/refinedBy/index.js




function makeRefinable(selector, {
  createAnySelector
}) {
  const memoizedCreateAnySelector = Object(lib["createSelector"])(() => createAnySelector());

  function refinableSelector(_x) {
    return _refinableSelector.apply(this, arguments);
  }

  function _refinableSelector() {
    _refinableSelector = Object(wrapAsyncGenerator["a" /* default */])(function* ({
      descriptors,
      context
    }) {
      const matches = selector({
        descriptors,
        context
      });
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;

      var _iteratorError;

      try {
        for (var _iterator = Object(asyncIterator["a" /* default */])(matches), _step, _value; _step = yield Object(awaitAsyncGenerator["a" /* default */])(_iterator.next()), _iteratorNormalCompletion = _step.done, _value = yield Object(awaitAsyncGenerator["a" /* default */])(_step.value), !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
          let match = _value;
          const refiningDescriptor = match.descriptor.refinedBy;

          if (refiningDescriptor) {
            const anySelector = memoizedCreateAnySelector();
            const refiningMatches = anySelector({
              descriptors: [refiningDescriptor],
              context: matchAsContext(match)
            });
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;

            var _iteratorError2;

            try {
              for (var _iterator2 = Object(asyncIterator["a" /* default */])(refiningMatches), _step2, _value2; _step2 = yield Object(awaitAsyncGenerator["a" /* default */])(_iterator2.next()), _iteratorNormalCompletion2 = _step2.done, _value2 = yield Object(awaitAsyncGenerator["a" /* default */])(_step2.value), !_iteratorNormalCompletion2; _iteratorNormalCompletion2 = true) {
                let refiningMatch = _value2;
                const refinedMatch = composeMatches(refiningMatch, match);
                yield refinedMatch;
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  yield Object(awaitAsyncGenerator["a" /* default */])(_iterator2.return());
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          } else {
            yield match;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            yield Object(awaitAsyncGenerator["a" /* default */])(_iterator.return());
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
    return _refinableSelector.apply(this, arguments);
  }

  return refinableSelector;
}

function matchAsContext(match) {
  return match[0];
}

function composeMatches(...matches) {
  return matches.reverse().reduce((match, refiningMatch) => {
    const refinedMatch = [...refiningMatch];
    refinedMatch.index = match.index + refiningMatch.index;
    refinedMatch.input = match.input;
    refinedMatch.descriptor = match.descriptor;
    return refinedMatch;
  });
}
// CONCATENATED MODULE: ./packages/any/index.js





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




function createAnySelectorCreator(selectorCreatorsByType) {
  function selectSelector(type) {
    const selectorCreator = selectorCreatorsByType[type];

    if (selectorCreator === undefined) {
      throw new Error(`Unsupported selector type: ${type}`);
    }

    let selector = selectorCreator({
      createAnySelector
    });
    selector = makeRefinable(selector, {
      createAnySelector
    });
    return selector;
  }

  function createAnySelector() {
    const memoizedSelectSelector = Object(lib["createSelector"])(descriptor => descriptor.type, type => selectSelector(type));

    function anySelector(_x) {
      return _anySelector.apply(this, arguments);
    } // Not wrapped with Tee; we expect the selector implementations to do that.


    function _anySelector() {
      _anySelector = Object(wrapAsyncGenerator["a" /* default */])(function* ({
        descriptors,
        context
      }) {
        const descriptor = descriptors[0]; // TODO handle multiple descriptors

        const selectorFunc = memoizedSelectSelector(descriptor);
        yield* Object(asyncGeneratorDelegate["a" /* default */])(Object(asyncIterator["a" /* default */])(selectorFunc({
          descriptors: [descriptor],
          context
        })), awaitAsyncGenerator["a" /* default */]);
      });
      return _anySelector.apply(this, arguments);
    }

    return anySelector;
  }

  return createAnySelector;
}
const allSelectorTypes = {
  TextQuoteSelector: packages_text["a" /* createTextQuoteSelector */],
  RangeSelector: createRangeSelector
};
const any_createAnySelector = createAnySelectorCreator(allSelectorTypes);
// CONCATENATED MODULE: ./demo/search.js




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

/**
 * Locate a selector.
 * @param {Node} root node
 * @param {Selector} descriptor
 * @return {Range}
 */

/* harmony default export */ var search = __webpack_exports__["default"] = (search_search);
const search_selectorFunc = any_createAnySelector();

function search_search(_x, _x2) {
  return _search.apply(this, arguments);
}
/**
 * Iterate over the nodes of a sub-tree of the document.
 * @param {Node} node
 */


function _search() {
  _search = Object(wrapAsyncGenerator["a" /* default */])(function* (root, descriptor) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = nodeIterator(root)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        const node = _step3.value;
        if (!node.nodeValue) continue;
        const matches = search_selectorFunc({
          descriptors: [descriptor],
          context: node.nodeValue
        });
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;

        var _iteratorError;

        try {
          for (var _iterator = Object(asyncIterator["a" /* default */])(matches), _step, _value; _step = yield Object(awaitAsyncGenerator["a" /* default */])(_iterator.next()), _iteratorNormalCompletion = _step.done, _value = yield Object(awaitAsyncGenerator["a" /* default */])(_step.value), !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
            let match = _value;
            const startIndex = match.index;
            const endIndex = startIndex + match[0].length;
            const range = document.createRange();
            range.setStart(node, startIndex);
            range.setEnd(node, endIndex);
            yield range;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              yield Object(awaitAsyncGenerator["a" /* default */])(_iterator.return());
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  });
  return _search.apply(this, arguments);
}

function* nodeIterator(node) {
  yield node;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = node.childNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      const child = _step2.value;
      yield* nodeIterator(child);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

/***/ }),

/***/ "./demo/ui.js":
/***/ (function(module, exports, __webpack_require__) {

const html = __webpack_require__("./node_modules/bel/browser.js");

const got = __webpack_require__("./node_modules/got/index.js");

function attach(selection, hash) {
  var position = getposition(selection);
  console.log('position', position);
  var el = getel(hash, position, selection);
}

function getposition(sel) {
  // extract the last range in the selection
  // so we can get a bounding rect
  var rangeIdx = sel.rangeCount - 1;
  if (rangeIdx < 0) return null;
  var range = sel.getRangeAt(rangeIdx);
  var rect = range.getBoundingClientRect(); // calculate the menu position
  // the top of the menu is the bottom of the selection
  // the left of the menu is the middle of the selection

  var top = window.pageYOffset + rect.bottom;
  var left = window.pageXOffset + rect.left;
  return {
    top,
    left
  };
}

function getel(hash, position, selection) {
  // grab the existing element, or create it
  // if it doesn't exist
  var el = document.getElementById('direct-linker');

  if (!el) {
    el = html`
      <div id="direct-linker">
        <p>Create direct link</p>
      </div>
    `;
    hideeventually(el);
    document.body.appendChild(el);
  }

  el.style.top = `${position.top}px`;
  el.style.left = `${position.left}px`;
  el.style.display = 'block';
  el.onclick = submitLink(hash, selection);
  return el;
}

function submitLink(hash, selection) {
  var url = window.location.href.split('#');
  var linkdata = {
    url: url,
    title: window.document.title,
    selector: hash,
    quote: selection.toString()
  };
  got.post('https://memex.link', {
    body: linkdata
  }).then(res => {
    console.log('Successfully submitted link', res);
  }).catch(err => {
    console.error('Error submitting link:', err);
  });
}

function hideeventually(el) {
  document.addEventListener('selectionchange', destroy);

  function destroy() {
    el.style.display = 'none';
    el.onclick = null;
    document.removeEventListener('selectionchange', destroy);
  }
}

module.exports = {
  attach
};

/***/ }),

/***/ "./packages/dom/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/wrapAsyncGenerator.js + 1 modules
var wrapAsyncGenerator = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/wrapAsyncGenerator.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/awaitAsyncGenerator.js
var awaitAsyncGenerator = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/awaitAsyncGenerator.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/asyncIterator.js
var asyncIterator = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/asyncIterator.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/asyncGeneratorDelegate.js
var asyncGeneratorDelegate = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/asyncGeneratorDelegate.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/slicedToArray.js
var slicedToArray = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/slicedToArray.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator.js");

// EXTERNAL MODULE: ./node_modules/range-normalize/index.js
var range_normalize = __webpack_require__("./node_modules/range-normalize/index.js");
var range_normalize_default = /*#__PURE__*/__webpack_require__.n(range_normalize);

// EXTERNAL MODULE: ./packages/text/index.js
var packages_text = __webpack_require__("./packages/text/index.js");

// CONCATENATED MODULE: ./packages/dom/text/quote.js




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

/* global Range */


function describeTextQuoteByRange(_x) {
  return _describeTextQuoteByRange.apply(this, arguments);
}

function _describeTextQuoteByRange() {
  _describeTextQuoteByRange = Object(asyncToGenerator["a" /* default */])(function* ({
    range,
    context
  }) {
    // Shrink range to fit in context, if needed.
    if (range.compareBoundaryPoints(Range.END_TO_END, context) > 0) {
      range.setEnd(context.endContainer, context.endOffset);
    }

    if (range.compareBoundaryPoints(Range.START_TO_START, context) < 0) {
      range.setStart(context.startContainer, context.startOffset);
    }

    const contextText = context.cloneContents().textContent;
    const exact = range.cloneContents().textContent;
    const descriptor = {
      type: 'TextQuoteSelector',
      exact
    }; // FIXME We should get range index relative to context. Look at
    // dom-anchor-text-position? For now, we implement the easy case where the
    // ranges are within the same container.

    context = range_normalize_default()(context);
    range = range_normalize_default()(range);

    if (context.startContainer !== range.startContainer || context.startOffset !== 0) {
      throw new Error(`Context not equal to range's container; not implemented.`);
    }

    const rangeIndex = range.startOffset;
    const rangeEndIndex = range.endOffset;
    const selector = Object(packages_text["a" /* createTextQuoteSelector */])();
    const matches = selector({
      descriptors: [descriptor],
      context: contextText
    });
    const minSuffixes = [];
    const minPrefixes = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = Object(asyncIterator["a" /* default */])(matches), _step, _value; _step = yield _iterator.next(), _iteratorNormalCompletion = _step.done, _value = yield _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
        let match = _value;

        // For every match that is not our range, we look how many characters we
        // have to add as prefix or suffix to disambiguate.
        if (match.index !== rangeIndex) {
          const matchEndIndex = match.index + match[0].length;
          const suffixOverlap = overlap(contextText.substring(matchEndIndex), contextText.substring(rangeEndIndex));
          minSuffixes.push(suffixOverlap + 1);
          const prefixOverlap = overlapRight(contextText.substring(0, match.index), contextText.substring(0, rangeIndex));
          minPrefixes.push(prefixOverlap + 1);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    const _minimalSolution = minimalSolution(minSuffixes, minPrefixes),
          _minimalSolution2 = Object(slicedToArray["a" /* default */])(_minimalSolution, 2),
          minSuffix = _minimalSolution2[0],
          minPrefix = _minimalSolution2[1];

    if (minSuffix > 0) {
      descriptor.suffix = contextText.substring(rangeEndIndex, rangeEndIndex + minSuffix);
    }

    if (minPrefix > 0) {
      descriptor.prefix = contextText.substring(rangeIndex - minPrefix, rangeIndex);
    }

    return descriptor;
  });
  return _describeTextQuoteByRange.apply(this, arguments);
}

function overlap(text1, text2) {
  let count = 0;

  while (text1[count] === text2[count]) {
    count++;

    if (count >= text1.length) {
      return Infinity;
    }
  }

  return count;
}

function overlapRight(text1, text2) {
  let count = 0;

  while (text1[text1.length - 1 - count] === text2[text2.length - 1 - count]) {
    count++;

    if (count >= text1.length) {
      return Infinity;
    }
  }

  return count;
}

function minimalSolution(reqs1, reqs2) {
  if (reqs1.length !== reqs2.length) {
    throw new Error('unequal lengths');
  } // Add 0 as an option to try.


  reqs1.push(0);
  reqs2.push(0);
  let bestResult = [Infinity, Infinity];

  for (let i = 0; i < reqs1.length; i++) {
    const req1 = reqs1[i]; // The values to satisfy for req2, given the proposed req1.

    const reqsToSatisfy = reqs1.map((v, i) => v > req1 ? reqs2[i] : 0); // Take the lowest value that satisfies them all.

    const req2 = Math.max(...reqsToSatisfy); // If this combination is the best so far, remember it.

    if (req1 + req2 < bestResult[0] + bestResult[1]) {
      bestResult = [req1, req2];
    }
  }

  return bestResult;
}
// CONCATENATED MODULE: ./packages/dom/text/index.js
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

// EXTERNAL MODULE: ./packages/selector/index.js + 1 modules
var packages_selector = __webpack_require__("./packages/selector/index.js");

// CONCATENATED MODULE: ./packages/dom/index.js
/* unused harmony export createCssSelector */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return describeTextQuoteByRange; });





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



function domEqualityCheck(a, b) {
  if (a !== b) return false; // TODO:
  // - weakref the node
  // - attach mutation listener
  // - invalidate on mutations

  return true;
}

const createDomSelector = Object(packages_selector["createSelectorCreator"])(packages_selector["defaultMemoize"], domEqualityCheck);
function createCssSelector(selectors) {
  const cssSelector = selectors.map(({
    value
  }) => value).join(',');

  function exec(_x) {
    return _exec.apply(this, arguments);
  }

  function _exec() {
    _exec = Object(wrapAsyncGenerator["a" /* default */])(function* (context) {
      yield* Object(asyncGeneratorDelegate["a" /* default */])(Object(asyncIterator["a" /* default */])(context.querySelectorAll(cssSelector)), awaitAsyncGenerator["a" /* default */]);
    });
    return _exec.apply(this, arguments);
  }

  return createDomSelector(exec);
}

/***/ }),

/***/ "./packages/fragment-identifier/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./packages/fragment-identifier/fragment.js
// Generated by PEG.js v0.11.0-dev, https://pegjs.org/
function peg$subclass(child, parent) {
  function C() {
    this.constructor = child;
  }

  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError"; // istanbul ignore next

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function (expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function literal(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },
    class: function _class(expectation) {
      var escapedParts = expectation.parts.map(function (part) {
        return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
      });
      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },
    any: function any() {
      return "any character";
    },
    end: function end() {
      return "end of input";
    },
    other: function other(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (ch) {
      return "\\x0" + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return "\\x" + hex(ch);
    });
  }

  function classEscape(s) {
    return s.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (ch) {
      return "\\x0" + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return "\\x" + hex(ch);
    });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;
    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }

      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};
  var peg$FAILED = {};
  var peg$startRuleFunctions = {
    start: peg$parsestart
  };
  var peg$startRuleFunction = peg$parsestart;
  var peg$c0 = "state";
  var peg$c1 = peg$literalExpectation("state", false);
  var peg$c2 = "(";
  var peg$c3 = peg$literalExpectation("(", false);
  var peg$c4 = ")";
  var peg$c5 = peg$literalExpectation(")", false);

  var peg$c6 = function peg$c6(p) {
    return {
      state: p
    };
  };

  var peg$c7 = "selector";
  var peg$c8 = peg$literalExpectation("selector", false);

  var peg$c9 = function peg$c9(p) {
    return {
      selector: p
    };
  };

  var peg$c10 = "state=";
  var peg$c11 = peg$literalExpectation("state=", false);

  var peg$c12 = function peg$c12(v) {
    return {
      state: v
    };
  };

  var peg$c13 = "selector=";
  var peg$c14 = peg$literalExpectation("selector=", false);

  var peg$c15 = function peg$c15(v) {
    return {
      selector: v
    };
  };

  var peg$c16 = ",";
  var peg$c17 = peg$literalExpectation(",", false);

  var peg$c18 = function peg$c18(k1, k2) {
    var f = k1;

    for (var i = 0; i < k2.length; i++) {
      f = collect(f, k2[i][1]);
    }

    return f;
  };

  var peg$c19 = "refinedBy=selector(";
  var peg$c20 = peg$literalExpectation("refinedBy=selector(", false);

  var peg$c21 = function peg$c21(p) {
    return {
      refinedBy: p
    };
  };

  var peg$c22 = "refinedBy=state(";
  var peg$c23 = peg$literalExpectation("refinedBy=state(", false);
  var peg$c24 = "startSelector=selector(";
  var peg$c25 = peg$literalExpectation("startSelector=selector(", false);

  var peg$c26 = function peg$c26(p) {
    return {
      startSelector: p
    };
  };

  var peg$c27 = "endSelector=selector(";
  var peg$c28 = peg$literalExpectation("endSelector=selector(", false);

  var peg$c29 = function peg$c29(p) {
    return {
      endSelector: p
    };
  };

  var peg$c30 = "=";
  var peg$c31 = peg$literalExpectation("=", false);

  var peg$c32 = function peg$c32(key, value) {
    var f = {};
    var num = Number(value);
    f[key] = isNaN(num) ? decodeURIComponent(value) : num;
    return f;
  };

  var peg$c33 = function peg$c33(chars) {
    return chars.join("");
  };

  var peg$c34 = /^[a-zA-Z0-9<>\/[\]:%+@.\-!$&;*_]/;
  var peg$c35 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "<", ">", "/", "[", "]", ":", "%", "+", "@", ".", "-", "!", "$", "&", ";", "*", "_"], false, false);
  var peg$currPos = 0;
  var peg$savedPos = 0;
  var peg$posDetailsCache = [{
    line: 1,
    column: 1
  }];
  var peg$maxFailPos = 0;
  var peg$maxFailExpected = [];
  var peg$silentFails = 0;
  var peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return [peg$savedPos, peg$currPos];
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined ? location : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location);
  }

  function error(message, location) {
    location = location !== undefined ? location : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return {
      type: "literal",
      text: text,
      ignoreCase: ignoreCase
    };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return {
      type: "class",
      parts: parts,
      inverted: inverted,
      ignoreCase: ignoreCase
    };
  }

  function peg$anyExpectation() {
    return {
      type: "any"
    };
  }

  function peg$endExpectation() {
    return {
      type: "end"
    };
  }

  function peg$otherExpectation(description) {
    return {
      type: "other",
      description: description
    };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      p = pos - 1;

      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos);
    var endPosDetails = peg$computePosDetails(endPos);
    return {
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
  }

  function peg$parsestart() {
    var s0;
    s0 = peg$parsetop();
    return s0;
  }

  function peg$parsetop() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 5) === peg$c0) {
      s1 = peg$c0;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c1);
      }
    }

    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 40) {
        s2 = peg$c2;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c3);
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parseparams();

        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 41) {
            s4 = peg$c4;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c5);
            }
          }

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$c6(s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;

      if (input.substr(peg$currPos, 8) === peg$c7) {
        s1 = peg$c7;
        peg$currPos += 8;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c8);
        }
      }

      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 40) {
          s2 = peg$c2;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c3);
          }
        }

        if (s2 !== peg$FAILED) {
          s3 = peg$parseparams();

          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 41) {
              s4 = peg$c4;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c5);
              }
            }

            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$c9(s3);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;

        if (input.substr(peg$currPos, 6) === peg$c10) {
          s1 = peg$c10;
          peg$currPos += 6;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c11);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parseatom();

          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$c12(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$currPos;

          if (input.substr(peg$currPos, 9) === peg$c13) {
            s1 = peg$c13;
            peg$currPos += 9;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c14);
            }
          }

          if (s1 !== peg$FAILED) {
            s2 = peg$parseatom();

            if (s2 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$c15(s2);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }
    }

    return s0;
  }

  function peg$parseparams() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$parsekey_value_pair();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 44) {
        s4 = peg$c16;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c17);
        }
      }

      if (s4 !== peg$FAILED) {
        s5 = peg$parsekey_value_pair();

        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 44) {
          s4 = peg$c16;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c17);
          }
        }

        if (s4 !== peg$FAILED) {
          s5 = peg$parsekey_value_pair();

          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$c18(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsekey_value_pair() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 19) === peg$c19) {
      s1 = peg$c19;
      peg$currPos += 19;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c20);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parseparams();

      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 41) {
          s3 = peg$c4;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c5);
          }
        }

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$c21(s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;

      if (input.substr(peg$currPos, 16) === peg$c22) {
        s1 = peg$c22;
        peg$currPos += 16;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c23);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parseparams();

        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 41) {
            s3 = peg$c4;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c5);
            }
          }

          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$c21(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;

        if (input.substr(peg$currPos, 23) === peg$c24) {
          s1 = peg$c24;
          peg$currPos += 23;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c25);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parseparams();

          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 41) {
              s3 = peg$c4;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c5);
              }
            }

            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$c26(s2);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$currPos;

          if (input.substr(peg$currPos, 21) === peg$c27) {
            s1 = peg$c27;
            peg$currPos += 21;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c28);
            }
          }

          if (s1 !== peg$FAILED) {
            s2 = peg$parseparams();

            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s3 = peg$c4;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c5);
                }
              }

              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$c29(s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }

          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseatom();

            if (s1 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 61) {
                s2 = peg$c30;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c31);
                }
              }

              if (s2 !== peg$FAILED) {
                s3 = peg$parseatom();

                if (s3 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$c32(s1, s3);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseatom() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsevalidchar();

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsevalidchar();
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c33(s1);
    }

    s0 = s1;
    return s0;
  }

  function peg$parsevalidchar() {
    var s0;

    if (peg$c34.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c35);
      }
    }

    return s0;
  }

  function collect() {
    var ret = {};
    var len = arguments.length;

    for (var i = 0; i < len; i++) {
      for (var p in arguments[i]) {
        if (arguments[i].hasOwnProperty(p)) {
          ret[p] = arguments[i][p];
        }
      }
    }

    return ret;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
  }
}


/* harmony default export */ var fragment = ({
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
});
// CONCATENATED MODULE: ./packages/fragment-identifier/index.js
/* harmony export (immutable) */ __webpack_exports__["stringify"] = stringify;
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SyntaxError", function() { return peg$SyntaxError; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "parse", function() { return peg$parse; });
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

/**
 * Convert a Selector or State into a fragment identifier string.
 * @param {(Selector|State)} resource
 * @return {string}
 */

function stringify(resource) {
  const data = Object.keys(resource).map(key => {
    let value = resource[key];
    if (value instanceof Object) value = value.valueOf();

    if (value instanceof Object) {
      value = stringify(value);
      return `${encodeURIComponent(key)}=${value}`;
    }

    return [key, value].map(encodeURIComponent).join('=');
  }).join(',');
  if (/Selector$/.test(resource.type)) return `selector(${data})`;
  if (/State$/.test(resource.type)) return `state(${data})`;
  throw new TypeError('Resource must be a Selector or State');
}

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

/***/ "./packages/text/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createTextQuoteSelector;
/* unused harmony export describeTextQuote */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_builtin_es6_awaitAsyncGenerator__ = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/awaitAsyncGenerator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_builtin_es6_wrapAsyncGenerator__ = __webpack_require__("./node_modules/@babel/runtime/helpers/builtin/es6/wrapAsyncGenerator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__annotator_selector__ = __webpack_require__("./packages/selector/index.js");



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

function createTextQuoteSelector() {
  function exec(_x) {
    return _exec.apply(this, arguments);
  }

  function _exec() {
    _exec = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_builtin_es6_wrapAsyncGenerator__["a" /* default */])(function* ({
      descriptors,
      context
    }) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = descriptors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          let descriptor = _step.value;
          const prefix = descriptor.prefix || '';
          const suffix = descriptor.suffix || '';
          const pattern = prefix + descriptor.exact + suffix;
          let lastIndex = 0;

          let next = () => context.indexOf(pattern, lastIndex);

          let match = next();

          while (match !== -1) {
            let result = [descriptor.exact];
            result.index = match + prefix.length;
            result.input = context;
            result.descriptor = descriptor;
            yield result;
            lastIndex = match + 1;
            match = next();
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
    return _exec.apply(this, arguments);
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2__annotator_selector__["createSelector"])(exec);
}
function describeTextQuote({
  context,
  startIndex,
  endIndex
}) {
  const exact = context.substring(startIndex, endIndex);
  return {
    type: 'TextQuoteSelector',
    exact
  };
}

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},["./demo/index.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy8uL2RlbW8vbWFyay5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yYW5nZS9jYXJ0ZXNpYW4uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmFuZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVmaW5lZEJ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2FueS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL3VpLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2RvbS90ZXh0L3F1b3RlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2RvbS90ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2RvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9mcmFnbWVudC1pZGVudGlmaWVyL2ZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2ZyYWdtZW50LWlkZW50aWZpZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvdGVlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3NlbGVjdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3RleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpIiwid2VicGFjazovLy91bnppcC1yZXNwb25zZSAoaWdub3JlZCkiXSwibmFtZXMiOlsidWkiLCJyZXF1aXJlIiwicmVmcmVzaCIsImNvcnB1cyIsImlubmVySFRNTCIsImlubmVyVGV4dCIsImRlYnVnIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaWRlbnRpZmllciIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInNsaWNlIiwic2VsZWN0b3IiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0cyIsInNlYXJjaCIsInJhbmdlcyIsInJhbmdlIiwicHVzaCIsIm1hcmsiLCJlIiwiYWRkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib25TZWxlY3Rpb25DaGFuZ2UiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJpc0NvbGxhcHNlZCIsImdldFJhbmdlQXQiLCJpc1dpdGhpbk5vZGUiLCJzZWxlY3RhYmxlIiwic2VsZWN0YWJsZVJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJkZXNjcmlwdG9yIiwiZGVzY3JpYmVSYW5nZSIsImNvbnRleHQiLCJhdHRhY2giLCJub2RlIiwibm9kZVJhbmdlIiwic2VsZWN0Tm9kZSIsImNvbXBhcmVCb3VuZGFyeVBvaW50cyIsIlJhbmdlIiwiU1RBUlRfVE9fU1RBUlQiLCJFTkRfVE9fRU5EIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwiaGlnaGxpZ2h0UmFuZ2UiLCJpdGVyYWJsZXMiLCJpdGVyYXRvcnMiLCJtYXAiLCJpdGVyYWJsZSIsIlN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJsb2dzIiwibmV4dFZhbHVlUHJvbWlzZXMiLCJpdGVyYXRvciIsIml0ZXJhYmxlTnIiLCJuZXh0IiwidGhlbiIsInZhbHVlIiwiZG9uZSIsInNvbWUiLCJwIiwiUHJvbWlzZSIsInJhY2UiLCJmaWx0ZXIiLCJhcnJheXMiLCJjb21iaW5hdGlvbnMiLCJjYXJ0ZXNpYW5BcnJheXMiLCJ0ZXN0IiwiZ2VuMSIsInJlc29sdmUiLCJnZW4yIiwiZ2VuMyIsImNhcnQiLCJjYXJ0ZXNpYW4iLCJleHBlY3RlZCIsInJlc3VsdCIsImNyZWF0ZVJhbmdlU2VsZWN0b3IiLCJjcmVhdGVBbnlTZWxlY3RvciIsInN0YXJ0U2VsZWN0b3IiLCJlbmRTZWxlY3RvciIsInJhbmdlU2VsZWN0b3IiLCJkZXNjcmlwdG9ycyIsInN0YXJ0TWF0Y2hlcyIsImVuZE1hdGNoZXMiLCJzdGFydCIsImVuZCIsImluZGV4IiwidGV4dCIsInJhbmdlQmV0d2VlbiIsImlucHV0IiwiY3JlYXRlQW5ub3RhdG9yU2VsZWN0b3IiLCJzdWJzdHJpbmciLCJtYWtlUmVmaW5hYmxlIiwibWVtb2l6ZWRDcmVhdGVBbnlTZWxlY3RvciIsImNyZWF0ZVNlbGVjdG9yIiwicmVmaW5hYmxlU2VsZWN0b3IiLCJtYXRjaGVzIiwibWF0Y2giLCJyZWZpbmluZ0Rlc2NyaXB0b3IiLCJyZWZpbmVkQnkiLCJhbnlTZWxlY3RvciIsInJlZmluaW5nTWF0Y2hlcyIsIm1hdGNoQXNDb250ZXh0IiwicmVmaW5pbmdNYXRjaCIsInJlZmluZWRNYXRjaCIsImNvbXBvc2VNYXRjaGVzIiwicmV2ZXJzZSIsInJlZHVjZSIsImNyZWF0ZUFueVNlbGVjdG9yQ3JlYXRvciIsInNlbGVjdG9yQ3JlYXRvcnNCeVR5cGUiLCJzZWxlY3RTZWxlY3RvciIsInR5cGUiLCJzZWxlY3RvckNyZWF0b3IiLCJ1bmRlZmluZWQiLCJFcnJvciIsIm1lbW9pemVkU2VsZWN0U2VsZWN0b3IiLCJzZWxlY3RvckZ1bmMiLCJhbGxTZWxlY3RvclR5cGVzIiwiVGV4dFF1b3RlU2VsZWN0b3IiLCJSYW5nZVNlbGVjdG9yIiwicm9vdCIsIm5vZGVJdGVyYXRvciIsIm5vZGVWYWx1ZSIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsImxlbmd0aCIsInNldFN0YXJ0Iiwic2V0RW5kIiwiY2hpbGROb2RlcyIsImNoaWxkIiwiaHRtbCIsImdvdCIsInBvc2l0aW9uIiwiZ2V0cG9zaXRpb24iLCJjb25zb2xlIiwibG9nIiwiZWwiLCJnZXRlbCIsInNlbCIsInJhbmdlSWR4IiwicmFuZ2VDb3VudCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJwYWdlWU9mZnNldCIsImJvdHRvbSIsImxlZnQiLCJwYWdlWE9mZnNldCIsImdldEVsZW1lbnRCeUlkIiwiaGlkZWV2ZW50dWFsbHkiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsImRpc3BsYXkiLCJvbmNsaWNrIiwic3VibWl0TGluayIsInVybCIsImhyZWYiLCJzcGxpdCIsImxpbmtkYXRhIiwidGl0bGUiLCJxdW90ZSIsInRvU3RyaW5nIiwicG9zdCIsInJlcyIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJkZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV4cG9ydHMiLCJkZXNjcmliZVRleHRRdW90ZUJ5UmFuZ2UiLCJlbmRDb250YWluZXIiLCJlbmRPZmZzZXQiLCJzdGFydENvbnRhaW5lciIsInN0YXJ0T2Zmc2V0IiwiY29udGV4dFRleHQiLCJjbG9uZUNvbnRlbnRzIiwidGV4dENvbnRlbnQiLCJleGFjdCIsIm5vcm1hbGl6ZVJhbmdlIiwicmFuZ2VJbmRleCIsInJhbmdlRW5kSW5kZXgiLCJjcmVhdGVUZXh0UXVvdGVTZWxlY3RvciIsIm1pblN1ZmZpeGVzIiwibWluUHJlZml4ZXMiLCJtYXRjaEVuZEluZGV4Iiwic3VmZml4T3ZlcmxhcCIsIm92ZXJsYXAiLCJwcmVmaXhPdmVybGFwIiwib3ZlcmxhcFJpZ2h0IiwibWluaW1hbFNvbHV0aW9uIiwibWluU3VmZml4IiwibWluUHJlZml4Iiwic3VmZml4IiwicHJlZml4IiwidGV4dDEiLCJ0ZXh0MiIsImNvdW50IiwiSW5maW5pdHkiLCJyZXFzMSIsInJlcXMyIiwiYmVzdFJlc3VsdCIsImkiLCJyZXExIiwicmVxc1RvU2F0aXNmeSIsInYiLCJyZXEyIiwiTWF0aCIsIm1heCIsImRvbUVxdWFsaXR5Q2hlY2siLCJhIiwiYiIsImNyZWF0ZURvbVNlbGVjdG9yIiwiY3JlYXRlU2VsZWN0b3JDcmVhdG9yIiwiY3JlYXRlQ3NzU2VsZWN0b3IiLCJzZWxlY3RvcnMiLCJjc3NTZWxlY3RvciIsImpvaW4iLCJleGVjIiwicXVlcnlTZWxlY3RvckFsbCIsInBlZyRzdWJjbGFzcyIsInBhcmVudCIsIkMiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsInBlZyRTeW50YXhFcnJvciIsIm1lc3NhZ2UiLCJmb3VuZCIsIm5hbWUiLCJjYXB0dXJlU3RhY2tUcmFjZSIsImJ1aWxkTWVzc2FnZSIsIkRFU0NSSUJFX0VYUEVDVEFUSU9OX0ZOUyIsImxpdGVyYWwiLCJleHBlY3RhdGlvbiIsImxpdGVyYWxFc2NhcGUiLCJjbGFzcyIsImVzY2FwZWRQYXJ0cyIsInBhcnRzIiwicGFydCIsIkFycmF5IiwiaXNBcnJheSIsImNsYXNzRXNjYXBlIiwiaW52ZXJ0ZWQiLCJhbnkiLCJvdGhlciIsImRlc2NyaXB0aW9uIiwiaGV4IiwiY2giLCJjaGFyQ29kZUF0IiwidG9VcHBlckNhc2UiLCJzIiwicmVwbGFjZSIsImRlc2NyaWJlRXhwZWN0YXRpb24iLCJkZXNjcmliZUV4cGVjdGVkIiwiZGVzY3JpcHRpb25zIiwiaiIsInNvcnQiLCJkZXNjcmliZUZvdW5kIiwicGVnJHBhcnNlIiwib3B0aW9ucyIsInBlZyRGQUlMRUQiLCJwZWckc3RhcnRSdWxlRnVuY3Rpb25zIiwicGVnJHBhcnNlc3RhcnQiLCJwZWckc3RhcnRSdWxlRnVuY3Rpb24iLCJwZWckYzAiLCJwZWckYzEiLCJwZWckbGl0ZXJhbEV4cGVjdGF0aW9uIiwicGVnJGMyIiwicGVnJGMzIiwicGVnJGM0IiwicGVnJGM1IiwicGVnJGM2Iiwic3RhdGUiLCJwZWckYzciLCJwZWckYzgiLCJwZWckYzkiLCJwZWckYzEwIiwicGVnJGMxMSIsInBlZyRjMTIiLCJwZWckYzEzIiwicGVnJGMxNCIsInBlZyRjMTUiLCJwZWckYzE2IiwicGVnJGMxNyIsInBlZyRjMTgiLCJrMSIsImsyIiwiZiIsImNvbGxlY3QiLCJwZWckYzE5IiwicGVnJGMyMCIsInBlZyRjMjEiLCJwZWckYzIyIiwicGVnJGMyMyIsInBlZyRjMjQiLCJwZWckYzI1IiwicGVnJGMyNiIsInBlZyRjMjciLCJwZWckYzI4IiwicGVnJGMyOSIsInBlZyRjMzAiLCJwZWckYzMxIiwicGVnJGMzMiIsImtleSIsIm51bSIsIk51bWJlciIsImlzTmFOIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGVnJGMzMyIsImNoYXJzIiwicGVnJGMzNCIsInBlZyRjMzUiLCJwZWckY2xhc3NFeHBlY3RhdGlvbiIsInBlZyRjdXJyUG9zIiwicGVnJHNhdmVkUG9zIiwicGVnJHBvc0RldGFpbHNDYWNoZSIsImxpbmUiLCJjb2x1bW4iLCJwZWckbWF4RmFpbFBvcyIsInBlZyRtYXhGYWlsRXhwZWN0ZWQiLCJwZWckc2lsZW50RmFpbHMiLCJwZWckcmVzdWx0Iiwic3RhcnRSdWxlIiwib2Zmc2V0IiwicGVnJGNvbXB1dGVMb2NhdGlvbiIsInBlZyRidWlsZFN0cnVjdHVyZWRFcnJvciIsInBlZyRvdGhlckV4cGVjdGF0aW9uIiwicGVnJGJ1aWxkU2ltcGxlRXJyb3IiLCJpZ25vcmVDYXNlIiwicGVnJGFueUV4cGVjdGF0aW9uIiwicGVnJGVuZEV4cGVjdGF0aW9uIiwicGVnJGNvbXB1dGVQb3NEZXRhaWxzIiwicG9zIiwiZGV0YWlscyIsInN0YXJ0UG9zIiwiZW5kUG9zIiwic3RhcnRQb3NEZXRhaWxzIiwiZW5kUG9zRGV0YWlscyIsInBlZyRmYWlsIiwiczAiLCJwZWckcGFyc2V0b3AiLCJzMSIsInMyIiwiczMiLCJzNCIsInN1YnN0ciIsInBlZyRwYXJzZXBhcmFtcyIsInBlZyRwYXJzZWF0b20iLCJzNSIsInBlZyRwYXJzZWtleV92YWx1ZV9wYWlyIiwicGVnJHBhcnNldmFsaWRjaGFyIiwiY2hhckF0IiwicmV0IiwibGVuIiwiYXJndW1lbnRzIiwiaGFzT3duUHJvcGVydHkiLCJTeW50YXhFcnJvciIsInBhcnNlIiwicmVzb3VyY2UiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsInZhbHVlT2YiLCJlbmNvZGVVUklDb21wb25lbnQiLCJUeXBlRXJyb3IiLCJpdCIsInZhbHVlcyIsImZpbmlzaGVkIiwiVGVlIiwiaWRlbnRpdHkiLCJtZW1vaXplIiwibWVtb2l6ZU9wdGlvbnMiLCJfY3JlYXRlU2VsZWN0b3JDcmVhdG9yIiwicmVzdWx0RnVuYyIsIndyYXBwZXJGdW5jIiwiYXJncyIsInBhdHRlcm4iLCJsYXN0SW5kZXgiLCJpbmRleE9mIiwiZGVzY3JpYmVUZXh0UXVvdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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UixRQUFRLENBQXBCO0FBQ0FBLG9CQUFRMUMsTUFBUjtBQUNEO0FBQ0Y7QUFqQjRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQjlDLEtBbkJ1QztBQUFBO0FBQUE7O0FBcUJ4QyxTQUFPLDJFQUFBdUMsQ0FBZTZILElBQWYsQ0FBUDtBQUNEO0FBRU0sU0FBU2lLLGlCQUFULENBQTJCO0FBQUU1VixTQUFGO0FBQVcyRixZQUFYO0FBQXVCQztBQUF2QixDQUEzQixFQUE4RDtBQUNuRSxRQUFNdUQsUUFBUW5KLFFBQVEyRCxTQUFSLENBQWtCZ0MsVUFBbEIsRUFBOEJDLFFBQTlCLENBQWQ7QUFDQSxTQUFPO0FBQ0xiLFVBQU0sbUJBREQ7QUFFTG9FO0FBRkssR0FBUDtBQUlELEM7Ozs7Ozs7QUMvQ0QsZTs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90XG4gKiB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZlxuICogdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVFxuICogV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlXG4gKiBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuICogdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogZ2xvYmFsIGNvcnB1cywgZGVidWcsIG1vZHVsZSwgc2VsZWN0YWJsZSAqL1xuXG5pbXBvcnQgJ0BiYWJlbC9wb2x5ZmlsbCc7XG5pbXBvcnQgKiBhcyBmcmFnbWVudCBmcm9tICdAYW5ub3RhdG9yL2ZyYWdtZW50LWlkZW50aWZpZXInO1xuaW1wb3J0IHsgZGVzY3JpYmVUZXh0UXVvdGVCeVJhbmdlIGFzIGRlc2NyaWJlUmFuZ2UgfSBmcm9tICdAYW5ub3RhdG9yL2RvbSc7XG4vLyBpbXBvcnQgeyBjcmVhdGVBbnlTZWxlY3RvciB9IGZyb20gJ0Bhbm5vdGF0b3IvYW55JztcbmltcG9ydCBtYXJrIGZyb20gJy4vbWFyay5qcyc7XG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vc2VhcmNoLmpzJztcbmNvbnN0IHVpID0gcmVxdWlyZSgnLi91aScpXG5cbmNvbnN0IHJlZnJlc2ggPSBhc3luYyAoKSA9PiB7XG4gIGNvcnB1cy5pbm5lckhUTUwgPSBjb3JwdXMuaW5uZXJUZXh0O1xuICBkZWJ1Zy5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuXG4gIGNvbnN0IGlkZW50aWZpZXIgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcbiAgaWYgKCFpZGVudGlmaWVyKSByZXR1cm47XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IHNlbGVjdG9yIH0gPSBmcmFnbWVudC5wYXJzZShpZGVudGlmaWVyKTtcbiAgICBkZWJ1Zy5pbm5lclRleHQgPSBKU09OLnN0cmluZ2lmeShzZWxlY3RvciwgbnVsbCwgMik7XG4gICAgY29uc3QgcmVzdWx0cyA9IHNlYXJjaChjb3JwdXMsIHNlbGVjdG9yKTtcbiAgICBjb25zdCByYW5nZXMgPSBbXTtcbiAgICBmb3IgYXdhaXQgKGxldCByYW5nZSBvZiByZXN1bHRzKSB7XG4gICAgICByYW5nZXMucHVzaChyYW5nZSk7XG4gICAgfVxuICAgIGZvciAobGV0IHJhbmdlIG9mIHJhbmdlcykge1xuICAgICAgbWFyayhyYW5nZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgZGVidWcuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBkZWJ1Zy5pbm5lclRleHQgPSBKU09OLnN0cmluZ2lmeShlLCBudWxsLCAyKTtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIGZyYWdtZW50LlN5bnRheEVycm9yKSByZXR1cm47XG4gICAgZWxzZSB0aHJvdyBlO1xuICB9XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHJlZnJlc2gpO1xuICByZWZyZXNoKCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgb25TZWxlY3Rpb25DaGFuZ2UpO1xuXG5hc3luYyBmdW5jdGlvbiBvblNlbGVjdGlvbkNoYW5nZSgpIHtcbiAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG4gIGlmIChzZWxlY3Rpb24gPT09IG51bGwgfHwgc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XG4gIGlmICghaXNXaXRoaW5Ob2RlKHJhbmdlLCBzZWxlY3RhYmxlKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzZWxlY3RhYmxlUmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICBzZWxlY3RhYmxlUmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHNlbGVjdGFibGUpO1xuICBjb25zdCBkZXNjcmlwdG9yID0gYXdhaXQgZGVzY3JpYmVSYW5nZSh7IHJhbmdlLCBjb250ZXh0OiBzZWxlY3RhYmxlUmFuZ2UgfSk7XG4gIHZhciBoYXNoID0gZnJhZ21lbnQuc3RyaW5naWZ5KGRlc2NyaXB0b3IpO1xuICB1aS5hdHRhY2goc2VsZWN0aW9uLCBoYXNoKVxufVxuXG5mdW5jdGlvbiBpc1dpdGhpbk5vZGUocmFuZ2UsIG5vZGUpIHtcbiAgY29uc3Qgbm9kZVJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgbm9kZVJhbmdlLnNlbGVjdE5vZGUobm9kZSk7XG4gIHJldHVybiAoXG4gICAgcmFuZ2UuY29tcGFyZUJvdW5kYXJ5UG9pbnRzKFJhbmdlLlNUQVJUX1RPX1NUQVJULCBub2RlUmFuZ2UpID49IDAgJiZcbiAgICByYW5nZS5jb21wYXJlQm91bmRhcnlQb2ludHMoUmFuZ2UuRU5EX1RPX0VORCwgbm9kZVJhbmdlKSA8PSAwXG4gICk7XG59XG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgIFsnQGFubm90YXRvci9mcmFnbWVudC1pZGVudGlmaWVyJywgJy4vbWFyay5qcycsICcuL3NlYXJjaC5qcyddLFxuICAgIHJlZnJlc2hcbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vaW5kZXguanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdFxuICogdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2ZcbiAqIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZVxuICogTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiAqIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogU3Vycm91bmQgdGhlIGNvbnRlbnRzIG9mIHRoZSBnaXZlbiByYW5nZSB3aXRoIGEgbWFyayB0YWcuXG4gKiBAcGFyYW0ge1JhbmdlfSByYW5nZVxuICovXG5cbmltcG9ydCBoaWdobGlnaHRSYW5nZSBmcm9tICdkb20taGlnaGxpZ2h0LXJhbmdlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcmsocmFuZ2UpIHtcbiAgaGlnaGxpZ2h0UmFuZ2UocmFuZ2UsICdoaWdobGlnaHRlZCcpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9tYXJrLmpzIiwiaW1wb3J0IGNhcnRlc2lhbkFycmF5cyBmcm9tICdjYXJ0ZXNpYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjYXJ0ZXNpYW47XG5hc3luYyBmdW5jdGlvbiogY2FydGVzaWFuKC4uLml0ZXJhYmxlcykge1xuICAvLyBXZSBsaXN0ZW4gdG8gYWxsIGl0ZXJhdG9ycyBpbiBwYXJhbGxlbCwgd2hpbGUgbG9nZ2luZyBhbGwgdGhlIHZhbHVlcyB0aGV5XG4gIC8vIHByb2R1Y2UuIFdoZW5ldmVyIGFuIGl0ZXJhdG9yIHByb2R1Y2VzIGEgdmFsdWUsIHdlIHByb2R1Y2UgYW5kIHlpZWxkIGFsbFxuICAvLyBjb21iaW5hdGlvbnMgb2YgdGhhdCB2YWx1ZSB3aXRoIHRoZSBsb2dnZWQgdmFsdWVzIGZyb20gb3RoZXIgaXRlcmF0b3JzLlxuICAvLyBFdmVyeSBjb21iaW5hdGlvbiBpcyB0aHVzIG1hZGUgZXhhY3RseSBvbmNlLCBhbmQgYXMgc29vbiBhcyBpdCBpcyBrbm93bi5cblxuICBjb25zdCBpdGVyYXRvcnMgPSBpdGVyYWJsZXMubWFwKGl0ZXJhYmxlID0+IGl0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpKTtcbiAgLy8gSW5pdGlhbGlzZSBhbiBlbXB0eSBsb2cgZm9yIGVhY2ggaXRlcmFibGUuXG4gIGNvbnN0IGxvZ3MgPSBpdGVyYWJsZXMubWFwKCgpID0+IFtdKTtcblxuICBjb25zdCBuZXh0VmFsdWVQcm9taXNlcyA9IGl0ZXJhdG9ycy5tYXAoKGl0ZXJhdG9yLCBpdGVyYWJsZU5yKSA9PlxuICAgIGl0ZXJhdG9yXG4gICAgICAubmV4dCgpXG4gICAgICAudGhlbihhc3luYyAoeyB2YWx1ZSwgZG9uZSB9KSA9PiAoeyB2YWx1ZTogYXdhaXQgdmFsdWUsIGRvbmUgfSkpXG4gICAgICAudGhlbihcbiAgICAgICAgLy8gTGFiZWwgdGhlIHJlc3VsdCB3aXRoIGl0ZXJhYmxlTnIsIHRvIGtub3cgd2hpY2ggaXRlcmFibGUgcHJvZHVjZWRcbiAgICAgICAgLy8gdGhpcyB2YWx1ZSBhZnRlciBQcm9taXNlLnJhY2UgYmVsb3cuXG4gICAgICAgICh7IHZhbHVlLCBkb25lIH0pID0+ICh7IHZhbHVlLCBkb25lLCBpdGVyYWJsZU5yIH0pXG4gICAgICApXG4gICk7XG5cbiAgLy8gS2VlcCBsaXN0ZW5pbmcgYXMgbG9uZyBhcyBhbnkgb2YgdGhlIGl0ZXJhYmxlcyBpcyBub3QgeWV0IGV4aGF1c3RlZC5cbiAgd2hpbGUgKG5leHRWYWx1ZVByb21pc2VzLnNvbWUocCA9PiBwICE9PSBudWxsKSkge1xuICAgIC8vIFdhaXQgdW50aWwgYW55IG9mIHRoZSBhY3RpdmUgaXRlcmF0b3JzIGhhcyBwcm9kdWNlZCBhIG5ldyB2YWx1ZS5cbiAgICBjb25zdCB7IHZhbHVlLCBkb25lLCBpdGVyYWJsZU5yIH0gPSBhd2FpdCBQcm9taXNlLnJhY2UoXG4gICAgICBuZXh0VmFsdWVQcm9taXNlcy5maWx0ZXIocCA9PiBwICE9PSBudWxsKVxuICAgICk7XG5cbiAgICAvLyBJZiB0aGlzIGl0ZXJhYmxlIHdhcyBleGhhdXN0ZWQsIHN0b3AgbGlzdGVuaW5nIHRvIGl0IGFuZCBtb3ZlIG9uLlxuICAgIGlmIChkb25lKSB7XG4gICAgICBuZXh0VmFsdWVQcm9taXNlc1tpdGVyYWJsZU5yXSA9IG51bGw7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBQcm9kdWNlIGFsbCBjb21iaW5hdGlvbnMgb2YgdGhlIHJlY2VpdmVkIHZhbHVlIHdpdGggdGhlIGxvZ2dlZCB2YWx1ZXNcbiAgICAvLyBmcm9tIHRoZSBvdGhlciBpdGVyYWJsZXMuXG4gICAgY29uc3QgYXJyYXlzID0gWy4uLmxvZ3NdO1xuICAgIGFycmF5c1tpdGVyYWJsZU5yXSA9IFt2YWx1ZV07XG4gICAgY29uc3QgY29tYmluYXRpb25zID0gY2FydGVzaWFuQXJyYXlzKGFycmF5cyk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHJlY2VpdmVkIHZhbHVlIHRvIHRoZSByaWdodCBsb2cuXG4gICAgbG9nc1tpdGVyYWJsZU5yXSA9IFsuLi5sb2dzW2l0ZXJhYmxlTnJdLCB2YWx1ZV07XG5cbiAgICAvLyBTdGFydCBsaXN0ZW5pbmcgZm9yIHRoZSBuZXh0IHZhbHVlIG9mIHRoaXMgaXRlcmFibGUuXG4gICAgbmV4dFZhbHVlUHJvbWlzZXNbaXRlcmFibGVOcl0gPSBpdGVyYXRvcnNbaXRlcmFibGVOcl1cbiAgICAgIC5uZXh0KClcbiAgICAgIC50aGVuKGFzeW5jICh7IHZhbHVlLCBkb25lIH0pID0+ICh7IHZhbHVlOiBhd2FpdCB2YWx1ZSwgZG9uZSB9KSlcbiAgICAgIC50aGVuKCh7IHZhbHVlLCBkb25lIH0pID0+ICh7IHZhbHVlLCBkb25lLCBpdGVyYWJsZU5yIH0pKTtcblxuICAgIC8vIFlpZWxkIGVhY2ggb2YgdGhlIHByb2R1Y2VkIGNvbWJpbmF0aW9ucyBzZXBhcmF0ZWx5LlxuICAgIHlpZWxkKiBjb21iaW5hdGlvbnM7XG4gIH1cbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5hc3luYyBmdW5jdGlvbiB0ZXN0KCkge1xuICBhc3luYyBmdW5jdGlvbiogZ2VuMSgpIHtcbiAgICB5aWVsZCAxO1xuICAgIHlpZWxkIFByb21pc2UucmVzb2x2ZSgyKTtcbiAgICB5aWVsZCAzO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24qIGdlbjIoKSB7XG4gICAgeWllbGQgNDtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uKiBnZW4zKCkge1xuICAgIHlpZWxkIDU7XG4gICAgeWllbGQgNjtcbiAgfVxuXG4gIGNvbnN0IGNhcnQgPSBjYXJ0ZXNpYW4oZ2VuMSgpLCBnZW4yKCksIGdlbjMoKSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGNvbnN0IGV4cGVjdGVkID0gW1xuICAgIFsxLCA0LCA1XSxcbiAgICBbMiwgNCwgNV0sXG4gICAgWzMsIDQsIDVdLFxuICAgIFsxLCA0LCA2XSxcbiAgICBbMiwgNCwgNl0sXG4gICAgWzMsIDQsIDZdLFxuICBdO1xuXG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBmb3IgYXdhaXQgKGxldCB2YWx1ZSBvZiBjYXJ0KSB7XG4gICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICB9XG4gIC8vIFRPRE8gYXNzZXJ0IHRoYXQgcmVzdWx0IGVxdWFscyBleHBlY3RlZC5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JhbmdlL2NhcnRlc2lhbi5qcyIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIGFzIGNyZWF0ZUFubm90YXRvclNlbGVjdG9yIH0gZnJvbSAnQGFubm90YXRvci9zZWxlY3Rvcic7XG5pbXBvcnQgY2FydGVzaWFuIGZyb20gJy4vY2FydGVzaWFuJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJhbmdlU2VsZWN0b3IoeyBjcmVhdGVBbnlTZWxlY3RvciB9KSB7XG4gIGNvbnN0IHN0YXJ0U2VsZWN0b3IgPSBjcmVhdGVBbnlTZWxlY3RvcigpO1xuICBjb25zdCBlbmRTZWxlY3RvciA9IGNyZWF0ZUFueVNlbGVjdG9yKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24qIHJhbmdlU2VsZWN0b3IoeyBkZXNjcmlwdG9ycywgY29udGV4dCB9KSB7XG4gICAgY29uc3QgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JzWzBdOyAvLyBUT0RPIGhhbmRsZSBtdWx0aXBsZSBkZXNjcmlwdG9yc1xuICAgIGNvbnN0IHN0YXJ0TWF0Y2hlcyA9IHN0YXJ0U2VsZWN0b3Ioe1xuICAgICAgZGVzY3JpcHRvcnM6IFtkZXNjcmlwdG9yLnN0YXJ0U2VsZWN0b3JdLFxuICAgICAgY29udGV4dCxcbiAgICB9KTtcbiAgICBjb25zdCBlbmRNYXRjaGVzID0gZW5kU2VsZWN0b3Ioe1xuICAgICAgZGVzY3JpcHRvcnM6IFtkZXNjcmlwdG9yLmVuZFNlbGVjdG9yXSxcbiAgICAgIGNvbnRleHQsXG4gICAgfSk7XG4gICAgY29uc3QgY29tYmluYXRpb25zID0gY2FydGVzaWFuKHN0YXJ0TWF0Y2hlcywgZW5kTWF0Y2hlcyk7XG4gICAgZm9yIGF3YWl0IChsZXQgW3N0YXJ0LCBlbmRdIG9mIGNvbWJpbmF0aW9ucykge1xuICAgICAgaWYgKHN0YXJ0LmluZGV4ID4gZW5kLmluZGV4KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgdGV4dCA9IHJhbmdlQmV0d2Vlbih7IHN0YXJ0LCBlbmQsIGNvbnRleHQgfSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBbdGV4dF07XG4gICAgICByZXN1bHQuaW5kZXggPSBzdGFydC5pbmRleDtcbiAgICAgIHJlc3VsdC5pbnB1dCA9IGNvbnRleHQ7XG4gICAgICByZXN1bHQuZGVzY3JpcHRvciA9IGRlc2NyaXB0b3I7XG4gICAgICB5aWVsZCByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUFubm90YXRvclNlbGVjdG9yKHJhbmdlU2VsZWN0b3IpO1xufVxuXG5mdW5jdGlvbiByYW5nZUJldHdlZW4oeyBzdGFydCwgZW5kLCBjb250ZXh0IH0pIHtcbiAgY29uc3QgcmFuZ2UgPSBjb250ZXh0LnN1YnN0cmluZyhzdGFydC5pbmRleCwgZW5kLmluZGV4KTtcbiAgcmV0dXJuIHJhbmdlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmFuZ2UvaW5kZXguanMiLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VSZWZpbmFibGUoc2VsZWN0b3IsIHsgY3JlYXRlQW55U2VsZWN0b3IgfSkge1xuICBjb25zdCBtZW1vaXplZENyZWF0ZUFueVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoKCkgPT4gY3JlYXRlQW55U2VsZWN0b3IoKSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24qIHJlZmluYWJsZVNlbGVjdG9yKHsgZGVzY3JpcHRvcnMsIGNvbnRleHQgfSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzZWxlY3Rvcih7IGRlc2NyaXB0b3JzLCBjb250ZXh0IH0pO1xuICAgIGZvciBhd2FpdCAobGV0IG1hdGNoIG9mIG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHJlZmluaW5nRGVzY3JpcHRvciA9IG1hdGNoLmRlc2NyaXB0b3IucmVmaW5lZEJ5O1xuICAgICAgaWYgKHJlZmluaW5nRGVzY3JpcHRvcikge1xuICAgICAgICBjb25zdCBhbnlTZWxlY3RvciA9IG1lbW9pemVkQ3JlYXRlQW55U2VsZWN0b3IoKTtcbiAgICAgICAgY29uc3QgcmVmaW5pbmdNYXRjaGVzID0gYW55U2VsZWN0b3Ioe1xuICAgICAgICAgIGRlc2NyaXB0b3JzOiBbcmVmaW5pbmdEZXNjcmlwdG9yXSxcbiAgICAgICAgICBjb250ZXh0OiBtYXRjaEFzQ29udGV4dChtYXRjaCksXG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgYXdhaXQgKGxldCByZWZpbmluZ01hdGNoIG9mIHJlZmluaW5nTWF0Y2hlcykge1xuICAgICAgICAgIGNvbnN0IHJlZmluZWRNYXRjaCA9IGNvbXBvc2VNYXRjaGVzKHJlZmluaW5nTWF0Y2gsIG1hdGNoKTtcbiAgICAgICAgICB5aWVsZCByZWZpbmVkTWF0Y2g7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHlpZWxkIG1hdGNoO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWZpbmFibGVTZWxlY3Rvcjtcbn1cblxuZnVuY3Rpb24gbWF0Y2hBc0NvbnRleHQobWF0Y2gpIHtcbiAgcmV0dXJuIG1hdGNoWzBdO1xufVxuXG5mdW5jdGlvbiBjb21wb3NlTWF0Y2hlcyguLi5tYXRjaGVzKSB7XG4gIHJldHVybiBtYXRjaGVzLnJldmVyc2UoKS5yZWR1Y2UoKG1hdGNoLCByZWZpbmluZ01hdGNoKSA9PiB7XG4gICAgY29uc3QgcmVmaW5lZE1hdGNoID0gWy4uLnJlZmluaW5nTWF0Y2hdO1xuICAgIHJlZmluZWRNYXRjaC5pbmRleCA9IG1hdGNoLmluZGV4ICsgcmVmaW5pbmdNYXRjaC5pbmRleDtcbiAgICByZWZpbmVkTWF0Y2guaW5wdXQgPSBtYXRjaC5pbnB1dDtcbiAgICByZWZpbmVkTWF0Y2guZGVzY3JpcHRvciA9IG1hdGNoLmRlc2NyaXB0b3I7XG4gICAgcmV0dXJuIHJlZmluZWRNYXRjaDtcbiAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWZpbmVkQnkvaW5kZXguanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdFxuICogdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2ZcbiAqIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZVxuICogTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiAqIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHsgY3JlYXRlVGV4dFF1b3RlU2VsZWN0b3IgfSBmcm9tICdAYW5ub3RhdG9yL3RleHQnO1xuaW1wb3J0IHsgY3JlYXRlUmFuZ2VTZWxlY3RvciB9IGZyb20gJ0Bhbm5vdGF0b3IvcmFuZ2UnO1xuaW1wb3J0IHsgbWFrZVJlZmluYWJsZSB9IGZyb20gJ0Bhbm5vdGF0b3IvcmVmaW5lZEJ5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFueVNlbGVjdG9yQ3JlYXRvcihzZWxlY3RvckNyZWF0b3JzQnlUeXBlKSB7XG4gIGZ1bmN0aW9uIHNlbGVjdFNlbGVjdG9yKHR5cGUpIHtcbiAgICBjb25zdCBzZWxlY3RvckNyZWF0b3IgPSBzZWxlY3RvckNyZWF0b3JzQnlUeXBlW3R5cGVdO1xuICAgIGlmIChzZWxlY3RvckNyZWF0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBzZWxlY3RvciB0eXBlOiAke3R5cGV9YCk7XG4gICAgfVxuICAgIGxldCBzZWxlY3RvciA9IHNlbGVjdG9yQ3JlYXRvcih7IGNyZWF0ZUFueVNlbGVjdG9yIH0pO1xuICAgIHNlbGVjdG9yID0gbWFrZVJlZmluYWJsZShzZWxlY3RvciwgeyBjcmVhdGVBbnlTZWxlY3RvciB9KTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlTZWxlY3RvcigpIHtcbiAgICBjb25zdCBtZW1vaXplZFNlbGVjdFNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICBkZXNjcmlwdG9yID0+IGRlc2NyaXB0b3IudHlwZSxcbiAgICAgIHR5cGUgPT4gc2VsZWN0U2VsZWN0b3IodHlwZSlcbiAgICApO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24qIGFueVNlbGVjdG9yKHsgZGVzY3JpcHRvcnMsIGNvbnRleHQgfSkge1xuICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JzWzBdOyAvLyBUT0RPIGhhbmRsZSBtdWx0aXBsZSBkZXNjcmlwdG9yc1xuICAgICAgY29uc3Qgc2VsZWN0b3JGdW5jID0gbWVtb2l6ZWRTZWxlY3RTZWxlY3RvcihkZXNjcmlwdG9yKTtcbiAgICAgIHlpZWxkKiBzZWxlY3RvckZ1bmMoeyBkZXNjcmlwdG9yczogW2Rlc2NyaXB0b3JdLCBjb250ZXh0IH0pO1xuICAgIH1cblxuICAgIC8vIE5vdCB3cmFwcGVkIHdpdGggVGVlOyB3ZSBleHBlY3QgdGhlIHNlbGVjdG9yIGltcGxlbWVudGF0aW9ucyB0byBkbyB0aGF0LlxuICAgIHJldHVybiBhbnlTZWxlY3RvcjtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVBbnlTZWxlY3Rvcjtcbn1cblxuZXhwb3J0IGNvbnN0IGFsbFNlbGVjdG9yVHlwZXMgPSB7XG4gIFRleHRRdW90ZVNlbGVjdG9yOiBjcmVhdGVUZXh0UXVvdGVTZWxlY3RvcixcbiAgUmFuZ2VTZWxlY3RvcjogY3JlYXRlUmFuZ2VTZWxlY3Rvcixcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBbnlTZWxlY3RvciA9IGNyZWF0ZUFueVNlbGVjdG9yQ3JlYXRvcihhbGxTZWxlY3RvclR5cGVzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL2FueS9pbmRleC5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90XG4gKiB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZlxuICogdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVFxuICogV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlXG4gKiBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuICogdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgY3JlYXRlQW55U2VsZWN0b3IgfSBmcm9tICdAYW5ub3RhdG9yL2FueSc7XG5cbi8qKlxuICogTG9jYXRlIGEgc2VsZWN0b3IuXG4gKiBAcGFyYW0ge05vZGV9IHJvb3Qgbm9kZVxuICogQHBhcmFtIHtTZWxlY3Rvcn0gZGVzY3JpcHRvclxuICogQHJldHVybiB7UmFuZ2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcblxuY29uc3Qgc2VsZWN0b3JGdW5jID0gY3JlYXRlQW55U2VsZWN0b3IoKTtcblxuYXN5bmMgZnVuY3Rpb24qIHNlYXJjaChyb290LCBkZXNjcmlwdG9yKSB7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiBub2RlSXRlcmF0b3Iocm9vdCkpIHtcbiAgICBpZiAoIW5vZGUubm9kZVZhbHVlKSBjb250aW51ZTtcblxuICAgIGNvbnN0IG1hdGNoZXMgPSBzZWxlY3RvckZ1bmMoe1xuICAgICAgZGVzY3JpcHRvcnM6IFtkZXNjcmlwdG9yXSxcbiAgICAgIGNvbnRleHQ6IG5vZGUubm9kZVZhbHVlLFxuICAgIH0pO1xuICAgIGZvciBhd2FpdCAobGV0IG1hdGNoIG9mIG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBtYXRjaC5pbmRleDtcbiAgICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgIHJhbmdlLnNldFN0YXJ0KG5vZGUsIHN0YXJ0SW5kZXgpO1xuICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIGVuZEluZGV4KTtcbiAgICAgIHlpZWxkIHJhbmdlO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciB0aGUgbm9kZXMgb2YgYSBzdWItdHJlZSBvZiB0aGUgZG9jdW1lbnQuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqL1xuZnVuY3Rpb24qIG5vZGVJdGVyYXRvcihub2RlKSB7XG4gIHlpZWxkIG5vZGU7XG5cbiAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkTm9kZXMpIHtcbiAgICB5aWVsZCogbm9kZUl0ZXJhdG9yKGNoaWxkKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9zZWFyY2guanMiLCJjb25zdCBodG1sID0gcmVxdWlyZSgnYmVsJylcbmNvbnN0IGdvdCA9IHJlcXVpcmUoJ2dvdCcpXG5cbmZ1bmN0aW9uIGF0dGFjaCAoc2VsZWN0aW9uLCBoYXNoKSB7XG4gIHZhciBwb3NpdGlvbiA9IGdldHBvc2l0aW9uKHNlbGVjdGlvbilcbiAgY29uc29sZS5sb2coJ3Bvc2l0aW9uJywgcG9zaXRpb24pXG4gIHZhciBlbCA9IGdldGVsKGhhc2gsIHBvc2l0aW9uLCBzZWxlY3Rpb24pXG59XG5cbmZ1bmN0aW9uIGdldHBvc2l0aW9uIChzZWwpIHtcbiAgLy8gZXh0cmFjdCB0aGUgbGFzdCByYW5nZSBpbiB0aGUgc2VsZWN0aW9uXG4gIC8vIHNvIHdlIGNhbiBnZXQgYSBib3VuZGluZyByZWN0XG4gIHZhciByYW5nZUlkeCA9IHNlbC5yYW5nZUNvdW50IC0gMVxuICBpZiAocmFuZ2VJZHggPCAwKSByZXR1cm4gbnVsbFxuXG4gIHZhciByYW5nZSA9IHNlbC5nZXRSYW5nZUF0KHJhbmdlSWR4KVxuICB2YXIgcmVjdCA9IHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgLy8gY2FsY3VsYXRlIHRoZSBtZW51IHBvc2l0aW9uXG4gIC8vIHRoZSB0b3Agb2YgdGhlIG1lbnUgaXMgdGhlIGJvdHRvbSBvZiB0aGUgc2VsZWN0aW9uXG4gIC8vIHRoZSBsZWZ0IG9mIHRoZSBtZW51IGlzIHRoZSBtaWRkbGUgb2YgdGhlIHNlbGVjdGlvblxuICB2YXIgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgcmVjdC5ib3R0b21cbiAgdmFyIGxlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgKyByZWN0LmxlZnRcbiAgcmV0dXJuIHsgdG9wLCBsZWZ0IH1cbn1cblxuZnVuY3Rpb24gZ2V0ZWwgKGhhc2gsIHBvc2l0aW9uLCBzZWxlY3Rpb24pIHtcbiAgLy8gZ3JhYiB0aGUgZXhpc3RpbmcgZWxlbWVudCwgb3IgY3JlYXRlIGl0XG4gIC8vIGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdC1saW5rZXInKVxuICBpZiAoIWVsKSB7XG4gICAgZWwgPSBodG1sYFxuICAgICAgPGRpdiBpZD1cImRpcmVjdC1saW5rZXJcIj5cbiAgICAgICAgPHA+Q3JlYXRlIGRpcmVjdCBsaW5rPC9wPlxuICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGhpZGVldmVudHVhbGx5KGVsKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG4gIH1cbiAgZWwuc3R5bGUudG9wID0gYCR7cG9zaXRpb24udG9wfXB4YFxuICBlbC5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24ubGVmdH1weGBcbiAgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgZWwub25jbGljayA9IHN1Ym1pdExpbmsoaGFzaCwgc2VsZWN0aW9uKVxuICByZXR1cm4gZWxcbn1cblxuZnVuY3Rpb24gc3VibWl0TGluayAoaGFzaCwgc2VsZWN0aW9uKSB7XG4gIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpXG5cbiAgdmFyIGxpbmtkYXRhID0ge1xuICAgIHVybDogdXJsLFxuICAgIHRpdGxlOiB3aW5kb3cuZG9jdW1lbnQudGl0bGUsXG4gICAgc2VsZWN0b3I6IGhhc2gsXG4gICAgcXVvdGU6IHNlbGVjdGlvbi50b1N0cmluZygpXG4gIH1cblxuICBnb3QucG9zdCgnaHR0cHM6Ly9tZW1leC5saW5rJywge1xuICAgIGJvZHk6IGxpbmtkYXRhXG4gIH0pLnRoZW4oXG4gICAgcmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgc3VibWl0dGVkIGxpbmsnLCByZXMpXG4gICAgfVxuICApLmNhdGNoKFxuICAgIGVyciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdWJtaXR0aW5nIGxpbms6JywgZXJyKVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBoaWRlZXZlbnR1YWxseSAoZWwpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgZGVzdHJveSk7XG4gIGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBlbC5vbmNsaWNrID0gbnVsbFxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGRlc3Ryb3kpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGF0dGFjaCB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL3VpLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3RcbiAqIHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mXG4gKiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGVcbiAqIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4gKiB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiBnbG9iYWwgUmFuZ2UgKi9cblxuaW1wb3J0IG5vcm1hbGl6ZVJhbmdlIGZyb20gJ3JhbmdlLW5vcm1hbGl6ZSc7XG5pbXBvcnQgeyBjcmVhdGVUZXh0UXVvdGVTZWxlY3RvciB9IGZyb20gJ0Bhbm5vdGF0b3IvdGV4dCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZXNjcmliZVRleHRRdW90ZUJ5UmFuZ2UoeyByYW5nZSwgY29udGV4dCB9KSB7XG4gIC8vIFNocmluayByYW5nZSB0byBmaXQgaW4gY29udGV4dCwgaWYgbmVlZGVkLlxuICBpZiAocmFuZ2UuY29tcGFyZUJvdW5kYXJ5UG9pbnRzKFJhbmdlLkVORF9UT19FTkQsIGNvbnRleHQpID4gMCkge1xuICAgIHJhbmdlLnNldEVuZChjb250ZXh0LmVuZENvbnRhaW5lciwgY29udGV4dC5lbmRPZmZzZXQpO1xuICB9XG4gIGlmIChyYW5nZS5jb21wYXJlQm91bmRhcnlQb2ludHMoUmFuZ2UuU1RBUlRfVE9fU1RBUlQsIGNvbnRleHQpIDwgMCkge1xuICAgIHJhbmdlLnNldFN0YXJ0KGNvbnRleHQuc3RhcnRDb250YWluZXIsIGNvbnRleHQuc3RhcnRPZmZzZXQpO1xuICB9XG5cbiAgY29uc3QgY29udGV4dFRleHQgPSBjb250ZXh0LmNsb25lQ29udGVudHMoKS50ZXh0Q29udGVudDtcbiAgY29uc3QgZXhhY3QgPSByYW5nZS5jbG9uZUNvbnRlbnRzKCkudGV4dENvbnRlbnQ7XG5cbiAgY29uc3QgZGVzY3JpcHRvciA9IHtcbiAgICB0eXBlOiAnVGV4dFF1b3RlU2VsZWN0b3InLFxuICAgIGV4YWN0LFxuICB9O1xuXG4gIC8vIEZJWE1FIFdlIHNob3VsZCBnZXQgcmFuZ2UgaW5kZXggcmVsYXRpdmUgdG8gY29udGV4dC4gTG9vayBhdFxuICAvLyBkb20tYW5jaG9yLXRleHQtcG9zaXRpb24/IEZvciBub3csIHdlIGltcGxlbWVudCB0aGUgZWFzeSBjYXNlIHdoZXJlIHRoZVxuICAvLyByYW5nZXMgYXJlIHdpdGhpbiB0aGUgc2FtZSBjb250YWluZXIuXG4gIGNvbnRleHQgPSBub3JtYWxpemVSYW5nZShjb250ZXh0KTtcbiAgcmFuZ2UgPSBub3JtYWxpemVSYW5nZShyYW5nZSk7XG4gIGlmIChcbiAgICBjb250ZXh0LnN0YXJ0Q29udGFpbmVyICE9PSByYW5nZS5zdGFydENvbnRhaW5lciB8fFxuICAgIGNvbnRleHQuc3RhcnRPZmZzZXQgIT09IDBcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDb250ZXh0IG5vdCBlcXVhbCB0byByYW5nZSdzIGNvbnRhaW5lcjsgbm90IGltcGxlbWVudGVkLmApO1xuICB9XG4gIGNvbnN0IHJhbmdlSW5kZXggPSByYW5nZS5zdGFydE9mZnNldDtcbiAgY29uc3QgcmFuZ2VFbmRJbmRleCA9IHJhbmdlLmVuZE9mZnNldDtcblxuICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVRleHRRdW90ZVNlbGVjdG9yKCk7XG4gIGNvbnN0IG1hdGNoZXMgPSBzZWxlY3Rvcih7IGRlc2NyaXB0b3JzOiBbZGVzY3JpcHRvcl0sIGNvbnRleHQ6IGNvbnRleHRUZXh0IH0pO1xuICBjb25zdCBtaW5TdWZmaXhlcyA9IFtdO1xuICBjb25zdCBtaW5QcmVmaXhlcyA9IFtdO1xuICBmb3IgYXdhaXQgKGxldCBtYXRjaCBvZiBtYXRjaGVzKSB7XG4gICAgLy8gRm9yIGV2ZXJ5IG1hdGNoIHRoYXQgaXMgbm90IG91ciByYW5nZSwgd2UgbG9vayBob3cgbWFueSBjaGFyYWN0ZXJzIHdlXG4gICAgLy8gaGF2ZSB0byBhZGQgYXMgcHJlZml4IG9yIHN1ZmZpeCB0byBkaXNhbWJpZ3VhdGUuXG4gICAgaWYgKG1hdGNoLmluZGV4ICE9PSByYW5nZUluZGV4KSB7XG4gICAgICBjb25zdCBtYXRjaEVuZEluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGg7XG4gICAgICBjb25zdCBzdWZmaXhPdmVybGFwID0gb3ZlcmxhcChcbiAgICAgICAgY29udGV4dFRleHQuc3Vic3RyaW5nKG1hdGNoRW5kSW5kZXgpLFxuICAgICAgICBjb250ZXh0VGV4dC5zdWJzdHJpbmcocmFuZ2VFbmRJbmRleClcbiAgICAgICk7XG4gICAgICBtaW5TdWZmaXhlcy5wdXNoKHN1ZmZpeE92ZXJsYXAgKyAxKTtcbiAgICAgIGNvbnN0IHByZWZpeE92ZXJsYXAgPSBvdmVybGFwUmlnaHQoXG4gICAgICAgIGNvbnRleHRUZXh0LnN1YnN0cmluZygwLCBtYXRjaC5pbmRleCksXG4gICAgICAgIGNvbnRleHRUZXh0LnN1YnN0cmluZygwLCByYW5nZUluZGV4KVxuICAgICAgKTtcbiAgICAgIG1pblByZWZpeGVzLnB1c2gocHJlZml4T3ZlcmxhcCArIDEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBbbWluU3VmZml4LCBtaW5QcmVmaXhdID0gbWluaW1hbFNvbHV0aW9uKG1pblN1ZmZpeGVzLCBtaW5QcmVmaXhlcyk7XG4gIGlmIChtaW5TdWZmaXggPiAwKSB7XG4gICAgZGVzY3JpcHRvci5zdWZmaXggPSBjb250ZXh0VGV4dC5zdWJzdHJpbmcoXG4gICAgICByYW5nZUVuZEluZGV4LFxuICAgICAgcmFuZ2VFbmRJbmRleCArIG1pblN1ZmZpeFxuICAgICk7XG4gIH1cbiAgaWYgKG1pblByZWZpeCA+IDApIHtcbiAgICBkZXNjcmlwdG9yLnByZWZpeCA9IGNvbnRleHRUZXh0LnN1YnN0cmluZyhcbiAgICAgIHJhbmdlSW5kZXggLSBtaW5QcmVmaXgsXG4gICAgICByYW5nZUluZGV4XG4gICAgKTtcbiAgfVxuICByZXR1cm4gZGVzY3JpcHRvcjtcbn1cblxuZnVuY3Rpb24gb3ZlcmxhcCh0ZXh0MSwgdGV4dDIpIHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgd2hpbGUgKHRleHQxW2NvdW50XSA9PT0gdGV4dDJbY291bnRdKSB7XG4gICAgY291bnQrKztcbiAgICBpZiAoY291bnQgPj0gdGV4dDEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gSW5maW5pdHk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb3VudDtcbn1cblxuZnVuY3Rpb24gb3ZlcmxhcFJpZ2h0KHRleHQxLCB0ZXh0Mikge1xuICBsZXQgY291bnQgPSAwO1xuICB3aGlsZSAodGV4dDFbdGV4dDEubGVuZ3RoIC0gMSAtIGNvdW50XSA9PT0gdGV4dDJbdGV4dDIubGVuZ3RoIC0gMSAtIGNvdW50XSkge1xuICAgIGNvdW50Kys7XG4gICAgaWYgKGNvdW50ID49IHRleHQxLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIEluZmluaXR5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gY291bnQ7XG59XG5cbmZ1bmN0aW9uIG1pbmltYWxTb2x1dGlvbihyZXFzMSwgcmVxczIpIHtcbiAgaWYgKHJlcXMxLmxlbmd0aCAhPT0gcmVxczIubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1bmVxdWFsIGxlbmd0aHMnKTtcbiAgfVxuICAvLyBBZGQgMCBhcyBhbiBvcHRpb24gdG8gdHJ5LlxuICByZXFzMS5wdXNoKDApO1xuICByZXFzMi5wdXNoKDApO1xuICBsZXQgYmVzdFJlc3VsdCA9IFtJbmZpbml0eSwgSW5maW5pdHldO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcXMxLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcmVxMSA9IHJlcXMxW2ldO1xuICAgIC8vIFRoZSB2YWx1ZXMgdG8gc2F0aXNmeSBmb3IgcmVxMiwgZ2l2ZW4gdGhlIHByb3Bvc2VkIHJlcTEuXG4gICAgY29uc3QgcmVxc1RvU2F0aXNmeSA9IHJlcXMxLm1hcCgodiwgaSkgPT4gKHYgPiByZXExID8gcmVxczJbaV0gOiAwKSk7XG4gICAgLy8gVGFrZSB0aGUgbG93ZXN0IHZhbHVlIHRoYXQgc2F0aXNmaWVzIHRoZW0gYWxsLlxuICAgIGNvbnN0IHJlcTIgPSBNYXRoLm1heCguLi5yZXFzVG9TYXRpc2Z5KTtcbiAgICAvLyBJZiB0aGlzIGNvbWJpbmF0aW9uIGlzIHRoZSBiZXN0IHNvIGZhciwgcmVtZW1iZXIgaXQuXG4gICAgaWYgKHJlcTEgKyByZXEyIDwgYmVzdFJlc3VsdFswXSArIGJlc3RSZXN1bHRbMV0pIHtcbiAgICAgIGJlc3RSZXN1bHQgPSBbcmVxMSwgcmVxMl07XG4gICAgfVxuICB9XG4gIHJldHVybiBiZXN0UmVzdWx0O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvZG9tL3RleHQvcXVvdGUuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdFxuICogdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2ZcbiAqIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZVxuICogTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiAqIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vcXVvdGUuanMnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvZG9tL3RleHQvaW5kZXguanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdFxuICogdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2ZcbiAqIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZVxuICogTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiAqIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvckNyZWF0b3IsIGRlZmF1bHRNZW1vaXplIH0gZnJvbSAnQGFubm90YXRvci9zZWxlY3Rvcic7XG5cbmZ1bmN0aW9uIGRvbUVxdWFsaXR5Q2hlY2soYSwgYikge1xuICBpZiAoYSAhPT0gYikgcmV0dXJuIGZhbHNlO1xuICAvLyBUT0RPOlxuICAvLyAtIHdlYWtyZWYgdGhlIG5vZGVcbiAgLy8gLSBhdHRhY2ggbXV0YXRpb24gbGlzdGVuZXJcbiAgLy8gLSBpbnZhbGlkYXRlIG9uIG11dGF0aW9uc1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuY29uc3QgY3JlYXRlRG9tU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvckNyZWF0b3IoXG4gIGRlZmF1bHRNZW1vaXplLFxuICBkb21FcXVhbGl0eUNoZWNrXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3NzU2VsZWN0b3Ioc2VsZWN0b3JzKSB7XG4gIGNvbnN0IGNzc1NlbGVjdG9yID0gc2VsZWN0b3JzLm1hcCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSkuam9pbignLCcpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uKiBleGVjKGNvbnRleHQpIHtcbiAgICB5aWVsZCogY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKGNzc1NlbGVjdG9yKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVEb21TZWxlY3RvcihleGVjKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL2RvbS9pbmRleC5qcyIsIi8vIEdlbmVyYXRlZCBieSBQRUcuanMgdjAuMTEuMC1kZXYsIGh0dHBzOi8vcGVnanMub3JnL1xuXG5mdW5jdGlvbiBwZWckc3ViY2xhc3MoY2hpbGQsIHBhcmVudCkge1xuICBmdW5jdGlvbiBDKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH1cbiAgQy5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuICBjaGlsZC5wcm90b3R5cGUgPSBuZXcgQygpO1xufVxuXG5mdW5jdGlvbiBwZWckU3ludGF4RXJyb3IobWVzc2FnZSwgZXhwZWN0ZWQsIGZvdW5kLCBsb2NhdGlvbikge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB0aGlzLmV4cGVjdGVkID0gZXhwZWN0ZWQ7XG4gIHRoaXMuZm91bmQgPSBmb3VuZDtcbiAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICB0aGlzLm5hbWUgPSBcIlN5bnRheEVycm9yXCI7XG5cbiAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgaWYgKHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgcGVnJFN5bnRheEVycm9yKTtcbiAgfVxufVxuXG5wZWckc3ViY2xhc3MocGVnJFN5bnRheEVycm9yLCBFcnJvcik7XG5cbnBlZyRTeW50YXhFcnJvci5idWlsZE1lc3NhZ2UgPSBmdW5jdGlvbihleHBlY3RlZCwgZm91bmQpIHtcbiAgdmFyIERFU0NSSUJFX0VYUEVDVEFUSU9OX0ZOUyA9IHtcbiAgICBsaXRlcmFsOiBmdW5jdGlvbihleHBlY3RhdGlvbikge1xuICAgICAgcmV0dXJuIFwiXFxcIlwiICsgbGl0ZXJhbEVzY2FwZShleHBlY3RhdGlvbi50ZXh0KSArIFwiXFxcIlwiO1xuICAgIH0sXG5cbiAgICBjbGFzczogZnVuY3Rpb24oZXhwZWN0YXRpb24pIHtcbiAgICAgIHZhciBlc2NhcGVkUGFydHMgPSBleHBlY3RhdGlvbi5wYXJ0cy5tYXAoZnVuY3Rpb24ocGFydCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwYXJ0KVxuICAgICAgICAgID8gY2xhc3NFc2NhcGUocGFydFswXSkgKyBcIi1cIiArIGNsYXNzRXNjYXBlKHBhcnRbMV0pXG4gICAgICAgICAgOiBjbGFzc0VzY2FwZShwYXJ0KTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gXCJbXCIgKyAoZXhwZWN0YXRpb24uaW52ZXJ0ZWQgPyBcIl5cIiA6IFwiXCIpICsgZXNjYXBlZFBhcnRzICsgXCJdXCI7XG4gICAgfSxcblxuICAgIGFueTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXCJhbnkgY2hhcmFjdGVyXCI7XG4gICAgfSxcblxuICAgIGVuZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXCJlbmQgb2YgaW5wdXRcIjtcbiAgICB9LFxuXG4gICAgb3RoZXI6IGZ1bmN0aW9uKGV4cGVjdGF0aW9uKSB7XG4gICAgICByZXR1cm4gZXhwZWN0YXRpb24uZGVzY3JpcHRpb247XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGhleChjaCkge1xuICAgIHJldHVybiBjaC5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbGl0ZXJhbEVzY2FwZShzKSB7XG4gICAgcmV0dXJuIHNcbiAgICAgIC5yZXBsYWNlKC9cXFxcL2csIFwiXFxcXFxcXFxcIilcbiAgICAgIC5yZXBsYWNlKC9cIi9nLCAgXCJcXFxcXFxcIlwiKVxuICAgICAgLnJlcGxhY2UoL1xcMC9nLCBcIlxcXFwwXCIpXG4gICAgICAucmVwbGFjZSgvXFx0L2csIFwiXFxcXHRcIilcbiAgICAgIC5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKVxuICAgICAgLnJlcGxhY2UoL1xcci9nLCBcIlxcXFxyXCIpXG4gICAgICAucmVwbGFjZSgvW1xceDAwLVxceDBGXS9nLCAgICAgICAgICBmdW5jdGlvbihjaCkgeyByZXR1cm4gXCJcXFxceDBcIiArIGhleChjaCk7IH0pXG4gICAgICAucmVwbGFjZSgvW1xceDEwLVxceDFGXFx4N0YtXFx4OUZdL2csIGZ1bmN0aW9uKGNoKSB7IHJldHVybiBcIlxcXFx4XCIgICsgaGV4KGNoKTsgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGFzc0VzY2FwZShzKSB7XG4gICAgcmV0dXJuIHNcbiAgICAgIC5yZXBsYWNlKC9cXFxcL2csIFwiXFxcXFxcXFxcIilcbiAgICAgIC5yZXBsYWNlKC9cXF0vZywgXCJcXFxcXVwiKVxuICAgICAgLnJlcGxhY2UoL1xcXi9nLCBcIlxcXFxeXCIpXG4gICAgICAucmVwbGFjZSgvLS9nLCAgXCJcXFxcLVwiKVxuICAgICAgLnJlcGxhY2UoL1xcMC9nLCBcIlxcXFwwXCIpXG4gICAgICAucmVwbGFjZSgvXFx0L2csIFwiXFxcXHRcIilcbiAgICAgIC5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKVxuICAgICAgLnJlcGxhY2UoL1xcci9nLCBcIlxcXFxyXCIpXG4gICAgICAucmVwbGFjZSgvW1xceDAwLVxceDBGXS9nLCAgICAgICAgICBmdW5jdGlvbihjaCkgeyByZXR1cm4gXCJcXFxceDBcIiArIGhleChjaCk7IH0pXG4gICAgICAucmVwbGFjZSgvW1xceDEwLVxceDFGXFx4N0YtXFx4OUZdL2csIGZ1bmN0aW9uKGNoKSB7IHJldHVybiBcIlxcXFx4XCIgICsgaGV4KGNoKTsgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXNjcmliZUV4cGVjdGF0aW9uKGV4cGVjdGF0aW9uKSB7XG4gICAgcmV0dXJuIERFU0NSSUJFX0VYUEVDVEFUSU9OX0ZOU1tleHBlY3RhdGlvbi50eXBlXShleHBlY3RhdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBkZXNjcmliZUV4cGVjdGVkKGV4cGVjdGVkKSB7XG4gICAgdmFyIGRlc2NyaXB0aW9ucyA9IGV4cGVjdGVkLm1hcChkZXNjcmliZUV4cGVjdGF0aW9uKTtcbiAgICB2YXIgaSwgajtcblxuICAgIGRlc2NyaXB0aW9ucy5zb3J0KCk7XG5cbiAgICBpZiAoZGVzY3JpcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoaSA9IDEsIGogPSAxOyBpIDwgZGVzY3JpcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbnNbaSAtIDFdICE9PSBkZXNjcmlwdGlvbnNbaV0pIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbnNbal0gPSBkZXNjcmlwdGlvbnNbaV07XG4gICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZXNjcmlwdGlvbnMubGVuZ3RoID0gajtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGRlc2NyaXB0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uc1swXTtcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb25zWzBdICsgXCIgb3IgXCIgKyBkZXNjcmlwdGlvbnNbMV07XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbnMuc2xpY2UoMCwgLTEpLmpvaW4oXCIsIFwiKVxuICAgICAgICAgICsgXCIsIG9yIFwiXG4gICAgICAgICAgKyBkZXNjcmlwdGlvbnNbZGVzY3JpcHRpb25zLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc2NyaWJlRm91bmQoZm91bmQpIHtcbiAgICByZXR1cm4gZm91bmQgPyBcIlxcXCJcIiArIGxpdGVyYWxFc2NhcGUoZm91bmQpICsgXCJcXFwiXCIgOiBcImVuZCBvZiBpbnB1dFwiO1xuICB9XG5cbiAgcmV0dXJuIFwiRXhwZWN0ZWQgXCIgKyBkZXNjcmliZUV4cGVjdGVkKGV4cGVjdGVkKSArIFwiIGJ1dCBcIiArIGRlc2NyaWJlRm91bmQoZm91bmQpICsgXCIgZm91bmQuXCI7XG59O1xuXG5mdW5jdGlvbiBwZWckcGFyc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMgOiB7fTtcblxuICB2YXIgcGVnJEZBSUxFRCA9IHt9O1xuXG4gIHZhciBwZWckc3RhcnRSdWxlRnVuY3Rpb25zID0geyBzdGFydDogcGVnJHBhcnNlc3RhcnQgfTtcbiAgdmFyIHBlZyRzdGFydFJ1bGVGdW5jdGlvbiA9IHBlZyRwYXJzZXN0YXJ0O1xuXG4gIHZhciBwZWckYzAgPSBcInN0YXRlXCI7XG4gIHZhciBwZWckYzEgPSBwZWckbGl0ZXJhbEV4cGVjdGF0aW9uKFwic3RhdGVcIiwgZmFsc2UpO1xuICB2YXIgcGVnJGMyID0gXCIoXCI7XG4gIHZhciBwZWckYzMgPSBwZWckbGl0ZXJhbEV4cGVjdGF0aW9uKFwiKFwiLCBmYWxzZSk7XG4gIHZhciBwZWckYzQgPSBcIilcIjtcbiAgdmFyIHBlZyRjNSA9IHBlZyRsaXRlcmFsRXhwZWN0YXRpb24oXCIpXCIsIGZhbHNlKTtcbiAgdmFyIHBlZyRjNiA9IGZ1bmN0aW9uKHApIHsgcmV0dXJuIHsgc3RhdGU6IHAgfSB9O1xuICB2YXIgcGVnJGM3ID0gXCJzZWxlY3RvclwiO1xuICB2YXIgcGVnJGM4ID0gcGVnJGxpdGVyYWxFeHBlY3RhdGlvbihcInNlbGVjdG9yXCIsIGZhbHNlKTtcbiAgdmFyIHBlZyRjOSA9IGZ1bmN0aW9uKHApIHsgcmV0dXJuIHsgc2VsZWN0b3I6IHAgfSB9O1xuICB2YXIgcGVnJGMxMCA9IFwic3RhdGU9XCI7XG4gIHZhciBwZWckYzExID0gcGVnJGxpdGVyYWxFeHBlY3RhdGlvbihcInN0YXRlPVwiLCBmYWxzZSk7XG4gIHZhciBwZWckYzEyID0gZnVuY3Rpb24odikgeyByZXR1cm4geyBzdGF0ZTogdiB9IH07XG4gIHZhciBwZWckYzEzID0gXCJzZWxlY3Rvcj1cIjtcbiAgdmFyIHBlZyRjMTQgPSBwZWckbGl0ZXJhbEV4cGVjdGF0aW9uKFwic2VsZWN0b3I9XCIsIGZhbHNlKTtcbiAgdmFyIHBlZyRjMTUgPSBmdW5jdGlvbih2KSB7IHJldHVybiB7IHNlbGVjdG9yOiB2IH0gfTtcbiAgdmFyIHBlZyRjMTYgPSBcIixcIjtcbiAgdmFyIHBlZyRjMTcgPSBwZWckbGl0ZXJhbEV4cGVjdGF0aW9uKFwiLFwiLCBmYWxzZSk7XG4gIHZhciBwZWckYzE4ID0gZnVuY3Rpb24oazEsIGsyKSB7XG4gICAgICAgICAgICAgIHZhciBmID0gazE7XG4gICAgICAgICAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgazIubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICBmID0gY29sbGVjdChmLCBrMltpXVsxXSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICB9O1xuICB2YXIgcGVnJGMxOSA9IFwicmVmaW5lZEJ5PXNlbGVjdG9yKFwiO1xuICB2YXIgcGVnJGMyMCA9IHBlZyRsaXRlcmFsRXhwZWN0YXRpb24oXCJyZWZpbmVkQnk9c2VsZWN0b3IoXCIsIGZhbHNlKTtcbiAgdmFyIHBlZyRjMjEgPSBmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7IHJlZmluZWRCeTogcCB9XG4gICAgICAgICAgIH07XG4gIHZhciBwZWckYzIyID0gXCJyZWZpbmVkQnk9c3RhdGUoXCI7XG4gIHZhciBwZWckYzIzID0gcGVnJGxpdGVyYWxFeHBlY3RhdGlvbihcInJlZmluZWRCeT1zdGF0ZShcIiwgZmFsc2UpO1xuICB2YXIgcGVnJGMyNCA9IFwic3RhcnRTZWxlY3Rvcj1zZWxlY3RvcihcIjtcbiAgdmFyIHBlZyRjMjUgPSBwZWckbGl0ZXJhbEV4cGVjdGF0aW9uKFwic3RhcnRTZWxlY3Rvcj1zZWxlY3RvcihcIiwgZmFsc2UpO1xuICB2YXIgcGVnJGMyNiA9IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhcnRTZWxlY3RvcjogcCB9O1xuICAgICAgICAgIH07XG4gIHZhciBwZWckYzI3ID0gXCJlbmRTZWxlY3Rvcj1zZWxlY3RvcihcIjtcbiAgdmFyIHBlZyRjMjggPSBwZWckbGl0ZXJhbEV4cGVjdGF0aW9uKFwiZW5kU2VsZWN0b3I9c2VsZWN0b3IoXCIsIGZhbHNlKTtcbiAgdmFyIHBlZyRjMjkgPSBmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7IGVuZFNlbGVjdG9yOiBwIH07XG4gICAgICAgICAgfTtcbiAgdmFyIHBlZyRjMzAgPSBcIj1cIjtcbiAgdmFyIHBlZyRjMzEgPSBwZWckbGl0ZXJhbEV4cGVjdGF0aW9uKFwiPVwiLCBmYWxzZSk7XG4gIHZhciBwZWckYzMyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICB2YXIgZiA9IHt9O1xuICAgICAgICAgICAgICB2YXIgbnVtID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgZltrZXldID0gaXNOYU4obnVtKSA/IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk6IG51bTtcbiAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgfTtcbiAgdmFyIHBlZyRjMzMgPSBmdW5jdGlvbihjaGFycykgeyByZXR1cm4gY2hhcnMuam9pbihcIlwiKTsgfTtcbiAgdmFyIHBlZyRjMzQgPSAvXlthLXpBLVowLTk8PlxcL1tcXF06JStALlxcLSEkJjsqX10vO1xuICB2YXIgcGVnJGMzNSA9IHBlZyRjbGFzc0V4cGVjdGF0aW9uKFtbXCJhXCIsIFwielwiXSwgW1wiQVwiLCBcIlpcIl0sIFtcIjBcIiwgXCI5XCJdLCBcIjxcIiwgXCI+XCIsIFwiL1wiLCBcIltcIiwgXCJdXCIsIFwiOlwiLCBcIiVcIiwgXCIrXCIsIFwiQFwiLCBcIi5cIiwgXCItXCIsIFwiIVwiLCBcIiRcIiwgXCImXCIsIFwiO1wiLCBcIipcIiwgXCJfXCJdLCBmYWxzZSwgZmFsc2UpO1xuXG4gIHZhciBwZWckY3VyclBvcyA9IDA7XG4gIHZhciBwZWckc2F2ZWRQb3MgPSAwO1xuICB2YXIgcGVnJHBvc0RldGFpbHNDYWNoZSA9IFt7IGxpbmU6IDEsIGNvbHVtbjogMSB9XTtcbiAgdmFyIHBlZyRtYXhGYWlsUG9zID0gMDtcbiAgdmFyIHBlZyRtYXhGYWlsRXhwZWN0ZWQgPSBbXTtcbiAgdmFyIHBlZyRzaWxlbnRGYWlscyA9IDA7XG5cbiAgdmFyIHBlZyRyZXN1bHQ7XG5cbiAgaWYgKFwic3RhcnRSdWxlXCIgaW4gb3B0aW9ucykge1xuICAgIGlmICghKG9wdGlvbnMuc3RhcnRSdWxlIGluIHBlZyRzdGFydFJ1bGVGdW5jdGlvbnMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBzdGFydCBwYXJzaW5nIGZyb20gcnVsZSBcXFwiXCIgKyBvcHRpb25zLnN0YXJ0UnVsZSArIFwiXFxcIi5cIik7XG4gICAgfVxuXG4gICAgcGVnJHN0YXJ0UnVsZUZ1bmN0aW9uID0gcGVnJHN0YXJ0UnVsZUZ1bmN0aW9uc1tvcHRpb25zLnN0YXJ0UnVsZV07XG4gIH1cblxuICBmdW5jdGlvbiB0ZXh0KCkge1xuICAgIHJldHVybiBpbnB1dC5zdWJzdHJpbmcocGVnJHNhdmVkUG9zLCBwZWckY3VyclBvcyk7XG4gIH1cblxuICBmdW5jdGlvbiBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIHBlZyRzYXZlZFBvcztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJhbmdlKCkge1xuICAgIHJldHVybiBbcGVnJHNhdmVkUG9zLCBwZWckY3VyclBvc107XG4gIH1cblxuICBmdW5jdGlvbiBsb2NhdGlvbigpIHtcbiAgICByZXR1cm4gcGVnJGNvbXB1dGVMb2NhdGlvbihwZWckc2F2ZWRQb3MsIHBlZyRjdXJyUG9zKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4cGVjdGVkKGRlc2NyaXB0aW9uLCBsb2NhdGlvbikge1xuICAgIGxvY2F0aW9uID0gbG9jYXRpb24gIT09IHVuZGVmaW5lZFxuICAgICAgPyBsb2NhdGlvblxuICAgICAgOiBwZWckY29tcHV0ZUxvY2F0aW9uKHBlZyRzYXZlZFBvcywgcGVnJGN1cnJQb3MpO1xuXG4gICAgdGhyb3cgcGVnJGJ1aWxkU3RydWN0dXJlZEVycm9yKFxuICAgICAgW3BlZyRvdGhlckV4cGVjdGF0aW9uKGRlc2NyaXB0aW9uKV0sXG4gICAgICBpbnB1dC5zdWJzdHJpbmcocGVnJHNhdmVkUG9zLCBwZWckY3VyclBvcyksXG4gICAgICBsb2NhdGlvblxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBlcnJvcihtZXNzYWdlLCBsb2NhdGlvbikge1xuICAgIGxvY2F0aW9uID0gbG9jYXRpb24gIT09IHVuZGVmaW5lZFxuICAgICAgPyBsb2NhdGlvblxuICAgICAgOiBwZWckY29tcHV0ZUxvY2F0aW9uKHBlZyRzYXZlZFBvcywgcGVnJGN1cnJQb3MpO1xuXG4gICAgdGhyb3cgcGVnJGJ1aWxkU2ltcGxlRXJyb3IobWVzc2FnZSwgbG9jYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJGxpdGVyYWxFeHBlY3RhdGlvbih0ZXh0LCBpZ25vcmVDYXNlKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogXCJsaXRlcmFsXCIsIHRleHQ6IHRleHQsIGlnbm9yZUNhc2U6IGlnbm9yZUNhc2UgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRjbGFzc0V4cGVjdGF0aW9uKHBhcnRzLCBpbnZlcnRlZCwgaWdub3JlQ2FzZSkge1xuICAgIHJldHVybiB7IHR5cGU6IFwiY2xhc3NcIiwgcGFydHM6IHBhcnRzLCBpbnZlcnRlZDogaW52ZXJ0ZWQsIGlnbm9yZUNhc2U6IGlnbm9yZUNhc2UgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRhbnlFeHBlY3RhdGlvbigpIHtcbiAgICByZXR1cm4geyB0eXBlOiBcImFueVwiIH07XG4gIH1cblxuICBmdW5jdGlvbiBwZWckZW5kRXhwZWN0YXRpb24oKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogXCJlbmRcIiB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJG90aGVyRXhwZWN0YXRpb24oZGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4geyB0eXBlOiBcIm90aGVyXCIsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJGNvbXB1dGVQb3NEZXRhaWxzKHBvcykge1xuICAgIHZhciBkZXRhaWxzID0gcGVnJHBvc0RldGFpbHNDYWNoZVtwb3NdO1xuICAgIHZhciBwO1xuXG4gICAgaWYgKGRldGFpbHMpIHtcbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH0gZWxzZSB7XG4gICAgICBwID0gcG9zIC0gMTtcbiAgICAgIHdoaWxlICghcGVnJHBvc0RldGFpbHNDYWNoZVtwXSkge1xuICAgICAgICBwLS07XG4gICAgICB9XG5cbiAgICAgIGRldGFpbHMgPSBwZWckcG9zRGV0YWlsc0NhY2hlW3BdO1xuICAgICAgZGV0YWlscyA9IHtcbiAgICAgICAgbGluZTogZGV0YWlscy5saW5lLFxuICAgICAgICBjb2x1bW46IGRldGFpbHMuY29sdW1uXG4gICAgICB9O1xuXG4gICAgICB3aGlsZSAocCA8IHBvcykge1xuICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwKSA9PT0gMTApIHtcbiAgICAgICAgICBkZXRhaWxzLmxpbmUrKztcbiAgICAgICAgICBkZXRhaWxzLmNvbHVtbiA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGV0YWlscy5jb2x1bW4rKztcbiAgICAgICAgfVxuXG4gICAgICAgIHArKztcbiAgICAgIH1cblxuICAgICAgcGVnJHBvc0RldGFpbHNDYWNoZVtwb3NdID0gZGV0YWlscztcblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGVnJGNvbXB1dGVMb2NhdGlvbihzdGFydFBvcywgZW5kUG9zKSB7XG4gICAgdmFyIHN0YXJ0UG9zRGV0YWlscyA9IHBlZyRjb21wdXRlUG9zRGV0YWlscyhzdGFydFBvcyk7XG4gICAgdmFyIGVuZFBvc0RldGFpbHMgPSBwZWckY29tcHV0ZVBvc0RldGFpbHMoZW5kUG9zKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDoge1xuICAgICAgICBvZmZzZXQ6IHN0YXJ0UG9zLFxuICAgICAgICBsaW5lOiBzdGFydFBvc0RldGFpbHMubGluZSxcbiAgICAgICAgY29sdW1uOiBzdGFydFBvc0RldGFpbHMuY29sdW1uXG4gICAgICB9LFxuICAgICAgZW5kOiB7XG4gICAgICAgIG9mZnNldDogZW5kUG9zLFxuICAgICAgICBsaW5lOiBlbmRQb3NEZXRhaWxzLmxpbmUsXG4gICAgICAgIGNvbHVtbjogZW5kUG9zRGV0YWlscy5jb2x1bW5cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJGZhaWwoZXhwZWN0ZWQpIHtcbiAgICBpZiAocGVnJGN1cnJQb3MgPCBwZWckbWF4RmFpbFBvcykgeyByZXR1cm47IH1cblxuICAgIGlmIChwZWckY3VyclBvcyA+IHBlZyRtYXhGYWlsUG9zKSB7XG4gICAgICBwZWckbWF4RmFpbFBvcyA9IHBlZyRjdXJyUG9zO1xuICAgICAgcGVnJG1heEZhaWxFeHBlY3RlZCA9IFtdO1xuICAgIH1cblxuICAgIHBlZyRtYXhGYWlsRXhwZWN0ZWQucHVzaChleHBlY3RlZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwZWckYnVpbGRTaW1wbGVFcnJvcihtZXNzYWdlLCBsb2NhdGlvbikge1xuICAgIHJldHVybiBuZXcgcGVnJFN5bnRheEVycm9yKG1lc3NhZ2UsIG51bGwsIG51bGwsIGxvY2F0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRidWlsZFN0cnVjdHVyZWRFcnJvcihleHBlY3RlZCwgZm91bmQsIGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBwZWckU3ludGF4RXJyb3IoXG4gICAgICBwZWckU3ludGF4RXJyb3IuYnVpbGRNZXNzYWdlKGV4cGVjdGVkLCBmb3VuZCksXG4gICAgICBleHBlY3RlZCxcbiAgICAgIGZvdW5kLFxuICAgICAgbG9jYXRpb25cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJHBhcnNlc3RhcnQoKSB7XG4gICAgdmFyIHMwO1xuXG4gICAgczAgPSBwZWckcGFyc2V0b3AoKTtcblxuICAgIHJldHVybiBzMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZyRwYXJzZXRvcCgpIHtcbiAgICB2YXIgczAsIHMxLCBzMiwgczMsIHM0O1xuXG4gICAgczAgPSBwZWckY3VyclBvcztcbiAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCA1KSA9PT0gcGVnJGMwKSB7XG4gICAgICBzMSA9IHBlZyRjMDtcbiAgICAgIHBlZyRjdXJyUG9zICs9IDU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMxKTsgfVxuICAgIH1cbiAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gNDApIHtcbiAgICAgICAgczIgPSBwZWckYzI7XG4gICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMiA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMzKTsgfVxuICAgICAgfVxuICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMzID0gcGVnJHBhcnNlcGFyYW1zKCk7XG4gICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gNDEpIHtcbiAgICAgICAgICAgIHM0ID0gcGVnJGM0O1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgczQgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzUpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgcGVnJHNhdmVkUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRjNihzMyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgfVxuICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIGlmIChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIDgpID09PSBwZWckYzcpIHtcbiAgICAgICAgczEgPSBwZWckYzc7XG4gICAgICAgIHBlZyRjdXJyUG9zICs9IDg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM4KTsgfVxuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gNDApIHtcbiAgICAgICAgICBzMiA9IHBlZyRjMjtcbiAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHMyID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMyk7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMyA9IHBlZyRwYXJzZXBhcmFtcygpO1xuICAgICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA0MSkge1xuICAgICAgICAgICAgICBzNCA9IHBlZyRjNDtcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHM0ID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzUpOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoczQgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgcGVnJHNhdmVkUG9zID0gczA7XG4gICAgICAgICAgICAgIHMwID0gcGVnJGM5KHMzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgIH1cbiAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCA2KSA9PT0gcGVnJGMxMCkge1xuICAgICAgICAgIHMxID0gcGVnJGMxMDtcbiAgICAgICAgICBwZWckY3VyclBvcyArPSA2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMTEpOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczIgPSBwZWckcGFyc2VhdG9tKCk7XG4gICAgICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBwZWckc2F2ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJGMxMihzMik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgOSkgPT09IHBlZyRjMTMpIHtcbiAgICAgICAgICAgIHMxID0gcGVnJGMxMztcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zICs9IDk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMxNCk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzMiA9IHBlZyRwYXJzZWF0b20oKTtcbiAgICAgICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICBwZWckc2F2ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgICAgczAgPSBwZWckYzE1KHMyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gczA7XG4gIH1cblxuICBmdW5jdGlvbiBwZWckcGFyc2VwYXJhbXMoKSB7XG4gICAgdmFyIHMwLCBzMSwgczIsIHMzLCBzNCwgczU7XG5cbiAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgIHMxID0gcGVnJHBhcnNla2V5X3ZhbHVlX3BhaXIoKTtcbiAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgIHMyID0gW107XG4gICAgICBzMyA9IHBlZyRjdXJyUG9zO1xuICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA0NCkge1xuICAgICAgICBzNCA9IHBlZyRjMTY7XG4gICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzNCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMxNyk7IH1cbiAgICAgIH1cbiAgICAgIGlmIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzNSA9IHBlZyRwYXJzZWtleV92YWx1ZV9wYWlyKCk7XG4gICAgICAgIGlmIChzNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHM0ID0gW3M0LCBzNV07XG4gICAgICAgICAgczMgPSBzNDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMzO1xuICAgICAgICAgIHMzID0gcGVnJEZBSUxFRDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMztcbiAgICAgICAgczMgPSBwZWckRkFJTEVEO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMyLnB1c2goczMpO1xuICAgICAgICBzMyA9IHBlZyRjdXJyUG9zO1xuICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDQ0KSB7XG4gICAgICAgICAgczQgPSBwZWckYzE2O1xuICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgczQgPSBwZWckRkFJTEVEO1xuICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMxNyk7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoczQgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzNSA9IHBlZyRwYXJzZWtleV92YWx1ZV9wYWlyKCk7XG4gICAgICAgICAgaWYgKHM1ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzNCA9IFtzNCwgczVdO1xuICAgICAgICAgICAgczMgPSBzNDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMztcbiAgICAgICAgICAgIHMzID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMztcbiAgICAgICAgICBzMyA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBwZWckc2F2ZWRQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckYzE4KHMxLCBzMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHMwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJHBhcnNla2V5X3ZhbHVlX3BhaXIoKSB7XG4gICAgdmFyIHMwLCBzMSwgczIsIHMzO1xuXG4gICAgczAgPSBwZWckY3VyclBvcztcbiAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCAxOSkgPT09IHBlZyRjMTkpIHtcbiAgICAgIHMxID0gcGVnJGMxOTtcbiAgICAgIHBlZyRjdXJyUG9zICs9IDE5O1xuICAgIH0gZWxzZSB7XG4gICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMjApOyB9XG4gICAgfVxuICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgczIgPSBwZWckcGFyc2VwYXJhbXMoKTtcbiAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDQxKSB7XG4gICAgICAgICAgczMgPSBwZWckYzQ7XG4gICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzMyA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzUpOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgcGVnJHNhdmVkUG9zID0gczA7XG4gICAgICAgICAgczAgPSBwZWckYzIxKHMyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgIH1cbiAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCAxNikgPT09IHBlZyRjMjIpIHtcbiAgICAgICAgczEgPSBwZWckYzIyO1xuICAgICAgICBwZWckY3VyclBvcyArPSAxNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzIzKTsgfVxuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMyID0gcGVnJHBhcnNlcGFyYW1zKCk7XG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gNDEpIHtcbiAgICAgICAgICAgIHMzID0gcGVnJGM0O1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgczMgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzUpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgcGVnJHNhdmVkUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRjMjEoczIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgfVxuICAgICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICAgIGlmIChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIDIzKSA9PT0gcGVnJGMyNCkge1xuICAgICAgICAgIHMxID0gcGVnJGMyNDtcbiAgICAgICAgICBwZWckY3VyclBvcyArPSAyMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzI1KTsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMyID0gcGVnJHBhcnNlcGFyYW1zKCk7XG4gICAgICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDQxKSB7XG4gICAgICAgICAgICAgIHMzID0gcGVnJGM0O1xuICAgICAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgczMgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNSk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICBwZWckc2F2ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgICAgczAgPSBwZWckYzI2KHMyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCAyMSkgPT09IHBlZyRjMjcpIHtcbiAgICAgICAgICAgIHMxID0gcGVnJGMyNztcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zICs9IDIxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMjgpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczIgPSBwZWckcGFyc2VwYXJhbXMoKTtcbiAgICAgICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDQxKSB7XG4gICAgICAgICAgICAgICAgczMgPSBwZWckYzQ7XG4gICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzMyA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzUpOyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgcGVnJHNhdmVkUG9zID0gczA7XG4gICAgICAgICAgICAgICAgczAgPSBwZWckYzI5KHMyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICAgICAgICBzMSA9IHBlZyRwYXJzZWF0b20oKTtcbiAgICAgICAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDYxKSB7XG4gICAgICAgICAgICAgICAgczIgPSBwZWckYzMwO1xuICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgczIgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMzMSk7IH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBzMyA9IHBlZyRwYXJzZWF0b20oKTtcbiAgICAgICAgICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgIHBlZyRzYXZlZFBvcyA9IHMwO1xuICAgICAgICAgICAgICAgICAgczAgPSBwZWckYzMyKHMxLCBzMyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHMwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJHBhcnNlYXRvbSgpIHtcbiAgICB2YXIgczAsIHMxLCBzMjtcblxuICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgczEgPSBbXTtcbiAgICBzMiA9IHBlZyRwYXJzZXZhbGlkY2hhcigpO1xuICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgd2hpbGUgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMxLnB1c2goczIpO1xuICAgICAgICBzMiA9IHBlZyRwYXJzZXZhbGlkY2hhcigpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgfVxuICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgcGVnJHNhdmVkUG9zID0gczA7XG4gICAgICBzMSA9IHBlZyRjMzMoczEpO1xuICAgIH1cbiAgICBzMCA9IHMxO1xuXG4gICAgcmV0dXJuIHMwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVnJHBhcnNldmFsaWRjaGFyKCkge1xuICAgIHZhciBzMDtcblxuICAgIGlmIChwZWckYzM0LnRlc3QoaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKSkpIHtcbiAgICAgIHMwID0gaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKTtcbiAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMzNSk7IH1cbiAgICB9XG5cbiAgICByZXR1cm4gczA7XG4gIH1cblxuXG4gICAgICBmdW5jdGlvbiBjb2xsZWN0KCkge1xuICAgICAgICB2YXIgcmV0ID0ge307XG4gICAgICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8bGVuOyBpKyspIHtcbiAgICAgICAgICBmb3IgKHZhciBwIGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICByZXRbcF0gPSBhcmd1bWVudHNbaV1bcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG5cblxuICBwZWckcmVzdWx0ID0gcGVnJHN0YXJ0UnVsZUZ1bmN0aW9uKCk7XG5cbiAgaWYgKHBlZyRyZXN1bHQgIT09IHBlZyRGQUlMRUQgJiYgcGVnJGN1cnJQb3MgPT09IGlucHV0Lmxlbmd0aCkge1xuICAgIHJldHVybiBwZWckcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIGlmIChwZWckcmVzdWx0ICE9PSBwZWckRkFJTEVEICYmIHBlZyRjdXJyUG9zIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgICBwZWckZmFpbChwZWckZW5kRXhwZWN0YXRpb24oKSk7XG4gICAgfVxuXG4gICAgdGhyb3cgcGVnJGJ1aWxkU3RydWN0dXJlZEVycm9yKFxuICAgICAgcGVnJG1heEZhaWxFeHBlY3RlZCxcbiAgICAgIHBlZyRtYXhGYWlsUG9zIDwgaW5wdXQubGVuZ3RoID8gaW5wdXQuY2hhckF0KHBlZyRtYXhGYWlsUG9zKSA6IG51bGwsXG4gICAgICBwZWckbWF4RmFpbFBvcyA8IGlucHV0Lmxlbmd0aFxuICAgICAgICA/IHBlZyRjb21wdXRlTG9jYXRpb24ocGVnJG1heEZhaWxQb3MsIHBlZyRtYXhGYWlsUG9zICsgMSlcbiAgICAgICAgOiBwZWckY29tcHV0ZUxvY2F0aW9uKHBlZyRtYXhGYWlsUG9zLCBwZWckbWF4RmFpbFBvcylcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIHBlZyRTeW50YXhFcnJvciBhcyBTeW50YXhFcnJvcixcbiAgcGVnJHBhcnNlIGFzIHBhcnNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFN5bnRheEVycm9yOiBwZWckU3ludGF4RXJyb3IsXG4gIHBhcnNlOiBwZWckcGFyc2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9mcmFnbWVudC1pZGVudGlmaWVyL2ZyYWdtZW50LmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3RcbiAqIHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mXG4gKiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGVcbiAqIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4gKiB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgeyBTeW50YXhFcnJvciwgcGFyc2UgfSBmcm9tICcuL2ZyYWdtZW50JztcblxuLyoqXG4gKiBDb252ZXJ0IGEgU2VsZWN0b3Igb3IgU3RhdGUgaW50byBhIGZyYWdtZW50IGlkZW50aWZpZXIgc3RyaW5nLlxuICogQHBhcmFtIHsoU2VsZWN0b3J8U3RhdGUpfSByZXNvdXJjZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5KHJlc291cmNlKSB7XG4gIGNvbnN0IGRhdGEgPSBPYmplY3Qua2V5cyhyZXNvdXJjZSlcbiAgICAubWFwKGtleSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSByZXNvdXJjZVtrZXldO1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB2YWx1ZSA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICB2YWx1ZSA9IHN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHt2YWx1ZX1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtrZXksIHZhbHVlXS5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKCc9Jyk7XG4gICAgfSlcbiAgICAuam9pbignLCcpO1xuXG4gIGlmICgvU2VsZWN0b3IkLy50ZXN0KHJlc291cmNlLnR5cGUpKSByZXR1cm4gYHNlbGVjdG9yKCR7ZGF0YX0pYDtcbiAgaWYgKC9TdGF0ZSQvLnRlc3QocmVzb3VyY2UudHlwZSkpIHJldHVybiBgc3RhdGUoJHtkYXRhfSlgO1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZXNvdXJjZSBtdXN0IGJlIGEgU2VsZWN0b3Igb3IgU3RhdGUnKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL2ZyYWdtZW50LWlkZW50aWZpZXIvaW5kZXguanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdFxuICogdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2ZcbiAqIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZVxuICogTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiAqIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBjbGFzcyBBc3luY1RlZSB7XG4gIGNvbnN0cnVjdG9yKGl0ZXJhYmxlKSB7XG4gICAgdGhpcy5pdCA9IGl0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpO1xuICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgKltTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChpIDwgdGhpcy52YWx1ZXMubGVuZ3RoIHx8ICF0aGlzLmZpbmlzaGVkKSB7XG4gICAgICBpZiAoaSA8IHRoaXMudmFsdWVzLmxlbmd0aCkge1xuICAgICAgICB5aWVsZCB0aGlzLnZhbHVlc1tpKytdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHsgdmFsdWUsIGRvbmUgfSA9IGF3YWl0IHRoaXMuaXQubmV4dCgpO1xuICAgICAgICBpZiAoZG9uZSkgdGhpcy5maW5pc2hlZCA9IHRydWU7XG4gICAgICAgIGVsc2UgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZWUge1xuICBjb25zdHJ1Y3RvcihpdGVyYWJsZSkge1xuICAgIHRoaXMuaXQgPSBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XG4gIH1cblxuICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChpIDwgdGhpcy52YWx1ZXMubGVuZ3RoIHx8ICF0aGlzLmZpbmlzaGVkKSB7XG4gICAgICBpZiAoaSA8IHRoaXMudmFsdWVzLmxlbmd0aCkge1xuICAgICAgICB5aWVsZCB0aGlzLnZhbHVlc1tpKytdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHsgdmFsdWUsIGRvbmUgfSA9IHRoaXMuaXQubmV4dCgpO1xuICAgICAgICBpZiAoZG9uZSkgdGhpcy5maW5pc2hlZCA9IHRydWU7XG4gICAgICAgIGVsc2UgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy90ZWUvaW5kZXguanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdFxuICogdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2ZcbiAqIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZVxuICogTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXJcbiAqIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEFzeW5jVGVlIH0gZnJvbSAnQGFubm90YXRvci90ZWUnO1xuaW1wb3J0IHtcbiAgY3JlYXRlU2VsZWN0b3JDcmVhdG9yIGFzIF9jcmVhdGVTZWxlY3RvckNyZWF0b3IsXG4gIGRlZmF1bHRNZW1vaXplLFxufSBmcm9tICdyZXNlbGVjdCc7XG5cbmNvbnN0IGlkZW50aXR5ID0gYSA9PiBhO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JDcmVhdG9yKG1lbW9pemUsIC4uLm1lbW9pemVPcHRpb25zKSB7XG4gIGNvbnN0IGNyZWF0ZVNlbGVjdG9yID0gX2NyZWF0ZVNlbGVjdG9yQ3JlYXRvcihtZW1vaXplLCAuLi5tZW1vaXplT3B0aW9ucyk7XG4gIHJldHVybiByZXN1bHRGdW5jID0+IHtcbiAgICBjb25zdCB3cmFwcGVyRnVuYyA9ICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBpdGVyYWJsZSA9IHJlc3VsdEZ1bmMoLi4uYXJncyk7XG4gICAgICByZXR1cm4gbmV3IEFzeW5jVGVlKGl0ZXJhYmxlKTtcbiAgICB9O1xuICAgIHJldHVybiBjcmVhdGVTZWxlY3RvcihpZGVudGl0eSwgd3JhcHBlckZ1bmMpO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvckNyZWF0b3IoZGVmYXVsdE1lbW9pemUpO1xuXG5leHBvcnQgeyBkZWZhdWx0TWVtb2l6ZSB9IGZyb20gJ3Jlc2VsZWN0JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3NlbGVjdG9yL2luZGV4LmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3RcbiAqIHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mXG4gKiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGVcbiAqIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXG4gKiB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0Bhbm5vdGF0b3Ivc2VsZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dFF1b3RlU2VsZWN0b3IoKSB7XG4gIGFzeW5jIGZ1bmN0aW9uKiBleGVjKHsgZGVzY3JpcHRvcnMsIGNvbnRleHQgfSkge1xuICAgIGZvciAobGV0IGRlc2NyaXB0b3Igb2YgZGVzY3JpcHRvcnMpIHtcbiAgICAgIGNvbnN0IHByZWZpeCA9IGRlc2NyaXB0b3IucHJlZml4IHx8ICcnO1xuICAgICAgY29uc3Qgc3VmZml4ID0gZGVzY3JpcHRvci5zdWZmaXggfHwgJyc7XG4gICAgICBjb25zdCBwYXR0ZXJuID0gcHJlZml4ICsgZGVzY3JpcHRvci5leGFjdCArIHN1ZmZpeDtcbiAgICAgIGxldCBsYXN0SW5kZXggPSAwO1xuICAgICAgbGV0IG5leHQgPSAoKSA9PiBjb250ZXh0LmluZGV4T2YocGF0dGVybiwgbGFzdEluZGV4KTtcbiAgICAgIGxldCBtYXRjaCA9IG5leHQoKTtcbiAgICAgIHdoaWxlIChtYXRjaCAhPT0gLTEpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtkZXNjcmlwdG9yLmV4YWN0XTtcbiAgICAgICAgcmVzdWx0LmluZGV4ID0gbWF0Y2ggKyBwcmVmaXgubGVuZ3RoO1xuICAgICAgICByZXN1bHQuaW5wdXQgPSBjb250ZXh0O1xuICAgICAgICByZXN1bHQuZGVzY3JpcHRvciA9IGRlc2NyaXB0b3I7XG4gICAgICAgIHlpZWxkIHJlc3VsdDtcbiAgICAgICAgbGFzdEluZGV4ID0gbWF0Y2ggKyAxO1xuICAgICAgICBtYXRjaCA9IG5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoZXhlYyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjcmliZVRleHRRdW90ZSh7IGNvbnRleHQsIHN0YXJ0SW5kZXgsIGVuZEluZGV4IH0pIHtcbiAgY29uc3QgZXhhY3QgPSBjb250ZXh0LnN1YnN0cmluZyhzdGFydEluZGV4LCBlbmRJbmRleCk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1RleHRRdW90ZVNlbGVjdG9yJyxcbiAgICBleGFjdCxcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3RleHQvaW5kZXguanMiLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyB1dGlsIChpZ25vcmVkKVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyB1bnppcC1yZXNwb25zZSAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==