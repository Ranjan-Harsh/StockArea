import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ListingPage from './pages/ListingPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/warehouse/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;