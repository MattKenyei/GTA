import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Home.module.css";
import { IHome } from "./ihome";
const isSuccess = false;

function Home() {
  const {register, handleSubmit} = useForm<IHome>()
  const onSubmit : SubmitHandler<IHome> = (data) => {
    console.log(data)
  } 
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
      {isSuccess ? (
        <div className={styles.success}>The form has been sent successful</div>
      ) : (
        <>
          <h1>GTA VI</h1>
          <input type="email" placeholder="Input Email: " {...register('email')}/>
          <input type="name" placeholder="Input your name: " {...register('name')}/>
          <button>Want GTA!</button>
          </>
          )}
        </form>
    </div>
  );
}

export default Home;
