import React from 'react';
import ProductFilter from './filter';

function ShoppingListing(props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6">
            <ProductFilter />
        </div>
    );
}

export default ShoppingListing;