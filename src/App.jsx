import { BASE_INSTANCE } from 'api/constants';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'routes';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from 'hooks/useAuth';

function App() {
  useAuth();
  BASE_INSTANCE.get('/users');
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        {Object.keys(routes).map((route) => (
          <Route element={routes[route].element} path={routes[route].path} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
