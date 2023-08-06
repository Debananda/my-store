"use client";
import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  userName: Yup.string()
    .min(6, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().length(10, "Invalid phone"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .min(6, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
});

interface UserProps {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

function NewUser() {
  return (
    <div className="flex justify-center">
      <div className="card sm:w-full  w-3/4 lg:w-2/4 my-5 bg-base-100 shadow-xl">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(
            values: UserProps,
            { setSubmitting }: FormikHelpers<UserProps>
          ) => {
            axios.post("/api/user", values).then(() => {
              setSubmitting(false);
            });
          }}
        >
          {({ errors, touched }) => (
            <Form className="card-body">
              <h2 className="card-title">New User</h2>
              <div className="grid  grid-cols-1 sm:grid-cols-2">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <Field
                    name="firstName"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.firstName && touched.firstName ? (
                    <label className="label">
                      <span className="label-text-alt text-red-500">
                        {errors.firstName}
                      </span>
                    </label>
                  ) : null}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <Field
                    name="lastName"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.lastName && touched.lastName ? (
                    <label className="label">
                      <span className="label-text-alt text-red-500">
                        {errors.lastName}
                      </span>
                    </label>
                  ) : null}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">UserName</span>
                  </label>
                  <Field
                    name="userName"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.userName && touched.userName ? (
                    <label className="label">
                      <span className="label-text-alt text-red-500">
                        {errors.userName}
                      </span>
                    </label>
                  ) : null}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.email && touched.email ? (
                    <label className="label">
                      <span className="label-text-alt text-red-500">
                        {errors.email}
                      </span>
                    </label>
                  ) : null}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <Field
                    name="phone"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.phone && touched.phone ? (
                    <label className="label">
                      <span className="label-text-alt text-red-500">
                        {errors.phone}
                      </span>
                    </label>
                  ) : null}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered  w-full max-w-xs"
                  />
                  {errors.password && touched.password ? (
                    <label className="label">
                      <span className="label-text-alt text-red-500 ">
                        {errors.password}
                      </span>
                    </label>
                  ) : null}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <label className="label">
                      <span className="label-text-alt text-red-500">
                        {errors.confirmPassword}
                      </span>
                    </label>
                  ) : null}
                </div>
              </div>
              <div className="card-actions justify-center">
                <button className="btn btn-primary btn-block">Signup</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default NewUser;
