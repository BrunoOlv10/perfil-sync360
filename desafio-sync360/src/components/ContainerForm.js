import React, {useState} from 'react'

import '../styles/components/App.sass'
import '../styles/components/ContainerPerfil.sass'
import '../styles/components/ContainerForm.sass'

const ContainerForm = ({atualizarPerfil}) => {
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    idade: '',
    rua: '',
    bairro: '',
    estado: '',
    biografia: ''
  })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (event) => {
    const {name, value} = event.target
    setDadosFormulario({
      ...dadosFormulario,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Dados do formulário enviados:', dadosFormulario)
    atualizarPerfil(dadosFormulario)
    setEnviado(true)
  }

  const handleAtualizar = (event) => {
    handleSubmit(event)
  }

  return (
    <div className='container'>
        <div className='card'>
            <h2>Atualizar Perfil</h2>
            <div className='img-degrade'>
              <div className='img'></div>
            </div>
            <form>
              <div className='infos'>
                <label htmlFor="name" className='categoria'>Nome</label>
                <input type="text" name='name'/>
                <label htmlFor="idade" className='categoria'>Idade</label>
                <input type="text" name='idade' />
                <label htmlFor="rua" className='categoria'>Rua</label>
                <input type="text" name='rua' />
                <label htmlFor="bairro" className='categoria'>Bairro</label>
                <input type="text" name='bairro' />
                <label htmlFor="estado" className='categoria'>Estado</label>
                <input type="text" name='estado' />
              </div>
                <div className="biografia">
                  <label htmlFor="biografia" id='label-biografia'>Biografia: </label>
                </div>
                  <textarea name="biografia" rows="10"></textarea>
                  <button onClick={handleAtualizar}>Atualizar</button>
            </form>
        </div>
    </div>
  )
}

export default ContainerForm
