import axios from "axios"

export const getUsers = () => async (dispatch, getstate) => {
    try {
        dispatch({ type: "getUsers", payload: { data: [], loading: true, error: "" } })
        const { data } = await axios("https://my.api.mockaroo.com/user.json?key=69639760")
        console.log(data);
        const newData = JSON.parse(JSON.stringify(data))
        dispatch({ type: "getUsers", payload: { data: newData, loading: false, error: "" } })
    } catch (error) {
        dispatch({ type: "getUsers", payload: { data: [], loading: false, error: error } })
        console.log(error);
    }
}