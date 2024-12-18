import { Link } from "react-router-dom"; // Agrega esta línea si no la tienes.

const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <Link to={`/detalle/${producto.id}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList; // Aquí exportas el componente correctamente.
