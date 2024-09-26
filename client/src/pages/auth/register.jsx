import CommanForm from "@/components/common/form";
import { registerformcontrols } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

function AuthRegister() {

    const initialState = {

        userName: '',
        email: '',
        password: ''
    }

    const [formData, setFormData] = useState(initialState)

    function onSubmit(){

    }
    return (
    <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Create New Account
            </h1>
            <p className="mt-2">
                Already Have An Account <Link className="font-medium text-primary hover:underline ml-1" to='/auth/login'>
                Login
                </Link>
            </p>
        </div>
        <CommanForm 
            formControls={registerformcontrols}
            buttonText={'Create Account'}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
        />
    </div>  );
}

export default AuthRegister;