import { createContext } from 'react'
import { useState } from 'react'
const FavoritesContext = createContext({
    favorites : [],
    totalFavorites : 0,
    addFavorite : (favoritesmeetup) => {},
    removeFavorite : (meetupid) => {},
    itemIsFavorite : (meetupid) => {},

})
export function FavoritesContextProvider(props){

    const addFavoriteHandler = (favoritesmeetup) => {
        setUserFavorites((previousfavorites)=>{
            return previousfavorites.concat(favoritesmeetup)
        })
    }
    const removeFavoriteHandler = (meetupid) => {
        setUserFavorites(previousfavorites => {
            return previousfavorites.filter(meetup => meetup.id != meetupid)
        })
    }
    const itemIsFavoriteHandler = (meetupid) =>{
        return userFavorites.some(meetup => meetup.id == meetupid)


    }
    
    const [userFavorites, setUserFavorites] = useState([])
    const context = {
        favorites : userFavorites,
        totalFavorites : userFavorites.length,
        addFavorite : addFavoriteHandler,
        removeFavorite : removeFavoriteHandler,
        itemIsFavorite : itemIsFavoriteHandler
    }
    
    return <FavoritesContext.Provider value = { context }>
        { props.children }
    </FavoritesContext.Provider>
}

export default FavoritesContext