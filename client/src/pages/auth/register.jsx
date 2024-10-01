import CommanForm from "@/components/common/form";
import { registerformcontrols } from "@/config";
import { toast } from "@/hooks/use-toast";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function AuthRegister() {
    const initialState = {
        userName: '',
        email: '',
        password: ''
    }

    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch(); // Correct typo here
    const navigate = useNavigate();

    function onSubmit(event) {
        event.preventDefault();

        dispatch(registerUser(formData)).then((data) => {
            console.log(data);

            if (data?.payload?.success) {
                toast({
                  title: data?.payload?.message,
                });
                navigate("/auth/login");
              } else {
                toast({
                  title: data?.payload?.message,
                  variant: "destructive",
                });
              }
        });
    }

    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    Create New Account
                </h1>
                <p className="mt-2">
                    Already Have An Account? 
                    <Link className="font-medium text-primary hover:underline ml-1" to='/auth/login'>
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
        </div>
    );
}

export default AuthRegister;
