import { filterOptions } from "@/config";
import { Label } from "@radix-ui/react-label";
import { Checkbox } from "../../../src/components/ui/checkbox";

import React, { Fragment } from "react";
import { Separator } from "@/components/ui/separator";

function ProductFilter(props) {
  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-extrabold">Filters</h2>
      </div>
      <div className="p-4 space-y-4">
        {Object.keys(filterOptions).map((keyItem) => (
          <Fragment key={keyItem}>
            <div>
              <h3 className="text-base font-bold">{keyItem}</h3>
              <div className="grid gap-2 mt-2">
                {filterOptions[keyItem].map((option) => (
                  <Label
                    key={option.label}
                    className="flex items-center font-medium gap-2"  // Ensures checkbox and label are aligned
                  >
                    <Checkbox className="flex-shrink-0" /> {/* Prevents checkbox from shrinking */}
                    {option.label}
                  </Label>
                ))}
              </div>
            </div>
            <Separator />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;
