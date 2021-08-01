package com.skilldistillery.tracker.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class HabitTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Habit habit;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAHabitTracker");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		habit = em.find(Habit.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		habit = null;
	}

	@Test
	void test() {
		assertNotNull(habit);
		assertEquals("Exercise", habit.getName());
	}
	
	@Test
	void test_habit_to_user_mapping() {
		assertNotNull(habit.getUser());
		assertEquals("user", habit.getUser().getUsername());
	}
	
	@Test
	void test_habit_to_category_mapping() {
		assertNotNull(habit.getCategory());
		assertEquals("Health", habit.getCategory().getName());
	}

}
