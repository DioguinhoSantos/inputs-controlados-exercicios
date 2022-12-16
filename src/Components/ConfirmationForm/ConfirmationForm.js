import React, {useState} from 'react'
import {Form, Input, Select} from '../MainPage/styles'

const ConfirmationForm = () => {

  const [dataNasc, setDataNasc] = useState('')
  const [telefone, setTelefone] = useState('')
  const [genero, setGenero] = useState('')

  const onChangeDataNasc = (e) => {
    setDataNasc(e.target.value);
  }

  const onChangeTelefone = (e) => {
    setTelefone(e.target.value);
  }

  const onChangeGenero = (e) => {
    setGenero(e.target.value);
  }

  console.log('genero', genero)

  return (
    <Form>

        <label>
          Data de Nascimento:
          <Input type={'date'} value={dataNasc} onChange={onChangeDataNasc}/>
        </label>

        <label>
          Telefone:
          <Input type={'tel'} value={telefone} onChange={onChangeTelefone}/>
        </label>
        
        <label>
          Gênero: 
          <Select value={genero} onChange={onChangeGenero}>
          <option></option>
          <option>Homem cis</option>
          <option>Mulher cis</option>
          <option>Homem trans</option>
          <option>Mulher trans</option>
          <option>Prefiro não dizer</option>
          </Select>
        </label>

      <button>Enviar dados</button>
    </Form>
  )
}

export default ConfirmationForm