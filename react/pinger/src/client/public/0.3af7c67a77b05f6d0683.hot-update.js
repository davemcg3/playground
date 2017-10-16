webpackHotUpdate(0,{

/***/ 255:
/*!***************************************!*\
  !*** ./src/client/app/PingerCard.jsx ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _card = __webpack_require__(/*! react-toolbox/lib/card */ 246);\n\nvar _button = __webpack_require__(/*! react-toolbox/lib/button */ 211);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PingerCard = function (_React$Component) {\n  _inherits(PingerCard, _React$Component);\n\n  function PingerCard(props) {\n    _classCallCheck(this, PingerCard);\n\n    var _this = _possibleConstructorReturn(this, (PingerCard.__proto__ || Object.getPrototypeOf(PingerCard)).call(this, props));\n\n    _this.state = {\n      status: 0,\n      color: 'grey',\n      siteName: props.siteName,\n      siteUrl: props.siteUrl,\n      method: props.method,\n      lastChecked: 'N/A'\n    };\n    _this.checkSite = _this.checkSite.bind(_this);\n    return _this;\n  }\n\n  _createClass(PingerCard, [{\n    key: 'ping',\n    value: function ping() {\n      console.log('start ping');\n      // example request\n      getCORS('http://foo.bar/?p1=1&p2=Hello+World', function (request) {\n        var response = request.currentTarget.response || request.target.responseText;\n        console.log(response);\n      });\n    }\n  }, {\n    key: 'getCORS',\n    value: function getCORS(url, success) {\n      var xhr = new XMLHttpRequest();\n      if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // fix IE8/9\n      xhr.open('GET', url);\n      xhr.onload = success;\n      xhr.send();\n      return xhr;\n    }\n  }, {\n    key: 'checkSite',\n    value: function checkSite() {\n      console.log('checking site');\n      this.ping();\n      console.log('check completed');\n      var status = 1;\n      this.setState({ status: status });\n      this.setState({ lastChecked: new Date().toLocaleString() });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _card.Card,\n          { style: { width: '33%' } },\n          _react2.default.createElement(_card.CardTitle, {\n            title: 'Headed Out',\n            subtitle: 'https://coordinates.hugthecenterline.com'\n          }),\n          _react2.default.createElement(\n            _card.CardText,\n            null,\n            _react2.default.createElement(\n              'div',\n              { className: 'cardtext' },\n              _react2.default.createElement(\n                'svg',\n                { height: '20', width: '20' },\n                _react2.default.createElement('circle', { cx: '10', cy: '10', r: '10', fill: this.state.color }),\n                'Sorry, your browser does not support inline SVG.'\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                'Last checked: ',\n                this.state.lastChecked\n              )\n            )\n          ),\n          _react2.default.createElement(\n            _card.CardActions,\n            null,\n            _react2.default.createElement(_button.Button, { label: 'Check', onClick: this.checkSite })\n          )\n        )\n      );\n    }\n  }]);\n\n  return PingerCard;\n}(_react2.default.Component);\n\nvar _default = PingerCard;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(PingerCard, 'PingerCard', '/home/dave/projects/playground/react/react-toolbox-sample/src/client/app/PingerCard.jsx');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/home/dave/projects/playground/react/react-toolbox-sample/src/client/app/PingerCard.jsx');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jbGllbnQvYXBwL1BpbmdlckNhcmQuanN4PzkwYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIENhcmRNZWRpYSwgQ2FyZFRpdGxlLCBDYXJkVGV4dCwgQ2FyZEFjdGlvbnMgfSBmcm9tICdyZWFjdC10b29sYm94L2xpYi9jYXJkJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdyZWFjdC10b29sYm94L2xpYi9idXR0b24nO1xuXG5jbGFzcyBQaW5nZXJDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhdHVzIDogMCxcbiAgICAgIGNvbG9yIDogJ2dyZXknLFxuICAgICAgc2l0ZU5hbWUgOiBwcm9wcy5zaXRlTmFtZSxcbiAgICAgIHNpdGVVcmwgOiBwcm9wcy5zaXRlVXJsLFxuICAgICAgbWV0aG9kIDogcHJvcHMubWV0aG9kLFxuICAgICAgbGFzdENoZWNrZWQgOiAnTi9BJ1xuICAgIH07XG4gICAgdGhpcy5jaGVja1NpdGUgPSB0aGlzLmNoZWNrU2l0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcGluZyAoKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0IHBpbmcnKTtcbiAgICAvLyBleGFtcGxlIHJlcXVlc3RcbiAgXHRnZXRDT1JTKCdodHRwOi8vZm9vLmJhci8/cDE9MSZwMj1IZWxsbytXb3JsZCcsIGZ1bmN0aW9uKHJlcXVlc3Qpe1xuICBcdCAgICB2YXIgcmVzcG9uc2UgPSByZXF1ZXN0LmN1cnJlbnRUYXJnZXQucmVzcG9uc2UgfHwgcmVxdWVzdC50YXJnZXQucmVzcG9uc2VUZXh0O1xuICBcdCAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gIFx0fSk7XG4gIH1cblxuICBnZXRDT1JTKHVybCwgc3VjY2Vzcykge1xuXHQgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHQgICAgaWYgKCEoJ3dpdGhDcmVkZW50aWFscycgaW4geGhyKSkgeGhyID0gbmV3IFhEb21haW5SZXF1ZXN0KCk7IC8vIGZpeCBJRTgvOVxuXHQgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG5cdCAgICB4aHIub25sb2FkID0gc3VjY2Vzcztcblx0ICAgIHhoci5zZW5kKCk7XG5cdCAgICByZXR1cm4geGhyO1xuXHR9XG5cbiAgY2hlY2tTaXRlICgpIHtcbiAgICBjb25zb2xlLmxvZygnY2hlY2tpbmcgc2l0ZScpO1xuICAgIHRoaXMucGluZygpO1xuICAgIGNvbnNvbGUubG9nKCdjaGVjayBjb21wbGV0ZWQnKTtcbiAgICBsZXQgc3RhdHVzID0gMTtcbiAgICB0aGlzLnNldFN0YXRlKHtzdGF0dXM6IHN0YXR1c30pO1xuICAgIHRoaXMuc2V0U3RhdGUoe2xhc3RDaGVja2VkOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCl9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q2FyZCBzdHlsZT17e3dpZHRoOiAnMzMlJ319PlxuICAgICAgICAgIDxDYXJkVGl0bGVcbiAgICAgICAgICAgIHRpdGxlPVwiSGVhZGVkIE91dFwiXG4gICAgICAgICAgICBzdWJ0aXRsZT1cImh0dHBzOi8vY29vcmRpbmF0ZXMuaHVndGhlY2VudGVybGluZS5jb21cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRUZXh0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkdGV4dFwiPlxuICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjIwXCIgd2lkdGg9XCIyMFwiPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMTBcIiBmaWxsPXt0aGlzLnN0YXRlLmNvbG9yfSAvPlxuICAgICAgICAgICAgICAgIFNvcnJ5LCB5b3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBpbmxpbmUgU1ZHLlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPHNwYW4+TGFzdCBjaGVja2VkOiB7dGhpcy5zdGF0ZS5sYXN0Q2hlY2tlZH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmRUZXh0PlxuICAgICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJDaGVja1wiIG9uQ2xpY2s9e3RoaXMuY2hlY2tTaXRlfSAvPlxuICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQaW5nZXJDYXJkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jbGllbnQvYXBwL1BpbmdlckNhcmQuanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQVZBO0FBV0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBZEE7QUFEQTtBQXFCQTs7OztBQWpFQTtBQUNBO0FBb0VBOzs7Ozs7Ozs7QUFyRUE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///255\n");

/***/ })

})