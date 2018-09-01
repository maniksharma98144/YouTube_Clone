import React, { Component } from 'react';
import { Input, InputGroup } from 'reactstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <InputGroup style={{ padding: 20 }}>
                <Input className="search-bar"
                    value={this.state.term}
                    placeholder="Search"
                    onChange={(event) => { this.onInputChange(event.target.value) }} />
            </InputGroup>
        );
    };
}

export default SearchBar;