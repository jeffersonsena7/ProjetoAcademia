import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from '../button/Button';

import {FaVideo} from "react-icons/fa"

import logoFundo from '../../img/logo-tranpartente-grande.png'
import './Select.css'
import Baseboard from './../baseboard/Baseboard';

const Select = () => {
  // Estados para armazenar os dados dos exercícios, estado de carregamento, erro, grupo muscular selecionado,
  // exibição dos detalhes e exercício selecionado
  const [exercicios, setExercicios] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);
  const [grupoMuscular, setGrupoMuscular] = useState("");
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
 

  // Efeito que é executado quando o grupo muscular é alterado
  useEffect(() => {
    // Função para buscar os dados dos exercícios na API
    const fetchData = async () => {
      // Verifica se um grupo muscular foi selecionado
      if (!grupoMuscular) return;

      try {
        // Define o estado de carregamento como true antes de fazer a requisição
        setCarregando(true);
        // Configurações da requisição à API
        const options = {
          method: "GET",
          url: "https://work-out-api1.p.rapidapi.com/search",
          params: { Muscles: grupoMuscular },
          headers: {
            "X-RapidAPI-Key":
              "440006bfa0mshff2738ddaa1dba3p1dc4cajsnaaff1359b434",
            "X-RapidAPI-Host": "work-out-api1.p.rapidapi.com",
          },
        };
        // Faz a requisição à API
        const response = await axios.request(options);
        // Define os dados dos exercícios e o estado de carregamento como false após receber a resposta
        setExercicios(response.data);
        setCarregando(false);
        // Define mostrarDetalhes como true para exibir os detalhes de todos os exercícios
        setMostrarDetalhes(true);
      } catch (error) {
        // Se houver um erro na requisição, define a mensagem de erro e o estado de carregamento como false
        console.error("Erro ao buscar dados da API:", error);
        setErro(
          "Erro ao carregar os dados. Por favor, tente novamente mais tarde."
        );
        setCarregando(false);
      }
    };

    // Chama a função fetchData para buscar os dados quando o grupo muscular é alterado
    fetchData();
  }, [grupoMuscular]); // Executa o efeito sempre que o grupoMuscular for alterado


  // Função para lidar com a seleção do grupo muscular
  const handleGrupoMuscular = (grupo) => {
    setGrupoMuscular(grupo);
  };

  // Componente Select
  return (
    <>
      {mostrarDetalhes && (

        <h1 className='titulo-h1-select'>Lista de treinos</h1>
      )}
      {!mostrarDetalhes && (
        <>
          <h1 className='titulo-h1-select'></h1>
        </>
        
        
      )}
    <div className='container-select'>
      
      {/* Botões para selecionar o grupo muscular */}
      <div className='select-button'>
        <p><Button className='button-treino' text='Biceps' onClick={() => handleGrupoMuscular("biceps")}/></p>
        <p><Button className='button-treino' text='triceps' onClick={() => handleGrupoMuscular("triceps")}/></p>
        <p><Button className='button-treino' text='Costas' onClick={() => handleGrupoMuscular("back")}/></p>
        <p><Button className='button-treino' text='Peito' onClick={() => handleGrupoMuscular("chest")}/></p>
        <p><Button className='button-treino' text='Ombros' onClick={() => handleGrupoMuscular("shoulders")}/></p>
        <p><Button className='button-treino' text='Trapézio' onClick={() => handleGrupoMuscular("trapezius")}/></p>
        <p><Button className='button-treino' text='Pernas' onClick={() => handleGrupoMuscular("legs")}/></p>
      </div>
      {/* Exibe uma mensagem de carregamento enquanto os dados estão sendo carregados */}
      {carregando && <p>Carregando...</p>}
      {/* Mostra os detalhes dos exercícios após o carregamento */}
      {mostrarDetalhes && !carregando && (
        <div className='container-completo'>
          {/* <p className='titulo-h2-select'></p> */}
          <div className='select-ul-container'>
            <ul className='select-ul'>
              {/* Mapeia os exercícios e exibe cada um deles */}
              {exercicios.map((exercicio, index) => (
                <li key={index}>
                  {/* Botão para selecionar o exercício e exibir seus detalhes */}
                  <h4 className='select-h4'>
                    {exercicio.WorkOut}
                  </h4>
                  {/* Exibe os detalhes do exercício */}
                  <div className='select-detalhes'>
                    <p className='select-detalhes-p1'>Nível de Intensidade: {exercicio.Intensity_Level}</p>
                    <p className='select-detalhes-p2' >Equipamento: {exercicio.Equipment}</p>
                    <p className='select-detalhes-p3' >Descrição: {exercicio.Explaination}</p>
                    <p>
                      Vídeo:  <a href={exercicio.Video}>
                                <FaVideo className='select-detalhes-icon'/>
                              </a>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
    <div className='baseboard-select'>
      <Baseboard/>
    </div>
    </>
  );
};

export default Select;