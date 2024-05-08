import React, {useState} from 'react'

import '../styles/components/App.sass'
import '../styles/components/ContainerPerfil.sass'
import '../styles/components/ContainerForm.sass'

const ContainerForm = ({atualizarPerfil}) => {
  const [dadosFormulario, setDadosFormulario] = useState({
    imagem: 'null',
    nome: '',
    idade: '',
    rua: '',
    bairro: '',
    estado: '',
    biografia: ''
  })
  // const [enviado, setEnviado] = useState(false)

  const handleChange = (event) => {
    const {name, value} = event.target
    setDadosFormulario({
      ...dadosFormulario,
      [name]: value,
    })
  }

  const handleImagemChange = (event) => {
    const imagemSelecionada = event.target.files[0]
    setDadosFormulario({
      ...dadosFormulario,
      imagem: URL.createObjectURL(imagemSelecionada),
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Dados do formulário enviados:', dadosFormulario)
    atualizarPerfil(dadosFormulario)
    // setEnviado(true)
  }

  const handleAtualizar = (event) => {
    handleSubmit(event)
  }

  return (
    <div className='container'>
        <div className='card'>
            <h2>Atualizar Perfil</h2>
            <form onSubmit={handleSubmit}>
              <div className='infos'>
                <label htmlFor="imagem" className='categoria'>Imagem</label>
                <input type="file" className='enviar-imagem' name='imagem' accept="image/*" onChange={handleImagemChange}/>
                <label htmlFor="name" className='categoria'>Nome</label>
                <input type="text" className='dados-escritos' name='nome' value={dadosFormulario.nome} onChange={handleChange}/>
                <label htmlFor="idade" className='categoria'>Idade</label>
                <input type="text" className='dados-escritos' name='idade' value={dadosFormulario.idade} onChange={handleChange}/>
                <label htmlFor="rua" className='categoria'>Rua</label>
                <input type="text" className='dados-escritos' name='rua' value={dadosFormulario.rua} onChange={handleChange}/>
                <label htmlFor="bairro" className='categoria'>Bairro</label>
                <input type="text" className='dados-escritos' name='bairro' value={dadosFormulario.bairro} onChange={handleChange}/>
                <label htmlFor="estado" className='categoria'>Estado</label>
                <input type="text" className='dados-escritos' name='estado' value={dadosFormulario.estado} onChange={handleChange}/>
              </div>
                <div className="biografia-form">
                  <label htmlFor="biografia">
                    Biografia
                  </label>
                </div>
                  <textarea name="biografia" value={dadosFormulario.biografia} onChange={handleChange}></textarea>
                  <button onClick={handleAtualizar}>Atualizar</button>
            </form>
        </div>
    </div>
  )
}

export default ContainerForm
