import styles from "./App.module.scss";
import Button from "./components/Button";
import { FiSearch } from "react-icons/fi";
import Statistics from "./components/Statistics";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import artista1 from "./assets/artista1.png";
import artista2 from "./assets/artista2.png";
import artista3 from "./assets/artista3.png";
import right_img from "./assets/right_img.png";
import ArtistCard from "./components/ArtistCard";

function App() {
  return (
    <>
      <header className={styles.header}>
        <h1>Art.</h1>
        <div className={styles.header__main}>
          <div className={styles.header__form}>
            <input type="search" placeholder="Buscar" />
            <FiSearch size={13} color="#737373" />
          </div>
          <Button btnText="entrar" />
        </div>
      </header>

      <section className={styles.section__explore}>
        <div className={styles.explore__left}>
          <h1 className={styles.left__title}>
            Descubra novos artistas e suas obras
          </h1>
          <span className={styles.left__subtitle}>
            Uma nova geração de jovens artistas surgem
          </span>
          <Button btnText="explorar" style={`2rem`} />

          <div className={styles.explore__statistics}>
            <Statistics info="+2 mil" title="Artistas" />
            <Statistics info="+7 mil" title="Vendas" />
            <Statistics info="+16 mil" title="Avaliações" />
          </div>

          <div className={styles.explore__imgs}>
            <img src={img1} alt="foto de uma mulher pintando um quadro" />
            <img src={img2} alt="retrado de uma mulher" />
            <img src={img3} alt="retrato" />
          </div>
        </div>

        <div className={styles.explore__right}>
          <img src={right_img} alt="mulher pintando em uma porta" />
          <div className={styles.explore__more}>
            <h1>Confira as últimas coleções</h1>
            <Button btnText="ver mais" />
          </div>
        </div>
      </section>

      <section className={styles.section__artists}>
        <h1 className={styles.artists__title}>Artistas</h1>

        <div className={styles.artists__cards}>
          <ArtistCard
            name="Sabine Lowe"
            job="Designer e Fotógrafa"
            imgBg={artista1}
          />
          <ArtistCard
            name="Eleanor Pena"
            job="Escritora e Designer"
            imgBg={artista2}
          />
          <ArtistCard
            name="Leslie Alexander"
            job="Diretora de arte"
            imgBg={artista3}
          />
        </div>
      </section>

      <footer className={styles.footer}>
        <h1 className={styles.footer__title}>Art.</h1>
        <nav className={styles.footer__menu}>
          <ul>
            <li><a href="#">INICIO</a></li>
            <li><a href="#">BUSCAR</a></li>
            <li><a href="#">EXPLORAR</a></li>
            <li><a href="#">SOBRE NÓS</a></li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default App;
