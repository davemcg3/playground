webpackHotUpdate(0,{

/***/ 255:
/*!***************************************!*\
  !*** ./src/client/app/PingerCard.jsx ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _card = __webpack_require__(/*! react-toolbox/lib/card */ 246);\n\nvar _button = __webpack_require__(/*! react-toolbox/lib/button */ 211);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PingerCard = function (_React$Component) {\n  _inherits(PingerCard, _React$Component);\n\n  function PingerCard(props) {\n    _classCallCheck(this, PingerCard);\n\n    var _this = _possibleConstructorReturn(this, (PingerCard.__proto__ || Object.getPrototypeOf(PingerCard)).call(this, props));\n\n    _this.state = {\n      status: 0,\n      color: 'grey',\n      siteName: props.siteName,\n      siteUrl: props.siteUrl,\n      method: props.method,\n      lastChecked: 'N/A'\n    };\n    _this.onLike = _this.onLike.bind(_this);\n    return _this;\n  }\n\n  _createClass(PingerCard, [{\n    key: 'onLike',\n    value: function onLike() {\n      var newLikesCount = this.state.likesCount + 1;\n      this.setState({ likesCount: newLikesCount });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _card.Card,\n          { style: { width: '33%' } },\n          _react2.default.createElement(_card.CardTitle, {\n            title: 'Headed Out',\n            subtitle: 'https://coordinates.hugthecenterline.com'\n          }),\n          _react2.default.createElement(\n            _card.CardText,\n            null,\n            _react2.default.createElement(\n              'div',\n              { className: 'cardtext' },\n              _react2.default.createElement(\n                'svg',\n                { height: '20', width: '20' },\n                _react2.default.createElement('circle', { cx: '10', cy: '10', r: '10', fill: this.state.color }),\n                'Sorry, your browser does not support inline SVG.'\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                'Last checked: N/A'\n              )\n            )\n          ),\n          _react2.default.createElement(\n            _card.CardActions,\n            null,\n            _react2.default.createElement(_button.Button, { label: 'Check' })\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          'Likes : ',\n          _react2.default.createElement(\n            'span',\n            null,\n            this.state.likesCount\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'button',\n              { onClick: this.onLike },\n              'Like Me'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return PingerCard;\n}(_react2.default.Component);\n\nvar _default = PingerCard;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(PingerCard, 'PingerCard', '/home/dave/projects/playground/react/react-toolbox-sample/src/client/app/PingerCard.jsx');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/home/dave/projects/playground/react/react-toolbox-sample/src/client/app/PingerCard.jsx');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jbGllbnQvYXBwL1BpbmdlckNhcmQuanN4PzkwYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIENhcmRNZWRpYSwgQ2FyZFRpdGxlLCBDYXJkVGV4dCwgQ2FyZEFjdGlvbnMgfSBmcm9tICdyZWFjdC10b29sYm94L2xpYi9jYXJkJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdyZWFjdC10b29sYm94L2xpYi9idXR0b24nO1xuXG5jbGFzcyBQaW5nZXJDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhdHVzIDogMCxcbiAgICAgIGNvbG9yIDogJ2dyZXknLFxuICAgICAgc2l0ZU5hbWUgOiBwcm9wcy5zaXRlTmFtZSxcbiAgICAgIHNpdGVVcmwgOiBwcm9wcy5zaXRlVXJsLFxuICAgICAgbWV0aG9kIDogcHJvcHMubWV0aG9kLFxuICAgICAgbGFzdENoZWNrZWQgOiAnTi9BJ1xuICAgIH07XG4gICAgdGhpcy5vbkxpa2UgPSB0aGlzLm9uTGlrZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25MaWtlICgpIHtcbiAgICBsZXQgbmV3TGlrZXNDb3VudCA9IHRoaXMuc3RhdGUubGlrZXNDb3VudCArIDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGlrZXNDb3VudDogbmV3TGlrZXNDb3VudH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q2FyZCBzdHlsZT17e3dpZHRoOiAnMzMlJ319PlxuICAgICAgICAgIDxDYXJkVGl0bGVcbiAgICAgICAgICAgIHRpdGxlPVwiSGVhZGVkIE91dFwiXG4gICAgICAgICAgICBzdWJ0aXRsZT1cImh0dHBzOi8vY29vcmRpbmF0ZXMuaHVndGhlY2VudGVybGluZS5jb21cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRUZXh0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkdGV4dFwiPlxuICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjIwXCIgd2lkdGg9XCIyMFwiPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMTBcIiBmaWxsPXt0aGlzLnN0YXRlLmNvbG9yfSAvPlxuICAgICAgICAgICAgICAgIFNvcnJ5LCB5b3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBpbmxpbmUgU1ZHLlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPHNwYW4+TGFzdCBjaGVja2VkOiBOL0E8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmRUZXh0PlxuICAgICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJDaGVja1wiIC8+XG4gICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgPC9DYXJkPlxuXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBMaWtlcyA6IDxzcGFuPnt0aGlzLnN0YXRlLmxpa2VzQ291bnR9PC9zcGFuPlxuICAgICAgICAgIDxkaXY+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uTGlrZX0+TGlrZSBNZTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQaW5nZXJDYXJkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jbGllbnQvYXBwL1BpbmdlckNhcmQuanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQVZBO0FBV0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFkQTtBQW9CQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQXJCQTtBQTJCQTs7OztBQWpEQTtBQUNBO0FBb0RBOzs7Ozs7Ozs7QUFyREE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///255\n");

/***/ })

})