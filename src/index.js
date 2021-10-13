import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import ptBR from 'antd/lib/locale/pt_BR'
ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
    <Home />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
