import { useState } from 'react';
import Banner from './componentes/Banner';
import { Formulario } from './componentes/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const onSaveNewColaborador = (colaborador) =>{
    console.log('colabss: ',colaboradores)
    console.log('colab: ',colaborador)
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario onSubmit={colaborador => onSaveNewColaborador(colaborador)} />
    </div>
  );
}

export default App;
