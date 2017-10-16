webpackHotUpdate(0,{

/***/ 255:
/*!***************************************!*\
  !*** ./src/client/app/PingerCard.jsx ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _card = __webpack_require__(/*! react-toolbox/lib/card */ 246);\n\nvar _button = __webpack_require__(/*! react-toolbox/lib/button */ 211);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PingerCard = function (_React$Component) {\n  _inherits(PingerCard, _React$Component);\n\n  function PingerCard(props) {\n    _classCallCheck(this, PingerCard);\n\n    var _this = _possibleConstructorReturn(this, (PingerCard.__proto__ || Object.getPrototypeOf(PingerCard)).call(this, props));\n\n    _this.state = {\n      status: 0,\n      color: 'grey',\n      siteName: props.siteName,\n      siteUrl: props.siteUrl,\n      method: props.method,\n      lastChecked: 'N/A'\n    };\n    _this.checkSite = _this.checkSite.bind(_this);\n    return _this;\n  }\n\n  _createClass(PingerCard, [{\n    key: 'ping',\n    value: function ping() {\n      console.log('start ping');\n      // example request\n      this.getCORS('http://foo.bar/?p1=1&p2=Hello+World', function (request) {\n        var response = request.currentTarget.response || request.target.responseText;\n        console.log(response);\n      });\n    }\n  }, {\n    key: 'getCORS',\n    value: function getCORS(url, success) {\n      var xhr = new XMLHttpRequest();\n      if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // fix IE8/9\n      xhr.open('GET', url);\n      xhr.onload = success;\n      xhr.send();\n      return xhr;\n    }\n  }, {\n    key: 'checkSite',\n    value: function checkSite() {\n      console.log('checking site');\n      this.ping();\n      var status = 1;\n      this.setState({ status: status });\n      this.setState({ lastChecked: new Date().toLocaleString() });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _card.Card,\n          { style: { width: '33%' } },\n          _react2.default.createElement(_card.CardTitle, {\n            title: 'Headed Out',\n            subtitle: 'https://coordinates.hugthecenterline.com'\n          }),\n          _react2.default.createElement(\n            _card.CardText,\n            null,\n            _react2.default.createElement(\n              'div',\n              { className: 'cardtext' },\n              _react2.default.createElement(\n                'svg',\n                { height: '20', width: '20' },\n                _react2.default.createElement('circle', { cx: '10', cy: '10', r: '10', fill: this.state.color }),\n                'Sorry, your browser does not support inline SVG.'\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                'Last checked: ',\n                this.state.lastChecked\n              )\n            )\n          ),\n          _react2.default.createElement(\n            _card.CardActions,\n            null,\n            _react2.default.createElement(_button.Button, { label: 'Check', onClick: this.checkSite })\n          )\n        )\n      );\n    }\n  }]);\n\n  return PingerCard;\n}(_react2.default.Component);\n\nvar _default = PingerCard;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(PingerCard, 'PingerCard', '/home/dave/projects/playground/react/react-toolbox-sample/src/client/app/PingerCard.jsx');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/home/dave/projects/playground/react/react-toolbox-sample/src/client/app/PingerCard.jsx');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jbGllbnQvYXBwL1BpbmdlckNhcmQuanN4PzkwYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIENhcmRNZWRpYSwgQ2FyZFRpdGxlLCBDYXJkVGV4dCwgQ2FyZEFjdGlvbnMgfSBmcm9tICdyZWFjdC10b29sYm94L2xpYi9jYXJkJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdyZWFjdC10b29sYm94L2xpYi9idXR0b24nO1xuXG5jbGFzcyBQaW5nZXJDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhdHVzIDogMCxcbiAgICAgIGNvbG9yIDogJ2dyZXknLFxuICAgICAgc2l0ZU5hbWUgOiBwcm9wcy5zaXRlTmFtZSxcbiAgICAgIHNpdGVVcmwgOiBwcm9wcy5zaXRlVXJsLFxuICAgICAgbWV0aG9kIDogcHJvcHMubWV0aG9kLFxuICAgICAgbGFzdENoZWNrZWQgOiAnTi9BJ1xuICAgIH07XG4gICAgdGhpcy5jaGVja1NpdGUgPSB0aGlzLmNoZWNrU2l0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcGluZyAoKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0IHBpbmcnKTtcbiAgICAvLyBleGFtcGxlIHJlcXVlc3RcbiAgXHR0aGlzLmdldENPUlMoJ2h0dHA6Ly9mb28uYmFyLz9wMT0xJnAyPUhlbGxvK1dvcmxkJywgZnVuY3Rpb24ocmVxdWVzdCl7XG4gIFx0ICAgIHZhciByZXNwb25zZSA9IHJlcXVlc3QuY3VycmVudFRhcmdldC5yZXNwb25zZSB8fCByZXF1ZXN0LnRhcmdldC5yZXNwb25zZVRleHQ7XG4gIFx0ICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgXHR9KTtcbiAgfVxuXG4gIGdldENPUlModXJsLCBzdWNjZXNzKSB7XG5cdCAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdCAgICBpZiAoISgnd2l0aENyZWRlbnRpYWxzJyBpbiB4aHIpKSB4aHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKTsgLy8gZml4IElFOC85XG5cdCAgICB4aHIub3BlbignR0VUJywgdXJsKTtcblx0ICAgIHhoci5vbmxvYWQgPSBzdWNjZXNzO1xuXHQgICAgeGhyLnNlbmQoKTtcblx0ICAgIHJldHVybiB4aHI7XG5cdH1cblxuICBjaGVja1NpdGUgKCkge1xuICAgIGNvbnNvbGUubG9nKCdjaGVja2luZyBzaXRlJyk7XG4gICAgdGhpcy5waW5nKCk7XG4gICAgbGV0IHN0YXR1cyA9IDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzOiBzdGF0dXN9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtsYXN0Q2hlY2tlZDogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENhcmQgc3R5bGU9e3t3aWR0aDogJzMzJSd9fT5cbiAgICAgICAgICA8Q2FyZFRpdGxlXG4gICAgICAgICAgICB0aXRsZT1cIkhlYWRlZCBPdXRcIlxuICAgICAgICAgICAgc3VidGl0bGU9XCJodHRwczovL2Nvb3JkaW5hdGVzLmh1Z3RoZWNlbnRlcmxpbmUuY29tXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDYXJkVGV4dD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHRleHRcIj5cbiAgICAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XCIyMFwiIHdpZHRoPVwiMjBcIj5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjEwXCIgZmlsbD17dGhpcy5zdGF0ZS5jb2xvcn0gLz5cbiAgICAgICAgICAgICAgICBTb3JyeSwgeW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgaW5saW5lIFNWRy5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzcGFuPkxhc3QgY2hlY2tlZDoge3RoaXMuc3RhdGUubGFzdENoZWNrZWR9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkVGV4dD5cbiAgICAgICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiQ2hlY2tcIiBvbkNsaWNrPXt0aGlzLmNoZWNrU2l0ZX0gLz5cbiAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGluZ2VyQ2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY2xpZW50L2FwcC9QaW5nZXJDYXJkLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFWQTtBQVdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFkQTtBQURBO0FBcUJBOzs7O0FBaEVBO0FBQ0E7QUFtRUE7Ozs7Ozs7OztBQXBFQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///255\n");

/***/ })

})