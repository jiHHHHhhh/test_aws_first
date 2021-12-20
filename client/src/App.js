import React from 'react';
import './App.css';
import axios from 'axios';
import {useEffect} from 'react';

function App() {

        const call = async () => {
         axios.get('/api/hello').then((res) => console.log(res.data));
         };

         useEffect(() => {
            call();
          }, []);

         return (
         <div className="App">
         <header className="App-header">
         <p>wpqkf</p>
          </header>
          </div>
          );
}

export default App;
