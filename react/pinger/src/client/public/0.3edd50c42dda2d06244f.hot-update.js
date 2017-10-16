webpackHotUpdate(0,{

/***/ 33:
/*!********************************!*\
  !*** ./src/client/app/app.jsx ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _app_bar = __webpack_require__(/*! react-toolbox/lib/app_bar */ 236);\n\nvar _app_bar2 = _interopRequireDefault(_app_bar);\n\nvar _navigation = __webpack_require__(/*! react-toolbox/lib/navigation */ 239);\n\nvar _navigation2 = _interopRequireDefault(_navigation);\n\nvar _link = __webpack_require__(/*! react-toolbox/lib/link */ 235);\n\nvar _link2 = _interopRequireDefault(_link);\n\nvar _button = __webpack_require__(/*! react-toolbox/lib/button */ 211);\n\nvar _card = __webpack_require__(/*! react-toolbox/lib/card */ 246);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _app_bar2.default,\n          { title: 'Pinger' },\n          _react2.default.createElement(_navigation2.default, { type: 'horizontal' })\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Add a site to ping by clicking the button in the bottom right.'\n        ),\n        _react2.default.createElement(_button.Button, { id: 'fab', icon: 'add', floating: true, primary: true }),\n        _react2.default.createElement(\n          _card.Card,\n          { style: { width: '350px' } },\n          _react2.default.createElement(_card.CardTitle, {\n            title: 'Headed Out',\n            subtitle: 'https://coordinates.hugthecenterline.com'\n          }),\n          _react2.default.createElement(\n            _card.CardText,\n            null,\n            _react2.default.createElement(\n              'svg',\n              { height: '20', width: '20' },\n              _react2.default.createElement('circle', { cx: '10', cy: '10', r: '10', stroke: 'none', 'stroke-width': '0', fill: 'red' }),\n              'Sorry, your browser does not support inline SVG.'\n            ),\n            _react2.default.createElement(\n              'span',\n              null,\n              'Last checked: N/A'\n            )\n          ),\n          _react2.default.createElement(\n            _card.CardActions,\n            null,\n            _react2.default.createElement(_button.Button, { label: 'Check' })\n          )\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nvar _default = App;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(App, 'App', '/home/dave/projects/playground/react/react-toolbox-sample/src/client/app/app.jsx');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/home/dave/projects/playground/react/react-toolbox-sample/src/client/app/app.jsx');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9hcHAvYXBwLmpzeD8wYjRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ3JlYWN0LXRvb2xib3gvbGliL2FwcF9iYXInO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAncmVhY3QtdG9vbGJveC9saWIvbmF2aWdhdGlvbic7XG5pbXBvcnQgTGluayBmcm9tICdyZWFjdC10b29sYm94L2xpYi9saW5rJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdyZWFjdC10b29sYm94L2xpYi9idXR0b24nO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZE1lZGlhLCBDYXJkVGl0bGUsIENhcmRUZXh0LCBDYXJkQWN0aW9ucyB9IGZyb20gJ3JlYWN0LXRvb2xib3gvbGliL2NhcmQnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFwcEJhciB0aXRsZT0nUGluZ2VyJyA+XG4gICAgICAgICAgPE5hdmlnYXRpb24gdHlwZT0naG9yaXpvbnRhbCc+XG4gICAgICAgICAgPC9OYXZpZ2F0aW9uPlxuICAgICAgICA8L0FwcEJhcj5cblxuICAgICAgICA8cD5BZGQgYSBzaXRlIHRvIHBpbmcgYnkgY2xpY2tpbmcgdGhlIGJ1dHRvbiBpbiB0aGUgYm90dG9tIHJpZ2h0LjwvcD5cbiAgICAgICAgPEJ1dHRvbiBpZD0nZmFiJyBpY29uPSdhZGQnIGZsb2F0aW5nIHByaW1hcnkgLz5cblxuICAgICAgICA8Q2FyZCBzdHlsZT17e3dpZHRoOiAnMzUwcHgnfX0+XG4gICAgICAgICAgPENhcmRUaXRsZVxuICAgICAgICAgICAgdGl0bGU9XCJIZWFkZWQgT3V0XCJcbiAgICAgICAgICAgIHN1YnRpdGxlPVwiaHR0cHM6Ly9jb29yZGluYXRlcy5odWd0aGVjZW50ZXJsaW5lLmNvbVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZFRleHQ+XG4gICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjIwXCIgd2lkdGg9XCIyMFwiPlxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjEwXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjBcIiBmaWxsPVwicmVkXCIgLz5cbiAgICAgICAgICAgICAgU29ycnksIHlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGlubGluZSBTVkcuXG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPHNwYW4+TGFzdCBjaGVja2VkOiBOL0E8L3NwYW4+XG4gICAgICAgICAgPC9DYXJkVGV4dD5cbiAgICAgICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiQ2hlY2tcIiAvPlxuICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jbGllbnQvYXBwL2FwcC5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVpBO0FBVEE7QUEyQkE7Ozs7QUE5QkE7QUFDQTtBQWdDQTs7Ozs7Ozs7O0FBakNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///33\n");

/***/ })

})