"use client"

import React, { FC, useState } from 'react';
import { SdagIProducto } from '@/interfaces/IProductos';
import { ProductosCard } from './ProductosCard';
import Link from 'next/link';

interface Props {
  productos: SdagIProducto[];
}

export const ProductosCardList: FC<Props> = ({ productos }) => {

  return (
    <section className="flex flex-row flex-wrap sct">
      {productos.map((producto) => (
        <article key={producto.codigo} className="basis-1/4 p-2">
          <Link href={`/public/productos/${producto.codigo}`}>
            <ProductosCard productos={producto} />
          </Link>
        </article>
      ))}
    </section>
  );
};
