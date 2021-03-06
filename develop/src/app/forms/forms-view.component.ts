import { html, LitElement, Component, css, styleMap, property } from '@rxdi/lit-html';
import { FormGroup, Form } from '@rxdi/forms';
import { InputErrorTemplate, EmailValidator } from './error';
import { InputStyle } from '../../../../src/styles/form/input';

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
            name="number"
            type="number"
            value=${this.form.value.number}
            placeholder="Email addressNumber"
            class="rx-input"
            required
            autofocus
          />
          <div class="height">
            ${InputErrorTemplate(this.form.get('number'))}
          </div>
          <input
            style="margin-top: 20px;"
            type="password"
            required
            class="rx-input"
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
            style="margin-top: 20px;"
            type="text"
            class="rx-input"
            value=${this.form.value.disabled}
            name="disabled"
            placeholder="Disabled input"
          />
          <div class="height"></div>
          <label>
            <input
              class="rx-checkbox"
              type="checkbox"
              value="free"
              name="checkbox"
            />
            Free
          </label>
          <div class="height"></div>
          <label>
            <input
              class="rx-checkbox"
              type="checkbox"
              value="monthly"
              name="checkbox"
            />
            Monthly
          </label>
          <div class="height"></div>
          <label>
            <input
              class="rx-checkbox"
              type="checkbox"
              value="premium"
              name="checkbox"
            />
            Premium
          </label>
          <div class="height"></div>
          <label>
            <input class="rx-radio" type="radio" value="1" name="radio" />
            Radio 1
          </label>
          <div class="height"></div>
          <label>
            <input class="rx-radio" type="radio" value="2" name="radio" />
            Radio 2
          </label>

          <div class="height">
            ${InputErrorTemplate(this.form.get('radio'))}
          </div>
          <textarea
            class="rx-textarea"
            rows="5"
            placeholder="Textarea"
          ></textarea>

          <!-- <rx-if .exp=${() =>
            this.form.get('password').invalid}>dadadaa</rx-if> -->
          <div class="height"></div>

          <div>
            <label>
              <input
                class="rx-checkbox"
                name="rememberMe"
                value="gosho"
                type="checkbox"
                required
              />
              Remember me
            </label>
          </div>
          <div class="height">
            ${InputErrorTemplate(this.form.get('rememberMe'))}
          </div>

          <div>
            <input
              class="rx-range"
              type="range"
              name="range"
              value="2"
              min="0"
              max="10"
              step="0.1"
            />
          </div>
          <div class="height">
            ${InputErrorTemplate(this.form.get('range'))}
          </div>
          <rx-button type="submit" palette="primary">${this.loading ? html`<rx-spinner color="white"></rx-spinner>` : 'Submit'}</rx-button>
        </form>
      </div>

      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/forms/master/README.md"
      ></markdown-reader>
    `;
  }
})
export class FormsViewComponent extends LitElement {
  @property()
  loading: boolean;
  @Form({
    strategy: 'input',
    name: 'my-form',
    strict: true,
    multi: false
  })
  private form = new FormGroup({
    password: '',
    disabled: '',
    email: '',
    rememberMe: ['', [EmailValidator]],
    select: '',
    checkbox: '',
    radio: '',
    number: 1,
    range: ''
  });

  OnUpdateFirst() {
    this.form.get('disabled').classList.add('rx-disabled');
    this.form.get('disabled').disabled = true;
    this.form.valueChanges.subscribe(console.log.bind(console));
  }

  onSubmit(event: Event) {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
    console.log(this.form.value);
  }

  hasErrors() {
    return this.form.updateValueAndValidity().length;
  }
}
