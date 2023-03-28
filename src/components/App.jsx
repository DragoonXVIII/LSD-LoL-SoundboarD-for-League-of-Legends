import React, { useEffect, useState } from "react";
import "../styles/App.css";

function App() {
  // Prevents right clicking from opening contect menu.
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  // Fetches data from local server.
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await fetch("http://127.0.0.1:2999/", {
      method: "GET",
    })
      .then((response) => response)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("error");
      });
  };
  // Creates infinite loop which calls above function every one second.
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>huj xd</div>;
}

export default App;
