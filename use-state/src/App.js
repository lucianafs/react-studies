import { useState } from 'react';
import './App.css';

function App() {

  const [endereco, setEndereco] = useState({});

  function manipularEndereco(evento) {

    const cep = evento.target.value;

    setEndereco({
      cep
    })

    if (cep && cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => resposta.json())
      .then(dados => {
        setEndereco(enderecoAntigo => ({
          ...enderecoAntigo,
          rua: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }))
      })
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Busca CEP</h1>
      </header>
      <section>
        <input placeholder='Digite um CEP' onChange={manipularEndereco} maxLength={8} />
        <p>Informaçoes sobre o endereço:</p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><strong>CEP:</strong> {endereco.cep}</li>
          <li><strong>Rua:</strong> {endereco.rua}</li>
          <li><strong>Bairro:</strong> {endereco.bairro}</li>
          <li><strong>Cidade:</strong> {endereco.cidade}</li>
          <li><strong>Estado:</strong> {endereco.estado}</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
