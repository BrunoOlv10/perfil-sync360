import React, {useState} from 'react'

import {firestore} from '../firebase';
import {collection, addDoc} from "firebase/firestore";

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
          window.location.reload();
        }, 3000);
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

    if (validForm) {
      atualizarPerfil(dadosFormulario)
    }
  }
  
  const handleData = async (event) => {
      event.preventDefault();
    
      if (!validForm) {
        return;
      }
    
      try {
        const docRef = await addDoc(collection(firestore, "perfis"), dadosFormulario);
        console.log("Documento adicionado com ID: ", docRef.id);
    
        setDadosFormulario({ ...initialValues });
    
        atualizarPerfil(dadosFormulario);
      } catch (error) {
        console.error("Erro ao adicionar documento: ", error);
      }
    };

  const handleAtualizar = (event) => {
    handleData(event)
    event.preventDefault()

    if (parseInt(dadosFormulario.idade <= 130)) {
      handleSubmit(event)
    }

    handleCheck(event)
    setDadosFormulario({ ...initialValues });
  }


  return (
    <div className='container'>
        <div className='card'>
            <h2 className='titulo-perfil'>Atualizar Perfil</h2>
            <form onSubmit={handleSubmit}>
              <div className='infos'>
                <label htmlFor="imagem" className='categoria-especial'>Foto</label>
                <input type="file" className='enviar-imagem' name='imagem' id='imagem' accept="image/*" onChange={handleImagemChange}/>
                <label htmlFor="nome" className='categoria'>Nome</label>
                <input type="text" placeholder='Max 19 caracteres' maxLength='19' className='dados-escritos' name='nome' id='nome' value={dadosFormulario.nome} onChange={handleChange}/>
                <label htmlFor="idade" className='categoria'>Idade</label>
                <input type="number" placeholder='Idade real' className='dados-escritos' name='idade' id='idade' value={dadosFormulario.idade} onChange={handleChange} onKeyPress={handleKeyPress}/>
                {errorMessage && <div className='container-error'><span className="error-tooltip">{errorMessage}</span></div>}
                <label htmlFor="rua" className='categoria'>Rua</label>
                <input type="text" placeholder='Max 19 caracteres' maxLength='19' className='dados-escritos' name='rua' id='rua' value={dadosFormulario.rua} onChange={handleChange}/>
                <label htmlFor="bairro" className='categoria'>Bairro</label>
                <input type="text" placeholder='Max 19 caracteres' maxLength='19' className='dados-escritos' name='bairro' id='bairro' value={dadosFormulario.bairro} onChange={handleChange}/>
                <label htmlFor="estado" className='categoria'>Estado</label>
                <input type="text" placeholder='Max 19 caracteres' maxLength='19' className='dados-escritos' name='estado' id='estado' value={dadosFormulario.estado} onChange={handleChange}/>
              </div>
                <div className='container-biografia'>
                  <div className="biografia-form">
                    <label htmlFor="biografia">
                      Biografia
                    </label>
                  </div>
                    <textarea placeholder='Escreva uma breve biografia' maxLength='1600' name="biografia" id='biografia' value={dadosFormulario.biografia} onChange={handleChange}></textarea>
                    <button onClick={handleAtualizar}>Atualizar</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContainerForm
