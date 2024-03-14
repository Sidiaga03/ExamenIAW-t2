
import Menu from "@/components/commons/Menu/MenuLink";
import { SdagIChildren } from "@/interfaces/SdagIChildren";
import { SdagILink } from "@/interfaces/SdagILink";

export default function PublicLayout({children}: SdagIChildren){

    //peticion la BD <-- LINKS DEL FRONTEND
    const links:SdagILink[] = [
        {name: 'Productos', href: '/public/productos'},
        {name: 'Categorias', href: '/public/categorias'},
        {name: 'Proveedores', href: '/public/proveedores'},
      ];

    return (
        <>
            <header>
                <Menu links= {links} />
            </header>
            <main>
                { children }
            </main>
        </>
    )
}