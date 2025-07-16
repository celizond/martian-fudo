import { useContext } from "react";
import { AuthContext } from "../features/auth/context/AuthContext";
import { useForm } from "../hooks/useForm";
import './LoginPage.scss';

export const LoginPage = () => {

  const { login } = useContext(AuthContext)
  const { formState, onInputChange } = useForm({
    name: '',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Color-Green.JPG',
  })

  const { name, avatar } = formState;

  const onLogin = (event: any) => {
    event.preventDefault();
    login(name, avatar);
  }

  return (
    <div className="box">
      <h2>Login</h2>
      <hr />

      <form
        onSubmit={onLogin}>
        <input
          name='name'
          type='text'
          className=''
          placeholder='Nombre de usuario invitado'
          value={name}
          onChange={onInputChange}>
        </input>
        <input
          name='avatar'
          type='text'
          className=''
          placeholder='URL de avatar'
          value={avatar}
          onChange={onInputChange}>
        </input>
       
        <button type='submit' disabled={name.length < 1 ? true : false}>
          Login
        </button>
      </form>

    </div>
  )
}
