
import { SdagIColumn, SdagIProveedor } from '@/interfaces/SdagIProveedor'
import React, { FC } from 'react'

interface Props {
    proveedores: SdagIProveedor[],
    columns: SdagIColumn[]
}

const DataGrid:FC<Props> = ({ proveedores, columns}) => {
  return (
    <table border={1}>
            <thead>
                {
                    columns.map( (col) => (
                        <th>{ col.label }</th>
                    ))
                }
            </thead>
            <tbody>
                {
                    proveedores.map( (proveedores) => (
                        <tr>
                            <th>{ proveedores.nombre}</th>
                            <th>{ proveedores.cif }</th>
                            <th>{ proveedores.pais }</th>
                        </tr>
                    ))
                }
            </tbody>
    </table>
  )
}

export default DataGrid