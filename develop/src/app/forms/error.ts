import { html } from '@rxdi/lit-html';
import { InputErrorMessage } from '@rxdi/forms';

export function InputErrorTemplate(input: HTMLInputElement) {
  if (input && !input.checkValidity()) {
    const message = input.validationMessage;
    // const key = Object.keys(InputValidityState).filter(o => input.validity[o])[0];
    // message = translate(key, 'bg_BG');
    return html`
      <style>
        .validation-error {
          color: #a94442;
          font-size: 13px;
        }
      </style>
      <span class="validation-error">${message}</span>
    `;
  }
  return '';
}



export function EmailValidator(
    element: HTMLInputElement
  ): InputErrorMessage<string> {
    if (
        !element.checked
    ) {
      element.classList.add('is-invalid');
      return { key: 'remember-me', message: 'Please check remember me' };
    }
    element.classList.remove('is-invalid');
  }

