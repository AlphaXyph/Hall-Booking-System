import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    // Fetch bookings
    useEffect(() => {
        axios.get('http://localhost:8080/api/bookings')
            .then(response => setBookings(response.data))
            .catch(error => console.error(error));
    }, []);

    // Delete booking
    const deleteBooking = (id) => {
        axios.delete(`http://localhost:8080/api/bookings/${id}`)
            .then(response => {
                setBookings(bookings.filter(booking => booking.id !== id));
            })
            .catch(error => console.error(error));
    };

    // Edit booking - navigate to edit form with booking details
    const handleEdit = (booking) => {
        navigate(`/edit/${booking.id}`, { state: { booking } });
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Booking List</h1>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Applicant Name</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Mobile</th>
                        <th className="border border-gray-300 px-4 py-2">Start Date</th>
                        <th className="border border-gray-300 px-4 py-2">End Date</th>
                        <th className="border border-gray-300 px-4 py-2">Rent</th>
                        <th className="border border-gray-300 px-4 py-2">Hall Name</th>
                        <th className="border border-gray-300 px-4 py-2">Remarks</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => (
                        <tr key={booking.id}>
                            <td className="border border-gray-300 px-4 py-2">{booking.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{booking.applicantName}</td>
                            <td className="border border-gray-300 px-4 py-2">{booking.email}</td>
                            <td className="border border-gray-300 px-4 py-2">{booking.mobile}</td>
                            <td className="border border-gray-300 px-4 py-2">{booking.startDate}</td>
                            <td className="border border-gray-300 px-4 py-2">{booking.endDate}</td>
                            <td className="border border-gray-300 px-4 py-2">{booking.rent}</td>
                            <td className="border border-gray-300 px-4 py-2">{booking.hallName}</td>
                            <td className="border border-gray-300 px-4 py-2">{booking.remarks}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button onClick={() => handleEdit(booking)} className="bg-yellow-500 text-white px-4 py-2 mr-2">Edit</button>
                                <button onClick={() => deleteBooking(booking.id)} className="bg-red-500 text-white px-4 py-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingList;
