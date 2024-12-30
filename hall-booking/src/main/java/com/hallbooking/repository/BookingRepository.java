package com.hallbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hallbooking.model.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
}
