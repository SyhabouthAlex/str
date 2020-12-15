import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core/styles';
import './Task.css';

function Task({task: {touch, title, description, icon, collaborators}}) {
    const [isHidden, setHidden] = useState(true);
    const [taskClicked, setTaskClicked] = useState(false);
    const useStyles = makeStyles({
        root: {
            height: "5em"
        }
    });

    const classes = useStyles();

    function hideButtons() {
        return setHidden(() => true);
    }

    function showButtons() {
        return setHidden(() => false);
    }

    function askCompletion() {
        return taskClicked(() => true);
    }

    function closeCompletionPrompt() {
        return taskClicked(() => false);
    }

    return (
        <ListItem button classes={{ root: classes.root}} className="Task" onMouseEnter={showButtons} onMouseLeave={hideButtons}>
            {/*I would use some global state like redux or react's useContext for this icon and have it set up in my App component
            but for the sake of not having to find the icons myself I'm leaving it like this.*/}
            <ListItemAvatar className="Task-icon">
                <Avatar>I</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Typography
                        component="h5"
                        variant="p"
                        className="Task-header"
                    >
                        Touch {touch} | {title}
                    </Typography>
                } 
                secondary={
                    collaborators ? <p className="Task-description">{description} <span>with</span> {collaborators}</p> 
                    : <p className="Task-description">{description}</p>
                }
            />
            {!isHidden && <ListItemIcon>
                <CloseIcon style={{ color: "lightblue" }} fontSize="large"/>
            </ListItemIcon>}
            {!isHidden && <ListItemIcon>
                <CheckIcon style={{ color: "lightblue" }} fontSize="large"/>
            </ListItemIcon>}
            <ListItemIcon>
                {!isHidden ? <ArrowForwardIosIcon color="primary" fontSize="large"/>
                : <ArrowForwardIosIcon color="disabled" fontSize="large"/>}
            </ListItemIcon>
        </ListItem>
    )
}

export default Task;