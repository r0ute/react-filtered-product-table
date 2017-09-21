import React, {Component} from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
    constructor() {
        super();
        this.state = {
            filterText: 'Football',
            inStockOnly: true
        };
    }

    render() {
        return (
            <div className="FilterableProductTable">
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
                <ProductTable
                    products={this.props.products.filter((product) => {
                        return product.name.indexOf(this.state.filterText) !== -1 && (!this.state.inStockOnly || product.stocked);
                    })}
                />
            </div>
        );
    }
}
