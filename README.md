NavegaLasRutas-DeAmaral - React + Vite

Este proyecto es parte del curso de React JS en Coderhouse y consiste en el desarrollo de un e-commerce funcional.



Descripción del proyecto:

Este e-commerce se ha desarrollado siguiendo buenas prácticas de React, aplicando componentes reutilizables y organizando la estructura de archivos de manera eficiente. La migración de Create React App (CRA) a Vite ha mejorado el tiempo de carga y la configuración del proyecto.



Tecnologías que utilicé:

- React.js (framework para el desarrollo del frontend).

- React Icons (para integrar íconos, como el carrito de compras).

- Vite (herramienta de construcción para React, proporcionando un entorno de desarrollo rápido y optimizado).

- CSS (para los estilos del proyecto).



Funcionalidades implementadas:

- Barra de navegación - NavBar (con enlaces a las diferentes secciones, logo de la tienda y el widget del carrito de compras).

- Componente Contenedor - ItemListContainer (utiliza props para recibir y mostrar un mensaje de bienvenida. En el futuro, mostrará el catálogo de productos).

- Componente CartWidget (muestra un ícono de carrito de compras con un contador. Actualmente muestra un número estático, pero se conectará con la lógica del carrito).



Estructura de archivos organizada:

- NavBar e ItemListContainer son renderizados en App.jsx.

- CartWidget es renderizado dentro de NavBar.



En resumen (correcciones del profesor en base a mi entrega anterior):

- Se corrigieron errores de la entrega anterior, comentarios del profesor fueron tomados y solucionados, como por ejemplo: la cantidad de comentarios en el código, ahora tenemos un código más limpio, más organizado.

- Se emigró de CRA a Vite, que fue con la tecnología que trabajé en la anterior entrega, pero al estar más obsoleta, lo migré a Vite.

- Ya rendericé los productos en la ruta raíz "/", ya no está en "/catalogo".

- La data de los productos ahora sí proviene de una promesa y ya separé responsabilidades en los componentes (ItemListContainer ya no se encarga de la vista ni del mapeo de los productos, de eso se encarga ItemList y tenemos ahora un archivo api.js donde está la lista de los productos).

- Incluí ItemCount como hijo de ItemDetail.



En resumen (nueva consigna para el proyecto final):

- SPA con React (ya es una Single Page Application con React y react-router-dom - trabajé usando componentes, rutas, hooks, etc).

- Virtual DOM y hooks (uso useEffect, useState, useParams, useContext, etc).

- Manejo de eventos (ya lo hago con los botones de ItemCount y en la lógica y el botón de agregar al carrito).

- Navegación entre componentes (está gracias a react-router-dom - navego con rutas como por ejemplo: "/", "/producto/:id", etc).

- Estado global - carrito (uso CartContext para el estado del carrito).

- Estilado (CSS personalizado en mi proyecto, para el index, para la App y para la NavBar, están bien separado y estructurado todos los estilos).

- Temática definida y catálogo de productos (tengo mi catálogo propio de las zapas de mi emprendimiento, productos simulados y mock data).

- Componente ItemCount con validaciones de stock y cantidad mínima.

- Ocultar ItemCount después de agregar al carrito.

- Firebase (los productos y órdenes se guardan en la nube).

- CartWidget con ícono e indicar de cantidad total.





Sobre Vite:

Vite es una herramienta de construcción de nueva generación que proporciona un entorno de desarrollo ultra rápido, con soporte nativo para React y muchas optimizaciones.

En este proyecto, he utilizado la configuración mínima de Vite para React, que incluye el soporte para Fast Refresh gracias a los plugins:

@vitejs/plugin-react utiliza Babel para el Fast Refresh.

@vitejs/plugin-react-swc utiliza SWC para el Fast Refresh.