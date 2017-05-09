export type UpdateGreetingAction = {
    type: 'UPDATE_GREETING';
    payload: string;
};

export type ResetGreetingAction = {
    type: 'RESET_GREETING';
};

export type Action = UpdateGreetingAction | ResetGreetingAction;

export function updateGreeting(greeting: string): UpdateGreetingAction {
    return {
        type: 'UPDATE_GREETING',
        payload: greeting
    };
}

export function resetGreeting(): ResetGreetingAction {
    return {
        type: 'RESET_GREETING'
    };
}
