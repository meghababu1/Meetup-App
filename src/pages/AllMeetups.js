import React from 'react'
import { useState ,  useEffect } from 'react'
import { MeetupList } from '../components/meetup/MeetupList';

export const AllMeetups = () => {
  const [isLoading, setIsLoading]= useState(true)
  const [meetuplist, setMeetuplist]= useState([])
  useEffect(()=>{
    fetch("https://meetup-52be7-default-rtdb.firebaseio.com/meetup.json").
    then(x => x.json()).
    then(meetup=>
    {
      const meetuplist=[]
      //uniqueid
      //meetup[key]=>title,d
      for(let key in meetup){
        const meetupdata={
          id:key,
          ...meetup[key]
        }
        meetuplist.push(meetupdata)
      }
      setIsLoading(false)
      setMeetuplist(meetuplist)
    })
  })
    // const DUMMY_DATA = [
    //         {
    //           id: 'm1',
    //           title: 'This is a first meetup',
    //           image:
    //             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    //           address: 'Meetupstreet 5, 12345 Meetup City',
    //           description:
    //             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    //         },
    //         {
    //           id: 'm2',
    //           title: 'This is a second meetup',
    //           image:
    //             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    //           address: 'Meetupstreet 5, 12345 Meetup City',
    //           description:
    //             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    //         },
    //       ];
          
        
    //const [meetups,setMeetups]=useState(DUMMY_DATA)
    if(isLoading){
      return <p>Loading.............</p>
    }
    return (
        <div>
            
            <h1>All Meetups</h1>
           < MeetupList meetuplist={meetuplist}/>
       
        {/* //    { meetups.map((meetup)=>{ */}
        {/* //           return(<p>{meetup.title}</p>) */}
        {/* //       }) */}
        {/* //   } */}
        </div>
    )
}
