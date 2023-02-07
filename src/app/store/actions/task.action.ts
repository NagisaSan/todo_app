import { Action } from "@ngrx/store";

 //definir tipos de acções possiveis (add/remove/update task)
export enum TaskActionType {
    ADD_TASK = '[TASK] Add Task',
    REMOVE_TASK = '[TASK] Remove Task'
}

export class AddTask implements Action {
    readonly type = TaskActionType.ADD_TASK;

    constructor(public payload: Task) { }
}

export class RemoveTask implements Action {
    readonly type = TaskActionType.REMOVE_TASK;

    constructor(public payload: Task) { }
}

export type TaskAction = AddTask | RemoveTask;
