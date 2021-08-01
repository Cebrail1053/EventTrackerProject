package com.skilldistillery.tracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.tracker.entities.Habit;

public interface HabitRepository extends JpaRepository<Habit, Integer> {
	
}
