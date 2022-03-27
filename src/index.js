import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import CategoriesBar from './components/CategoriesBar';
import Products from './components/Products';
import ProductDetails from './routes/ProductDetails.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="products" element=
            {<CategoriesBar />}>

            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a category</p>
                </main>
              }
            />
            <Route path=":category" element={
              <div>
                <main style={{ padding: "1rem" }}>
                  <p>hiiiiiiiiiiiiiiiiiiiii</p>
                </main>
                <Products />
              </div>
            }
            />

          </Route>
        </Route>
      </Routes>
    </Router >
    {/* <App /> */}
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
