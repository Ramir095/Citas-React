import { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [estado, setEstado] = useState({
    mascota: "",
    propietario: "",
    email: "",
    alta: "",
    sintomas: "",
    id: "",
  });
  const [error, setError] = useState(false)
  
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handlePaciente = (e) => {
    setEstado({
      ...estado,
      [e.target.id] : e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //validación del formulario
    if( [estado.mascota, estado.propietario, estado.email, estado.alta, estado.sintomas].includes('') ) {
        setError(true)
        return; 
    };
    setError(false);

    if(paciente.id) {
      // editar paciente:
      console.log(paciente);
      estado.id = paciente.id;
      const pacientesActualizados = pacientes.map( p => p.id === paciente.id ? estado : p)
      
      setPacientes(pacientesActualizados);
      setPaciente({});

    } else {
      // nuevo paciente
      estado.id = generarId()
      setPacientes([...pacientes, estado])
    }
    

    setEstado({
      mascota: "",
      propietario: "",
      email: "",
      alta: "",
      sintomas: "",
    })
  };

  // en el arreglo (las dependencias) va lo que useEffect estará esperando (a que cambie) para ejecutar la funcion que este dentro de las llaves. Ejemplo: En este caso estará esperando los cambios de pacientes
  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setEstado({
        mascota: paciente.mascota,
        propietario: paciente.propietario,
        email: paciente.email,
        alta: paciente.alta,
        sintomas: paciente.sintomas,
      })
    }
  }, [paciente]);

  return (
    <div className="md:w-1/2 lg:w-2/5">
      {/* lg es mideacuery para pantallas mas grande (2/5 es 40%) */}
      <h2 className="font-black text-3xl text-center">Seguimiento Paciente</h2>
      {/* text-3xl es el tamaño del texto */}
      <p className="text-xl mt-5 text-center mb-10">
        {/* text-lg es el tamaño del texto */}
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>

      <form onSubmit={ handleSubmit } className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {/* shadow es para poner sombreado, rounded-lg para poner bordes */}

        { error && <Error mensaje="Todos los campos deben de ser completados" /> }

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 font-bold">
            Nombre de la mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Firulais"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={estado.mascota}
            onChange={handlePaciente}
          />
          {/* w-full hace que el input tome todo el ancho del contenedor */}
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 font-bold"
          >
            Nombre del propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Juan Pérez"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={estado.propietario}
            onChange={handlePaciente}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@example.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={estado.email}
            onChange={handlePaciente}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 font-bold">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={estado.alta}
            onChange={handlePaciente}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 font-bold">
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            value={estado.sintomas}
            onChange={handlePaciente}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? "Actualizar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
