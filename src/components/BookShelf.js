import React from 'react';
import Book from './Book';


const BookShelf = (props) => {
    const {shelf, shelves,  books, onMove} = props
    return(
        <>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{shelf.name}</h2>
                                <div className="bookshelf-books">
                                <ol className="books-grid">
                                {
                                    books.map( b=>(
                                      <li key={b.id}>
                                      
                                        <Book key={b.id}
                                          book={b} 
                                          shelf={b.shelf?b.shelf: 'none'}
                                          shelves={shelves}
                                          onMove={onMove} />
                                      </li>
                                    )
                                  )
                                }
                                </ol>
                                </div>
                            </div>            
        </>
    )
}
 
export default BookShelf;
