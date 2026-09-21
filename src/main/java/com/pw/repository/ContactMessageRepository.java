package com.pw.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.pw.entity.ContactMessage;


public interface ContactMessageRepository
        extends JpaRepository<ContactMessage, Long> {

}