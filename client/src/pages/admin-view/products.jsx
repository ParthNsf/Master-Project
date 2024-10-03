import ProductImageUpload from "@/components/admin-view/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader, SheetTitle, Sheet } from "@/components/ui/sheet"; // Ensure this comes from your UI components
import { addProductFormElements } from "@/config";
import React, { Fragment, useState } from "react";


const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
};

function Adminproducts(props) {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);

  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false)

  function onSubmit() {
    // Your form submission logic here
  }

  console.log(formData, "formdata");

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>Add New Product</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
      {/* Ensure you use the correct Sheet/Dialog component */}
      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={setOpenCreateProductsDialog} // Correctly handle state update
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
          <ProductImageUpload 
          imageFile={imageFile} 
          setImageFile={setImageFile} 
          uploadedImageUrl={uploadedImageUrl} 
          setUploadedImageUrl={setUploadedImageUrl}
          setImageLoadingState={setImageLoadingState}
          />
          <div className="py-6">
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText="Add"
              formControls={addProductFormElements}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default Adminproducts;
