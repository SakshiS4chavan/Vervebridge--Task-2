import React from 'react';
import reactDOM from 'react-dom/client';
import'./index.css';
import App from './App';
import reportWebVitals from './reportWebVituals';
import{BrowseRouter}from 'react-router-dom';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
	<BrowserRouter><App/>
	</BrowserRouter>
	</React.StrictMode>
);