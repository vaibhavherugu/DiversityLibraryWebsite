import React, { useEffect, useState } from "react";
import "./styles/Books.css";
import axios from "axios";

function BookScreen(props) {
  /*  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey] = useState("AIzaSyCGHHaUn864OEMZVc-ASLxl4oLH9ETrvpQ");

  function handleChange(event) {
    const book = event.target.value;

    setBook(book);
  }
  useEffect(() => {
    console.log(props);
    if (localStorage.getItem("loggedIn") !== "true") {
      alert("Not logged in!");
      props.history.push("/");
    }
  });
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=17"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  } */

  return (
    <div className="container">
      <h2>Input Book Here:</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="bookInput"
            placeholder="Enter book name"
            autoComplete="off"
          />
        </div>

        <button type="submit" className="btn btn-danger">
          Search
        </button>
        <button
          type="submit"
          className="btn btn-danger"
          onClick={() => {
            localStorage.setItem("loggedIn", false);
            props.history.push("/");
          }}
        >
          Logout
        </button>
      </form>
    </div>
  );
}

export default BookScreen;
