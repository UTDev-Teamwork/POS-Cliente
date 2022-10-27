import { ArticuloSelector } from "./articulo.selector";

export const ListaArticulo = ({ props, setter }) => {

  return (
    <ul>
      {props.map((articulo, index) => (
        <div className="card" key={index}>
          <img
            src={articulo.imagen}
            className="card-img-top"
            alt="Sudadera Personajes Kimetsu"
            id="producto"
          />
          <div className="card-body">
            <p className="card-text card-articulo" id="nombreArticulo">
              {articulo.descripcion}
            </p>
            <p className="card-text" id="precioArticulo">
              $ {articulo.precio_venta}
            </p>

            <ArticuloSelector articulo={articulo} setter={setter}></ArticuloSelector>
          </div>
        </div>
      ))}
    </ul>
  );
};
