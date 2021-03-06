import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StyledEngineProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	//<React.StrictMode> quitado ya que renderiza 2 veces
	//Para poder modificar los estilos de mui con tailwind
	<StyledEngineProvider injectFirst>
		<App />
	</StyledEngineProvider>

);
