/**
 *  customhook: Automatically Focus on Input Using Refs
 * 
 *  Aquí pasamos la referencia que obtenemos del enlace useFocus a nuestro elemento de entrada.
 *  Si inicia la aplicación y hace clic en el botón de elemento nuevo, debería ver que el formulario
 *  la entrada se enfoca automáticamente.
 */
import { useRef, useEffect } from "react"


export const useFocus = () => {
    //para el focus, usaremos una función React llamada refs. q` proporcionan una 
    //forma de hacer referencia a los nodos DOM reales de los elementos React renderizados.
    /**
     *  Aquí usamos el hook useRef para obtener acceso al elemento de entrada representado. typescript
     *  no puede saber automáticamente cuál será el tipo de elemento, por lo que proporcionamos rl tipo actual. 
     *  En nuestro caso, estamos trabajando con una entrada, por lo que es HTMLInputElement.
     */
    const ref = useRef<HTMLInputElement | null>(null)

    //queremos que la ref sea inmutable, porque la pasamos a la entrada
    //componente y no tienen la intención de reasignarlo manualmente.
    //const mutableRef = useRef<HTMLInputElement>()

    /**
     *  activo el enfoque en el elemento de entrada. como hemos pasado una matriz de dependencia vacía a 
     *  la devolución de llamada useEffect: se activará solo cuando se montará el componente que utiliza 
     *  el hook useFocus
    */
    useEffect(() => {
        ref.current?.focus()
    }, [])

    return ref
}
