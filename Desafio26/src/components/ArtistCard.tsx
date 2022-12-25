import styles from "./ArtistCard.module.scss";

interface ArtistCardProps {
  name: string;
  job: string;
  imgBg: string;
}

function ArtistCard({ name, job, imgBg }: ArtistCardProps) {
  return (
    <div className={styles.card} style={{ background: `url(${imgBg}) center` }}>
      <p>{name}</p>
      <span>{job}</span>
    </div>
  );
}

export default ArtistCard;
