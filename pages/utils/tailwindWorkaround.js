/* 
SSR/SSG: it would be nice to use window.matchMedia but there's no
'window' object on the server. Also don't want to mess with media
query code on the server. This is a simple solution to take advantage
of Tailwind Jit with 'dynamic' classes.

https://tailwindcss.com/docs/content-configuration#dynamic-class-names
Tailwind doesn't allow to construct class names dynamically, so this is
a workaround:

It is required to create a batch process and populate the following object. 
The idea is that classes are complete, unbroken strings (no string 
interpolation or concatenation of partial classes).

Nodejs can be used to create a loop with these classes:

for (let i = 1; i <= 1500; i++) {
  tailwindDimensions.mobileWidth[i] = `w-[${i}px]`;
  tailwindDimensions.mobileHeight[i] = `h-[${i}px]`;
  tailwindDimensions.desktopWidth[i] = `desktop:w-[${i}px]`;
  tailwindDimensions.desktopHeight[i] = `desktop:h-[${i}px]`;
}

NOTE: there's another method which consist of using the tailwind.config.js
to generates certain class names that don’t exist in the codebase (which
includes dynamically constructed classes). It works by simply adding the
classes to the so-called 'safelist', but all those classes will be included
in the final bundle.

https://tailwindcss.com/docs/content-configuration#safelisting-classes

*/

/* Add all the required entries, either manually
or by copy/pasting from some script. */
const tailwindDimensions = {
  mobileWidth: {
    375: "w-[375px]",
  },
  mobileHeight: {
    300: "h-[300px]",
  },
  desktopWidth: {
    400: "desktop:w-[400px]",
    500: "desktop:w-[500px]",
  },
  desktopHeight: {
    400: "desktop:h-[400px]",
    500: "desktop:h-[500px]",
  },
};

const getStyles = (dimension, pixelQuantity) => {
  return tailwindDimensions[dimension][pixelQuantity];
};

export { getStyles };
