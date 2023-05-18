import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import apiClient from "../services/apiClient";
const schema = z.object({
  email: z
    .string()
    .min(5, { message: "Minimum 5 characters required" })
    .email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be 8 character long" }),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    apiClient.get("");
  };
  return (
    <div className="container d-flex justify-content-center ">
      <form action="" id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="form__input"
          />
          {errors.email && (
            <p className="text-danger"> {errors.email.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="form__input"
          />
          {errors.password && (
            <p className="text-danger"> {errors.password.message}</p>
          )}
        </div>

        <button className="btn btn_primary mt-3">Login</button>
      </form>
    </div>
  );
};

export default Login;
