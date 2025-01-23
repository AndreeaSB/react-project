import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";


export default function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currSlide, setCurrSlide] = useState(0);
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious(){
    setCurrSlide(currSlide === 0 ? (images.length - 1) : (currSlide - 1));
  }

  function handleNext() {
    setCurrSlide(currSlide === images.length ? 0 : (currSlide + 1));
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  if (errMsg !== null) {
    return <div>Error occured! {errMsg}</div>;
  }

  return <div className="container">
    <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
    {
        images && images.length ?
        images.map((imageItem, index) => (
            <img 
            key={imageItem.id}
            alt={imageItem.download_url}
            src={imageItem.download_url}
            className= {currSlide === index ? "current-image" : "current-image hide-current-image"}
            />
        ))
        : null
    }
    <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
    <span className="circle-indicators">
        {images && images.length ?
        images.map((_, index) => <button
        key={index}
        className={currSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
        onClick={() => setCurrSlide(index)}
        ></button>)
        :null
    }
    </span>
  </div>;
}
