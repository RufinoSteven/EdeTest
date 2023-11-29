
README - Ejecución de Pruebas Automatizadas E2E

Este repositorio incluye pruebas automatizadas E2E para la página Demo Blaze. Para ejecutar las pruebas, sigue estos pasos:

Prerrequisito:
Asegúrate de tener Node.js instalado. Si no lo tienes, puedes descargar la última versión desde el siguiente enlace: Node.js Download.

1-Abre la consola y ejecuta los siguientes comandos:

cd <nombre_de_la_carpeta>
npm install

2-Después, ejecuta el siguiente comando en la consola:
npx cypress install

3-Para ejecutar las pruebas, utiliza el siguiente comando:
npx cypress run --spec "cypress/e2e/*"

