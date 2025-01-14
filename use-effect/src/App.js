import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [racas, setRacas] = useState([]);
  const [busca, setBusca] = useState('');

  useEffect(() =>{
    fetch('http://localhost:8080/doguinhos')
      .then(resposta => resposta.json())
      .then(dados => {
        setRacas(dados)
      })
  }, []);

  useEffect(() => {
    if (busca && busca.length > 3) {
      fetch('http://localhost:8080/doguinhos?nome=' + busca)
      .then(resposta => resposta.json())
      .then(dados => {
        setRacas(dados)
      })
    }
  }, [busca]);

  return (
    <div className="App">
      <h1>Raças de cachorros</h1>
      <h4>Confira abaixo uma lista de raças de cachorros:</h4>
      <input placeholder='Buscar por raça:' onChange={evento => setBusca(evento.target.value)}></input>
      <ul>
        {racas.map(raca => <li key={raca.nome}>{raca.nome}</li>)}
      </ul>
    </div>
  );
}

export default App;
