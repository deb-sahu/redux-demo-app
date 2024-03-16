import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Form } from './pages/form';
import { List } from './pages/list';
import { SideNav } from './components/SideNav/sideNav';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <div className="App">

            {/* Side Navbar */}
            <SideNav />

            {/* Define routes for each page */}
            <Routes>
              <Route path="/form" element={<Form />} />
              <Route path="/list" element={<List />} />

              {/* Default Route */}
              <Route path="/" element={<Navigate to="/form" />}>
                <Route
                  path="*"
                  element={<Navigate to="/" />}
                />
              </Route>
            </Routes>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
