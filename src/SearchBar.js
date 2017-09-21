import React from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
    return (
        <form className="SearchBar">
            <input className="SearchBar-search" placeholder="Search..."/>
            <input type="checkbox"/>
            Only show products in stock
        </form>
    );
}