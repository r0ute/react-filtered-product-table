import React from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
    return (
        <form className="SearchBar">
            <input className="SearchBar-search" placeholder="Search..." value={props.filterText}/>
            <input type="checkbox" checked={props.inStockOnly}/>
            Only show products in stock
        </form>
    );
}