import {Action} from './actions';

export default function greetingReducer(state: string = 'Hello', action: Action) {
    switch (action.type) {
        case 'UPDATE_GREETING':
            return action.payload;
        case  'RESET_GREETING':
            return '';
        default:
            return state;
    }
}
