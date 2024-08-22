import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { setUserToken } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLodaing, setIsLodaing] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is Required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address"),
    password: Yup.string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "enter a valid password"
      ),
  });

  const { values, handleChange, errors, handleSubmit, touched, handleBlur } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

  async function onSubmit() {
    setIsLodaing(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );

      setUserToken(data.token);
      localStorage.setItem("token", data.token);
      setIsLodaing(false);
      setSuccessMessage(data.message);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setErrorMessage(err.response.data.message);
      setIsLodaing(false);
    }
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="my-5">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control my-3"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control my-3"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && (
              <p className="text-danger">{errors.password}</p>
            )}
          </div>
          <div className="">
            <p className="my-2">
              if You don't have an account{" "}
              <Link className="text-primary" to="/register">
                Register
              </Link>
            </p>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLodaing}
            >
              Login
              {isLodaing && <i className="fa fa-spinner fa-spin"></i>}
            </button>
            {errorMessage && (
              <p className="text-center text-danger">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-center text-success">{successMessage}</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
