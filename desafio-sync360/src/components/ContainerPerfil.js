import styles from '../styles/components/ContainerPerfil.sass';
import '../styles/components/App.sass'

const ContainerPerfil = () => {
  return (
    <div className='container inicio'>
      <div className='card'>
        <h2>Olá, (nome)</h2>
        <div className='img-degrade'>
          <div className='img'></div>
        </div>
        <div className='infos'>
          <label className='categoria'>Nome</label>
          <div className='dados'></div>
          <label className='categoria'>Idade</label>
          <div className='dados'></div>
          <label className='categoria'>Rua</label>
          <div className='dados'></div>
          <label className='categoria'>Bairro</label>
          <div className='dados'></div>
          <label className='categoria'>Estado</label>
          <div className='dados'></div>
          <div className='biografia'>
            <label id='biografia-perfil'>Biografia:</label>
          </div>
            <div className='especial'></div>
        </div>
      </div>
    </div>
  )
}

export default ContainerPerfil
