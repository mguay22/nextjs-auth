import { useRouter } from "next/router";
import { useLogin } from "../hooks/useLogin";
import styles from "../styles/Auth.module.css";

const Login = () => {
  const { login } = useLogin();
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(data);
    await login(data);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
