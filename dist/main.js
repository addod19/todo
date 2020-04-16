/* eslint-disable no-template-curly-in-string */
/* eslint-disable max-len */
/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-bitwise */
/* eslint-disable vars-on-top */
/* eslint-disable no-multi-assign */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-tabs */
/* eslint-disable no-var */
/* eslint-disable func-names */
/* eslint-disable spaced-comment */
/* eslint-disable wrap-iife */
/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
    /******/
    /******/ 		// Check if module is in cache
    /******/ 		if (installedModules[moduleId]) {
      /******/ 			return installedModules[moduleId].exports;
      /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = installedModules[moduleId] = {
      /******/ 			i: moduleId,
      /******/ 			l: false,
      /******/ 			exports: {},
      /******/ 		};
    /******/
    /******/ 		// Execute the module function
    /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ 		// Flag the module as loaded
    /******/ 		module.l = true;
    /******/
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function (exports, name, getter) {
    /******/ 		if (!__webpack_require__.o(exports, name)) {
      /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/ 		}
    /******/ 	};
  /******/
  /******/ 	// define __esModule on exports
  /******/ 	__webpack_require__.r = function (exports) {
    /******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/ 		}
    /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
    /******/ 	};
  /******/
  /******/ 	// create a fake namespace object
  /******/ 	// mode & 1: value is a module id, require it
  /******/ 	// mode & 2: merge all properties of value into the ns
  /******/ 	// mode & 4: return value when already ns object
  /******/ 	// mode & 8|1: behave like require
  /******/ 	__webpack_require__.t = function (value, mode) {
    /******/ 		if (mode & 1) value = __webpack_require__(value);
    /******/ 		if (mode & 8) return value;
    /******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /******/ 		var ns = Object.create(null);
    /******/ 		__webpack_require__.r(ns);
    /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
    /******/ 		if (mode & 2 && typeof value !== 'string') for (var key in value) __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key));
    /******/ 		return ns;
    /******/ 	};
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/ 	__webpack_require__.n = function (module) {
    /******/ 		var getter = module && module.__esModule
    /******/ 			? function getDefault() { return module.default; }
    /******/ 			: function getModuleExports() { return module; };
    /******/ 		__webpack_require__.d(getter, 'a', getter);
    /******/ 		return getter;
    /******/ 	};
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = '';
  /******/
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(__webpack_require__.s = './src/index.js');
/******/ })({

  /***/ './dist/css/main.css':
  /*!***************************!*\
  !*** ./dist/css/main.css ***!
  \***************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {
    eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./dist/css/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./dist/css/main.css?");
    /***/ }),

  /***/ './node_modules/css-loader/dist/cjs.js!./dist/css/main.css':
  /*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/css/main.css ***!
  \*****************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {
    eval('// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, "nav {\\r\\n  background-color: #244;\\r\\n}\\r\\n.logo-icon {\\r\\n  margin: 25px -15px 0 20px;\\r\\n}\\r\\n.toggle-form,\\r\\n.toggleProject {\\r\\n  display: none;\\r\\n}\\r\\n.user-click:hover {\\r\\n  font-weight: 700;\\r\\n  cursor: pointer;\\r\\n}\\r\\n", ""]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./dist/css/main.css?./node_modules/css-loader/dist/cjs.js');
    /***/ }),

  /***/ './node_modules/css-loader/dist/runtime/api.js':
  /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {
    eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");
    /***/ }),

  /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
  /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {
    eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");
    /***/ }),

  /***/ './src/index.js':
  /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
  /*! no exports provided */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/css/main.css */ \"./dist/css/main.css\");\n/* harmony import */ var _dist_css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/view */ \"./src/modules/view.js\");\n/* eslint-disable no-unused-vars */\n/* eslint-disable no-undef */\n\n\n\n\n\nconst Controller = ((ui, data) => {\n  let myProjects = data.projectList();\n  let currentProject;\n  let currentLine;\n\n  if (!localStorage.getItem('DNtodo')) {\n    const p1 = data.project('My first project');\n    const p2 = data.project('Dummy project');\n    myProjects[p1.title] = p1;\n    myProjects[p2.title] = p2;\n    currentProject = p1;\n\n    const exampleTodos = [\n      'Click on the plus icon to add a new todo',\n      'The trash can deletes the current todo',\n      'You can mark a todo as completed',\n      'You can edit title and description by click on title',\n      'Everything is saved in your computer',\n    ];\n\n    exampleTodos.forEach((el) => {\n      const td = data.todo(el);\n      currentProject.todos.push(td);\n\n      ui.renderProjects(myProjects, currentProject);\n      ui.highlightProj('p0');\n    });\n  } else {\n    // we load the todos from localStorage\n    myProjects = JSON.parse(localStorage.getItem('DNtodo'));\n    currentProject = myProjects[Object.keys(myProjects)[0]];\n  }\n\n  ui.renderProjects(myProjects, currentProject);\n  ui.highlightProj('p0');\n\n  const getTodo = (e) => {\n    const td = ui.readInput();\n    const newTodo = data.todo(\n      td.title,\n      td.desc,\n      td.date,\n      (td.completed = false),\n      td.priority,\n    );\n    currentProject.todos.push(newTodo);\n    ui.toggleFP(e, 'toggle-form');\n    ui.render(currentProject);\n    data.updateLocalStorage(myProjects);\n  };\n\n  const getProject = (e) => {\n    if (e.which === 13) {\n      e.preventDefault();\n      const project = ui.readProject();\n      const projtemp = data.project(project);\n      myProjects[projtemp.title] = projtemp;\n      ui.toggleFP(e, 'showInput');\n      ui.renderProjects(myProjects);\n      const last = Object.keys(myProjects).length;\n      ui.highlightProj(`p${last - 1}`);\n      data.updateLocalStorage(myProjects);\n      currentProject = myProjects[projtemp.title];\n      ui.render(currentProject);\n    }\n  };\n\n  const deleteTodo = (e) => {\n    const clickedLi = e.target.parentElement.parentElement.id;\n    if (clickedLi >= 0) {\n      currentProject.todos.splice(clickedLi, 1);\n      ui.render(currentProject);\n    }\n  };\n\n  const completeTodo = (e) => {\n    // event.preventDefault();\n    const clickedLi = e.target.parentElement;\n    if (currentProject.todos[clickedLi.id].completed) {\n      currentProject.todos[clickedLi.id].completed = false;\n    } else {\n      currentProject.todos[clickedLi.id].completed = true;\n    }\n    ui.render(currentProject);\n  };\n\n  const handleClick = (e) => {\n    if (e.target.parentElement.tagName === 'BUTTON') {\n      deleteTodo(e);\n    }\n    if (e.target.type === 'checkbox') {\n      completeTodo(e);\n    }\n    if (e.target.tagName === 'A') {\n      currentLine = e.target.parentElement.id;\n      const { title } = currentProject.todos[currentLine];\n      const { desc } = currentProject.todos[currentLine];\n      const { date } = currentProject.todos[currentLine];\n      // put the data in the input fields\n      ui.fillInputs(title, desc, date);\n    }\n    if (e.target.tagName === 'LI') {\n      currentProject = myProjects[e.target.innerText];\n      ui.renderProjects(myProjects, currentProject);\n      ui.highlightProj(e.target.id);\n      ui.render(currentProject);\n    }\n    if (e.target.id === 'save') {\n      const td = ui.readEdit();\n      const newTodo = data.todo(\n        td.title,\n        td.desc,\n        td.date,\n        (td.completed = false),\n        td.priority,\n      );\n      currentProject.todos[currentLine] = newTodo;\n      UIkit.modal('#edit-modal').hide();\n      localStorage.setItem('todos', JSON.stringify(td));\n      ui.render(currentProject);\n    }\n  };\n\n  ui.render(currentProject);\n\n  // first render then attach Listeners\n  document\n    .getElementById('toggle')\n    .addEventListener('click', e => ui.toggleFP(e, 'toggle-form'));\n  document.getElementById('submit').addEventListener('click', getTodo);\n  document\n    .getElementById('addProject')\n    .addEventListener('click', e => ui.toggleFP(e, 'showInput'));\n  document.getElementById('project').addEventListener('keydown', getProject);\n  document.getElementById('save').addEventListener('click', handleClick);\n  // Try to attach eventListeners to all todos\n  const todoList = document.getElementById('list');\n  todoList.addEventListener('click', handleClick);\n  const todoText = document.getElementsByClassName('todo-text');\n  [...todoText].forEach(text => text.addEventListener('click', handleClick));\n  const projectList = document.getElementById('projects');\n  projectList.addEventListener('click', handleClick);\n\n  // Get the field input data one for the project of task\n\n  // Add the project or task to the proper structure\n\n  // Display the item to the UI\n})(_modules_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _modules_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/index.js?");
    /***/ }),

  /***/ './src/modules/data.js':
  /*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
  /*! exports provided: default */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    eval("__webpack_require__.r(__webpack_exports__);\nconst Data = (() => {\n  const todo = (title, desc = 'No description', date, completed, priority) => ({\n    title,\n    desc,\n    date,\n    completed,\n    priority,\n  });\n\n  const project = (title, todos = []) => ({\n    title,\n    todos,\n  });\n\n  const projectList = () => ({});\n\n  const updateLocalStorage = (myProjects) => {\n    localStorage.setItem('DNtodo', JSON.stringify(myProjects));\n  };\n\n  return {\n    project,\n    todo,\n    projectList,\n    updateLocalStorage,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Data);\n\n\n//# sourceURL=webpack:///./src/modules/data.js?");
    /***/ }),

  /***/ './src/modules/view.js':
  /*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
  /*! exports provided: default */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable no-unused-expressions */\nconst View = (() => {\n  const render = (project) => {\n    // first remove the old list\n    const parent = document.getElementById('list');\n    const title = document.getElementById('projectName');\n    title.innerHTML = project.title;\n    const child = parent.getElementsByTagName('ul');\n    parent.removeChild(child[0]);\n    // then render the new one\n    const x = document.getElementById('list');\n    const ul = document.createElement('ul');\n    ul.classList.add('uk-text-normal', 'uk-list', 'uk-list-striped');\n\n    project.todos.forEach((el, i) => {\n      const f = document.createElement('li');\n      const input = document.createElement('input');\n\n      const elem = document.createElement('a');\n      elem.className = 'todo-text';\n      el.completed ? elem.setAttribute('style', 'text-decoration:line-through') : elem.removeAttribute('style');\n      elem.setAttribute('href', '#edit-modal');\n      elem.setAttribute('uk-toggle', '');\n\n      const trashBtn = document.createElement('button');\n      trashBtn.className = 'uk-align-right trash';\n      trashBtn.setAttribute('uk-icon', 'icon: trash');\n\n      input.setAttribute('type', 'checkbox');\n      input.classList.add('uk-checkbox');\n\n      f.setAttribute('id', i);\n      if (el.completed) input.setAttribute('checked', '');\n\n      elem.innerHTML = ` ${el.title}`;\n\n      const DD = document.createElement('div'); // responsive container for both description and date hence DD\n      DD.className = 'uk-grid-collapse';\n      DD.setAttribute('uk-grid', '');\n\n      const description = document.createElement('p');\n      description.classList.add(\n        'uk-width-1-1@s',\n        'uk-width-1-2@m',\n        'uk-width-1-3@l',\n        'uk-text-small',\n        'uk-margin-right',\n      );\n      description.innerHTML = `${el.desc}`;\n\n      const dueDate = document.createElement('SPAN');\n      dueDate.classList.add('uk-width-1-1@s', 'uk-text-small');\n\n      dueDate.innerText = `${el.date} - Priority: ${el.priority ? 'High' : 'Low'}`;\n\n      DD.append(description, dueDate);\n      f.append(input, elem, trashBtn, DD);\n      ul.appendChild(f);\n    });\n    x.appendChild(ul);\n  };\n\n  const renderProjects = (pList) => {\n    const parent = document.getElementById('projects');\n    const child = parent.getElementsByTagName('ul');\n    parent.removeChild(child[0]);\n    const projects = Object.keys(pList);\n    const x = document.getElementById('projects');\n    const ul = document.createElement('ul');\n    ul.classList.add('uk-text-normal', 'uk-list', 'uk-list-divider');\n    projects.forEach((project, i) => {\n      const f = document.createElement('li');\n      f.className = 'user-click';\n      f.setAttribute('id', `p${i}`);\n      f.innerHTML = project;\n      ul.appendChild(f);\n    });\n    x.appendChild(ul);\n  };\n\n  const highlightProj = (pid) => {\n    const triangle = document.createElement('span');\n    const line = document.getElementById(pid);\n    line.className = 'user-click uk-text-bold';\n    triangle.className = 'uk-align-right';\n    triangle.setAttribute('uk-icon', 'icon: triangle-right; ratio: 1.3');\n    line.appendChild(triangle);\n  };\n\n  const toggleFP = (event, id) => {\n    event.preventDefault();\n    const form = document.getElementById(id);\n    if (form.style.display === '' || form.style.display === 'none') {\n      form.style.display = 'block';\n    } else {\n      form.style.display = 'none';\n    }\n  };\n\n  const clearInputs = () => {\n    const inputs = document.querySelectorAll('input');\n    inputs.forEach((input) => { (input.value = ''); });\n  };\n\n  const readInput = () => {\n    const title = document.getElementById('title').value;\n    const desc = document.getElementById('desc').value;\n    const date = document.getElementById('date').value;\n    const priority = document.getElementsByName('priority')[0].checked;\n    clearInputs();\n    return {\n      title, desc, date, priority,\n    };\n  };\n\n  const readProject = () => {\n    const project = document.getElementById('project').value;\n    clearInputs();\n    return project; // not an obj only title\n  };\n\n  const readEdit = () => {\n    const title = document.getElementById('edit-title').value;\n    const desc = document.getElementById('edit-desc').value;\n    const date = document.getElementById('edit-date').value;\n    const priority = document.getElementsByName('priority')[2].checked;\n    return {\n      title, desc, date, priority,\n    };\n  };\n\n  const fillInputs = (title, desc, date) => {\n    const t = document.getElementById('edit-title');\n    const d = document.getElementById('edit-desc');\n    const day = document.getElementById('edit-date');\n    t.value = title;\n    d.value = desc;\n    day.value = date;\n  };\n\n  const renderModal = () => {\n    const editModal = document.createElement('DIV');\n    editModal.setAttribute('id', 'edit-modal');\n    editModal.setAttribute('uk-modal', '');\n    editModal.classList('uk-modal');\n\n    const ukModalDialog = document.createElement('DIV');\n    ukModalDialog.setAttribute('uk-grid', '');\n    ukModalDialog.classList(\n      'uk-modal-dialog',\n      'uk-modal-body',\n      'uk-margin-auto-vertical',\n      'uk-grid',\n    );\n\n    const editTitleDiv = document.createElement('DIV');\n    editTitleDiv.classList('uk-width-2-5', 'uk-first-column');\n\n    const editTitleInput = document.createElement('INPUT');\n    editTitleInput.setAttribute('type', 'text');\n    editTitleInput.classList('uk-input');\n    editTitleInput.setAttribute('id', 'edit-title');\n\n    editTitleDiv.appendChild(editTitleInput);\n\n    const editDescDiv = document.createElement('DIV');\n    editDescDiv.classList('uk-width-3-5');\n\n    const editDescInput = document.createElement('INPUT');\n    editDescInput.setAttribute('type', 'text');\n    editDescInput.classList('uk-input');\n    editDescInput.setAttribute('id', 'edit-desc');\n\n    editDescDiv.appendChild(editDescInput);\n\n    const DW = document.createElement('DIV');\n    DW.className = 'uk-width-3-5';\n\n    const D = document.createElement('INPUT');\n    D.className = 'uk-input';\n    D.setAttribute('type', 'date');\n    D.setAttribute('id', 'date');\n\n    DW.appendChild(D);\n\n    const PW = document.createElement('DIV');\n    PW.className = 'uk-width-2-5';\n\n    const P = document.createElement('INPUT');\n    P.className = 'uk-radio';\n    P.setAttribute('type', 'radio');\n    P.setAttribute('id', 'priority');\n\n    PW.appendChild(P);\n\n    const p = document.createElement('P');\n    p.classList('uk-text-right');\n\n    const b = document.createElement('BUTTON');\n    b.classList('uk-button', 'uk-button-default', 'uk-modal-close');\n    b.setAttribute('type', 'button');\n    b.innerText = 'Cancel';\n\n    const s = document.createElement('BUTTON');\n    s.classList('uk-button', 'uk-button-primary');\n    s.setAttribute('type', 'button');\n    s.setAttribute('id', 'save');\n    s.innerText = 'Save';\n\n    p.append(b, s);\n\n    editModal.append(editTitleDiv, editDescDiv, DW, PW, p);\n\n    return editModal;\n  };\n\n  return {\n    fillInputs,\n    highlightProj,\n    readEdit,\n    readInput,\n    readProject,\n    render,\n    renderProjects,\n    renderModal,\n    toggleFP,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n\n//# sourceURL=webpack:///./src/modules/view.js?");
    /***/ }),

/******/ });