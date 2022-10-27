import { useEffect, useState } from "react";
import { ListaArticulo } from "./articulo.component";

export const Articulo = ({ value }) => {
  const [data, setData] = useState([]);
  const [productos, setProductos] = useState();
  let productosComprados = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "http://localhost:7373/api/articulo"
        );
        setData(response.articulos);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
    
  }, []);

  const confirmarCompra = () => {
    let res = confirm("Estas seguro de comprar:\n\n"+crearTicket(getProductos(localStorage.getItem("cart"))));
    if(res){
      axios.post("http://localhost:7373/api/venta", JSON.parse(localStorage.getItem("cart")))
      .then(function (response) {
        alert("Gracias por su compra");
        localStorage.removeItem("cart");
        setProductos([]);
      })
      .catch(function (error) {
        console.log(error);
        alert("Error al realizar la compra");
      });
    }
  }

  const getProductos = (carrito) => {
    carrito = JSON.parse(carrito);
    carrito.map((item) => {
      data.map((articulo) => {
        if (item.codBarras === articulo.cod_barras) {
          articulo.cantidad = item.cantidad;
          productosComprados.push(articulo);
        }
      });
    });
    return productosComprados;
  }

  const crearTicket = (productos) => {
    let ticket = "";
    let total = 0;
    productos.map((item) => {
      ticket += item.descripcion + " x " + item.cantidad + " = " + item.precio_venta * item.cantidad + "\n";
      total += item.precio_venta * item.cantidad;
    });
    ticket += "\nTotal: " + total;

    productosComprados = [];
    return ticket;
  }
  
  return (
    <>
      <div className="banner">
        <h1 id="encabezado">Articulos</h1>
        <button id="btnCarrito" className="btn" data-badge={productos} onClick={confirmarCompra}>
          <i className="material-icons md-60">shopping_cart</i>
          </button>
      </div>

      <div className="body">
        <div className="cards">
          <ListaArticulo props={data} setter={setProductos}></ListaArticulo>
        </div>
      </div>
    </>
  );
};
