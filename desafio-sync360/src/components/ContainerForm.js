import '../styles/components/App.sass'
import '../styles/components/ContainerPerfil.sass'
import '../styles/components/ContainerForm.sass'

const ContainerForm = () => {
  return (
    <div className='container'>
        <div className='card'>
            <h2>Atualizar Perfil</h2>
            <div className='img-degrade'>
              <div className='img'></div>
            </div>
            <form className='infos'>
                <label htmlFor="name" className='categoria'>Nome</label>
                <input type="text" id='name' />
                <label htmlFor="idade" className='categoria'>Idade</label>
                <input type="text" id='idade' />
                <label htmlFor="rua" className='categoria'>Rua</label>
                <input type="text" id='rua' />
                <label htmlFor="bairro" className='categoria'>Bairro</label>
                <input type="text" id='bairro' />
                <label htmlFor="estado" className='categoria'>Estado</label>
                <input type="text" id='estado' />
            </form>
                <div className="biografia">
                  <label htmlFor="biografia" id='label-biografia'>Biografia: </label>
                </div>
                  <textarea name="biografia" rows="10"></textarea>
                <input type="submit" value="Atualizar" />
        </div>
    </div>
  )
}

export default ContainerForm
