package com.youtube.jwt.dao;

import com.youtube.jwt.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao extends CrudRepository<User, String> {
    List<User> findByUserName(String userName);
}
