import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Register() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLodaing, setIsLodaing] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("name is required")
      .min(3, "Name must be at least three characters")
      .max(20, "Name must be maximium 20 characters"),
    email: Yup.string()
      .required("Email is Required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address"),
    password: Yup.string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "enter a valid password"
      ),
    rePassword: Yup.string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "enter a valid password"
      ),
    phone: Yup.string().required("Phone is required"),
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
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );

      setSuccessMessage(data.message);
      setIsLodaing(false);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      setIsLodaing(false);

      setErrorMessage(err.response.data.message);
    }
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="my-5">
          <div>
            <label htmlFor="name">Fullname:</label>
            <input
              type="text"
              className="form-control my-3"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && <p className="text-danger">{errors.name}</p>}
          </div>
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
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              className="form-control my-3"
              id="phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.phone && <p className="text-danger">{errors.phone}</p>}
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
          <div>
            <label htmlFor="rePassword">rePassword</label>
            <input
              type="password"
              className="form-control my-3"
              id="rePassword"
              name="rePassword"
              value={values.rePassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.rePassword && (
              <p className="text-danger">{errors.rePassword}</p>
            )}
          </div>
          <div className="">
            <p className="my-2">
              if You have an account{" "}
              <Link className="text-primary" to="/login">
                login
              </Link>
            </p>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLodaing}
            >
              Register
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
