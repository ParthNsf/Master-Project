import { registerformcontrols } from '@/config';
import { Label } from '../ui/label';
import React from 'react';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';


const types = {
   INPUT : 'input',
   SELECT : 'select' 
}

function CommanForm(props) {

    function renderinput(getcontrolitem) {
        let element = null;
        switch (getcontrolitem.componentType) {
            case 'types.':
                element = (
                    <Input
                        name={getcontrolitem.name}
                        placeholder={getcontrolitem.placeholder}
                        id={getcontrolitem.name}
                        type={getcontrolitem.type}

                    />
                );
                break;
                case 'select':
                    element = (
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder={getcontrolitem.placeholder}/>
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    getcontrolitem.options && 
                                    getcontrolitem.options.length > 0 > ?
                                    getcontrolitem.options.map(optionitem => <SelectItem></SelectItem>)
                                }
                            </SelectContent>
                        </Select>
                    );
                    break;
                    case 'textarea':
                        element = (
                            <Input
                                name={getcontrolitem.name}
                                placeholder={getcontrolitem.placeholder}
                                id={getcontrolitem.name}
                                type={getcontrolitem.type}
        
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

                    />
                )
                break;
        }

    }
    return (
        <form>
            <div className='flex flex-col gap-3'>
                {
                    registerformcontrols.map(controlItem => <div className='grid w-full gap-1.5' key={controlItem.name}>
                        <Label className='mb-1'>{controlItem.label}</Label>
                        {
                            renderinput(controlItem)
                        }
                    </div>)
                }
            </div>
        </form>
    );
}

export default CommanForm;