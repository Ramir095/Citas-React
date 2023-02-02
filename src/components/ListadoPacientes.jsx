import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, handleDelete }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-5 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
      </p>
      {pacientes && pacientes.length ? (
        <>
          <div className="md:h-screen overflow-y-scroll">
            {pacientes.map((pacientes) => (
              <Paciente pacientes={pacientes} key={pacientes.id} setPaciente={setPaciente} handleDelete={handleDelete} />
            ))}
          </div>
        </>
      ) : (
        <h1 className="text-center font-bold text-3xl pt-10">No se encontró pacientes registrados D:</h1>
      )}
    </div>
  );
};

export default ListadoPacientes;
