import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingList from './pages/BookingList';
import AddEditBooking from './pages/AddEditBooking';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookingList />} />
                <Route path="/add" element={<AddEditBooking />} />
                <Route path="/edit/:id" element={<AddEditBooking />} />
            </Routes>
        </Router>
    );
};

export default App;
