import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import { Login } from './pages';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
