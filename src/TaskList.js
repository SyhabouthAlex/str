import React from 'react';
import Task from './Task';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import './TaskList.css'

function TaskList({tasks}) {
    const useStyles = makeStyles({
        root: {
            background: "white",
            borderRadius: 12,
            borderStyle: "solid",
            borderColor: "lightgray",
            border: 1,
            padding: 0
        }
    });

    const classes = useStyles();

    return tasks.length ? (
        <List component="nav" classes={{ root: classes.root}} className="TaskList">
            {tasks.map((taskData, idx) => (
                <React.Fragment>
                    <Task
                    task={taskData}
                    key={idx}
                    />
                    {idx !== tasks.length - 1 && <Divider/>}
                </React.Fragment>
            ))}
        </List>
    ) : (
        <p className="errorMessage">No tasks for this time period.</p>
    );
}

export default TaskList;