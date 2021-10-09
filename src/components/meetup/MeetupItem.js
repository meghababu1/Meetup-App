import React from 'react'
import { Card } from '../ui/Card'
import'./MeetupItem.css'
import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'
export const MeetupItem = ({meetup}) => {
    const fav_context = useContext(FavoritesContext)
    const itemisFavorite = fav_context.itemIsFavorite(meetup.id)
    function toggleFavoriteStatusHandler(){
        if(itemisFavorite){
            fav_context.removeFavorite(meetup.id)
        }else{
            fav_context.addFavorite(meetup)
        }
    }
    return (
      
        <div>
             <Card>
                 
            <li className="item">
            <div className="image">
                <img src ={meetup.image} alt ="" />
            </div>
            <div className="content">
                <h3>{meetup.title}</h3>
                <address>{meetup.address}</address>
                <p>{meetup.description}</p>

            </div>
            <div className="actions">
                <button onClick = {toggleFavoriteStatusHandler}>{itemisFavorite?"remove from Favorite":"To Favorites"}</button>
            </div>
            </li>
            </Card>
        </div>
       
    )
}
