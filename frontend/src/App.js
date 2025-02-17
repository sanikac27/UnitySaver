import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';

import routes from './routes/routes';

import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <HeaderComponent />
        <main className="main-content">
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
            {/* Catch all route for 404 */}
            <Route
              path="*"
              element={
                <div className="error-page">
                  <h1>404</h1>
                  <p>Page not found</p>
                </div>
              }
            />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </Router>
  );
};

export default App;
