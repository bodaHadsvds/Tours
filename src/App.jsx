// const url = 'https://course-api.com/react-tours-project';
import { useEffect, useState } from "react";
import Loading from "./loading";
import Tours from "./Tours";
const App = () => {
  // const data = fetch('https://course-api.com/react-tours-project')
  // .then((response)=>console.log(response.json()))
  const [isloading,setloading] =useState(true);
  const [tours,setTour] =useState([])
  const removeTour =(id)=>{
    const newTours = tours.filter( (tour)=>tour.id !== id);
    setTour(newTours)
  }
  const FetchTours = async() =>{
    setloading(true)
    try{
      const resonse = await fetch('https://course-api.com/react-tours-project')
      const tours = await resonse.json()
      setTour(tours)
   
    }
    catch (err){
  console.log(err)
    }
    setloading(false)
  }
  useEffect(()=>{FetchTours()},[])

  if (isloading){
return <main><Loading/></main>
  }

if (tours.length === 0) {
  return <div className="title">
    <h2>no tours left</h2>
    <button type="button" style={{marginTop:'2rem'}} className="btn" onClick={()=>FetchTours()}>refresh</button>
  </div>
}


  return (<main> <Tours tours={tours} removeTour={removeTour}/></main>);
};
export default App;
