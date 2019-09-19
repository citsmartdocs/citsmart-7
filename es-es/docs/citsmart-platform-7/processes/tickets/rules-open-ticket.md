title: Reglas sobre la apertura automática de la solicitud de servicio vía e-mail
Description:Reglas sobre la apertura automática de la solicitud de servicio vía e-mail

# Reglas sobre la apertura automática de la solicitud de servicio vía e-mail

[RN] Sigue algunas de las principales reglas relacionadas con la apertura automática de Solicitud de servicio vía e-mail:

1.  Los mensajes de correo electrónico que se encuentren en la bandeja de entrada sin marcación de lectura se leerán y se abrirán solicitudes de servicio.

2.  El sistema marca el e-mail como leído para que no haya duplicación de registro.

3.  El sistema compara el e-mail del remitente con los registros internos para verificar si es usuario.

4.  Si el remitente es usuario del sistema: la solicitud se crea con él como solicitante.

5.  Si el remitente no es usuario del sistema: la solicitud se crea con el solicitante indicado en la pantalla de configuración de apertura automática.

6.  The attachments in the e-mail will be attached to the service request created, observed:

    -  El parámetro 318: Lista de extensiones de archivos que no se pueden adjuntar (Para más de una extensión separar por punto y coma);

    -  El parámetro 278: El tamaño máximo de archivo, en bytes para la carga. por default [1073741824] = 1 GB.



!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>09/19/2019 – Anna Martins
