import React, { Component } from 'react';
class BookView extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        const {book} = this.props
        return ( 
            <>
                <h1>
                    {book.title}
                </h1>
                <div>
                    <span>Authors:</span>
                    {book.authors? book.authors.join('. '): 'NA'}
                </div>
                <div>
                    {book.description}
                </div>
            </>
         );
    }
}
 
export default BookView;