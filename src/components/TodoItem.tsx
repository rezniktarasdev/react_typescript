import { FC, useState } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    const [completed, setCompleted] = useState(todo.completed);

    const handleChange = () => {
        setCompleted(!completed);
    };

    return (
        <div style={{ padding: 15, border: '1px solid gray' }}>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleChange}
            />
            {todo.id}. {todo.title}
        </div>
    );
}

export default TodoItem;

