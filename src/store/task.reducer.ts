import { Task } from "src/app/Task";
import { createReducer, on } from "@ngrx/store";
import { loadTasksSuccess, createTaskSuccess, deleteTaskSuccess, updateTaskSuccess } from "./task.actions";

export interface TaskState {
    [id: string]: Task;
}

export const taskFeatureKey = "task";

export interface TasksRootState {
    [taskFeatureKey]: TaskState;
}

const initialState: TaskState = {};

export const tasksReducer = createReducer(
    initialState,
    on(loadTasksSuccess, (state, {tasks}) => tasks.reduce((acc, task) => ({
        ...acc, 
        [task.id]: task
    }), {})),
    on(createTaskSuccess, (state, {task}) => createTask(Object.values(state), task).reduce((acc, task) => ({
        ...acc,
        [task.id]: task
    }), {})),
    on(deleteTaskSuccess, (state, {id}) => deleteTask(Object.values(state), id).reduce((acc, task) => ({
        ...acc,
        [task.id]: task
    }), {})),
    on(updateTaskSuccess, (state, {task}) => updateTask(Object.values(state), task).reduce((acc, task) => ({
        ...acc,
        [task.id]: task
    }), {}))
)

const createTask = (tasks: Task[], task: Task) => [...tasks, task];
const updateTask = (tasks: Task[], newTask: Task) => tasks.map(task => task.id === newTask.id ? Object.assign({}, task,  newTask): task);
const deleteTask = (tasks: Task[], id: string) => tasks.filter(task => task.id !== id);