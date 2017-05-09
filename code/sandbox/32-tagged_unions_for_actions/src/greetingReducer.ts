export default function greetingReducer(state = 'Hello', action) {
    switch (action.type) {
        case 'UPDATE_GREETING':
            return action.payload;
        case  'RESET_GREETING':
            return '';
        default:
            return state;
    }
}
