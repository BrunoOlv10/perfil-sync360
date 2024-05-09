import React, {useState, useEffect} from 'react'

import '../styles/components/App.sass'
import '../styles/components/ContainerPerfil.sass'
import '../styles/components/ContainerForm.sass'
import '../styles/components/MediaQueries.sass'

const ContainerForm = ({atualizarPerfil}) => {
  const initialValues = {
    imagem: 'null',
    nome: '',
    idade: '',
    rua: '',
    bairro: '',
    estado: '',
    biografia: ''
  }

  const [dadosFormulario, setDadosFormulario] = useState({...initialValues })

  const [errorMessage, setErrorMessage] = useState('');

  const [validForm, setValidForm] = useState(true);

  const handleChange = (event) => {
    const {name, value} = event.target
    if (name === 'idade') {
      const newValue = value.slice(0, 3);
      if (parseInt(newValue) > 130) {
        setErrorMessage('Coloque uma idade menor!');
        setValidForm(false);
        setTimeout(() => {
          setErrorMessage('');
          setDadosFormulario({
            ...dadosFormulario,
            [name]: value.length <= 3 ? value : value.slice(0, 3),
          });
        }, 4000);
      } else {
        setErrorMessage('');
        setValidForm(true);
      }
      setDadosFormulario({
        ...dadosFormulario,
        [name]: newValue,
      })
    } else {
      setDadosFormulario({
        ...dadosFormulario,
        [name]: value,
      })
    }
  }

const handleCheck = (event) => {
  event.preventDefault();
  if (errorMessage) {
    return;
  }
  // console.log('Formulário enviado');
  handleSubmit(event)
};

const handleKeyPress = (event) => {
  if (event.target.name === 'idade' && !/\d/.test(event.key)) {
    event.preventDefault();
  }
};

const handleImagemChange = (event) => {
  const imagemSelecionada = event.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    if (reader.readyState === FileReader.DONE) {
      const blob = new Blob([reader.result], { type: imagemSelecionada.type });
      const image = new Image();

      image.onload = () => {
        setDadosFormulario({
          ...dadosFormulario,
          imagem: URL.createObjectURL(imagemSelecionada),
        });
      };

      image.onerror = () => {

      };

      image.src = URL.createObjectURL(blob);
    }
  };

  if (imagemSelecionada) {
    reader.readAsArrayBuffer(imagemSelecionada);
  }
};

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log('Dados do formulário enviados:', dadosFormulario)
    if (validForm) {
      atualizarPerfil(dadosFormulario)
    }
  }
  
  const handleAtualizar = (event) => {
    event.preventDefault()
    if (parseInt(dadosFormulario.idade <= 130)) {
      handleSubmit(event)
    }
    handleCheck(event)
  }

  const removerMensagem = () => {
    const inputs = document.querySelectorAll('.enviar-imagem');
    inputs.forEach(input => {
      input.setAttribute('title', '');
    });
  };

  useEffect(() => {
    removerMensagem();
  }, []);

  return (
    <div className='container'>
        <div className='card'>
            <h2>Atualizar Perfil</h2>
            <form onSubmit={handleSubmit}>
              <div className='infos'>
                <label htmlFor="imagem" className='categoria-especial'>Imagem</label>
                <input type="file" className='enviar-imagem' name='imagem' accept="image/*" onChange={handleImagemChange}/>
                <label htmlFor="name" className='categoria'>Nome</label>
                <input type="text" placeholder='Max 19 caracteres' maxLength='19' className='dados-escritos' name='nome' value={dadosFormulario.nome} onChange={handleChange}/>
                <label htmlFor="idade" className='categoria'>Idade</label>
                <input type="number" placeholder='Idade real' className='dados-escritos' name='idade' value={dadosFormulario.idade} onChange={handleChange} onKeyPress={handleKeyPress}/>
                {errorMessage && <div className='container-error'><span className="error-tooltip">{errorMessage}</span></div>}
                <label htmlFor="rua" className='categoria'>Rua</label>
                <input type="text" placeholder='Max 19 caracteres' maxLength='19' className='dados-escritos' name='rua' value={dadosFormulario.rua} onChange={handleChange}/>
                <label htmlFor="bairro" className='categoria'>Bairro</label>
                <input type="text" placeholder='Max 19 caracteres' maxLength='19' className='dados-escritos' name='bairro' value={dadosFormulario.bairro} onChange={handleChange}/>
                <label htmlFor="estado" className='categoria'>Estado</label>
                <input type="text" placeholder='Max 19 caracteres' maxLength='19' className='dados-escritos' name='estado' value={dadosFormulario.estado} onChange={handleChange}/>
              </div>
                <div className='container-biografia'>
                  <div className="biografia-form">
                    <label htmlFor="biografia">
                      Biografia
                    </label>
                  </div>
                    <textarea name="biografia" placeholder='Escreva uma breve biografia' maxLength='1600' value={dadosFormulario.biografia} onChange={handleChange}></textarea>
                    <button onClick={handleAtualizar}>Atualizar</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContainerForm
