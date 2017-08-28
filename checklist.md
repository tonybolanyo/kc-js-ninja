## Común a las dos plantillas

    - Encabezado
        - Nombre de la plataforma ----------------- OK
        - Input de búsquedas ----------------------
        - Listado de categorías -------------------
        - Enlace a login -------------------------- OK
        - Enlace a registro ----------------------- OK
        - Menú responsive -------------------------

    - Pie de página
        - Nombre de la plataforma ----------------- OK
        - Enlace a parte superior ----------------- OK

## Listado de artículos

    - Enlace a detalle de artículo ----------------
    - Listado de 10 artículos ---------------------
    - Ficha de artículo: --------------------------
        - Título ---------------------------------- OK
        - Imagen o vídeo: -------------------------
            - Imagen ------------------------------ OK
            - Vídeo -------------------------------
        - Introducción ---------------------------- OK
        - Nombre del autor ------------------------ OK
        - Foto de perfil -------------------------- OK
            - Dos artículo con placeholder --------
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

    - Título --------------------------------------
    - Imagen (no vídeo) ---------------------------
    - Texto completo del artículo: ----------------
        - Varios párrafos -------------------------
        - Incluir negritas ------------------------
        - Incluir cursivas ------------------------
        - Incluir enlace --------------------------
    - Nombre del autor ----------------------------
    - Foto de perfil ------------------------------
    - Dos artículo con placeholder ----------------
    - Fecha y hora de publicación: ----------------
        - < 1 min: segundos -----------------------
        - < 1 hora: minutos -----------------------
        - < 1 día: horas --------------------------
        - < 1 semana: día de la semana ------------
        - > 1 semana: fecha y hora completas ------
    - Botón me gusta: -----------------------------
        - Funcional con web storage ---------------
    - Número de comentarios: ----------------------
        - Enlace a los comentarios ----------------
    - Sistema de comentarios ----------------------

### SISTEMA DE COMENTARIOS

    - lista de comentarios ------------------------
    - formulario para envío -----------------------
    - utilizar json server ------------------------
    - carga asíncrona al ser visible --------------
        - gestión de estados:
            - vacío -------------------------------
            - cargando ----------------------------
            - error -------------------------------
            - éxito -------------------------------
    - condiciones del formulario:
        - nombre y apellidos (obligatorio) --------
        - email (obligatorio) ---------------------
        - texto del comentario: (obligatorio) -----
            - máximo 120 palabras -----------------
        - tener en cuenta errores de envío --------

## Consideraciones generales

    - Minimizar peticiones:
        - Un sólo javascript ---------------------- OK
        - Un sólo css ----------------------------- OK
    - Minimizar assets:
        - Minimizar JS ---------------------------- OK
        - Minimizar CSS --------------------------- falta UnCSS o PurifyCSS
        - Minimizar Imágenes ---------------------- OK
    - Imágenes responsive -------------------------
    - Navegadores:
        - Google Chrome ---------------------------
        - Mozilla Firefox -------------------------
        - Internet Explorer 11 o superior ---------