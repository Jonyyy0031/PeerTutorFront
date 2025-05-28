import Table from "react-bootstrap/Table";
import { Tutor } from "../../shared/models/tutor.types";

interface TableProps {
  tutors: Tutor[];
}

const CatalogoAsesorias: React.FC<TableProps> = ({ tutors }) => {

  const limitedTutors = tutors.slice(0, 4);

  return (
    <div className="table-container">
      {tutors.length > 0 ? (
        <Table>
        <thead>
          <tr>
            <th>TUTOR</th>
            <th className="darker-cell">MATERIAS OFERTADAS</th>
            <th>TURNO DISPONIBLE</th>
          </tr>
        </thead>
        <tbody>
          {limitedTutors.map((tutor) => (
            <tr key={tutor.id}>
              <td>{tutor.tutor_name}</td>
              <td>{tutor.department}</td>
              <td>{tutor.shift.toUpperCase()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      ) : (
        <div className="text-center mt-4 bg-primary-700 text-white p-4 rounded-lg w-[40%] mx-auto">
          <p>No hay tutores disponibles en este momento.</p>
        </div>
      )}

    </div>
  );
}

export default CatalogoAsesorias;
