import "./App.css";
import LoadMoreData from "./components/load-more";
//import ImageSlider from "./components/image-slider";
//import StarRating from './components/star-rating'
//import RandomColor from './components/random-color-generator'

function App() {
  return (
    <div>
      {/*Random Color component */}
      {/* <RandomColor/>*/}

      {/*Star Rating Component*/}
      {/* <StarRating noOfStars={10}/> */}

      {/*Image Slider component*/}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} /> */}

      {/*Load more data component*/}
      <LoadMoreData /> 
    </div>
  );
}

export default App;
