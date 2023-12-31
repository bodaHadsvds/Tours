
 import Tour from "./Tour"
 const Tours = ({tours, removeTour}) => {
  return (
    <section> 
  <div className="title">
     <h2>our tours</h2>
     <div className="title-underline"></div>
     <div className="tours">    {tours.map((data)=>{ return <Tour  key={data.id} {...data} removeTour={removeTour}/> })}        </div>   
     </div>   </section>)
 }

 export default Tours;