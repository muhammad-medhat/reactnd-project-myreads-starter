import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'

const BooksContent = (props) => {

        const{books, onMove, BookShelvs} = props
        return (
            
                <div className="list-books">
                    
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>

                        <div className="list-books-content">
                            <div>
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
                        </div>  

                        <div div className="open-search">
                            <Link to='/search'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Link>
                        </div>

                </div>                     
            
        );

}
 
export default BooksContent;