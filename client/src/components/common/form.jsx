import { registerformcontrols } from "@/config";
import { Label } from "../ui/label";
import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const types = {
  INPUT: "input",
  SELECT: "select",
};

function CommanForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) {
  function renderinput(getcontrolitem) {
    let element = null;
    const value = formData[getcontrolitem.name] || "";

    switch (getcontrolitem.componentType) {
      case "input":
        element = (
          <Input
            name={getcontrolitem.name}
            placeholder={getcontrolitem.placeholder}
            id={getcontrolitem.name}
            type={getcontrolitem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getcontrolitem.name]: event.target.value,
              })
            }
          />
        );
        break;
      case "select":
        element = (
          <Select onValueChange={(value) => setFormData({
            ...formData,
            [getcontrolitem.name]: value
          })} value={value}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getcontrolitem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getcontrolitem.options && getcontrolitem.options.length > 0
                ? getcontrolitem.options.map((optionitem) => (
                    <SelectItem key={optionitem.id} value={optionitem.id}>
                      {optionitem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Textarea
            name={getcontrolitem.name}
            placeholder={getcontrolitem.placeholder}
            id={getcontrolitem.name}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getcontrolitem.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        element = (
          <Input
            name={getcontrolitem.name}
            placeholder={getcontrolitem.placeholder}
            id={getcontrolitem.name}
            type={getcontrolitem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getcontrolitem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {registerformcontrols.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {renderinput(controlItem)}
          </div>
        ))}
      </div>
      <Button type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommanForm;
