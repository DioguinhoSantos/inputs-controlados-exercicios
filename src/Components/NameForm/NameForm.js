import React from 'react'
import { Form, Input} from '../MainPage/styles'

const NameForm = ({name, onChangeName, age, onChangeAge, email, onChangeEmail, confirmaEmail, onChangeConfirmaEmail, sendData}) => {

  return (
    <Form>
        <label>
          Nome:
          <Input  placeholder="Nome" value={name} onChange={onChangeName} required/>
        </label>

        <label>
          Idade:
          <Input  placeholder="Idade" value={age} onChange={onChangeAge} type='number' required/>
        </label>

        <label>
          E-mail:
          <Input  placeholder="usuario@usuario.com" value={email} onChange={onChangeEmail} type={'email'} required/>
        </label>

        <label>
          Confirmação de e-mail:
          <Input  placeholder="usuario@usuario.com" value={confirmaEmail} onChange={onChangeConfirmaEmail} type={'email'} required/>
        </label>

      <button onClick={sendData}>Enviar dados</button>
      </Form>
  )
}

export default NameForm