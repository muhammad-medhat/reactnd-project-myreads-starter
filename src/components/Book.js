import React from 'react';
import ShelfChanger from './BookShelfChanger';
import propTypes
 from 'prop-types';
const Book = (props) => {
    const {book, shelves, shelf, onMove} = props

    return ( 
        <>
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ width: 128, height: 174, backgroundImage: `url('${book.imageLinks? book.imageLinks.smallThumbnail: '../icons/placeholder.svg'}')` }}>
                    </div>
                    <div className="book-shelf-changer">
                        <ShelfChanger 
                            shelves={shelves} 
                            shelfId={shelf}
                            book={book}
                            onMove={onMove}/>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{(book.authors && book.authors.join(', '))}</div>
            </div>
        </>
     );
}
Book.prototype = {
    book: propTypes.object.isRequired, 
    shelf: propTypes.string.isRequired, 
    shelves: propTypes.array.isRequired, 
    onMove: propTypes.func.isRequired
    
}
export default Book;
