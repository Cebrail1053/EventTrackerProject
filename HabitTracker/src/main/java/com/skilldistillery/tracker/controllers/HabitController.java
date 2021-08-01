package com.skilldistillery.tracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.tracker.entities.Habit;
import com.skilldistillery.tracker.services.HabitService;

@RequestMapping("api")
@RestController
public class HabitController {
	
	@Autowired
	private HabitService habitSvc;
	
	@GetMapping("habits")
	public List<Habit> listHabits(){
		return habitSvc.allHabits();
	}
	
	@GetMapping("habits/{id}")
	public Habit showHabit(@PathVariable int id) {
		return habitSvc.show(id);
	}
	
	@PostMapping("habit")
	public Habit createHabit(@RequestBody Habit habit) {
		return habitSvc.create(habit);
	}
	
	@PutMapping("habit")
	public Habit updateHabit(@RequestBody Habit habit) {
		return habitSvc.update(habit);
	}
	
	@DeleteMapping("habits/{id}")
	public boolean deleteHabit(@PathVariable int id) {
		return habitSvc.delete(id);
	}
}
