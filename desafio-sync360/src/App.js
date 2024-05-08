import React, {useState} from 'react'
import ContainerForm from './components/ContainerForm';
import ContainerPerfil from './components/ContainerPerfil';
import './styles/components/App.sass'

function App() {
  const [dadosPerfil, setDadosPerfil] = useState({
    nome: '',
    idade: '',
    rua: '',
    bairro: '',
    estado: '',
    biografia: ''
  })
  const [imagemPerfil, setImagemPerfil] = useState(null);

  const atualizarPerfil = (novosDados) => {
    setDadosPerfil(novosDados)
  }

  return (
    <div className="App">
      <ContainerPerfil dadosPerfil={dadosPerfil} imagemPerfil={imagemPerfil}/>
      <ContainerForm atualizarPerfil={atualizarPerfil} setImagemPerfil={setImagemPerfil}/>
    </div>
  );
}

export default App;
