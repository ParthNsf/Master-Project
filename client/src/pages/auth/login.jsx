import CommanForm from "@/components/common/form";
import { loginformcontrols } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { Link } from "react-router-dom";

function AuthLogin() {

    const initialState = {

        email: '',
        password: ''
    }

    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch(); // Correct typo here

    function onSubmit(event){
        event.preventDefault();

        dispatch(loginUser(formData)).then((data) => {
            console.log(data);
            
        //   if (data?.payload?.success) {
        //     toast({
        //       title: data?.payload?.message,
        //     });
        //   } else {
        //     toast({
        //       title: data?.payload?.message,
        //       variant: "destructive",
        //     });
        //   }
        });
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
            buttonText={'Sign In'}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
        />
    </div>  );
}

export default AuthLogin;