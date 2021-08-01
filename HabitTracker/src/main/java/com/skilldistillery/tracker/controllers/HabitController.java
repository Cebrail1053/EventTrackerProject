package com.skilldistillery.tracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
}
