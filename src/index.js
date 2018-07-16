// import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';// 

//引入路由
import router from "./router";


ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
