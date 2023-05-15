import React from "react";

const styles = {
    li: {
        listStyle: 'none',
        width: '200px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        margin: '10p',
    }
}

const TodoItem = ({todo, number, remove, id}) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            
            margin: '10p',
            
        }}>
            <li style={styles.li}>
                <strong>{number + 1}</strong>{todo.title}
            </li>
            <button onClick={() => remove(id)}>delete</button>
        </div>
        
    )
}

export default TodoItem;