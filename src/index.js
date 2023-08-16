// index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/App/App.js';
const root = createRoot(document.getElementById('app'));
root.render(
	<StrictMode>
        <BrowserRouter>
		<App />
        </BrowserRouter>    
	</StrictMode>
);
