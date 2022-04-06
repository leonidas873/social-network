import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import { Login } from './pages';
import React from 'react';
import Profile from './pages/Pofile/Profile';

const App:React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
