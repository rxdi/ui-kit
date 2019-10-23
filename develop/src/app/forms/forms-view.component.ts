import { html, LitElement, Component, css } from '@rxdi/lit-html';
import { FormGroup, Form } from '@rxdi/forms';
import { InputErrorTemplate, EmailValidator } from './error';

/**
 * @customElement forms-view-component
 */
@Component({
  selector: 'forms-view-component',
  style: css`
    .container {
      margin: 0 auto;
      width: 430px;
    }
  `,
  template(this: FormsViewComponent) {
    return html`
      <div class="container">
        <form
          name="my-form"
          style="display: grid; margin-top: 50px;"
          @submit=${(e: Event) => !this.hasErrors() && this.onSubmit(e)}
          novalidate
        >
          <input
            name="email"
            type="email"
            value=${this.form.value.email}
            placeholder="Email address"
            required
            autofocus
          />
          ${InputErrorTemplate(this.form.get('email'))}
          <input
            style="margin-top: 20px;"
            type="password"
            required
            #pesho
            value=${this.form.value.password}
            name="password"
            placeholder="Password"
          />
          ${InputErrorTemplate(this.form.get('password'))}

          <rx-if .exp=${() => this.form.get('password').invalid}>dadadaa</rx-if>

          <div>
            <label>
              <input name="rememberMe" type="checkbox" required /> Remember me
            </label>
          </div>
          ${InputErrorTemplate(this.form.get('rememberMe'))}
          <rx-button type="submit" palette="primary">Submit</rx-button>
        </form>
      </div>

      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/forms/master/README.md"
      ></markdown-reader>
    `;
  }
})
export class FormsViewComponent extends LitElement {
  @Form({
    strategy: 'input',
    name: 'my-form'
  })
  private form = new FormGroup({
    password: '',
    email: '',
    rememberMe: ['', [EmailValidator]]
  });

  OnUpdateFirst() {}

  onSubmit(event: Event) {
    console.log(this.form.value);
  }

  hasErrors() {
    return this.form.updateValueAndValidity().length;
  }
}
