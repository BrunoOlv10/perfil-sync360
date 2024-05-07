import '../styles/components/App.sass'
import '../styles/components/ContainerPerfil.sass'
import '../styles/components/ContainerForm.sass'

const ContainerForm = () => {
  return (
    <div className='container'>
        <div className='card'>
            <h2>Atualizar Perfil</h2>
            <div className='img-degrade'>
                <img src="" />
            </div>
            <form>
                <label htmlFor="name">Nome: </label>
                <input type="text" id='name' />
                <label htmlFor="idade">Idade: </label>
                <input type="text" id='idade' />
                <label htmlFor="rua">Rua: </label>
                <input type="text" id='rua' />
                <label htmlFor="bairro">Bairro: </label>
                <input type="text" id='bairro' />
                <label htmlFor="estado">Estado: </label>
                <input type="text" id='estado' />
                <label htmlFor="biografia">Biografia: </label>
                <textarea name="biografia" id="biografia" rows="10"></textarea>
            </form>
                <input type="submit" value="Atualizar" />
        </div>
    </div>
  )
}

export default ContainerForm
