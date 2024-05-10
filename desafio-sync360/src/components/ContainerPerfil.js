import React, {useRef} from 'react'

import '../styles/components/ContainerPerfil.sass';
import '../styles/components/App.sass'
import '../styles/components/MediaQueries.sass'

const ContainerPerfil = ({dadosPerfil}) => {
  const perfilRef = useRef(null);

  const limparPerfil = () => {
    const divs = perfilRef.current.querySelectorAll('.dados-especial, .dados, .biografia-especial');
    divs.forEach(div => div.textContent = '');
  };

  return (
    <div className='container'>
      <div className='card'>
      <h2>Olá, {dadosPerfil.nome ? dadosPerfil.nome : 'Sync360'}!</h2>
        <div className='img-degrade'>
          <div className='img'>
          {dadosPerfil.imagem && dadosPerfil.imagem !== 'null' && (
            <img src={dadosPerfil.imagem} alt='Imagem do perfil' />
          )}
          </div>
        </div>
        <div className='infos' ref={perfilRef}>
          <label className='categoria-especial'>Nome</label>
          <div className='dados-especial'>{dadosPerfil.nome}</div>
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
            <div className='biografia-especial'>{dadosPerfil.biografia}</div>
        </div>
            <button onClick={limparPerfil}>Limpar Dados</button>
      </div>
    </div>
  )
}

export default ContainerPerfil
