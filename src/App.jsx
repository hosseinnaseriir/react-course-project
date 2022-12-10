import { BASE_INSTANCE } from 'api/constants';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'routes';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from 'hooks/useAuth';
import Layout from 'layout';

function App() {
  useAuth();
  

  return (
    <div className="App">
      <ToastContainer />
      <Layout>
        <Routes>
          {Object.keys(routes).map((route) => (
            <Route
              element={routes[route].element}
              path={routes[route].path}
            />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
