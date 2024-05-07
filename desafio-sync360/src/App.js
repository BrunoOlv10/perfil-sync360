import React, {useState} from 'react'
import ContainerForm from './components/ContainerForm';
import ContainerPerfil from './components/ContainerPerfil';
import './styles/components/App.sass'

function App() {
  const [perfil, setPerfil] = useState({
    nome: '',
    idade: '',
    rua: '',
    bairro: '',
    estado: '',
    biografia: ''
  })

  const atualizarPerfil = (dadosPerfil) => {
    setPerfil(dadosPerfil)
  }

  return (
    <div className="App">
      <ContainerPerfil />
      <ContainerForm atualizarPerfil={atualizarPerfil}/>
    </div>
  );
}

export default App;
