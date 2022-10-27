import { useState } from "react";
import { useForm } from "react-hook-form";

let carrito = [];
let venta = {};
let flag = false;

export const ArticuloSelector = ({ articulo, setter }) => {
  const [cantidad, setCantidad] = useState(1);
  const setLocalStorage = (key, value) => {
    try {
      venta = { codBarras: key, cantidad: value };

      if (value <= 0) return;

      if (!localStorage.getItem("cart")) {
        carrito.push(venta);
        return;
      }

      carrito = JSON.parse(localStorage.getItem("cart"));

      carrito.map((item) => {
        if (item.codBarras === key) {
          item.cantidad += value;
          flag = true;
        }
      });

      if (!flag) {
        carrito.push(venta);
        flag = false;
      }
    } catch (error) {
      console.error(error);
    } finally {
      localStorage.setItem("cart", JSON.stringify(carrito));
      setter(carrito.length);
    }
  };

  return (
    <>
      <div>
        {articulo.stock > 0 ? (
          <div>
            <div className="btn-group" id="cantidad">
              <button
                type="button"
                className="btn px-2"
                onClick={() =>
                  setCantidad(cantidad <= 1 ? cantidad : cantidad - 1)
                }
              >
                <i className="fas fa-minus">-</i>
              </button>

              <input
                name="cantidad"
                type="number"
                className="form-control form-control-sm quantity-input"
                value={cantidad}
              />

              <button
                type="button"
                className="btn px-2"
                onClick={() =>
                  setCantidad(
                    cantidad < articulo.stock ? cantidad + 1 : cantidad
                  )
                }
              >
                <i className="fas fa-plus">+</i>
              </button>
            </div>

            <a
              href="#"
              className="btn btn-primary"
              id="btnCards"
              onClick={(e) => setLocalStorage(articulo.cod_barras, cantidad)}
            >
              AGREGAR
            </a>
          </div>
        ) : (
          <>AGOTADO</>
        )}
      </div>
    </>
  );
};
