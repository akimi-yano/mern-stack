import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import { CTX } from './Context';


const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2),
    },
    flex: {
        display: 'flex',
        alignItem: 'center',
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid grey',
    },
    chatWindow: {
        width: '70%',
        height: '300px',
        padding: '20px',
    },
    chatBox: {
        width: '85%',
    },
    button: {
        width: '15%',
    },
}))

const Dashboard = (props) => {
    const [message, changeMessage] = useState('')
    const classes = useStyles();

    // Context CTX
    const { allChats, sendChatAction, userState } = useContext(CTX)
    console.log({ allChats })
    const topics = Object.keys(allChats);



    // local state
    const [activeTopic, changeActiveTopic] = useState(topics[0])


    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                    MERN CHAT - WELCOME {props.name} san \(^o^)/
            </Typography>
                <Typography variant="h5" component="h5">
                    Current Chat: {activeTopic}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {
                                topics.map(topic => (

                                    <ListItem onClick={e => changeActiveTopic(e.target.innerText)} key={topic} button>
                                        <ListItemText primary={topic} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                        {allChats[activeTopic] ? allChats[activeTopic].map((chat, i) => (
                            <div className={classes.flex} key={i}>
                                <Chip label={chat.from} className={classes.chip} />
                                <Typography variant="body1" gutterBottom>{chat.msg}</Typography>
                            </div>
                        )) : null
                        }
                        
                    </div>
                </div>
                <div className={classes.flex}>
                    <TextField label="Send a chat" className={classes.chatBox} value={message} onChange={e => changeMessage(e.target.value)} placeholder="Say something funny :)" />
                    <Button variant="contained" color="primary" href="#contained-buttons"
                        onClick={() => {
                            sendChatAction({ from: userState, msg: message, topic: activeTopic });
                            changeMessage('')
                        }}>
                        Send
        </Button>
                </div>
            </Paper>
        </div>
    )
}
export default Dashboard;