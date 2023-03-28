import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SubmitButton from "../../components/form/SubmitButton";
import TextField from "../../components/form/TexTField";
import { Target } from "../../utils/type";
import { DefaultService as OpenApi } from "../../services";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handelEmail = useCallback(({ target: { value } }: Target) => {
    setEmail(value);
  }, []);
  const handelPassword = useCallback(({ target: { value } }: Target) => {
    setPassword(value);
  }, []);
  const handelEmailError = (error: string): void => {
    setEmailError(error);
  };
  const handelPasswordError = (error: string): void => {
    setPasswordError(error);
  };

  const verifyEmail = () => {
    if (!email) {
      handelEmailError("This field can not be empty!");
      return false;
    }
    const match = email.match(
      new RegExp(
        /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm
      )
    );
    if (!match) handelEmailError("Please enter a valid email!");
    else if (emailError) handelEmailError("");

    return match;
  };

  const verifyPassword = () => {
    if (!password) {
      handelPasswordError("This field can not be empty!");
      return false;
    }
    const match = password.match(
      new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
    );
    if (!match) handelPasswordError("Please enter a valid password!");
    else if (passwordError) handelPasswordError("");

    return match;
  };

  const login = async (event: Event) => {
    event.preventDefault();

    if (verifyEmail() && verifyPassword()) {
      try {
        const user = await OpenApi.login({ requestBody: { email, password } });
        localStorage.setItem("accessToken", user.accessToken);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-yellow-200">
      <div className="main h-full flex items-center justify-center">
        <div className="card bg-white p-8 rounded-lg shadow w-4/5 lg:w-2/3 lg:w-1/2 xl:w-1/3">
          <div className="text-center">
            <h1 className="font-bold text-xl">Admin Login</h1>
            <p className="text-gray-bold font-600 p-6">
              Hey, enter your details to get sign in to your account
            </p>
          </div>
          <div className="mb-6">
            <TextField
              inputType="email"
              placeholder="Enter email"
              value={email}
              handelChange={handelEmail}
              error={emailError}
            />
          </div>
          <div className="mb-6">
            <TextField
              inputType="password"
              placeholder="Enter password"
              value={password}
              handelChange={handelPassword}
              error={passwordError}
            />
          </div>

          <Link to="" className="font-600 hover:text-yellow-500 text-sm">
            Have a trouble in Sin In?
          </Link>

          <div className="mb-6 mt-6">
            <SubmitButton title="Sign in" onPress={login} />
          </div>
          <h2 className="text-gray-500 text-sm text-center">
            Don't you have an account?{" "}
            <Link to="sign-up" className="text-black">
              Request Now!
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
