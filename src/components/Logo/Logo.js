import styles from './Logo.module.scss';

export default function Logo() {
return (
  <div className={styles.Logo1}>
    <div className={styles.Logo2}>RENT-A-SPOON</div>
    <div className={styles.Logo3}>Where the soup is free & you have to Rent-A-Spoon!</div>
    <div>
    <img src="https://kansaslivingmagazine.com/sites/default/files/styles/header/public/soup_swap_kansas_living.jpg?itok=ybItaMpz" width="550" height="300" title="multiple soups"/>
    </div>
  </div>
)
}