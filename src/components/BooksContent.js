import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'

import propTypes from 'prop-types';


const BooksContent = (props) => {

        const{books, onMove, BookShelvs} = props
        return (
            <>
                <div className="list-books">
                    
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>

                        <div className="list-books-content">
                            {
                                    BookShelvs.map(sh=> { 
                                        return (
                                            <BookShelf 
                                                key={sh.id} 
                                                books={books.filter(b=>b.shelf === sh.id)}
                                                shelves={BookShelvs}
                                                shelf={sh} 
                                                onMove={onMove}/>
                                        )
                                
                                })
                            }
                        </div>  

                        <div className="open-search">
                            <Link to='/search'>
                            </Link>
                        </div>

                </div>                  
            </>
            
               
            
        );

}
BooksContent.prototype = {
    books: propTypes.array.isRequired, 
    BookShelves: propTypes.array.isRequired, 
    searchResults: propTypes.array.isRequired, 
    onMove: propTypes.func.isRequired
    
}
export default BooksContent;