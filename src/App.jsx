import { BASE_INSTANCE } from 'api/constants';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'routes';
import './App.css';

function App() {
  BASE_INSTANCE.get('/users');
  return (
    <div className="App">
      <Routes>
        {Object.keys(routes).map((route) => (
          <Route element={routes[route].element} path={routes[route].path} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
