import styles from './Logo.module.scss';

export default function Logo() {
return (
  <div className={styles.Logo1}>
    <img src="https://i.etsystatic.com/24903097/r/il/f49af6/2758460090/il_1140xN.2758460090_7z6u.jpg" width="300" height="200"></img>
    <img src="https://ih1.redbubble.net/image.1967874610.9566/fpp,small,lustre,wall_texture,product,750x1000.jpg" width="169" height="200"/>
    <div className={styles.Logo2}>Where the soup is free & we Rent 'Em Spoons!!</div>
  </div>
)
}