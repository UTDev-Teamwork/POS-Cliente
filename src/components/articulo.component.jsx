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
      <div className="articulo">
        <table>
          <tr>
            <td id="imagenesDetalles" rowSpan={2}>
              <img
                src="https://i.ytimg.com/vi/2HNP4nTLj9k/sddefault.jpg"
                className="card-img-top"
                alt="Sudadera Personajes Kimetsu"
              />
            </td>
            <td id="articuloDetalles">
              <div className="detallesArticulo">
                <p className="card-text card-articulo" id="articuloName">
                  Titulo Articulo
                </p>
                
                <p className="card-text card-articulo" id="articuloDis">
                  Disponibilidad
                </p>
              </div>
            </td>
            <td id="preciosDetalles" rowSpan={2}>
              <p className="card-text" id="articuloPrice">Precio
              </p>
            </td>
          </tr>
          <tr>
          <div id="cantidadArticulos">
                <p>
                Cosito de cantidad
                </p>
              </div>
          </tr>
          <tr>
            <td colSpan={3} id="subTotalVenta">
              <p>Subtotal</p>
            </td>
          </tr>
        </table>
      </div>
    </ul>
  );
};
