import styles from './Logo.module.scss';

export default function Logo() {
return (
  <div className={styles.Logo1}>
    <img src="https://i.etsystatic.com/24903097/r/il/f49af6/2758460090/il_1140xN.2758460090_7z6u.jpg" width="300" height="200"></img>
    <div className={styles.Logo2}>You get the soup for free & we Rent 'Em Spoons!</div>
  </div>
)
}