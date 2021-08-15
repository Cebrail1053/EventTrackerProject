import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Habit } from 'src/app/models/habit';
import { HabitService } from 'src/app/services/habit.service';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {
  habits: Habit[] = [];
  selected: Habit | null = null;
  newHabit: Habit = new Habit();
  editHabit: Habit | null = null;

  constructor(
    private habitService: HabitService
  ) { }

  ngOnInit(): void {
    this.loadHabits();
  }

  loadHabits() {
    this.habitService.index().subscribe(
      habits => {
        this.habits = habits;
      },
      noHabits => {
        console.error('HabitListComponent.loadHabits(): error retrieving habit list');
        console.error(noHabits);
      }
    );
  }

  getAchievmentCount(): Number {
    let count = 0;
    for(let i = 0; i < this.habits.length; i++) {
      if(this.habits[i].achieved) {
        count++;
      }
    }
    return count;
  }

  displayHabit(habit: any): void {
    if(habit.goal === null){
      habit.goal = 0;
    }
    this.selected = habit;
  }

  displayTable(): void {
    this.selected = null;
  }

  addHabit(): void {
    this.habitService.create(this.newHabit).subscribe(
      data => {
        this.loadHabits();
      },
      error => {
        console.log(error);
        console.log("Error creating habit through service");
      }
    );
    this.newHabit = new Habit();
  }

  deleteHabit(id: number): void {
    this.habitService.destroy(id).subscribe(
      data => {
        this.loadHabits();
      },
      error => {
        console.log(error);
        console.log("Error deleting habit through service");
      }
    );
  }

  setEditHabit(): void {
    this.editHabit = Object.assign({}, this.selected);
  }

  updateHabit(habit: Habit): void {
    this.habitService.update(habit).subscribe(
      data => {
        this.loadHabits();
      },
      error => {
        console.log(error);
        console.log("Error updating Habit through service");
      }
    );
    this.editHabit = null;
    this.selected = null;
  }

  getCompletionLevel() {
    let completionLevel = this.getAchievmentCount();
    if(completionLevel < 4) {
      return "badge bg-danger";
    } else if (completionLevel < 7) {
      return "badge bg-warning";
    } else {
      return "badge bg-success";
    }
  }

}
