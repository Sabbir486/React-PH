// Export

// export default function Todo({task, isDone, time=0}){
//     if(isDone === false){
//         return(
//         <li>Task: {task} {time}</li>
//         )
//     }

//     else{
//         return(
//             <li>Do now: {task} {time}</li>
//         )
//     }
// }


// Conditional Rendering: And (&&)

// export default function Todo({task, isDone, time=0}){
//     return isDone && <li>Done Task: {task} time: {time}</li>
// }


// Conditional Rendering: Or (||)

export default function Todo({task, isDone, time=0}){
    return isDone || <li>Not Done Task: {task} time: {time ? 'I am done' : 'I am not done yet'}</li>
}