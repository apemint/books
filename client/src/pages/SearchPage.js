import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link, Redirect } from "react-router-dom";
import TitleSearch from "../components/TitleSearch";
// import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";


function SearchPage() {

  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

//will allow the user to change the input value
  function handleInputChange(event) {
    const { value } = event.target;
    setBookSearch(value);
  };

  //will send the user's submitted input to the api
  function handleFormSubmit(event) {
    event.preventDefault();
    API.getBook(bookSearch)
      .then(res => setBooks(res.data))
      //.then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  //will send the selected book to the api post request
  function save(books) {
    console.log(books)
    API.saveBook({
      title: books.volumeInfo.title,
      authors: books.volumeInfo.authors,
      description: books.volumeInfo.description,
      image: books.volumeInfo.imageLinks.thumbnail,
      link: books.volumeInfo.previewLink
    })
      .then(res => console.log("saved"))
      .catch(err => console.log(err))
  }


  return (
    <div>
      <TitleSearch />
      <form id="searchBook">
        <input className="form-control form-control-lg" type="text" placeholder="Search for a book!" onChange={handleInputChange} value={bookSearch} />
      </form>
      <button type="submit" className="btn btn-dark" onClick={handleFormSubmit}>Search </button>

      {!books.items ? "" : (
        <div>
          {books.items.map(book => {
            return (
              <div>
                <div className="row">

                </div>
                <div className="card">
                  <SearchResults
                    key={book.id}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    link={book.volumeInfo.previewLink}
                    title={book.volumeInfo.title}
                  />
                  <div className="rowone">
                  <button
                    className="savebtn btn btn-dark ml-1"
                    value={book}
                    onClick={() => { save(book) }}
                  >Save</button>
                  <a href={book.volumeInfo.previewLink}>
                    <button
                      className="viewbtn btn btn-dark ml-1"
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
export default SearchPage;