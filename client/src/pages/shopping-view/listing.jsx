import React, { useEffect, useState } from "react";
import ProductFilter from "./filter";
import {
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDownIcon } from "lucide-react";
import { sortOptions } from "@/config";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilteredProducts } from "@/store/shop/products-slice";
import ShoppingProductTile from "./product-tile";
import { useSearchParams } from "react-router-dom";

function createSearchParamsHelper(filterParams) {
  const queryParams = [];

  for (const [key, value] of Object.entries(filterParams)) {
    if (Array.isArray(value) && value.length > 0) {
      const paramValue = value.join(",");
      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
    }
  }

  return queryParams.join("&");
}

function ShoppingListing() {
  const dispatch = useDispatch();
  const { productList, isLoading, error } = useSelector((state) => state.shopProducts);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // Handle Sort Change
  function handleSort(value) {
    setSort(value);
  }

  // Handle Filter Change
  function handleFilter(getSectionId, getCurrentOption) {
    let updatedFilters = { ...filters };
    const selectedFilters = updatedFilters[getSectionId] || [];

    if (selectedFilters.includes(getCurrentOption)) {
      updatedFilters[getSectionId] = selectedFilters.filter((item) => item !== getCurrentOption);
    } else {
      updatedFilters[getSectionId] = [...selectedFilters, getCurrentOption];
    }

    setFilters(updatedFilters);
    sessionStorage.setItem("filters", JSON.stringify(updatedFilters));
  }

  // Fetch Products on Filter/Sort change
  useEffect(() => {
    if (filters !== null && sort !== null) {
      dispatch(fetchAllFilteredProducts({ filterParams: filters, sortParams: sort }));
    }
  }, [dispatch, filters, sort]);

  // Set Filters to URL Search Params
  useEffect(() => {
    if (Object.keys(filters).length > 0) {
      const queryString = createSearchParamsHelper(filters);
      setSearchParams(new URLSearchParams(queryString));
    }
  }, [filters, setSearchParams]);

  // Load initial filters from sessionStorage
  useEffect(() => {
    const savedFilters = JSON.parse(sessionStorage.getItem("filters")) || {};
    setFilters(savedFilters);
    setSort("price-lowtohigh"); // Default sort option
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6">
      <ProductFilter filters={filters} handleFilter={handleFilter} />
      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-extrabold mr-2">All Products</h2>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">
              {productList?.length || 0} Products
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md shadow-md bg-white hover:bg-gray-100">
                  <ArrowUpDownIcon className="h-4 w-4" />
                  <span>Sort by</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                  {sortOptions.map((sortItem, index) => (
                    <DropdownMenuRadioItem key={index} value={sortItem.id}>
                      {sortItem.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {isLoading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p>{error}</p>
          ) : productList.length > 0 ? (
            productList.map((productItem) => (
              <ShoppingProductTile key={productItem.id} product={productItem} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingListing;
   