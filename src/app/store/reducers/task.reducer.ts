import { TaskAction, TaskActionType } from "../actions/task.action";
import { ITask } from "../models/task.model";

//create a dummy initial state
const initialState: Array<ITask> = [
    {
      id: 1,
      description: 'Computer Engineering',
      isCompleted: false,
    },
  ];

export function taskReducer(state: Array<ITask> = initialState, action: TaskAction) {
    switch (action.type) {
        case TaskActionType.ADD_TASK:
            return [...state, action.payload];
        default:
            return state;
    }
}