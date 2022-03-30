import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/Search'
import BooksContent from './components/BooksContent'
import { Route, Routes } from 'react-router-dom'
import BookProfile from './components/BookProfile'
// import BookProfileCC from './components/BookProfileCC'

class BooksApp extends React.Component {
  state = {
    searchResults:[], 
    BookShelvs: [
        {id:'currentlyReading', name:'Currently Reading' },
        {id:'wantToRead', name:'Want to Read' },
        {id:'read', name:'Read'}
    ], 
    books: []
  }
  componentDidMount = () =>{
    BooksAPI.getAll()
      .then((books)=>this.setState({books}))
  }
  
  moveTo = (book, sh) => {

    if (sh === 'none') {
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id)
      }));
    } else {
      book.shelf = sh;
      this.setState(prevState => ({
        books: [...prevState.books.filter(b => b.id !== book.id), book]
      }),this.updateShelfB(book, sh));
    }
  }
  updateShelfB = (book, sh)=>{
        //Update the Backend
        BooksAPI.update(book, sh)
  }

  search = (searchTerm) =>{
    // console.log(searchTerm)
    if (searchTerm.length > 0) {
      BooksAPI.search(searchTerm)
        .then(searchResults =>{
          // console.log(`searchResults(${searchResults.length})`, searchResults)
          if(searchResults.length){
            this.setState({searchResults})          
          } else {
            this.setState({searchResults:[]})
          }
            return searchResults
        })
    }
  }

  resetSearch = () => {
    this.setState({ searchResults: [] });
  };


  render() {
    const {books, searchResults, BookShelvs} = this.state
      return (

            <>
              <Routes>
                    <Route path='/search' element={
                      <Search 
                        onSearch={this.search}
                        onResetSearch={this.resetSearch}
                        onMove={this.moveTo} 
                        searchResults={searchResults} 
                        shelves={BookShelvs}
                        books={books}
                        />}
                      />
                      
                    <Route exact path='/'  element={
                      <BooksContent 
                          BookShelvs={BookShelvs}
                          books={books}
                          searchResults={searchResults}
                          onMove={this.moveTo} />} />

                    <Route  path='/books/:id'  element={
                      <BookProfile 
                       />

                    } /> 
                    {/* <Route  path='/books/:id'  element={
                      <BookProfileCC 
                        
                        />} 
                    /> */}
       
       
       
       
       

              </Routes>
            </>
    )
  }
}

export default BooksApp
