import './App.css'
import StarRating from './components/star-rating'
//import RandomColor from './components/random-color-generator'

function App() {

  return (
    <div>
      {/*Random Color component */}
     {/* <RandomColor/>*/}

     {/*Star Rating Component*/}
     <StarRating noOfStars={10}/>
    </div>
  )
}

export default App
