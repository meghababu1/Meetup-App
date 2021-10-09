import React from 'react'
import { Card } from '../ui/Card'
import './NewMeetupForm.css'
import { useRef } from 'react'


export const NewMeetupForm = ({onAdd}) => {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()
    const submitHandler=(event)=>{
        event.preventDefault()
        const enteredtitle = titleInputRef.current.value
        const enteredimage = imageInputRef .current.value
        const enteredaddress = addressInputRef .current.value
        const entereddescription = descriptionInputRef.current.value
        const meetupData = {
            title:enteredtitle,
            image:enteredimage,
            address:enteredaddress,
            description:entereddescription
        }
        console.log(meetupData)
        onAdd(meetupData)

    }
    return (
        <div>
            <Card>
                <form className="form" onSubmit={submitHandler}> 

                    <div className="control">
                        <label>Meetup Title</label>
                        <input type= "text" required  id ="title"  ref ={titleInputRef} />
                    </div>

                    <div className="control">
                        <label>Meetup Image</label>
                        <input type= "url" required  id ="image" ref={imageInputRef} />
                    </div>

                    <div className="control">
                        <label>Meetup Address</label>
                        <input type= "text" required  id ="address" ref={addressInputRef} />
                    </div>

                    <div className="control">
                        <label>Meetup Description</label>
                        <textarea  required  id ="description" ref={descriptionInputRef } row ="5">
                      </textarea>
                    </div>
                    <div className="actions">
    
                    <button>Add Meetup</button>
                    </div>


                </form>
            </Card>
            
        </div>
    )
}
