// store , next , action

export const loggerMiddleware = (store) => (next) => (action) => {
    console.log(`[LOG]: ${action.type} ${new Date().toString()}`);
    next(action);
    console.log(store.getState());
};
