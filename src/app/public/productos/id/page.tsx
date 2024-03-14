
import React from 'react'
import { SdagProductoDetail } from '../detail';
import SdagApiProductos from '@/model/SdagProductos/SdagApiProductos';


const ProductoPage = async ({ params: { id } }: { params: { id: string } }) => {

  const producto = await SdagApiProductos.detalle(id);

  return (
    <section className="container mx-auto px-4 mt-6 border min-h-screen">
        <SdagProductoDetail producto={producto} />
    </section>
  )
}

export default ProductoPage