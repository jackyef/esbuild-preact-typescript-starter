
import { h, render } from 'preact';
import { setup } from 'goober';
import 'preact/devtools';
import App from './App.jsx';
import { mainGlobalStyles } from './styles/main';

// Setup goober to use preact jsx pragma
setup(h);

const container = document.getElementById('root') as HTMLElement;

mainGlobalStyles();
render(<App name={"John Doe"} />, container);