import styles from "./Statistics.module.scss";

interface StatisticsProps {
  info: string;
  title: string;
}

function Statistics({ info, title }: StatisticsProps) {
  return (
    <div className={styles.card} >
      <h2>{info}</h2>
      <span>{title}</span>
    </div>
  );
}

export default Statistics;
