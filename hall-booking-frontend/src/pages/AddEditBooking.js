import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

const AddEditBooking = () => {
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

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/api/bookings/${id}`)
                .then(response => setFormData(response.data))
                .catch(error => console.error('Error fetching booking:', error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = id
            ? `http://localhost:8080/api/bookings/${id}`
            : 'http://localhost:8080/api/bookings';
        const method = id ? 'put' : 'post';
    
        axios[method](url, formData)
            .then(() => {
                alert(`Booking ${id ? 'updated' : 'added'} successfully`);
                navigate('/');
            })
            .catch(error => console.error(`Error ${id ? 'updating' : 'adding'} booking:`, error.response || error));
    };
    
    

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{id ? 'Edit' : 'Add'} Booking</h1>
            <BookingForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isEditMode={!!id}
            />
        </div>
    );
};

export default AddEditBooking;
