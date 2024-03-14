
export interface SdagIProducto {
    codigo:      string;
    nombre:      string;
    codgama:     string;
    descripcion: string;
    proveedor:   string;
    stock:       number;
    pvp:         number;
    pcoste:      number;
    imagen:      string;
    gama:        SdagIGama;
}

export interface SdagIGama {
    nombre:      string;
    descripcion: string;
    imagen:      string;
}