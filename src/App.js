import React from 'react';
import logo from './logo.svg';
import './App.css';
import AntComponent from './components/AntComponent';
import ThemeSelector from './components/ThemeSelector';
import { Divider } from 'antd';
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <br />
      <ThemeSelector />
      <p><b style={{ color: 'blue' }}>Select theme via this Select component</b></p>

      <br /><br />
      <Divider>Below is Ant Design component for displaying only</Divider>
      <br />
      <AntComponent />



    </div>
  );
}

export default App;
