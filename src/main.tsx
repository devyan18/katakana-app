import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './style.css';

import './fonts/NotoSerifJP-Regular.otf';
import './fonts/NotoSerifJP-Bold.otf';
import { KatakanaProvider } from './providers/KatakanaProvider';

const element = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(element).render(
	<React.StrictMode>
		<KatakanaProvider>
			<App />
		</KatakanaProvider>
	</React.StrictMode>
);
