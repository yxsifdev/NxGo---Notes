import "@/styles/dashboard.css";

function ListNotes() {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Tags</th>
          <th>Acciones</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
          <td>Edit</td>
          <td>Edit</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
          <td>Edit</td>
          <td>Edit</td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
          <td>Edit</td>
          <td>Edit</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ListNotes;
