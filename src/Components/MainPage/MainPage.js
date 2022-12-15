import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {

const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [confirmaEmail, setConfirmaEmail] = useState("")
const [formFlow, setFormFlow] = useState(1) 

//você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const onChangeConfirmaEmail = (event) => {
  setConfirmaEmail(event.target.value)
}

const sendData = () => {

  if (name.length < 10 || email.length > 30) {
    alert('Faltando ou sobrando letra ai tio');
  }

  if (age < 18) {
    alert('Preciso ter mais de 18 anos');
  }

  if (email !== confirmaEmail) {
    alert('Confira os email, pls')
  }

  if ((name.length > 10 && email.length < 30) && age >= 18 && email === confirmaEmail){
    setFormFlow(2)
  }  

  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
  // setFormFlow(2)
}

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm name={name} onChangeName={onChangeName} age={age} onChangeAge={onChangeAge} email={email} onChangeEmail={onChangeEmail} confirmaEmail={confirmaEmail} onChangeConfirmaEmail={onChangeConfirmaEmail}
      sendData={sendData}/> : <ConfirmationForm />}
    </MainContainer>
  )
}

export default MainPage