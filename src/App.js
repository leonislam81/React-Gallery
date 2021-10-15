import "./App.css";
import React, { useEffect, useState } from "react";
import ImageSearch from "./components/ImageSearch";
import ImageCard from "./components/ImageCard";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const api = "23868655-02ee4f01dbc55a1cfeb306a49";
  useEffect(async () => {
    try {
      const res = await fetch(
        `https://pixabay.com/api/?key=${api}&q=${term}&image_type=photo&pretty=true`
      );
      const data = await res.json();
      setImages(data.hits);
      setIsLoading(false);
    } catch (error) {
      console.log("Something is wrong!");
    }
  }, [term]);
  return (
    <div className="container pb-6 mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="mx-auto mt-32 text-5xl text-center">No Images Found</h1>
      )}
      {isLoading ? (
        <h1 className="mx-auto mt-32 text-6xl text-center">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
