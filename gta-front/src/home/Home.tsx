import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Home.module.css";
import { IHome } from "./ihome";
import { useState } from "react";
// const isSuccess = false;

function Home() {
  const { register, handleSubmit, reset } = useForm<IHome>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const onSubmit: SubmitHandler<IHome> = (data) => {
    setIsLoading(true);
    fetch("http://localhost:5000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json();
        setIsSuccess(true);
        reset();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isSuccess ? (
          <div className={styles.success}>
            The form has been sent successful
          </div>
        ) : (
          <>
            <h1>GTA VI</h1>
            <input
              type="email"
              placeholder="Input Email: "
              {...register("email")}
            />
            <input
              type="name"
              placeholder="Input your name: "
              {...register("name")}
            />
            <button disabled={isLoading}>Want GTA!</button>
          </>
        )}
      </form>
    </div>
  );
}

export default Home;
