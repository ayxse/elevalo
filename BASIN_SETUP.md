# Configurar el formulario con Basin

El formulario de Elevalo mantiene su interfaz actual y usa Basin solamente para recibir solicitudes, guardar archivos y enviar notificaciones.

## 1. Crear el formulario

1. Crea una cuenta en [Basin](https://usebasin.com/).
2. Crea un nuevo form endpoint para `Elevalo - Solicitudes de proyectos`.
3. Copia el endpoint completo. Tiene este formato:

```text
https://usebasin.com/f/FORM_ID
```

No es una clave privada. Es la direccion publica a la que envia el formulario, igual que el atributo `action` de un formulario HTML.

## 2. Desarrollo local

Crea un archivo `.env.local` en la raiz del proyecto:

```text
VITE_BASIN_FORM_ENDPOINT=https://usebasin.com/f/FORM_ID
```

Reinicia `npm run dev` despues de crear o cambiar ese archivo.

## 3. GitHub Pages

El workflow lee el endpoint desde una variable de GitHub:

1. Abre el repositorio en GitHub.
2. Ve a `Settings` -> `Secrets and variables` -> `Actions`.
3. Abre la pestana `Variables`.
4. Crea `BASIN_FORM_ENDPOINT` con el endpoint completo de Basin.
5. Ejecuta nuevamente el workflow de GitHub Pages o haz un nuevo push.

## 4. Notificaciones

En Basin, abre el formulario y configura:

- `Emails`: agrega y verifica el correo que recibira las solicitudes.
- `Reply-to`: usa el campo `clientEmail` para poder responder al cliente.
- `Spam`: activa el filtro basico y permite solamente los dominios publicados.
- `Allowed domains`: agrega `ayxse.github.io`, el dominio final de Elevalo y `localhost` mientras haces pruebas.

El formulario ya incluye el campo `_gotcha` que Basin reconoce como honeypot.

## 5. Archivos

El formulario envia:

- `logo`: un logo o documento de referencia;
- `attachments[]`: multiples fotos del negocio, usando el nombre requerido por Basin;
- todos los campos de contacto, proyecto, vision, mision y estilo.

Los archivos quedan disponibles junto a la solicitud en el dashboard de Basin. Conviene enviar una prueba pequeña primero y revisar tanto el inbox como la carpeta de spam de Basin.

## 6. Verificacion final

1. Completa el formulario publicado con un email real.
2. Sube un logo y dos imagenes pequenas.
3. Confirma que aparece la solicitud en Basin.
4. Confirma que llega el correo de notificacion.
5. Abre y descarga los archivos desde la solicitud.
