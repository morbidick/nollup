import Counter from './Counter';
import { Internal } from './Internal';
import './App.css';
import React from 'react';

let App = () => (
    <div className="App">
        <h1>Hello World</h1>
        <Internal />
        <Counter />
    </div>
);

export default App;
