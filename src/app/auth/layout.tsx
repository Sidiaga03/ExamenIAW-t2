import { SdagIChildren } from '@/interfaces/SdagIChildren';

export default function AuthLayout({children}: SdagIChildren){
   
    return (
        <>
            <header className='bg-orange-300'>
               <h2>Zona de Autencticacion</h2>
            </header>
            <main className='container mx-auto'>
                { children }
            </main>
        </>
        
    )
  }