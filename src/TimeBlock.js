/**
     * TimeBlock component, renders a list of tasks for a certain time period
*/

import React from 'react';
import TaskList from "./TaskList";

function TimeBlock({startTime, endTime, tasks}) {
    return (
        <div className="TimeBlock">
            <h5 className="TimeBlock-time">{startTime} - {endTime}</h5>
            <TaskList tasks={tasks}/>
        </div>
    )
}
  
export default TimeBlock;