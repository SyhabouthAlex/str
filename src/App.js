import React, {useState} from 'react';
import TimeBlock from './TimeBlock';
import './App.css';

function App() {
  const [timeBlocks, setTimeBlocks] = useState([["9:00", "10:00a"], ["11:15a", "12:00p"]]);
  const [taskBlocks, setTaskBlocks] = useState([
    [
      {
        touch: 3,
        title: "Inbound NY",
        description: "Call Avni Submaranian",
        icon: "phone"
      },
      {
        touch: 4,
        title: "Rekindling ancient embers",
        description: "Manual Task",
        icon: "linkedinconnect",
        collaborators: "Malik Simpson"
      },
      {
        touch: 3,
        title: "Shaming bottom-feeders",
        description: "Call Jabroni F. Myers",
        icon: "phone"
      }
    ],
    [
      {
        touch: 1,
        title: "Ignore and solicit on",
        description: "LinkedIn message Yvette Mok",
        icon: "linkedinmsg"
      },
      {
        touch: 1,
        title: "Ignore and solicit on",
        description: "Manual Task",
        icon: "linkedinconnect",
        collaborators: "Xavier St. D'Augustine"
      }
    ]
  ]);

  function removeTask(blockIdx, taskIdx) {
    // hacky way to check for task but can use a framework that can check for deep object equality like lodash for a better solution
    setTaskBlocks(taskBlocks => taskBlocks.map(tasks => (
      tasks.map(task => task.description !== tasks[blockIdx][taskIdx].description)
    )));
    // check for empty task blocks and get rid of their time blocks then the empty task blocks (because getting rid of the task blocks first would make it
    // impossible to figure out which time block to delete since they correspond using indexes)
    setTimeBlocks(timeBlocks => timeBlocks.map((times, idx) => taskBlocks[idx].length !== 0));
    setTaskBlocks(taskBlocks => taskBlocks.map(tasks => tasks.length !== 0));
  }

  return (
    <div className="App">
      {timeBlocks.map((times, idx) => (
        <TimeBlock 
        key={idx} 
        blockIdx={idx}
        startTime={times[0]} 
        endTime={times[1]} 
        tasks={taskBlocks[idx]}
        />
      ))}
    </div>
  );
}

export default App;
