

import Menu from "@/components/commons/Menu/MenuLink";
import { SdagIChildren } from "@/interfaces/SdagIChildren";
import { SdagILink } from "@/interfaces/SdagILink";


export default function AdminLayout({children}: SdagIChildren){

    const links:SdagILink[] = [
        {name: 'Insertar', href: '/admin/insertar'},
        {name: 'Borrar', href: '/admin/borrar'},
        {name: 'Actualizar', href: '/admin/actualizar'},
        {name: 'Listar', href: '/admin/listar'}
      ];


    return (
        <>
            <header>
                <h1>Header del Backend</h1>
                <Menu links= {links} />
            </header>
            <main>
                { children }
            </main>
        </>
    )
}