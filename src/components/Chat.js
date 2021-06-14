import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AttachFile } from '@material-ui/icons';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import './chat.css';
import db from '../firebase';

function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    //Show messages based on the room
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');
    //Depends on our roomId , change the room
    useEffect(() => {
        if(roomId) {
            //inside the rooms, going to the specific doc, which in specific room and use that roomId 
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) => { //when gat a snapchat, use that room name
                setRoomName(snapshot.data().name) //it will get inside and pull that data
            })
        }
    },[roomId])

    /* Random user*/
    useEffect(()=>{
        setSeed(Math.floor(Math.random()* 5000));
    }, [roomId]); //everytime when roomId changes

    const sendMessage = (e) => {
        e.preventDefault() /* stop from refreshing  */
        setInput('')
    }

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seem</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className='chat__name'>Anna</span>
                        Hey guys
                    <span className='chat__timestamp'>3:52pm</span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                    <form>
                        <input onChange={e=>setInput(e.target.value)} value={input} type="text" placeholder='Type a message'/>
                        <button onClick={sendMessage} type='submit'>Send a message</button>
                    </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat;
