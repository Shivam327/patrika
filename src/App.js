import './App.css';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import AddPage from './page/AddPage';
import AdminPage from './page/Adminpage';
import AuthContext from './store/store';

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      {isLoggedIn ? (
        <>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<AddPage />} />
          </Routes>
        </>
      ) : (
        <AdminPage />
      )}
    </>
  );
}

export default App;
