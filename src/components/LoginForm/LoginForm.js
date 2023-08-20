import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styles from './LoginForm.module.scss';

export default function LoginForm({ setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await usersService.login(credentials);
    setUser(user);
  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div>
    <h1><strong>Member Services</strong></h1>
    <h3>Pager: 1.888.OGPLAYA</h3>
    <h3>Email: HIMALAYAN_PLAYA@AOL.COM</h3>
    <h4>Address: 1992 5th Avenue, Chicago IL 50197</h4>
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label className={styles.logInBtn}>Email:</label>
        <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
        <label className={styles.logInBtn}>Password:</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        <button submit>LOG IN</button>
      </form>
    </div>
    <p className="error-message">&nbsp;{error}</p>
  </div>
);
}