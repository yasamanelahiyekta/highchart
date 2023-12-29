export const users = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "getUsers":

            return payload;

        default:
            return state;
    }
}