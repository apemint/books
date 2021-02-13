import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Saved from "../components/Saved";
import TitleSaved from "../components/Titlesaved";


function SavedPage() {

  const [savedBooks, setSavedBooks] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getSaved()
      .then(res =>
        setSavedBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }


  return (
    <div>
      <TitleSaved />
      {!savedBooks ? "" : (
        <div>
          {savedBooks.map(book => {
            return (
              <div>
                <div className="card">
                  <Saved
                    key={book.id}
                    authors={book.authors}
                    description={book.description}
                    image={book.image}
                    link={book.link}
                    title={book.title}
                  />
                  <div className="rowtwo">
                  <button
                    className="delbtn btn btn-dark ml-1"
                    onClick={() => { deleteBook(book._id) }}>
                    Delete</button>
                    <a target="_blank" href={book.link}>
                  <button
                    className="viewbtnsave btn btn-dark ml-1"
                    to={book.link}
                  >View</button>
                  </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  )
}
export default SavedPage;