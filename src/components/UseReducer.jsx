import React, { useReducer } from "react";

const initialState = {
    name: "",
    email: "",
    password: "",
};

function reducer(state, action) {
    switch (action.type) {

        case "UPDATE_FIELD":
            return {
                ...state,
                [action.field]: action.value,
            };

        case "RESET":
            return initialState;

        default:
            return state;
    }
}

function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        dispatch({
            type: "UPDATE_FIELD",
            field: e.target.name,
            value: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(state);

        // API Call Here

        dispatch({ type: "RESET" });
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={state.name}
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={state.email}
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={state.password}
                onChange={handleChange}
            />

            <br /><br />

            <button type="submit">
                Submit
            </button>

        </form>
    );
}

export default UseReducer;