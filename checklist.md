## Común a las dos plantillas

    - Encabezado
        - Nombre de la plataforma ----------------- OK
        - Input de búsquedas ---------------------- OK
        - Listado de categorías ------------------- OK
        - Enlace a login -------------------------- OK
        - Enlace a registro ----------------------- OK
        - Menú responsive ------------------------- OK

    - Pie de página
        - Nombre de la plataforma ----------------- OK
        - Enlace a parte superior ----------------- OK

## Listado de artículos

    - Enlace a detalle de artículo ---------------- OK
    - Listado de 10 artículos --------------------- OK
    - Ficha de artículo: -------------------------- OK
        - Título ---------------------------------- OK
        - Imagen o vídeo: ------------------------- OK
            - Imagen ------------------------------ OK
            - Vídeo ------------------------------- OK
        - Introducción ---------------------------- OK
        - Nombre del autor ------------------------ OK
        - Foto de perfil -------------------------- OK
            - Dos artículo con placeholder -------- OK
        - Fecha y hora de publicación: ------------ OK
            - < 1 min: segundos ------------------- OK
            - < 1 hora: minutos ------------------- OK
            - < 1 día: horas ---------------------- OK
            - < 1 semana: día de la semana -------- OK
            - > 1 semana: fecha y hora completas -- OK
        - Botón me gusta: ------------------------- OK
            - Funcional con web storage ----------- OK
        - Número de comentarios: ------------------ OK
            - Enlace a los comentarios ------------ OK
    - Paginador ----------------------------------- OK

## Detalle de un artículo

    - Título -------------------------------------- OK
    - Imagen (no vídeo) --------------------------- OK
    - Texto completo del artículo: ---------------- OK
        - Varios párrafos ------------------------- OK
        - Incluir negritas ------------------------ OK
        - Incluir cursivas ------------------------ OK
        - Incluir enlace -------------------------- OK
    - Nombre del autor ---------------------------- OK
    - Foto de perfil ------------------------------ OK
    - Fecha y hora de publicación: ---------------- OK
        - < 1 min: segundos ----------------------- OK
        - < 1 hora: minutos ----------------------- OK
        - < 1 día: horas -------------------------- OK
        - < 1 semana: día de la semana ------------ OK
        - > 1 semana: fecha y hora completas ------ OK
    - Botón me gusta: ----------------------------- OK
        - Funcional con web storage --------------- OK
    - Número de comentarios: ---------------------- OK
        - Enlace a los comentarios ---------------- OK
    - Sistema de comentarios ---------------------- OK

### SISTEMA DE COMENTARIOS

    - lista de comentarios ------------------------ OK
    - formulario para envío ----------------------- OK
    - utilizar json server ------------------------ OK
    - carga asíncrona al ser visible -------------- OK
        - gestión de estados:
            - vacío ------------------------------- OK
            - cargando ---------------------------- OK
            - error ------------------------------- OK
            - éxito ------------------------------- OK
    - condiciones del formulario:
        - nombre y apellidos (obligatorio) -------- OK
        - email (obligatorio) --------------------- OK
        - texto del comentario: (obligatorio) ----- OK
            - máximo 120 palabras ----------------- OK
        - tener en cuenta errores de envío -------- OK

## Consideraciones generales

    - Minimizar peticiones:
        - Un sólo javascript ---------------------- OK
        - Un sólo css ----------------------------- OK
    - Minimizar assets:
        - Minimizar JS ---------------------------- OK
        - Minimizar CSS --------------------------- OK
        - Minimizar Imágenes ---------------------- OK
    - Imágenes responsive ------------------------- revisar
    - Navegadores:
        - Google Chrome ---------------------------
        - Mozilla Firefox -------------------------
        - Internet Explorer 11 o superior ---------