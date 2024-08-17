import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Login() {
  const { values, handleChange, errors, handleSubmit, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .required("Email is Required")
          .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address"),
        password: Yup.string()
          .required("password is required")
          .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "enter a valid password"
          ),
      }),
      onSubmit: submit,
    });
  const navigate = useNavigate();

  async function submit() {
    console.log("duiosahdsuaihd");

    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );

      navigate("/");
    } catch {
      console.log("dsauiodhasudihasiud");
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
