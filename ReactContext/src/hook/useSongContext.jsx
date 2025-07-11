// 3) Crear un hook para usar o consumir el contexto de la lista de canciones 

//Contexto
import { useContext } from 'react';
//Contexto a consumir
import { SongContext } from '@/context/SongContext.jsx';

//hacer el export de una función

export const useSongContext = () => {
    const context = useContext(SongContext); //quiero consumir mi contexto 
    //usando useContext() y le indico cual es mi contexto useSongContext (SongContext)

    //si no hay contexto, si un undefined (vacío) lanza un error
    if(!context) {
        throw new Error("useSongContext debe de usarse dentro de un <SongProvider/>");
    }

}
