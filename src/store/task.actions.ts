import { createAction, props } from "@ngrx/store";
import { Task } from "../app/Task";

export const loadTasks = createAction("[Tasks] Load Tasks");
export const loadTasksSuccess = createAction("[Tasks] Load Tasks Success", props<{ tasks: Task[] }>());
export const loadTasksError = createAction("[Tasks] Load Tasks Error");

export const createTask = createAction("[Tasks] Create Task", props<{ task: Task }>());
export const createTaskSuccess = createAction("[Tasks] Create Task Success", props<{ task: Task }>());
export const createTaskError = createAction("[Tasks] Create Task Error");

export const deleteTask = createAction("[Tasks] Delete Task", props<{ task: Task }>());
export const deleteTaskSuccess = createAction("[Tasks] Delete Task Success", props<{ id: string }>());
export const deleteTaskError = createAction("[Tasks] Delete Task Error");

export const updateTask = createAction("[Tasks] Update Task", props<{ task: Task }>());
export const updateTaskSuccess = createAction("[Tasks] Update Task Success", props<{ task: Task }>());
export const updateTaskError = createAction("[Tasks] Update Task Error");