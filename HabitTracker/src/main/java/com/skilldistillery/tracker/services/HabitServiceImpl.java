package com.skilldistillery.tracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.tracker.entities.Habit;
import com.skilldistillery.tracker.repositories.HabitRepository;

@Service
public class HabitServiceImpl implements HabitService {
	
	@Autowired
	private HabitRepository repo;

	@Override
	public List<Habit> allHabits() {
		return repo.findAll();
	}
	
	
}
