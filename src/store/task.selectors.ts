import { createFeatureSelector, createSelector } from "@ngrx/store";
import { taskFeatureKey, TasksRootState, TaskState } from "./task.reducer";

export const selectPhotoFeature = createFeatureSelector<TaskState>(taskFeatureKey);

export const selectTasks = createSelector(
    selectPhotoFeature,
    (state: TaskState) => Object.keys(state).map(key => state[key])
);

export const selectTask = (id: string) => createSelector(
    selectPhotoFeature,
    (state: TaskState) => state[id]
);
