import styles from '../styles/components/ContainerPerfil.sass';
import '../styles/components/App.sass'

const Container = () => {
  return (
    <div className='container'>
      <div className='card'>
        <h2>Olá, (nome)</h2>
        <div className='img-degrade'>
          <img src="" />
        </div>
        <div className='infos'>
          <p>Nome:</p>
          <div className='dados'></div>
          <p>Idade:</p>
          <div className='dados'></div>
          <p>Rua:</p>
          <div className='dados'></div>
          <p>Bairro:</p>
          <div className='dados'></div>
          <p>Estado:</p>
          <div className='dados'></div>
          <p>Biografia:</p>
          <div className='dados' id='especial'></div>
        </div>
      </div>
    </div>
  )
}

export default Container
