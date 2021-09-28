import { useState } from 'react'
const Tasks = () => {
    const [tasks, setTasks] = useState(
        [
            {
                "id" : 1,
                "text": "Learning React",
                "day": "28/9/2021",
                "reminder": true
            },
            {
                "id": 2,
                "text": "Learning Next JS",
                "day": "10/10/2021",
                "reminder": true
            },
            {
                "id": 3,
                "text": "Learning GraphQL",
                "day": "15/10/2021",
                "reminder": true
            }
        ]
    );
    return (
        <>
         {tasks.map((task)=> (<h3 key={task.id} className="mb-3">{task.text}</h3>))}   
        </>
    )
}

export default Tasks
