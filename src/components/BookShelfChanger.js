import propTypes from 'prop-types';
import React, {Component} from 'react';
class BookShelfChager extends Component {
    state = { 
        shelfId: this.props.shelfId //only shelf ID
    } 
    onChangeHandler = (e) => {
        const shelfId = e.target.value
        this.setState(()=>({shelfId}))
        this.props.onMove(this.props.book, shelfId)
    }
    static propTypes = {
        book: propTypes.object.isRequired, 
        shelves: propTypes.array.isRequired, 
        onMove: propTypes.func.isRequired, 
        shelfId: propTypes.string.isRequired
    }
    render() { 
        const {shelves, shelfId} = this.props

        return (                
        
            <select value={shelfId} onChange={this.onChangeHandler}> 
                <option value="move">Move to...</option>
                {
                    shelves.map(
                        (sh )=>(
                            <option key={sh.id} value={sh.id}>
                                {sh.name}
                            </option>
                        )
                    )
                }
                {
                    this.state.shelfId === undefined && <option value="none">None</option>
                }

                </select>);
    }
}
export default BookShelfChager

