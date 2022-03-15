import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class SearchBook extends Component {

        state = { 
        searchTerm: '', 
        searchResults:[]
    } 

    changeHandler = (e) =>{
        const val = e.target.value

        this.setState({searchTerm: val}, () => {
            this.props.onSearch(val);
        })
        if(val ===''){
            this.props.onResetSearch()
        }           
        


    }
    



    getShelf = shId => { 
        return this.props.shelves.reduce(sh=>sh.id === shId)
    }
    preperContent = ()=>{
        {
            const {searchResults, shelves, onMove} = this.props
            // console.log('prepareContent')

            // console.log(this.props)
            if(searchResults.length) {        
                return(
                    <ol className="books-grid">

                        {
                            searchResults.map( b=>(
                                <li key={b.id}>
                                    <Book 
                                        book={b}
                                        // shelf={this.getShelf(b.shelf)}
                                        shelf={b.shelf? b.shelf: 'none'}
                                        shelves={shelves} 
                                        onMove={onMove}/>
                                </li>
                            ))     
                        
                        }   
                    </ol>                    
                )


            } else {
                return <h2>No Result</h2>
            }
        }

    }
    render() { 

        return (
            <>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to='/' onClick={this.props.onResetSearch} >
                            back
                        </Link>
                        <div className="search-books-input-wrapper">
                        
            
                            {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                            */}
                            <input type="text" 
                                placeholder="Search by title or author"
                                onChange={this.changeHandler}
                                value={this.state.searchTerm}
                                autoFocus
                                />

                        </div>
                    </div>
                    <div className="search-books-results">
                        {this.preperContent()}
                    </div>
                </div>
            </>
        );
    }
}
 
export default SearchBook;