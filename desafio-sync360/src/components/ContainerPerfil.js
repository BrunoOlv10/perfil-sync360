import React from 'react'

import '../styles/components/ContainerPerfil.sass';
import '../styles/components/App.sass'

const ContainerPerfil = ({dadosPerfil}) => {
  return (
    <div className='container inicio'>
      <div className='card'>
        <h2>Olá, {dadosPerfil.nome}!</h2>
        <div className='img-degrade'>
          <div className='img'>
          {dadosPerfil.imagem && <img src={dadosPerfil.imagem} alt="Imagem do perfil"  />}
          </div>
        </div>
        <div className='infos'>
          <label className='categoria'>Nome</label>
          <div className='dados'>{dadosPerfil.nome}</div>
          <label className='categoria'>Idade</label>
          <div className='dados'>{dadosPerfil.idade}</div>
          <label className='categoria'>Rua</label>
          <div className='dados'>{dadosPerfil.rua}</div>
          <label className='categoria'>Bairro</label>
          <div className='dados'>{dadosPerfil.bairro}</div>
          <label className='categoria'>Estado</label>
          <div className='dados'>{dadosPerfil.estado}</div>
          <div className='biografia-perfil'>
            <label>Biografia</label>
          </div>
            <div className='especial'>{dadosPerfil.biografia}</div>
        </div>
      </div>
    </div>
  )
}

export default ContainerPerfil
