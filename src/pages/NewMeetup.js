import React from 'react'
import { NewMeetupForm } from '../components/meetup/NewMeetupForm';
import {useHistory} from 'react-router-dom';

export const NewMeetup = () => {
    const history = useHistory()
    const onAdd = (meetupData)=>{
        fetch("https://meetup-52be7-default-rtdb.firebaseio.com/meetup.json",{
            method:"post",
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type':"application/json"
            }
        }).then(()=>{
            history.replace("/")
        })    
    }
    return (
        <div>
            <h1>NewMeetup </h1>
            <NewMeetupForm onAdd={onAdd}/>
        </div>
    )
}
