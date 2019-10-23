import { html, LitElement, Component, css } from '@rxdi/lit-html';
import { FormGroup, Form } from '@rxdi/forms';
import { InputErrorTemplate, EmailValidator } from './error';
import { InputStyle } from '@rxdi/ui-kit/styles/form/input';

/**
 * @customElement forms-view-component
 */
@Component({
  selector: 'forms-view-component',
  style: css`
    ${InputStyle}
    .container {
      margin: 0 auto;
      width: 630px;
      padding: 50px;
      background-color: white;
    }
    .height {
      height: 30px;
    }
    label {
      color: #666;
    }
  `,
  template(this: FormsViewComponent) {
    return html`
      <div class="container">
        <form
          id="my-form"
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
            class="rx-input"
            required
            autofocus
          />
          <div class="height">
            ${InputErrorTemplate(this.form.get('email'))}
          </div>
          <input
            style="margin-top: 20px;"
            type="password"
            required
            class="rx-input"
            #pesho
            value=${this.form.value.password}
            name="password"
            placeholder="Password"
          />
          <div class="height">
            ${InputErrorTemplate(this.form.get('password'))}
          </div>
          <div class="height"></div>
          <select form="my-form" name="select" class="rx-select">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <div class="height"></div>
          <input
            class="rx-checkbox"
            type="checkbox"
            value=${this.form.value.checkbox}
            name="checkbox"
          />
          <div class="height"></div>
          <input
            class="rx-checkbox"
            .checked=${true}
            type="checkbox"
            value=${this.form.value.checkbox}
            name="checkbox"
          />
          <div class="height"></div>
          <input
            class="rx-radio"
            type="radio"
            value=${this.form.value.checkbox}
            name="checkbox"
          />
          <div class="height"></div>
          <input
            class="rx-radio"
            .checked=${true}
            type="radio"
            value=${this.form.value.checkbox}
            name="checkbox"
          />

          <div class="height">
            ${InputErrorTemplate(this.form.get('select'))}
          </div>
          <textarea
            class="rx-textarea"
            rows="5"
            placeholder="Textarea"
          ></textarea>

          <!-- <rx-if .exp=${() =>
            this.form.get('password').invalid}>dadadaa</rx-if> -->

          <div>
            <label>
              <input name="rememberMe" type="checkbox" required /> Remember me
            </label>
          </div>
          <div class="height">
            ${InputErrorTemplate(this.form.get('rememberMe'))}
          </div>
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
    rememberMe: ['', [EmailValidator]],
    select: '',
    checkbox: ''
  });

  OnUpdateFirst() {}

  onSubmit(event: Event) {
    console.log(this.form.value);
  }

  hasErrors() {
    return this.form.updateValueAndValidity().length;
  }
}
