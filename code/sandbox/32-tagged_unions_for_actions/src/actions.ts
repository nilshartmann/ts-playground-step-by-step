export const RESET_GREETING = 'RESET_GREETING';
export const UPDATE_GREETING = 'UPDATE_GREETING';

export type UpdateGreetingAction = {
    type: typeof UPDATE_GREETING;
    payload: string;
};

export type ResetGreetingAction = {
    type: typeof RESET_GREETING;
};

export type Action = UpdateGreetingAction | ResetGreetingAction;

export function updateGreeting(greeting: string): UpdateGreetingAction {
    return {
        type: UPDATE_GREETING,
        payload: greeting
    };
}

export function resetGreeting(): ResetGreetingAction {
    return {
        type: 'RESET_GREETING'
    };
}
