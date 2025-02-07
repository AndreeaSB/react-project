import "./App.css";
import ScrollIndicator from "./components/scroll-indicator";
// import DarkTheme from './components/dark-theme'
// import QRCodeGenerator from "./components/qr-generator";
// import TreeView from "./components/tree-view";
// import menus from "./components/tree-view/data";
// import LoadMoreData from "./components/load-more";
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
      {/*<LoadMoreData />*/} 

      {/* Tree View Component */}
      {/* <TreeView menus={menus} /> */}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator /> */}

      {/* Dark Theme */}
      {/* <DarkTheme /> */}

      {/* scroll indicator */}
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
    </div>
  );
}

export default App;
