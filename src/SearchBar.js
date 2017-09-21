import React from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
    return (
        <form className="SearchBar">
            <input
                className="SearchBar-search"
                placeholder="Search..."
                value={props.filterText}
                onChange={props.onFilterTextInput}
            />
            <input
                type="checkbox"
                checked={props.inStockOnly}
                onChange={props.onInStockInput}
            />
            Only show products in stock
        </form>
    );
}