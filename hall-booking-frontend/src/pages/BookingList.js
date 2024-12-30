import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    const fetchBookings = () => {
        axios.get('http://localhost:8080/api/bookings')
            .then(response => setBookings(response.data))
            .catch(error => console.error('Error fetching bookings:', error));
    };

    const deleteBooking = (id) => {
      if (window.confirm('Are you sure you want to delete this booking?')) {
          axios.delete(`http://localhost:8080/api/bookings/${id}`)
              .then(() => {
                  alert('Booking deleted successfully');
                  fetchBookings(); // Refresh the list after deletion
              })
              .catch(error => console.error('Error deleting booking:', error.response || error));
      }
  };

    useEffect(() => {
        fetchBookings();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Booking List</h1>
            <button
                onClick={() => navigate('/add')}
                className="bg-green-500 text-white px-4 py-2 mb-4"
            >
                Add Booking
            </button>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Applicant Name</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Mobile</th>
                        <th className="border border-gray-300 px-4 py-2">Start Date</th>
                        <th className="border border-gray-300 px-4 py-2">End Date</th>
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
                            <td className="border border-gray-300 px-4 py-2">
                                <button
                                    onClick={() => navigate(`/edit/${booking.id}`)}
                                    className="bg-blue-500 text-white px-2 py-1 mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteBooking(booking.id)}
                                    className="bg-red-500 text-white px-2 py-1"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingList;
