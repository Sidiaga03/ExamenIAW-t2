
import { SdagIProducto } from "@/interfaces/SdagIProducto";

const apiBD = 'http://192.168.8.88:3001/api';
const SdagApiProductos = {

    listar: async (): Promise<SdagIProducto[]> => {
        const ruta = `${apiBD}/productos`;
        const productos = await fetch(`${ruta}`, { cache: 'no-store'})
        //este res.json transforma el string en formato json que llega desde internet a un array javascript en formato json
            .then((res) => res.json())
        return productos
    },

    detalle: async (id: SdagIProducto["codigo"]): Promise<SdagIProducto> => {
        const ruta = `${apiBD}/productos/${id}`;
        const producto = await fetch(`${ruta}`, { cache: 'no-store'})
            .then((res) => res.json())
        return producto
    }
}
//http://192.168.8.88:3001/api/productos/AR-003
export default SdagApiProductos