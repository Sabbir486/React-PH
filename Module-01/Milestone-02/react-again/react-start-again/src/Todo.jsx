export default function Todo({ task, isDone }) {
    if (isDone) {
        return <li>Done: {task}</li>
    }

    else {
        return <li>To Do: {task}</li>
    }
}