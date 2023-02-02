const Paciente = ({ pacientes, setPaciente, handleDelete }) => {

  const { mascota, propietario, email, alta, sintomas, id } = pacientes;

  const eliminarPaciente = () => {
    const respuesta = confirm('¿Estás seguro de eliminar este paciente?');
    if(respuesta) {
      handleDelete(id)
    }
  };

  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700">
        Nombre: {""}
        <span className="font-normal">{mascota}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Propietario: {""}
        <span className="font-normal">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Email: {""}
        <span className="font-normal">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Fecha alta: {""}
        <span className="font-normal">{alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Síntomas: {""}
        <span className="font-normal">{sintomas}</span>
      </p>
      <div className="mt-8 flex justify-between">
        <button 
          className="bg-indigo-600 text-white py-2 px-5 rounded-xl mr-10"
          // el setPacientes se ejecuta dentro de un callback ya que recibe un argumento, de lo contrario no es necesario
          onClick={() => setPaciente(pacientes)}
        >Editar</button>

        <button 
          className="bg-red-600 text-white py-2 px-5 rounded-xl"
          onClick={eliminarPaciente}
        >Eliminar</button>
      </div>
    </div>
  );
};

export default Paciente;
