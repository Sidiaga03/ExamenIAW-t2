'use client'

import { ProductosCardList } from '@/components/public/productos/ProductosCardList'
import { SdagIProducto } from '@/interfaces/SdagIProducto'
import { getProductos } from '@/model/SdagProductos/SdagDataProductos'
import React from 'react'

const SdagProductosPage = async () => {

  const productos: SdagIProducto[] = await getProductos()
  return (
    <>
      <section className='flex flex-col items-center'>
        <ProductosCardList productos={productos}/>
      </section>
        
    </>
  )
}
export default SdagProductosPage;

