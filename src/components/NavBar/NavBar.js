import styles from './NavBar.module.scss';


export default function NavBar() {
  return (
    <div>
      <div>
        <button className="homeBtn">Home</button>
        <button className="aboutBtn">About</button>
        <button className="contactBtn">Contact</button>
      </div>
    </div>
  );
}

