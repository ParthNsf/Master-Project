import { registerformcontrols } from '@/config';
import { Label } from '@radix-ui/react-label';
import React from 'react';

function CommanForm(props) {

    function renderinput(getcontrolitem){
        let element = null;
        switch(getcontrolitem.componentType){  
            case 'input':
                element = (
                    <Input>
                    
                    </Input>
                )
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
                </div>  )
            }
        </div>
       </form>
    );
}

export default CommanForm;