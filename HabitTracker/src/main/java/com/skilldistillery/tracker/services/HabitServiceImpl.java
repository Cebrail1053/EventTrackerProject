package com.skilldistillery.tracker.services;

import java.util.List;
import java.util.Optional;

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

	@Override
	public Habit show(int id) {
		Optional<Habit> habit = repo.findById(id);
		if(habit.isPresent()) {
			return habit.get();
		}
		return null;
	}

	@Override
	public Habit update(Habit habit) {
		repo.saveAndFlush(habit);
		return habit;
	}

	@Override
	public Habit create(Habit habit) {
		repo.saveAndFlush(habit);
		return habit;
	}

	@Override
	public boolean delete(int id) {
		repo.deleteById(id);
		return !repo.existsById(id);
	}
	
	
}
