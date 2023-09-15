(self.webpackChunkrest_api_basic_crud_operations_in_storybook=self.webpackChunkrest_api_basic_crud_operations_in_storybook||[]).push([[179],{"./src/stories/todolists-api.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CreateTodolist:function(){return CreateTodolist},DeleteTodolist:function(){return DeleteTodolist},GetTodolistTask:function(){return GetTodolistTask},GetTodolists:function(){return GetTodolists},UpdateTodolistTitle:function(){return UpdateTodolistTitle},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return todolists_api_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),instance=__webpack_require__("./node_modules/axios/lib/axios.js").Z.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0}),todolistApi_getTodoList=function getTodoList(){return instance.get("todo-lists")},todolistApi_createTodoList=function createTodoList(){return instance.post("todo-lists",{title:"QUERY"})},todolistApi_deleteTodolist=function deleteTodolist(todoId){return instance.delete("todo-lists/".concat(todoId))},todolistApi_updateTodolist=function updateTodolist(todoId,title){return instance.put("todo-lists/".concat(todoId),{title:title})},todolistApi_getTodolistTasks=function getTodolistTasks(todoId){return instance.get("todo-lists".concat(todoId,"/tasks"))},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),todolists_api_stories={title:"API"},GetTodolists=function GetTodolists(){var _useState=(0,react.useState)(null),_useState2=(0,slicedToArray.Z)(_useState,2),state=_useState2[0],setState=_useState2[1];return(0,react.useEffect)((function(){todolistApi_getTodoList().then((function(res){return setState(res.data)}))}),[]),(0,jsx_runtime.jsx)("div",{children:JSON.stringify(state)})},CreateTodolist=function CreateTodolist(){var _useState3=(0,react.useState)(null),_useState4=(0,slicedToArray.Z)(_useState3,2),state=_useState4[0],setState=_useState4[1];return(0,react.useEffect)((function(){todolistApi_createTodoList().then((function(res){return setState(res.data)}))}),[]),(0,jsx_runtime.jsx)("div",{children:JSON.stringify(state)})},DeleteTodolist=function DeleteTodolist(){var _useState5=(0,react.useState)(null),_useState6=(0,slicedToArray.Z)(_useState5,2),state=_useState6[0],setState=_useState6[1];return(0,react.useEffect)((function(){todolistApi_deleteTodolist("5543e7e2-20a3-4dbc-96b1-b2ad9a0a0f09").then((function(res){return setState(res.data)}))}),[]),(0,jsx_runtime.jsx)("div",{children:JSON.stringify(state)})},UpdateTodolistTitle=function UpdateTodolistTitle(){var _useState7=(0,react.useState)(null),_useState8=(0,slicedToArray.Z)(_useState7,2),state=_useState8[0],setState=_useState8[1];return(0,react.useEffect)((function(){todolistApi_updateTodolist("916408aa-f8a3-49b3-b9ae-b21b615c1b1e","ANGULAR------").then((function(res){return setState(res.data)}))}),[]),(0,jsx_runtime.jsx)("div",{children:JSON.stringify(state)})},GetTodolistTask=function GetTodolistTask(){var _useState9=(0,react.useState)(null),_useState10=(0,slicedToArray.Z)(_useState9,2),state=_useState10[0],setState=_useState10[1];return(0,react.useEffect)((function(){todolistApi_getTodolistTasks("916408aa-f8a3-49b3-b9ae-b21b615c1b1e").then((function(res){return setState(res.data)}))}),[]),(0,jsx_runtime.jsx)("div",{children:JSON.stringify(state)})};GetTodolists.parameters=(0,objectSpread2.Z)({storySource:{source:"() => {\n    const [state, setState] = useState<any>(null)\n    useEffect(() => {\n        todolistApi.getTodoList()\n            .then((res) => setState(res.data))\n    }, [])\n    return <div>{JSON.stringify(state)}</div>\n}"}},GetTodolists.parameters),CreateTodolist.parameters=(0,objectSpread2.Z)({storySource:{source:"() => {\n    const [state, setState] = useState<any>(null)\n    useEffect(() => {\n        todolistApi.createTodoList()\n            .then((res) => setState(res.data))\n    }, [])\n\n    return <div>{JSON.stringify(state)}</div>\n}"}},CreateTodolist.parameters),DeleteTodolist.parameters=(0,objectSpread2.Z)({storySource:{source:"() => {\n    const [state, setState] = useState<any>(null)\n    useEffect(() => {\n        const todoId = '5543e7e2-20a3-4dbc-96b1-b2ad9a0a0f09'\n        todolistApi.deleteTodolist(todoId)\n            .then((res) => setState(res.data))\n    }, [])\n\n    return <div>{JSON.stringify(state)}</div>\n}"}},DeleteTodolist.parameters),UpdateTodolistTitle.parameters=(0,objectSpread2.Z)({storySource:{source:"() => {\n    const [state, setState] = useState<any>(null)\n    useEffect(() => {\n        const todoId = '916408aa-f8a3-49b3-b9ae-b21b615c1b1e'\n        const title = 'ANGULAR------'\n            todolistApi.updateTodolist(todoId,title)\n            .then((res) => setState(res.data))\n    }, [])\n\n    return <div>{JSON.stringify(state)}</div>\n}"}},UpdateTodolistTitle.parameters),GetTodolistTask.parameters=(0,objectSpread2.Z)({storySource:{source:"() => {\n    const [state, setState] = useState<any>(null)\n    useEffect(() => {\n        const todoId = '916408aa-f8a3-49b3-b9ae-b21b615c1b1e'\n        todolistApi.getTodolistTasks(todoId)\n            .then((res) => setState(res.data))\n    }, [])\n    return <div>{JSON.stringify(state)}</div>\n}"}},GetTodolistTask.parameters);var __namedExportsOrder=["GetTodolists","CreateTodolist","DeleteTodolist","UpdateTodolistTitle","GetTodolistTask"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/todolists-api.stories.tsx":"./src/stories/todolists-api.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[596],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);