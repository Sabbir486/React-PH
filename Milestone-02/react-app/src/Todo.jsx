// Export

export default function Todo({task, isDone, time=0}){
    if(isDone === false){
        return(
        <li>Task: {task} {time}</li>
        )
    }

    else{
        return(
            <li>Do now: {task} {time}</li>
        )
    }
}