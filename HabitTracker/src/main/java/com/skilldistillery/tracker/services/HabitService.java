package com.skilldistillery.tracker.services;

import java.util.List;

import com.skilldistillery.tracker.entities.Habit;

public interface HabitService {
	List<Habit> allHabits();
	
	Habit show(int id);
	
	Habit update(Habit habit);
	
	Habit create(Habit habit);
	
	boolean delete(int id);
}
