# Viajes Chile

Sitio web responsivo desarrollado para la prueba final del módulo **Fundamentos de Desarrollo Front-End** del bootcamp Desarrollo Full Stack con Python.

## Autor

Nicolás Escudero Cabello

## Tecnologías

- HTML5 semántico.
- CSS3 con enfoque Mobile First.
- Bootstrap 5.3.8, integrado mediante CDN para los estilos.
- JavaScript y jQuery 3.7.1.
- Font Awesome 6.5.2.
- Git y GitHub Pages.

Las copias locales versionadas de Bootstrap Bundle y jQuery permiten mantener las interacciones incluso cuando no existe conexión con sus CDN.

## Contenido e interacciones

- Navbar fija y colapsable en dispositivos móviles.
- Carousel de tres paisajes.
- Sección Quiénes somos, oculta en pantallas pequeñas según la pauta.
- Cuatro Cards responsivas de destinos destacados.
- Tooltips en iconos y enlaces sociales.
- Modales con información de destinos y confirmación del formulario.
- Formulario con validación nativa y retroalimentación visual.
- ScrollSpy y desplazamiento suave entre secciones.

## Estructura

```text
Viajes_Chile_Nicolas_Escudero_Cabello/
|-- index.html
|-- README.md
`-- assets/
    |-- css/
    |   `-- style.css
    |-- img/
    |   |-- viajes.svg
    |   |-- carousel1.jpg ... carousel3.jpg
    |   `-- card1.jpg ... card4.jpg
    |-- js/
    |   `-- script.js
    `-- vendor/
        |-- bootstrap.bundle.min.js
        `-- jquery-3.7.1.min.js
```

## Ejecución local

El sitio puede abrirse con un servidor local desde la carpeta del proyecto. Por ejemplo:

```bash
python -m http.server 4173
```

Luego se visita `http://127.0.0.1:4173/` en el navegador.

## Verificación

La página fue probada en resoluciones de escritorio y celular. Se comprobaron el menú móvil, el carrusel, las Cards, los modales, los tooltips, la validación del formulario, el desplazamiento entre secciones y la ausencia de desplazamiento horizontal.

## Publicación

- Repositorio: pendiente de publicación.
- GitHub Pages: pendiente de publicación.
