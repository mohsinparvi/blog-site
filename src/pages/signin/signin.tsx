import axios from "axios";
import { useState } from "react";

interface registerValues {
  email: string;
  password: string;
}
const Signin = () => {
  const initialValue: registerValues = {
    email: "",
    password: "",
  };
  const [input, setInput] = useState(initialValue);
  const [error, setError] = useState(initialValue);

  const validateValues = (e: any) => {
    let errors = {} as any;
    if (!input.email) errors.email = "Email is required";
    // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email))
    //   errors.email = "Invalid email address is required";
    if (!input.password) errors.password = "Password is required";

    return errors;
  };
  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    setError(validateValues);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .post("http://localhost:3000/api/v1/users/login", input, config)
      .then((res) => {
        console.log("Register res", res);
      })
      .catch((err) => {
        console.log("Register form err:", err);
      });
    console.log("input", input);
  };
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[85vh] lg:py-0">
          <div className="w-full bg-gray-500 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleFormSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required={false}
                    value={input.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                  {error.email && (
                    <p className="text-red text-sm my-2 font-normal">
                      {error.email}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {error.password && (
                    <p className="text-red text-sm my-2 font-normal">
                      {error.password}
                    </p>
                  )}
                </div>

                {/* <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
                <button
                  type="submit"
                  className="bg-primary  font-medium rounded-lg text-sm px-5 py-2.5 text-center  text-white w-full"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
