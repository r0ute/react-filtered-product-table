import React, {Component} from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
    render() {
        return (
            <div className="FilterableProductTable">
                <SearchBar/>
                <ProductTable products={getProductsMap(this.props.products)}/>
            </div>
        );
    }
}

function getProductsMap(products) {
    return products.reduce((map, product) => {
        if (map.has(product.category)) {
            map.get(product.category).push(product);
        } else {
            map.set(product.category, [product])
        }

        return map;
    }, new Map());
}