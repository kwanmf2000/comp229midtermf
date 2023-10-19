import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import "./signupuser.css";

function LoginForm() {
    const {
      register,
      handleSubmit,watch,
      formState: { errors },
    } = useForm();

    const password = useRef({});
    password.current = watch("password", "");
  
    const onSubmit = (data) => {
      console.log(data);
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="hook">
        <label className="hook__text">First Name</label>
        <input
          type="text"
          className="hook__input"
          {...register("firstName", { required: true})}
        />
        {errors.firstName && (
          <p className="hook__error">First Nmae is required and must be filled</p>
        )}

        <label className="hook__text">Last Name</label>
        <input
          type="text"
          className="hook__input"
          {...register("lastName", { required: true})}
        />
        {errors.lastName && (
          <p className="hook__error">Last Nmae is required and must be filled</p>
        )}

        <label className="hook__text">User Name</label>
        <input
          type="text"
          className="hook__input"
          {...register("userName", { required: true})}
        />
        {errors.userName && (
          <p className="hook__error">User Nmae is required and must be filled</p>
        )}

        <label className="hook__text">Email</label>
        <input
          type="email"
          className="hook__input"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <p className="hook__error">Email is required and must be valid</p>
        )}
  
        <label className="hook__text">Password</label>
        <input
          type="password"
          className="hook__input"
          {...register("password", { required: true })}
        />
        {errors.password && <p className="hook__error">Password is required</p>}

        <label className="hook__text">Repeat Password</label>
        <input
          type="password"
          className="hook__input"
          {...register("password2", { required: true, validate: value =>
            value === password.current || "The passwords do not match"})}
        />
        {errors.password2 && <p className="hook__error">Password not match</p>}
  
        <button className="hook__button" type="submit">
          Submit
        </button>
      </form>
    );
  }
  
  export default LoginForm;
  
