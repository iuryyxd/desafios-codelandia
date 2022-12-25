import styles from "./Button.module.scss";

interface ButtonProps {
  btnText: string;
  style?: string;
}

function Button({ btnText, style }: ButtonProps) {
  return (
    <div>
      <button className={styles.btn} style={{marginTop: `${style}`}}>{btnText}</button>
    </div>
  );
}

export default Button;
