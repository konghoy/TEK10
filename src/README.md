<div style="margin-bottom: 2rem;">
<img style="float: left; height: 80px; width: unset; margin: 0;" src="/assets/img/logo/logo.svg" alt="Vex Logo"/>
<h1 style="height: 80px; line-height: 80px; margin: 0 0 0 70px; font-weight: 800; border: none; font-size: 3rem;">VEX</h1>
</div>

# Introduccion

Vex es una plantilla de administración de diseño de materiales creativa y responsiva creada con Angular 17+ y Angular-CLI. Se extiende el
Componentes de Material Design creados por el equipo de Angular y le ofrece todo lo que necesita para comenzar con su próximo
CRM, CMS, Gestión de Proyectos u otros proyectos..


Support is available through E-Mail ([themeforest@visurel.com](mailto:themeforest@visurel.com)). If you purchased the theme and love it, consider giving it a 5-star rating here on ThemeForest. It really helps pushing out more updates and adding more great features.

# Para empezar

> En esta sección encontrará la estructura básica de carpetas y todo lo que necesita para poner en funcionamiento la plantilla la primera vez y comenzar a desarrollar.

## Estructura de carpetas

|           Name | Description                                                                                                                                                         |
|---------------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `angular.json` | Se utiliza para la configuración de ajustes específicos del proyecto. Puede agregar estilos y scripts externos, cambiar la carpeta de salida, agregar activos, agregar archivos de entorno y más. |
| `node_modules` | Todos los módulos externos utilizados están aquí. No te metas con esta carpeta, ya que se genera automáticamente usando `npm install`.                                                   |
| `package.json` | Contiene todas las dependencias utilizadas para la producción y el desarrollo.                                                                                                      |
|          `src` | Contiene todo el código Angular-Typescript, activos y básicamente todo a lo que el usuario final tendrá acceso..                                                             |

## Instalacion

Angular-CLI le permite crear una nueva aplicación en cuestión de segundos y proporciona una forma increíble de generar andamios para básicamente todos los componentes de Angular. [Puede ver qué comandos están disponibles aquí.](//github.com/angular/angular-cli/blob/master/packages/angular/cli/README.md#generating-components-directives-pipes-and-services)

En esta sección, instalaremos Angular-CLI y sus requisitos previos y luego generaremos nuestro primer proyecto con algunos componentes diferentes..

### Prerequisitos

> Antes de que podamos instalar Angular-CLI, primero tendremos que configurar algunas cosas. Para ejecutar Angular-CLI primero necesitaremos instalar este requisito previo:

- **NodeJS** v10 or mas nueva

[Una instrucción detallada sobre cómo instalar NodeJS está disponible aquí.](//docs.npmjs.com/getting-started/installing-node)

### Installing Angular-CLI

Instalar Angular-CLI es tan sencillo como ejecutar este sencillo comando:

`npm install -g @angular/cli@latest`  
o
`sudo npm install -g @angular/cli@latest`

y el administrador de paquetes `npm` hará el resto.

### Instalar Vex Dependencias

Navegue a la carpeta Vex y ejecute `npm install` para instalar todas las dependencias requeridas por Vex.

## Iniciar el servidor de desarrollo

Correr `ng serve` para un servidor de desarrollo. Navegar a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos fuente..

## Build para Produccion

Si desea crear una compilación para un entorno de producción, simplemente puede ejecutar `npm run build` o `ng build --prod` y obtendrá archivos HTML y JS estáticos en la carpeta `/dist` listos para cargar en cualquier servidor.

# Customization

En esta sección, aprenderá cómo personalizar Vex para que sea exactamente como usted desea que sea.

## Configuracion

Configurar Vex Layout según sus necesidades es tan fácil como configurar un objeto simple con los valores que desee, aquí hay una configuración de ejemplo que maneja todo por usted :

Puede cambiar estos valores incluso en tiempo de ejecución y la página se ajustará a los cambios..

```typescript
const config = {
  id: 'vex-default',
  layout: 'horizontal',
  boxed: false,
  sidenav: {
    layout: 'expanded'
  },
  toolbar: {
    fixed: true
  },
  footer: {
    visible: true,
    fixed: true
  }
};
```

## Cambiar el estilo y las variables CSS

> La mayor parte del estilo (relleno, colores, fuentes, pesos de fuente, ...) está construido de manera muy modular y fácilmente personalizable. Si desea cambiar cualquier estilo específico globalmente, simplemente puede cambiar la variable CSS dentro del archivo `style.scss` y actualizará cada sección de la página..

Here are just a few example variables, almost everything is done through variables:

```scss
:root {
  --container-width: 1200px;
  --padding: 24px;
  --font: Roboto, 'Helvetica Neue', sans-serif;
  --font-weight-semi-bold: 500;
  --text-color: #{$dark-primary-text};
  --sidenav-width: 280px;
  --sidenav-background: #{$sidenav-background};
  --sidenav-color: white;
  // and much more...
}
```

## Agregar elementos del menú

Nuestro Menú se genera de forma completamente dinámica y, por lo tanto, es muy fácil de personalizar y usar. La forma más sencilla es simplemente inyectar NavigationService y simplemente anular el `items` instancia variable. Los elementos de navegación tienen la `NavigationItem` escriba que puede utilizar para autocompletar y seguridad de tipos. (¡Generalmente todos nuestros componentes tienen tipificaciones disponibles!)

Puedes agregar 3 tipos diferentes: **Subheading, Link, Dropdown**

Aquí hay un ejemplo dentro del AppComponent:

```typescript
@Component({
  selector: 'vex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vex';

  constructor(private navigationService: NavigationService) {
    this.navigationService.items = [
      {
        label: 'Subheading'
      },
      {
        label: 'Item with a Link',
        route: '/my-link',
        icon: icAssigment
      },
      {
        label: 'Dropdown Item',
        icon: icAdd,
        children: [
          {
            label: 'Item with Link inside Dropdown',
            route: '/custom-link'
          }
        ]
      }
    ];
  }
}
```

## Generando tu primer `Component`

> Ahora que hemos instalado todos los requisitos previos, es hora de comenzar a desarrollar nuestra aplicación. Angular-CLI ofrece mucha ayuda y le permite generar básicamente todos Angular-Components que haya.

Para generar nuestro primero `component` simplemente abrimos una terminal y navegamos en nuestra Angular-App. Ahora simplemente corremos `ng g component client` y obtenemos un nuevo componente en `/src/app/client` con los siguientes archivos:

- `client.component.ts`
- `client.component.html`
- `client.component.css`
- `client.component.spec.ts`

Los archivos `client.component.ts` y `client.component.spec.ts` contienen la mayor parte del código, los otros archivos solo contienen marcadores de posición.

**client.component.ts**

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html',
  styleUrls: ['client.component.css']
})
export class ClientComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
```

Al ejecutar este breve comando, nos ahorramos mucho tiempo creando todos estos `Component` archivos y código repetitivo.

[La sintaxis de todos los comandos está disponible aquí..](//github.com/angular/angular-cli/blob/master/packages/angular/cli/README.md#generating-components-directives-pipes-and-services)

## Generando un Servicio en una carpeta específica

Ahora tenemos nuestro `component`, pero ¿qué pasa si queremos compartir algunos datos entre componentes y necesitamos crear un `service` para gestionar todo esto. Bueno, probablemente querríamos que el servicio esté en la carpeta correcta, ya sea directamente en la carpeta de componentes o en la carpeta `shared` carpeta en `/src/app/`.

De cualquier manera, con Angular-CLI podemos generar en cualquier carpeta, donde queramos. Simplemente usa el path _(relative to `/src/app/`)_ y usarlo como el nombre del componente generado.

`ng g service shared/client`  
o
`ng g service client/shared/client`

O cualquier cosa que necesites.
Luego encontraremos dos archivos generados en nuestra carpeta especificada.: `client.service.ts` y `client.service.spec.ts`.

**client.service.ts**

```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class ClientService {
  constructor() {}
}
```

## Ejecución de pruebas unitarias

Correr `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Further help

> Si tiene alguna pregunta específica sobre la plantilla, puede contactarnos en cualquier momento a través de nuestro correo electrónico de soporte. ([themeforest@visurel.com](mailto:themeforest@visurel.com)) y le ayudaremos con cualquier problema que pueda encontrar. Si encuentra algún error o problema, no dude en enviárnoslo con una descripción detallada y solucionaremos el problema. ASAP.

Gracias por leer, si tienes alguna pregunta de preventa o simplemente cualquier cosa, no dudes en contactarnos.! :)
