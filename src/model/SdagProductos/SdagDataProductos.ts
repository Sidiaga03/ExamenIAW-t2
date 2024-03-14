'use client'

export async function getProductos() {
    try{
        const res = await fetch('http://192.168.8.88:3001/api/productos', { cache: 'no-store' })
        return res.json()
    }catch(error){
        
            throw new Error('Error al traerse los productos')          
    } 
    
  }