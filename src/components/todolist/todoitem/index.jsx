export const TodoItem = (props) => {
    return(
    <li>
        <span>{props.index}</span>
        <span>{`${props.title} `}</span>
    </li>
    )
}