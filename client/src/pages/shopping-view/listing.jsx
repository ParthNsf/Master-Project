import React from 'react';
import ProductFilter from './filter';
import { 
    DropdownMenu, 
    DropdownMenuRadioGroup, 
    DropdownMenuRadioItem, 
    DropdownMenuTrigger, 
    DropdownMenuContent 
} from '@/components/ui/dropdown-menu';
import { ArrowUpDownIcon } from 'lucide-react';
import { sortOptions } from '@/config';

function ShoppingListing(props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6">
            <ProductFilter />
            <div className='bg-background w-full rounded-lg shadow-sm'>
                <div className='p-4 border-b flex items-center justify-between'>
                    <h2 className='text-lg font-extrabold mr-2'>All Products</h2>
                    <div className='flex items-center gap-3'>
                        <span className='text-muted-foreground'>
                            10 Products
                        </span>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium  rounded-md shadow-md bg-white hover:bg-gray-100"
                                >
                                    <ArrowUpDownIcon className='h-4 w-4' />
                                    <span>Sort by</span>
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className='w-[200px]'>
                                <DropdownMenuRadioGroup>
                                    {
                                        sortOptions.map((sortItem, index) => (
                                            <DropdownMenuRadioItem key={index} value={sortItem.value}>
                                                {sortItem.label}
                                            </DropdownMenuRadioItem>
                                        ))
                                    }
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'></div>
            </div>
        </div>
    );
}

export default ShoppingListing;
