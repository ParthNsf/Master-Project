import CommanForm from "@/components/common/form";
import { loginformcontrols } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

function AuthLogin() {

    const initialState = {

        email: '',
        password: ''
    }

    const [formData, setFormData] = useState(initialState)

    function onSubmit(){

    }


    console.log(formData);
    
    return (
    <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Sign In To Your Account
            </h1>
            <p className="mt-2">
                Don't have an Account  <Link className="font-medium text-primary hover:underline ml-1" to='/auth/register'>
                Register
                </Link>
            </p>
        </div>
        <CommanForm 
            formControls={loginformcontrols }
            buttonText={'Create Account'}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
        />
    </div>  );
}

export default AuthLogin;