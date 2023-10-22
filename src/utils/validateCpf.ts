import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cpfValidator(
  control: AbstractControl
): ValidationErrors | null {
  if (!control.value || !control.value.cpf) {
    return null;
  }

  let cpf = control.value.cpf;

  if (cpf.length === 11) {
    cpf = formatCpf(cpf);
  }

  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  if (!regex.test(cpf)) {
    return { invalidFormat: true };
  }

  const numbers = cpf.replace(/\D/g, '');

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(numbers.substring(i - 1, i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(numbers.substring(9, 10))) {
    return { invalidCPF: true };
  }

  sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum += parseInt(numbers.substring(i - 1, i)) * (12 - i);
  }

  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(numbers.substring(10, 11))) {
    return { invalidCPF: true };
  }

  return null;
}

function formatCpf(cpf: string) {
  const numbers = cpf.replace(/\D/g, '');

  const formatResponse = numbers.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    '$1.$2.$3-$4'
  );

  return formatResponse;
}
