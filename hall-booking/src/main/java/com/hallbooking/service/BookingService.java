package com.hallbooking.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hallbooking.model.Booking;
import com.hallbooking.repository.BookingRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).orElse(null);
    }

    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    @Transactional
    public Booking updateBooking(Long id, Booking booking) {
        entityManager.createNativeQuery("CALL update_booking(:id, :applicant_name, :email, :mobile, :start_date, :end_date, :rent, :additional_charges, :hall_name, :remarks)")
                .setParameter("id", id)
                .setParameter("applicant_name", booking.getApplicantName())
                .setParameter("email", booking.getEmail())
                .setParameter("mobile", booking.getMobile())
                .setParameter("start_date", booking.getStartDate())
                .setParameter("end_date", booking.getEndDate())
                .setParameter("rent", booking.getRent())
                .setParameter("additional_charges", booking.getAdditionalCharges())
                .setParameter("hall_name", booking.getHallName())
                .setParameter("remarks", booking.getRemarks())
                .executeUpdate();
        return booking;
    }
    
    @Transactional
    public void deleteBooking(Long id) {
        entityManager.createNativeQuery("CALL delete_booking(:id)")
                .setParameter("id", id)
                .executeUpdate();
    }

}
