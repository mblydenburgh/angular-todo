import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from '../app/services/task.service';
import { Injectable } from '@angular/core';
import {
    loadTasks,
    loadTasksSuccess,
    loadTasksError,
    createTask,
    createTaskSuccess,
    createTaskError,
    deleteTask,
    deleteTaskSuccess,
    deleteTaskError,
    updateTask,
    updateTaskSuccess,
    updateTaskError,
} from './task.actions';
import { map, catchError, switchMap, concatMap, mergeMap, delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TaskEffects {

    loadTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadTasks),
            switchMap(() => this.taskService.getTasks().pipe(
                map(tasks => loadTasksSuccess({ tasks })),
                catchError(() => [loadTasksError()])
            ))
        )
    );

    createTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createTask),
            concatMap((action) => this.taskService.addTask(action.task).pipe(
                map((task) => createTaskSuccess({ task })),
                catchError(() => [createTaskError()])
            ))
        )
    );

    deleteTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteTask),
            mergeMap(({ task }) => this.taskService.deleteTask(task).pipe(
                map(() => deleteTaskSuccess({ id: task.id })),
                catchError(() => [deleteTaskError()])
            ))
        )
    );

    updateTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateTask),
            concatMap((action) => this.taskService.updateTask(action.task).pipe(
                map((task) => updateTaskSuccess({ task })),
                catchError(() => [updateTaskError()])
            ))
        )
    );

    constructor(
        private actions$: Actions,
        private taskService: TaskService
    ) { }
}