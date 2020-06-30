import React from 'react';

export default (props) => {
    const todos = props.tasks.map((todo, index) => {
        return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    })
    return (
        <div className='list-wrapper'>
            {todos}
        </div>
    );
}

const Todo = (props) => {
    return (
        <div className='list-item'>
            {props.content}
            <button
                class="delete is-pulled-right"
                onClick={() => { props.onDelete(props.id) }}>complete</button>
        </div>
    );
}