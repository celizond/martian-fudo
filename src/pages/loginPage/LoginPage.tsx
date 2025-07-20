import { useContext } from "react";
import { AuthContext } from "../../features/auth/context";
import { useForm } from "../../hooks/useForm";
import './LoginPage.scss';
import { Button, Input } from "../../components";
import type { eventType } from "../../types/generic.types";

export const LoginPage = () => {

  const { login } = useContext(AuthContext)
  const { formState, onInputChange } = useForm({
    name: '',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Color-Green.JPG',
  })

  const { name, avatar } = formState;

  const onLogin = (event: eventType) => {
    event.preventDefault();
    login(name, avatar);
  }

  const checkData = (avatar.length < 1 || name.length < 1) ? true : false;

  return (
    <div className="box">
      <h2>Iniciar Sesion</h2>

      <form
        onSubmit={onLogin}>
        <Input name='name' type='text' placeholder='Nombre de usuario invitado' value={name} onChange={onInputChange} />
        <Input name='avatar' type='text' placeholder='URL de avatar' value={avatar} onChange={onInputChange} />

        <Button text='Ingresar' type='submit' disabled={checkData} onClick={onLogin} />
      </form>

    </div>
  )
}
