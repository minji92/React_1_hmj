import React, { memo } from 'react';

const HabitAddForm = memo(
    props => {
        const formRef = React.createRef();
        const inputRef = React.createRef();
    
        const onSubmit = event => {
            event.preventDefault();
            const name = inputRef.current.value;
            name && props.onAdd(name);
            formRef.current.reset(); // 폼에있는 모든 input값 reset
        };
    
        return (
            <form ref={formRef} action="" className="addForm" onSubmit={onSubmit}>
                <input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
                <button className="add-button">Add</button>
    
            </form>
        );            
    }
);

export default HabitAddForm;
