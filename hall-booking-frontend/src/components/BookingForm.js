import React from 'react';

const BookingForm = ({ formData, handleChange, handleSubmit, isEditMode }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="applicantName"
                placeholder="Applicant Name"
                value={formData.applicantName}
                onChange={handleChange}
                className="border p-2 w-full mb-4"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 w-full mb-4"
            />
            <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="border p-2 w-full mb-4"
            />
            <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="border p-2 w-full mb-4"
            />
            <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="border p-2 w-full mb-4"
            />
            <input
                type="number"
                name="rent"
                placeholder="Rent"
                value={formData.rent}
                onChange={handleChange}
                className="border p-2 w-full mb-4"
            />
            <input
                type="number"
                name="additionalCharges"
                placeholder="Additional Charges"
                value={formData.additionalCharges}
                onChange={handleChange}
                className="border p-2 w-full mb-4"
            />
            <input
                type="text"
                name="hallName"
                placeholder="Hall Name"
                value={formData.hallName}
                onChange={handleChange}
                className="border p-2 w-full mb-4"
            />
            <textarea
                name="remarks"
                placeholder="Remarks"
                value={formData.remarks}
                onChange={handleChange}
                className="border p-2 w-full mb-4"
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                {isEditMode ? 'Update' : 'Add'} Booking
            </button>
        </form>
    );
};

export default BookingForm;
