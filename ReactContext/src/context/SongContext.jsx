import { createContext, useState, useEffect, Children } from 'react';
import canciones from '@/utilis/canciones.json'; // Importar el JSON de canciones



//1) Crear el contexto 
const SongContext = createContext(); //Crear mi contexto que empieza vacio 

// 2) Crear el provider 

function SongProvider({children}) {
    const [list, setList] = useState([]); // Estado para almacenar la lista de canciones
    const [loading, setLoading] = useState(true); // Estado ¿Estas cargando? 
    const [selectedSong, setSelectedSong] = useState({}); // Estado para ver la canción seleccionada

    //Similar llamada a la API (mock delay 2s)

    useEffect(() => {
        const timer = setTimeout(() => {
            setList(canciones)
            setLoading
        }, 2000)
        return () => clearTimeout(timer); // Limpiar el timeout al desmontar el componente
    }, [])

    //mandamos un objeto
    const contextValue = {
        list, // Lista de canciones
        loading, // Estado de carga
        selectedSong, // Canción seleccionada
        setSelectedSong // Función para actualizar la canción seleccionada
    }

    //el proveedor (provider) es un componente que envuelve a otros componentes
    //y le pasa un objeto con los datos que queremos compartir
    return (

        <SongContext.Provider value={contextValue}>
            {children}
        </SongContext.Provider>

    )

}

export {
    SongContext, // Exportar el contexto
    SongProvider // Exportar el proveedor
}