import React from 'react'
import { useInputChange } from '../../hooks/useInputChange';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useInputChange({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        handleAddTodo({
            id: new Date().getTime(),
            desc: description,
            done: false
        });
        reset();
    };

    return (
        <>
            <h4>Add todo</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    type="text"
                    name="description"
                    placeholder="Learn..."
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={description}
                ></input>

                <button className="btn btn-outline-primary mt-1 btn-block" type="submit">Add</button>
            </form>
        </>
    )
}
