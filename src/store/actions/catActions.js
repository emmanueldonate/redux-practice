export const addCat =(name, alive) => (dispatch) => {
    dispatch({
        type: 'ADD_CAT',
        payload: {
            name,
            alive,
        },
    });
};