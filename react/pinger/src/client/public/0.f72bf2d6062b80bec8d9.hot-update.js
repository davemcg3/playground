webpackHotUpdate(0,{

/***/ 255:
/*!***************************************!*\
  !*** ./src/client/app/PingerCard.jsx ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _card = __webpack_require__(/*! react-toolbox/lib/card */ 246);\n\nvar _button = __webpack_require__(/*! react-toolbox/lib/button */ 211);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PingerCard = function (_React$Component) {\n  _inherits(PingerCard, _React$Component);\n\n  function PingerCard(props) {\n    _classCallCheck(this, PingerCard);\n\n    var _this = _possibleConstructorReturn(this, (PingerCard.__proto__ || Object.getPrototypeOf(PingerCard)).call(this, props));\n\n    _this.state = {\n      status: _this.PENDING,\n      color: 'grey',\n      siteName: props.siteName,\n      siteUrl: props.siteUrl,\n      method: props.method,\n      paylaod: null,\n      lastChecked: 'N/A'\n    };\n    _this.checkSite = _this.checkSite.bind(_this);\n\n    //check on load\n    _this.ping();\n    return _this;\n  }\n\n  _createClass(PingerCard, [{\n    key: 'ping',\n    value: function ping() {\n      console.log('start ping');\n      // example request\n      this.getCORS('https://coordinates.hugthecenterline.com', function (request) {\n        //failed on a named function callback that request wasn't defined, but\n        //passing an anonymous function that calls the named function is fine\n        this.successfulCors(request);\n      });\n    }\n  }, {\n    key: 'getCORS',\n    value: function getCORS(url, success) {\n      console.log('start cors request');\n      var xhr = new XMLHttpRequest();\n      if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // fix IE8/9\n      xhr.open('GET', url);\n      xhr.onload = success;\n      xhr.send();\n      return xhr;\n    }\n  }, {\n    key: 'successfulCors',\n    value: function successfulCors(request) {\n      console.log('**************');\n      console.log(request);\n      console.log('**************');\n      var response = request.currentTarget.response || request.target.responseText;\n      console.log(response);\n      this.setState({ status: this.UP });\n      this.setState({ color: 'green' });\n    }\n  }, {\n    key: 'checkSite',\n    value: function checkSite() {\n      console.log('checking site');\n      this.ping();\n      var status = 1;\n      this.setState({ status: status });\n      this.setState({ lastChecked: new Date().toLocaleString() });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _card.Card,\n          { style: { width: '33%' } },\n          _react2.default.createElement(_card.CardTitle, {\n            title: 'Headed Out',\n            subtitle: 'https://coordinates.hugthecenterline.com'\n          }),\n          _react2.default.createElement(\n            _card.CardText,\n            null,\n            _react2.default.createElement(\n              'div',\n              { className: 'cardtext' },\n              _react2.default.createElement(\n                'svg',\n                { height: '20', width: '20' },\n                _react2.default.createElement('circle', { cx: '10', cy: '10', r: '10', fill: this.state.color }),\n                'Sorry, your browser does not support inline SVG.'\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                'Last checked: ',\n                this.state.lastChecked\n              )\n            )\n          ),\n          _react2.default.createElement(\n            _card.CardActions,\n            null,\n            _react2.default.createElement(_button.Button, { label: 'Settings' }),\n            _react2.default.createElement(_button.Button, { label: 'Check', onClick: this.checkSite })\n          )\n        )\n      );\n    }\n  }]);\n\n  return PingerCard;\n}(_react2.default.Component);\n\nvar _default = PingerCard;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(PingerCard, 'PingerCard', '/home/dave/projects/playground/react/react-toolbox-sample/src/client/app/PingerCard.jsx');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/home/dave/projects/playground/react/react-toolbox-sample/src/client/app/PingerCard.jsx');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jbGllbnQvYXBwL1BpbmdlckNhcmQuanN4PzkwYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIENhcmRNZWRpYSwgQ2FyZFRpdGxlLCBDYXJkVGV4dCwgQ2FyZEFjdGlvbnMgfSBmcm9tICdyZWFjdC10b29sYm94L2xpYi9jYXJkJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdyZWFjdC10b29sYm94L2xpYi9idXR0b24nO1xuXG5jbGFzcyBQaW5nZXJDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWNzOiB7XG4gICAgUEVORElORzogMCxcbiAgICBVUDogMSxcbiAgICBET1dOOiAyXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhdHVzIDogdGhpcy5QRU5ESU5HLFxuICAgICAgY29sb3IgOiAnZ3JleScsXG4gICAgICBzaXRlTmFtZSA6IHByb3BzLnNpdGVOYW1lLFxuICAgICAgc2l0ZVVybCA6IHByb3BzLnNpdGVVcmwsXG4gICAgICBtZXRob2QgOiBwcm9wcy5tZXRob2QsXG4gICAgICBwYXlsYW9kIDogbnVsbCxcbiAgICAgIGxhc3RDaGVja2VkIDogJ04vQSdcbiAgICB9O1xuICAgIHRoaXMuY2hlY2tTaXRlID0gdGhpcy5jaGVja1NpdGUuYmluZCh0aGlzKTtcblxuICAgIC8vY2hlY2sgb24gbG9hZFxuICAgIHRoaXMucGluZygpO1xuICB9XG5cbiAgcGluZyAoKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0IHBpbmcnKTtcbiAgICAvLyBleGFtcGxlIHJlcXVlc3RcbiAgXHR0aGlzLmdldENPUlMoJ2h0dHBzOi8vY29vcmRpbmF0ZXMuaHVndGhlY2VudGVybGluZS5jb20nLCBmdW5jdGlvbihyZXF1ZXN0KXtcbiAgICAgIC8vZmFpbGVkIG9uIGEgbmFtZWQgZnVuY3Rpb24gY2FsbGJhY2sgdGhhdCByZXF1ZXN0IHdhc24ndCBkZWZpbmVkLCBidXRcbiAgICAgIC8vcGFzc2luZyBhbiBhbm9ueW1vdXMgZnVuY3Rpb24gdGhhdCBjYWxscyB0aGUgbmFtZWQgZnVuY3Rpb24gaXMgZmluZVxuICAgICAgdGhpcy5zdWNjZXNzZnVsQ29ycyhyZXF1ZXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENPUlModXJsLCBzdWNjZXNzKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0IGNvcnMgcmVxdWVzdCcpO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBpZiAoISgnd2l0aENyZWRlbnRpYWxzJyBpbiB4aHIpKSB4aHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKTsgLy8gZml4IElFOC85XG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgeGhyLm9ubG9hZCA9IHN1Y2Nlc3M7XG4gICAgeGhyLnNlbmQoKTtcbiAgICByZXR1cm4geGhyO1xuXHR9XG5cbiAgc3VjY2Vzc2Z1bENvcnMocmVxdWVzdCkge1xuICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKicpO1xuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QpO1xuICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKicpO1xuICAgIHZhciByZXNwb25zZSA9IHJlcXVlc3QuY3VycmVudFRhcmdldC5yZXNwb25zZSB8fCByZXF1ZXN0LnRhcmdldC5yZXNwb25zZVRleHQ7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3N0YXR1czogdGhpcy5VUH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvbG9yOiAnZ3JlZW4nfSk7XG5cbiAgfVxuXG4gIGNoZWNrU2l0ZSAoKSB7XG4gICAgY29uc29sZS5sb2coJ2NoZWNraW5nIHNpdGUnKTtcbiAgICB0aGlzLnBpbmcoKTtcbiAgICBsZXQgc3RhdHVzID0gMTtcbiAgICB0aGlzLnNldFN0YXRlKHtzdGF0dXM6IHN0YXR1c30pO1xuICAgIHRoaXMuc2V0U3RhdGUoe2xhc3RDaGVja2VkOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCl9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q2FyZCBzdHlsZT17e3dpZHRoOiAnMzMlJ319PlxuICAgICAgICAgIDxDYXJkVGl0bGVcbiAgICAgICAgICAgIHRpdGxlPVwiSGVhZGVkIE91dFwiXG4gICAgICAgICAgICBzdWJ0aXRsZT1cImh0dHBzOi8vY29vcmRpbmF0ZXMuaHVndGhlY2VudGVybGluZS5jb21cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRUZXh0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkdGV4dFwiPlxuICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjIwXCIgd2lkdGg9XCIyMFwiPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMTBcIiBmaWxsPXt0aGlzLnN0YXRlLmNvbG9yfSAvPlxuICAgICAgICAgICAgICAgIFNvcnJ5LCB5b3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBpbmxpbmUgU1ZHLlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPHNwYW4+TGFzdCBjaGVja2VkOiB7dGhpcy5zdGF0ZS5sYXN0Q2hlY2tlZH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmRUZXh0PlxuICAgICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJTZXR0aW5nc1wiIC8+XG4gICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiQ2hlY2tcIiBvbkNsaWNrPXt0aGlzLmNoZWNrU2l0ZX0gLz5cbiAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGluZ2VyQ2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY2xpZW50L2FwcC9QaW5nZXJDYXJkLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQVFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBZUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBZEE7QUFEQTtBQXNCQTs7OztBQXhGQTtBQUNBO0FBMkZBOzs7Ozs7Ozs7QUE1RkE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///255\n");

/***/ })

})