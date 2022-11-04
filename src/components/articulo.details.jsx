
export const ListaArticulo = ({ props, setter }) => {

  return (
    <ul>
      {props.map((articulo, index) => (
        <div className="articulo" key={index}>
          <img
            src={articulo.imagen}
            alt="Sudadera Personajes Kimetsu"
            id="producto"
          />
          <div className="">
            <p className="" id="nombreArticulo">
              {articulo.descripcion}
            </p>
            <p className="" id="precioArticulo">
              $ {articulo.precio_venta}
            </p>

            <ArticuloSelector articulo={articulo} setter={setter}></ArticuloSelector>
          </div>
        </div>
      ))}
    </ul>
  );
};
