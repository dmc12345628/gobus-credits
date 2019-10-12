# Varibles de CSS

Las variables CSS son entidades definidas autores CSS que contienen valores especificos que se pueden volver a utilizar en un documento se establece mediante notaciones de propiedades personalizadas.

## Agregar variables a CSS

Para agregar variables en CSS se ocupa un codigo que empieze con dos guiones (--).

Por ejemplo:

`(--main-color: black)`, para accefer a la funcion se ocupa el `var()` (Por ejemplo,color: `var(--main-color;)`;).

Las cariables se utilizan porque es mas facil de entender `--main-text-color` que `#00ff00`, especialmente si este mismo color se utiliza repetidamente.

## Ejemplo de variables para colores

``` css
elemento {
   --main-bg-color: brown
}
```

**Lo que hicimos aqui fue declarar la variable** 

Utilizando la variable:

``` css
elemento {
   background-color: var(--main-bg-color);
}
```

** Aqui utilizamos la variable en background para que sea de color brown.

## Ejemplo de variables para espacio

``` css
 section {
  --separacion: 4px;
}
```

**se asigna a la variable la separacion deseada**

Utilizando la variable:

``` css
section {
  margin: var(--separacion);
}
```

**se utilizo la variable para la separacion**

# Vaiables globales

Las variables deben declararse dentro de un selector se acostumbra usar:  `:root` para que la variable sea global se declara con dos guiones (--) y el nombre para utilizarlas se usa la funcion `var()` y entre parentesis se escribe el nombre de la variable.

## Ejemplo:

``` css
:root {
   --my-color: red
}

body {
   color: var(--my-color);
} 
h1 {
  --color: blue;
}
```

En este caso todos los textos (parrafos,titulos,etc) seran de color rojo por herencia, porque desciende de body al resto de elementos (comportamiento propio de css). Pero todos los (parrafos,titulos,etc) de **h1** seran azules porque hemos usado la cascada para redefinir el valor de la propiedad personalizada `--color`.

Las variables de CSS se utilizan para paginas grandes para aqullos datos que tienen elementos del mismo color o tamaño, esto les puede ayudar para modificar los colores o tamaños mucho mas rapido y no estar haciendolo uno por uno. Solo debes modificar la variable para que los demas datos que tengan esa variable se modifiquen.