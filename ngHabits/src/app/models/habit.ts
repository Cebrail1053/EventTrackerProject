export class Habit {

// TODO: Finsish Entity Model

  id: number;
  name: string;
  description: string;
  startDate: string;
  updatedDate: string;
  goal: number;
  achieved: boolean;

  constructor(
    id: number = 0,
    name: string = '',
    description: string = '',
    startDate: string = '',
    updatedDate: string = '',
    goal: number = 0,
    achieved: boolean = false
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.updatedDate = updatedDate;
    this.goal = goal;
    this.achieved = achieved;
  }

}
