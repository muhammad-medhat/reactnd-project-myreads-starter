import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/Search'
import BooksContent from './components/BooksContent'
import { Route, Routes } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount = () =>{
    BooksAPI.getAll()
      .then((books)=>this.setState({books}))
  }
  
  moveto = (bid, sh) => {
    console.log(`moving book ${bid} to ${sh}`)
    console.log(this.state.books)

    const books = this.state.books.map( b=> {
      if(b.id === bid){
        b.shelf = sh
      }
      return b
    })
    this.setState({books})
    //Call the Backend

  }

  render() {
    return (

            <>
              <Routes>
                    <Route path='/search' element={<Search /> } />
                      
                    <Route exact path='/'  element={
                      <BooksContent 
                          books={this.state.books}
                          onMove={this.moveto} />} />
              </Routes>
            </>
    )
  }
}

export default BooksApp
