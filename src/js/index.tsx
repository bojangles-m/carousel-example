import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import styles from '../css/index.css';

const el = document.getElementById('root');
el!.id = styles.root;

ReactDOM.render(<App />, el);
