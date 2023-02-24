import React, { useState, useEffect } from "react";
import "./App.css";

// FIREBASE
import { db } from "./firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

import CardAlbum from "./components/CardAlbum/CardAlbum";

const App = () => {
  const [albumsData, setAlbumsData] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      const q = query(
        collection(db, "music")
        // where("genre", "==", "synthpop")
      );
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      setAlbumsData(docs);
    };
    getAlbums();
  }, []);

  return (
    <div className="App">
      <h1> Firebase </h1>
      {albumsData.map((album) => {
        return (
          <div key={album.id}>
            <CardAlbum dataAlbum={album} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
