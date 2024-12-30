import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const AddBooking = () => {
    const [formData, setFormData] = useState({
        applicantName: '',
        email: '',
        mobile: '',
        startDate: '',
        endDate: '',
        rent: '',
        additionalCharges: '',
        hallName: '',
        remarks: '',
    });
    const location = useLocation();

    useEffect(() => {
        if (location.state?.booking) {
            setFormData(location.state.booking);
        }
    }, [location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiCall = formData.id
            ? axios.put(`http://localhost:8080/api/bookings/${formData.id}`, formData) // Update booking
            : axios.post('http://localhost:8080/api/bookings', formData); // Add new booking

        apiCall
            .then(response => {
                alert(formData.id ? 'Booking updated successfully!' : 'Booking added successfully!');
                setFormData({
                    applicantName: '',
                    email: '',
                    mobile: '',
                    startDate: '',
                    endDate: '',
                    rent: '',
                    additionalCharges: '',
                    hallName: '',
                    remarks: '',
                });
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{formData.id ? 'Edit Booking' : 'Add Booking'}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="applicantName" placeholder="Applicant Name" value={formData.applicantName} onChange={handleChange} className="border p-2 w-full mb-4" />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 w-full mb-4" />
                <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} className="border p-2 w-full mb-4" />
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="border p-2 w-full mb-4" />
                <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="border p-2 w-full mb-4" />
                <input type="number" name="rent" placeholder="Rent" value={formData.rent} onChange={handleChange} className="border p-2 w-full mb-4" />
                <input type="number" name="additionalCharges" placeholder="Additional Charges" value={formData.additionalCharges} onChange={handleChange} className="border p-2 w-full mb-4" />
                <input type="text" name="hallName" placeholder="Hall Name" value={formData.hallName} onChange={handleChange} className="border p-2 w-full mb-4" />
                <textarea name="remarks" placeholder="Remarks" value={formData.remarks} onChange={handleChange} className="border p-2 w-full mb-4"></textarea>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">{formData.id ? 'Update Booking' : 'Add Booking'}</button>
            </form>
        </div>
    );
};

export default AddBooking;
