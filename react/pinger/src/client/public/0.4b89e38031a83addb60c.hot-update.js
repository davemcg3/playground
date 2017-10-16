webpackHotUpdate(0,{

/***/ 230:
/*!*********************************************!*\
  !*** ./src/client/app/AwesomeComponent.jsx ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AwesomeComponent = function (_React$Component) {\n  _inherits(AwesomeComponent, _React$Component);\n\n  function AwesomeComponent(props) {\n    _classCallCheck(this, AwesomeComponent);\n\n    var _this = _possibleConstructorReturn(this, (AwesomeComponent.__proto__ || Object.getPrototypeOf(AwesomeComponent)).call(this, props));\n\n    _this.state = { likesCount: 0 };\n    _this.onLike = _this.onLike.bind(_this);\n    return _this;\n  }\n\n  _createClass(AwesomeComponent, [{\n    key: 'onLike',\n    value: function onLike() {\n      var newLikesCount = this.state.likesCount + 1;\n      this.setState({ likesCount: newLikesCount });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Likes : ',\n        _react2.default.createElement(\n          'span',\n          null,\n          this.state.likesCount\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'button',\n            { onClick: this.onLike },\n            'Like Me'\n          )\n        )\n      );\n    }\n  }]);\n\n  return AwesomeComponent;\n}(_react2.default.Component);\n\nvar _default = AwesomeComponent;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(AwesomeComponent, 'AwesomeComponent', '/home/dave/projects/playground/react/react-toolbox-sample/src/client/app/AwesomeComponent.jsx');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/home/dave/projects/playground/react/react-toolbox-sample/src/client/app/AwesomeComponent.jsx');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jbGllbnQvYXBwL0F3ZXNvbWVDb21wb25lbnQuanN4PzM2YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQXdlc29tZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtsaWtlc0NvdW50IDogMH07XG4gICAgdGhpcy5vbkxpa2UgPSB0aGlzLm9uTGlrZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25MaWtlICgpIHtcbiAgICBsZXQgbmV3TGlrZXNDb3VudCA9IHRoaXMuc3RhdGUubGlrZXNDb3VudCArIDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGlrZXNDb3VudDogbmV3TGlrZXNDb3VudH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBMaWtlcyA6IDxzcGFuPnt0aGlzLnN0YXRlLmxpa2VzQ291bnR9PC9zcGFuPlxuICAgICAgICA8ZGl2PjxidXR0b24gb25DbGljaz17dGhpcy5vbkxpa2V9Pkxpa2UgTWU8L2J1dHRvbj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBd2Vzb21lQ29tcG9uZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jbGllbnQvYXBwL0F3ZXNvbWVDb21wb25lbnQuanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBOzs7O0FBcEJBO0FBQ0E7QUF1QkE7Ozs7Ozs7OztBQXhCQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///230\n");

/***/ }),

/***/ 33:
/*!********************************!*\
  !*** ./src/client/app/app.jsx ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _button = __webpack_require__(/*! react-toolbox/lib/button */ 211);\n\nvar _AwesomeComponent = __webpack_require__(/*! ./AwesomeComponent.jsx */ 230);\n\nvar _AwesomeComponent2 = _interopRequireDefault(_AwesomeComponent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'p',\n          null,\n          'Hello, React! watching? Please say yes.'\n        ),\n        _react2.default.createElement(_button.Button, { label: 'Hello World!' }),\n        _react2.default.createElement(_AwesomeComponent2.default, null)\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nvar _default = App;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(App, 'App', '/home/dave/projects/playground/react/react-toolbox-sample/src/client/app/app.jsx');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/home/dave/projects/playground/react/react-toolbox-sample/src/client/app/app.jsx');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9hcHAvYXBwLmpzeD8wYjRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC10b29sYm94L2xpYi9idXR0b24nO1xuaW1wb3J0IEF3ZXNvbWVDb21wb25lbnQgZnJvbSAnLi9Bd2Vzb21lQ29tcG9uZW50LmpzeCc7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPkhlbGxvLCBSZWFjdCEgd2F0Y2hpbmc/IFBsZWFzZSBzYXkgeWVzLjwvcD5cbiAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIkhlbGxvIFdvcmxkIVwiIC8+XG4gICAgICAgIDxBd2Vzb21lQ29tcG9uZW50IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY2xpZW50L2FwcC9hcHAuanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQU1BOzs7O0FBVEE7QUFDQTtBQVdBOzs7Ozs7Ozs7QUFaQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ })

})