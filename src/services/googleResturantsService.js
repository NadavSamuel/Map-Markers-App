import axios from 'axios'
// const KEY = 'AIzaSyDeLhksMwK4S5h3ZKNrYYPsPPedZuHxdlw'
// const KEY = 'AIzaSyDeLhksMwK4S5h3ZKNrYYPsPPedZuHxdlw'
const KEY = 'AIzaSyARhJCj-KdXS-t0qh0QBlZLvhzJlyQ36EQ'
const ZOMATO_KEY = 'bc3d0486cb424fdd3a6d5039b6b723d3'
// const STROAGE_KEY = 'vids'

export const googleResturantsService = {
    getResturantsFromGoogle
}
 async function getResturantsFromGoogle(lat,lang) {
    try{
    // const resturants = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lang}&radius=1500&type=restaurant&key=${KEY}`)
    const resturants = await axios.get(`https://api.chucknorris.io/jokes/random`)
    // const resturants = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.109333,34.855499&radius=1500&type=restaurant&key=AIzaSyARhJCj-KdXS-t0qh0QBlZLvhzJlyQ36EQ`)
    console.log('got videos from api: , ',resturants)
    // storageService.saveToStorage(STROAGE_KEY,videos.data)

    // return videos.data.items
    }
    catch(err){
        if (err.response) {
            // Request made and server responded
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else if (err.request) {
            // The request was made but no response was received
            console.log(err.request);
            console.log(err);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', err.message);
          }
          }
}