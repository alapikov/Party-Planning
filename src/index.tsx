import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

const cont = document.getElementById('app')
const root = createRoot(cont)
root.render(<App />);