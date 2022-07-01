import { useState } from "react";
import { memeData } from "../memeData";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage(e) {
    e.preventDefault()
      const memesArray = memeData.data.memes;
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      setMemeImage(memesArray[randomNumber].url);
      console.log("Do something");
  }
  return (
    <main>
      <form className="form">
        <input type="text" className="form--input" placeholder="Top image"/>
        <input type="text" className="form--input" placeholder="Bottom image"/>
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image
        </button>
        {/* <p>{memeImage}</p> */}
        <img src={memeImage} alt=''/>
      </form>
    </main>
  );
};

export default Meme;
