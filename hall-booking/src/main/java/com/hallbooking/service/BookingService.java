package com.hallbooking.service;

import com.hallbooking.model.Booking;
import com.hallbooking.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).orElse(null);
    }

    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public Booking updateBooking(Long id, Booking booking) {
        Booking existingBooking = bookingRepository.findById(id).orElse(null);
        if (existingBooking != null) {
            existingBooking.setApplicantName(booking.getApplicantName());
            existingBooking.setEmail(booking.getEmail());
            existingBooking.setMobile(booking.getMobile());
            existingBooking.setStartDate(booking.getStartDate());
            existingBooking.setEndDate(booking.getEndDate());
            existingBooking.setRent(booking.getRent());
            existingBooking.setAdditionalCharges(booking.getAdditionalCharges());
            existingBooking.setHallName(booking.getHallName());
            existingBooking.setRemarks(booking.getRemarks());
            return bookingRepository.save(existingBooking);
        }
        return null;
    }

    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}
