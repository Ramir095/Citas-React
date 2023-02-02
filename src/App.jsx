import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useEffect, useState } from "react";

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? []);
  const [paciente, setPaciente] = useState({}); // aca se guarda el paciente a editar

  // Creamos otra use Effect ya que cada vez que actualizamos, el valor del estado queda vacio y el localStorage sincroniza el valor del estado.
  // Este useEffect se ejecutará una sola vez cuando el componente este listo. Revisará si en el localStorage hay algo y si lo hay, lo seteara al estado Pacintes
  // Este useEffect obtendrá lo que haya en el localStorage
  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
  //     setPacientes(pacientesLS);
  //   };
  //   obtenerLS();
  // }, []);

  // El use Effect es un excelente lugar para mantener sincronizado con localStorage
  // Cada vez que hay un CAMBIO en pacientes vamos a guardalo en localStorage, quiero ejecutar este evento, quiero sincronizar el estado con el localStorage
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes)); // el stringify convierte en un string el estado. En localStorage solo se puede guardar Strings!
  }, [pacientes]);

  const handleDelete = (id) => {
    const clienteEncontrado = pacientes.filter((p) => p.id !== id);
    setPacientes(clienteEncontrado);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
