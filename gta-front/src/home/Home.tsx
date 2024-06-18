import styles from "./Home.module.css";
const isSuccess = true;
function Home() {
  return (
    <div className={styles.wrapper}>
      <form>
      {isSuccess ? (
        <div className={styles.success}>The form has been sent successful</div>
      ) : (
        <>
          <h1>GTA VI</h1>
          <input type="email" placeholder="Input Email: " />
          <input type="name" placeholder="Input your name: " />
          <button>Want GTA!</button>
          </>
          )}
        </form>
    </div>
  );
}

export default Home;
