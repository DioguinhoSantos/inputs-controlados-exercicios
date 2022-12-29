import React, {useState} from 'react'
import {Form, Input, Select} from '../MainPage/styles'

const ConfirmationForm = () => {

  const [dataNasc, setDataNasc] = useState('')
  const [telefone, setTelefone] = useState('')
  const [genero, setGenero] = useState('')
  const [autoDeclara, setAutoDeclara] = useState('')
  const [curso, setCurso] = useState('')
  const [ensinoMedio, setEnsinoMedio] = useState(false)
  const [ensinoMedioCursando, setEnsinoMedioCursando] = useState(false)

  const onChangeDataNasc = (e) => {
    setDataNasc(e.target.value);
  }

  const onChangeTelefone = (e) => {
    setTelefone(e.target.value);
  }

  const onChangeGenero = (e) => {
    setGenero(e.target.value);
  }

  const onChangeAutoDeclara = (e) => {
    setAutoDeclara(e.target.value);
  }

  const onChangeCurso = (e) => {
    setCurso(e.target.value);
  }

  let onChangeEnsinoMedio = (e) => {
    setEnsinoMedio(e.target.value);
  }
  
  let onChangeEnsinoMedioCursando = (e) => {
    setEnsinoMedioCursando(e.target.value);
  }


  console.log('ensino medio', ensinoMedio)
  console.log('ensino medio cursando', ensinoMedioCursando)

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
          <option>Selecionar:</option>
          <option>Homem cis</option>
          <option>Mulher cis</option>
          <option>Homem trans</option>
          <option>Mulher trans</option>
          <option>Prefiro não dizer</option>
          </Select>
        </label>

        <label>
          Raça: 
          <Select value={autoDeclara} onChange={onChangeAutoDeclara}>
          <option>Selecionar:</option>
          <option>Branco</option>
          <option>Negro</option>
          <option>Pardo</option>
          <option>Amarelo</option>
          <option>Indígena</option>
          <option>Prefiro não dizer</option>
          </Select>
        </label>

        <label>
          Curso:
          <br/>
          <input type="radio" name={'curso'} onChange={onChangeCurso} value={'tal'}/>
          <label> Curso tal</label>
          <br/>
          <input type="radio" name={'curso'} onChange={onChangeCurso} value={'taltal'}/>
          <label> Curso taltal</label>
        </label>

        <label>
          Ensino Médio:
          <br/>
          <input 
          type={'checkbox'} 
          value={true} 
          onChange={onChangeEnsinoMedio}
          />

          <label> Completo</label>
          <br/>
          <input type={'checkbox'} 
          value={true} 
          onChange={onChangeEnsinoMedioCursando}
          />

          <label> Cursando</label>
        </label>

      <button>Enviar dados</button>
    </Form>
  )
}

export default ConfirmationForm