import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/antd.min.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";
import router from './router';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Provider>
    //     <PersistGate>
            <ConfigProvider locale={zhCN}>
                <RouterProvider router={router} />
            </ConfigProvider>
    //     </PersistGate>
    // </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
