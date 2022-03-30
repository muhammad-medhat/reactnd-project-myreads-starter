import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class BookProfileCC extends Component {
    state = {  } 
    render() { 
        const params = new URLSearchParams(window.location.search);
        
        console.log(params)


        return (
            <>
                <h2>BookProfileCC</h2>
                <Link className="close-search" to='/' >
                    back
                </Link>
                <div className="grid">
                    <div className="g-col-4">.g-col-4</div>
                    <div className="g-col-4">.g-col-4</div>
                    <div className="g-col-4">.g-col-4</div>
                </div>
            </>
        );
    }
}
 
export default BookProfileCC;