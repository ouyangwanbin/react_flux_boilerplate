webpackJsonp([0],{

/***/ 0:
/*!*********************!*\
  !*** ./app/App.jsx ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 34);
	
	var _Constants = __webpack_require__(/*! ./Constants */ 172);
	
	var _AppAction = __webpack_require__(/*! ./AppAction */ 173);
	
	var _AppAction2 = _interopRequireDefault(_AppAction);
	
	var _AppStore = __webpack_require__(/*! ./AppStore */ 177);
	
	var _AppStore2 = _interopRequireDefault(_AppStore);
	
	var _TodoComponentList = __webpack_require__(/*! ./components/TodoComponentList */ 179);
	
	var _TodoComponentList2 = _interopRequireDefault(_TodoComponentList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ../assets/styles/main.css */ 180);
	
	var App = function (_React$PureComponent) {
	  _inherits(App, _React$PureComponent);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.state = {};
	    _this.dataChange = _this.dataChange.bind(_this);
	    _this.handleEvent = _this.handleEvent.bind(_this);
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _AppStore2.default.addChangeListener(this.dataChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _AppStore2.default.removeChangeListener(this.dataChange);
	    }
	  }, {
	    key: 'dataChange',
	    value: function dataChange(data) {
	      var todos = _AppStore2.default.getStore().todos;
	      if (todos) {
	        this.setState({
	          todos: todos
	        });
	      }
	    }
	  }, {
	    key: 'handleAddTodo',
	    value: function handleAddTodo(todo) {
	      _AppAction2.default.addTodo(todo);
	    }
	  }, {
	    key: 'handleRemoveTodo',
	    value: function handleRemoveTodo(id) {
	      _AppAction2.default.removeTodo(id);
	    }
	  }, {
	    key: 'handleUpdateTodo',
	    value: function handleUpdateTodo(todo) {
	      _AppAction2.default.updateTodo(todo);
	    }
	  }, {
	    key: 'handleEvent',
	    value: function handleEvent(data) {
	      var event = data.event_type;
	      var val = data.data;
	      switch (event) {
	        case _Constants.Constants.EVENT_ADD_TODO:
	          this.handleAddTodo(val);
	          break;
	        case _Constants.Constants.EVENT_REMOVE_TODO:
	          this.handleRemoveTodo(val);
	
	        case _Constants.Constants.EVENT_UPDATE_TODO:
	          this.handleUpdateTodo(val);
	        default:
	          break;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'main' },
	          'Todo: ',
	          _react2.default.createElement('input', { type: 'text', ref: 'todo' }),
	          _react2.default.createElement(
	            'button',
	            { onClick: function onClick(e) {
	                var todo = {
	                  id: Date.now(),
	                  text: _this2.refs.todo.value
	                };
	                _this2.handleEvent({
	                  event_type: _Constants.Constants.EVENT_ADD_TODO,
	                  data: todo
	                });
	              } },
	            'create'
	          )
	        ),
	        _react2.default.createElement(_TodoComponentList2.default, { todos: this.state.todos, handleEvent: this.handleEvent })
	      );
	    }
	  }]);
	
	  return App;
	}(_react2.default.PureComponent);
	
	exports.default = App;
	
	
	(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById("app"));

/***/ },

/***/ 172:
/*!**************************!*\
  !*** ./app/Constants.js ***!
  \**************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Constants = exports.Constants = {
		ACTION_ADD_TODO: "add_todo",
		ACTION_GET_TODO: "get_todo",
		ACTION_GET_ALL_TODOS: "get_all_todos",
		ACTION_REMOVE_TODO: "remove_todo",
		ACTION_UPDATE_TODO: "update_todo",
	
		EVENT_DATA_CHANGE: "event_data_change",
		EVENT_ADD_TODO: "add_todo_event",
		EVENT_REMOVE_TODO: "remove_todo_event",
		EVENT_UPDATE_TODO: "update_todo_event"
	};

/***/ },

/***/ 173:
/*!**************************!*\
  !*** ./app/AppAction.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AppDispatcher = __webpack_require__(/*! ./AppDispatcher */ 174);
	
	var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);
	
	var _Constants = __webpack_require__(/*! ./Constants */ 172);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AppActionClass = function () {
	    function AppActionClass() {
	        _classCallCheck(this, AppActionClass);
	    }
	
	    _createClass(AppActionClass, [{
	        key: 'addTodo',
	        value: function addTodo(data) {
	            _AppDispatcher2.default.dispatch({
	                actionType: _Constants.Constants.ACTION_ADD_TODO,
	                action: data
	            });
	        }
	    }, {
	        key: 'getTodo',
	        value: function getTodo(id) {
	            _AppDispatcher2.default.dispatch({
	                actionType: _Constants.Constants.ACTION_GET_TODO,
	                action: id
	            });
	        }
	    }, {
	        key: 'getAllTodos',
	        value: function getAllTodos() {
	            _AppDispatcher2.default.dispatch({
	                actionType: _Constants.Constants.ACTION_GET_ALL_TODOS
	            });
	        }
	    }, {
	        key: 'removeTodo',
	        value: function removeTodo(id) {
	            _AppDispatcher2.default.dispatch({
	                actionType: _Constants.Constants.ACTION_REMOVE_TODO,
	                action: id
	            });
	        }
	    }, {
	        key: 'updateTodo',
	        value: function updateTodo(data) {
	            _AppDispatcher2.default.dispatch({
	                actionType: _Constants.Constants.ACTION_UPDATE_TODO,
	                action: data
	            });
	        }
	    }]);
	
	    return AppActionClass;
	}();
	
	var AppAction = new AppActionClass();
	
	exports.default = AppAction;

/***/ },

/***/ 174:
/*!******************************!*\
  !*** ./app/AppDispatcher.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _flux = __webpack_require__(/*! flux */ 175);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DispatcherClass = function (_Dispatcher) {
	  _inherits(DispatcherClass, _Dispatcher);
	
	  function DispatcherClass() {
	    _classCallCheck(this, DispatcherClass);
	
	    return _possibleConstructorReturn(this, (DispatcherClass.__proto__ || Object.getPrototypeOf(DispatcherClass)).apply(this, arguments));
	  }
	
	  _createClass(DispatcherClass, [{
	    key: 'handleViewAction',
	    value: function handleViewAction(action) {
	      this.dispatch({
	        source: 'VIEW_ACTION',
	        action: action
	      });
	    }
	  }]);
	
	  return DispatcherClass;
	}(_flux.Dispatcher);
	
	var AppDispatcher = new DispatcherClass();
	
	exports.default = AppDispatcher;

/***/ },

/***/ 177:
/*!*************************!*\
  !*** ./app/AppStore.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _events = __webpack_require__(/*! events */ 178);
	
	var _AppDispatcher = __webpack_require__(/*! ./AppDispatcher */ 174);
	
	var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);
	
	var _Constants = __webpack_require__(/*! ./Constants */ 172);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _store = {};
	
	var AppStoreClass = function (_EventEmitter) {
	    _inherits(AppStoreClass, _EventEmitter);
	
	    function AppStoreClass() {
	        _classCallCheck(this, AppStoreClass);
	
	        return _possibleConstructorReturn(this, (AppStoreClass.__proto__ || Object.getPrototypeOf(AppStoreClass)).apply(this, arguments));
	    }
	
	    _createClass(AppStoreClass, [{
	        key: 'addChangeListener',
	        value: function addChangeListener(cb) {
	            this.on(_Constants.Constants.EVENT_DATA_CHANGE, cb);
	        }
	    }, {
	        key: 'removeChangeListener',
	        value: function removeChangeListener(cb) {
	            this.removeListener(_Constants.Constants.EVENT_DATA_CHANGE, cb);
	        }
	    }, {
	        key: 'emitChange',
	        value: function emitChange(data) {
	            this.emit(_Constants.Constants.EVENT_DATA_CHANGE, data);
	        }
	    }, {
	        key: 'getStore',
	        value: function getStore() {
	            return _store;
	        }
	    }]);
	
	    return AppStoreClass;
	}(_events.EventEmitter);
	
	var AppStore = new AppStoreClass();
	_AppDispatcher2.default.register(function (payload) {
	    (function () {
	        switch (payload.actionType) {
	            case _Constants.Constants.ACTION_ADD_TODO:
	                var todo = payload.action;
	                todo.id = Date.now();
	                if (!_store.todos) {
	                    _store.todos = [];
	                } else {
	                    _store.todos = _store.todos.slice(0);
	                }
	                _store.todos.push(todo);
	                AppStore.emitChange();
	                break;
	            case _Constants.Constants.ACTION_GET_TODO:
	                if (_store.todos) {
	                    _store.todos = _store.todos.slice(0);
	                    _store.todos.map(function (item, index, store) {
	                        if (item.id === payload.action) {
	                            var newTodo = Object.assign({}, item);
	                            newTodo.selected = true;
	                            store[index] = newTodo;
	                        }
	                    });
	                }
	                AppStore.emitChange();
	                break;
	            case _Constants.Constants.ACTION_GET_ALL_TODOS:
	                AppStore.emitChange();
	                break;
	            case _Constants.Constants.ACTION_REMOVE_TODO:
	                if (_store.todos) {
	                    _store.todos = _store.todos.slice(0);
	                    _store.todos.map(function (item, index, store) {
	                        if (item.id === payload.action) {
	                            store.splice(index, 1);
	                        }
	                    });
	                }
	                AppStore.emitChange();
	                break;
	            case _Constants.Constants.ACTION_UPDATE_TODO:
	                var updatedTodo = payload.action;
	                if (_store.todos) {
	                    _store.todos = _store.todos.slice(0);
	                    _store.todos.map(function (item, index, store) {
	                        if (item.id === updatedTodo.id) {
	                            store[index] = updatedTodo;
	                        }
	                    });
	                }
	                AppStore.emitChange();
	                break;
	        }
	    })();
	});
	
	exports.default = AppStore;

/***/ },

/***/ 178:
/*!****************************!*\
  !*** ./~/events/events.js ***!
  \****************************/
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function (n) {
	  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function (type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events) this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler)) return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++) {
	      listeners[i].apply(this, args);
	    }
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function (type, listener) {
	  var m;
	
	  if (!isFunction(listener)) throw TypeError('listener must be a function');
	
	  if (!this._events) this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function (type, listener) {
	  if (!isFunction(listener)) throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function (type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener)) throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type]) return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener || isFunction(list.listener) && list.listener === listener) {
	    delete this._events[type];
	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0) return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function (type) {
	  var key, listeners;
	
	  if (!this._events) return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length) {
	      this.removeListener(type, listeners[listeners.length - 1]);
	    }
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function (type) {
	  var ret;
	  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function (type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function (emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}

/***/ },

/***/ 179:
/*!**********************************************!*\
  !*** ./app/components/TodoComponentList.jsx ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Constants = __webpack_require__(/*! ../Constants */ 172);
	
	var _AppAction = __webpack_require__(/*! ../AppAction */ 173);
	
	var _AppStore = __webpack_require__(/*! ../AppStore */ 177);
	
	var _AppStore2 = _interopRequireDefault(_AppStore);
	
	var _TodoComponent = __webpack_require__(/*! ./TodoComponent */ 184);
	
	var _TodoComponent2 = _interopRequireDefault(_TodoComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ../../assets/styles/main.css */ 180);
	
	var TodoComponentList = function (_React$PureComponent) {
	  _inherits(TodoComponentList, _React$PureComponent);
	
	  function TodoComponentList() {
	    _classCallCheck(this, TodoComponentList);
	
	    return _possibleConstructorReturn(this, (TodoComponentList.__proto__ || Object.getPrototypeOf(TodoComponentList)).apply(this, arguments));
	  }
	
	  _createClass(TodoComponentList, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      if (!this.props.todos) {
	        return null;
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'flex-container' },
	        this.props.todos.map(function (item, index) {
	          return _react2.default.createElement(_TodoComponent2.default, { todo: item, key: item.id, handleEvent: _this2.props.handleEvent });
	        })
	      );
	    }
	  }]);
	
	  return TodoComponentList;
	}(_react2.default.PureComponent);
	
	exports.default = TodoComponentList;

/***/ },

/***/ 180:
/*!********************************!*\
  !*** ./assets/styles/main.css ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./main.css */ 181);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 183)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 181:
/*!***********************************************!*\
  !*** ./~/css-loader!./assets/styles/main.css ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 182)();
	// imports
	
	
	// module
	exports.push([module.id, "*{\r\n    box-sizing:border-box;\r\n}\r\n\r\n.main{\r\n  margin-top: 8px;\r\n}\r\n\r\n.flex-container{\r\n  display:flex;\r\n  flex-flow:row nowrap;\r\n  justify-content:space-around;\r\n}\r\n.flex-item{\r\n  min-width:150px;\r\n  height:40px;\r\n  background:tomato;\r\n  border: solid 1px;\r\n  padding-left: 5px;\r\n  line-height: 40px;\r\n}\r\n\r\n.fr{\r\n  float:right;\r\n}\r\n\r\ninput{\r\n  width:60px;\r\n}\r\n\r\n@media all and ( max-width:500px ){\r\n  .flex-container{\r\n    display:flex;\r\n    flex-flow:column wrap;\r\n    justify-content:space-around;\r\n  }\r\n  .flex-item{\r\n      width:100%;\r\n      height:40px;\r\n      margin-bottom:8px;\r\n      background:tomato;\r\n   }\r\n}", ""]);
	
	// exports


/***/ },

/***/ 182:
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },

/***/ 183:
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 184:
/*!******************************************!*\
  !*** ./app/components/TodoComponent.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Constants = __webpack_require__(/*! ../Constants */ 172);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ../../assets/styles/main.css */ 180);
	
	var TodoComponent = function (_React$PureComponent) {
	  _inherits(TodoComponent, _React$PureComponent);
	
	  function TodoComponent(props) {
	    _classCallCheck(this, TodoComponent);
	
	    var _this = _possibleConstructorReturn(this, (TodoComponent.__proto__ || Object.getPrototypeOf(TodoComponent)).call(this, props));
	
	    _this.state = {};
	    return _this;
	  }
	
	  _createClass(TodoComponent, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      if (this.state.edit) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'flex-item' },
	          _react2.default.createElement('input', { type: 'text', ref: 'newTodo', defaultValue: this.props.todo.text }),
	          _react2.default.createElement(
	            'div',
	            { className: 'fr' },
	            _react2.default.createElement(
	              'button',
	              { onClick: function onClick(e) {
	                  var newTodo = Object.assign({}, _this2.props.todo);
	                  newTodo.text = _this2.refs.newTodo.value;
	                  _this2.props.handleEvent({
	                    event_type: _Constants.Constants.EVENT_UPDATE_TODO,
	                    data: newTodo
	                  });
	                  _this2.setState({
	                    edit: false
	                  });
	                } },
	              'save'
	            ),
	            _react2.default.createElement(
	              'button',
	              { onClick: function onClick(e) {
	                  _this2.setState({
	                    edit: false
	                  });
	                } },
	              'cancel'
	            )
	          )
	        );
	      } else {
	        return _react2.default.createElement(
	          'div',
	          { className: 'flex-item' },
	          _react2.default.createElement(
	            'span',
	            null,
	            this.props.todo.text
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'fr' },
	            _react2.default.createElement(
	              'button',
	              { onClick: function onClick(e) {
	                  _this2.setState({
	                    edit: true
	                  });
	                } },
	              'edit'
	            ),
	            _react2.default.createElement(
	              'button',
	              { onClick: function onClick(e) {
	                  _this2.props.handleEvent({
	                    event_type: _Constants.Constants.EVENT_REMOVE_TODO,
	                    data: _this2.props.todo.id
	                  });
	                } },
	              'delete'
	            )
	          )
	        );
	      }
	    }
	  }]);
	
	  return TodoComponent;
	}(_react2.default.PureComponent);
	
	exports.default = TodoComponent;

/***/ }

});
//# sourceMappingURL=app.js.map