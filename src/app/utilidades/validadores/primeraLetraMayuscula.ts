import { AbstractControl, ValidatorFn } from '@angular/forms';

export function primeraLetraMayuscula(): ValidatorFn  {
  return (control: AbstractControl) => {
    const valor =  control.value as string;
    if (!valor) { return; }
    if (valor.length === 0) { return; }

    const primeraLetra = valor[0];
    if (primeraLetra !== primeraLetra.toUpperCase()) {
      return {
        primeraLetraMayuscula: {
          mensaje: 'La primera letra debe ser mayuscula'
        }
      };
    }
    return;
  };
}
