import { TodoItem } from "./todoitem";

export const TodoList = (props) => {
    const { todos } = props;

    return(
        <>
            {todos.map((item, index) => (
            <TodoItem key={index} index={index + 1} title={item.title}/>
            ))}
        </>
    );
};