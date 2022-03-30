import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";

import * as booksApi from '../BooksAPI';

const BookProfile = () => {
    const {id} = useParams()
    const [book, setBook] = useState({})
    const [count, setCount] = useState(0)
    

useEffect(()=>{
    
        booksApi.get(id)
        .then(b=>{
            setBook(b)
            //setCount(count+1)
        })
}, [])
    // console.log('============', count)
    console.log('book', book)
    console.log('prototype', book.prototype)
    //Object.prototype.__proto__





    return ( 
        <>
        
            <div className='g'>

                
                <Link className="close-search" to='/' >
                    back
                </Link>
                <div className="grid">
                    <h1>{book.title}</h1>
                    <div className="g-col-4">
                        </div>
                    <div className="g-col-4">
                        <img src={book.imageLinks? book.imageLinks.thumbnail: '../icons/placeholder.svg'} /> </div>
                    <div className="g-col-4">{book.description}</div>
                </div>

            </div>

        
        </>
     );
}
 
export default BookProfile;