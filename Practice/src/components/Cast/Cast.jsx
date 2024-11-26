import Card from "../Card";
import './Cast.css'

function Cast({cast}){
  return(
    <>
    <h1>Cast</h1> 
    <div className="cast">
      {cast.map(function(item){
        return <Card key={item.id} item = {item}></Card>
      })
    }
    </div>
    </>
  )
}

export default Cast;

