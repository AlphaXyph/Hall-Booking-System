import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingList from './pages/BookingList';
import AddBooking from './pages/AddBooking';

const App = () => {
    const [bookingToEdit, setBookingToEdit] = useState(null);

    const handleBookingUpdated = () => {
        setBookingToEdit(null);
    };

    return React.createElement(Router, null,
        React.createElement(Routes, null,
            React.createElement(Route, { path: '/', element: React.createElement(BookingList, { setBookingToEdit }) }),
            React.createElement(Route, { path: '/add', element: React.createElement(AddBooking, { bookingToEdit, onBookingUpdated: handleBookingUpdated }) }),
            React.createElement(Route, { path: '/edit/:id', element: React.createElement(AddBooking, { bookingToEdit, onBookingUpdated: handleBookingUpdated }) })
        )
    );
};

export default App;
