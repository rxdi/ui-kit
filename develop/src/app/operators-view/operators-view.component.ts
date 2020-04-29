import { Component, html } from '@rxdi/lit-html';
import '../../../../src/operators';
import { ReactiveElement } from '../../../../src/';
import { IQuery, IContinent } from '../../introspection';
import { interval, BehaviorSubject } from 'rxjs';
import { tap, take } from 'rxjs/operators';

interface IQueryData {
  data: IQuery;
}

interface IPost {
  name?: string;
  counter?: number;
}

interface IUser {
  name?: string;
  posts?: IPost[];
}

@Component({
  selector: 'operators-view',
  template(this: OperatorsViewComponent) {
    return html`
      <rx-for .of=${['IterableItem 1', 'Iterable Item 2']}>
        <rx-let
          .item=${v =>
            html`
              ${v}
            `}
        ></rx-let>
      </rx-for>

      <rx-monad>
        <rx-state .value=${this.select(res => res.randomName)}></rx-state>
        <rx-render
          .state=${name => html`
            <p>${name}</p>
          `}
        >
        </rx-render>
      </rx-monad>

      <!-- Lenses -->
      <rx-monad>
        <rx-state .value=${{ pesho: { gosho: 'omgddddddddddddd' } }}></rx-state>
        <rx-lens match="pesho.gosho"></rx-lens>
        <rx-render></rx-render>
      </rx-monad>
      <div>
        <rx-button
          palette="danger"
          @click=${() => {
            this.setState({
              randomName: Math.random()
                .toString(36)
                .substring(7)
            });
          }}
        >
          Random String
        </rx-button>
      </div>

      <rx-monad>
        <rx-settings
          .value=${{
            fetchPolicy: 'cache-first'
          }}
        ></rx-settings>
        <rx-fetch
          query="{
            continents {
              name
            }
          }"
        ></rx-fetch>
        <rx-render
          .state=${({ data: { continents } }: IQueryData) => html`
            <ol>
              <rx-for .of=${continents}>
                <rx-let
                  .item=${({ name }: IContinent) =>
                    html`
                      <li>${name}</li>
                    `}
                ></rx-let>
              </rx-for>
            </ol>
          `}
        >
        </rx-render>
      </rx-monad>

      <rx-monad>
        <rx-fetch subscribe="{ notifications { appUpdated } }"></rx-fetch>
        <rx-render .state=${({ data: { notifications: { appUpdated }} }) => html`
          <p>${appUpdated}</p>
        `}>
        </rx-render>
      </rx-monad>

      <!-- Experimenting with monads -->

      <rx-monad>
        <rx-state .value=${this.state}></rx-state>
        <rx-lens .get=${['users', 0, 'posts', 0, 'name']}></rx-lens>
        <rx-render></rx-render>
      </rx-monad>

      <rx-monad>
        <rx-state .value=${this.state.pipe(take(3))}></rx-state>
        <rx-lens .ray=${res => res.users}> </rx-lens>
        <rx-render .state=${(users: IUser[], setState: (users: IUser[]) => void) => html`
          <rx-for .of=${users}>
            <rx-let .item=${({ posts }: IUser) => html`
              <rx-for .of=${posts}>
                <rx-let .item=${({ name }: IPost) => html`
                  <p>${name}</p>
                `}>
                </rx-let>
              </rx-for>
            `}>
            </rx-let>
          </rx-for>
        `}>
        </rx-render>
      </rx-monad>

      <rx-monad>
        <rx-state .value=${this.state}></rx-state>
        <rx-lens .get=${['users', 'all', 'posts', 'all']}></rx-lens>
        <rx-render .state=${(posts: IPost[]) => html`
          <rx-for .of=${posts}>
            <rx-let .item=${(res: IPost) => JSON.stringify(res)}></rx-let>
          </rx-for>
        `}>
        </rx-render>
      </rx-monad>

      <!-- Concept -->
      <!-- <rx-monad>
        <rx-state value="state"></rx-state>
        <rx-lens match="users"></rx-lens>
        <rx-render map="u">
          <rx-for of="u">
            <rx-let item="user">
              <rx-for of="user.posts">
                  <rx-let item="post">
                    <p>{{post.name}}</p>
                  </rx-let>
                </rx-for>
              </rx-let>
            </rx-for>
        </rx-render>
      </rx-monad> -->
      <!-- Concept -->

      <!-- Directly Edit counter and add template for all counters inside posts -->
      <rx-monad>
        <rx-state .value=${this.state}></rx-state>
        <rx-lens .get=${['users', 'all', 'posts', 'all', 'counter']}></rx-lens>
        <rx-render .state=${(counters: [number][]) => html`
          <rx-for .of=${counters}>
            <rx-let .item=${(counter: number[]) => html`
              <rx-monad>
                <rx-state .value=${counter[0]}></rx-state>
                <rx-render .state=${( c: number, setState: (c: number) => void) => html`
                  <p style="color: red">${c}</p>
                  <rx-button palette="danger" @click=${() => setState(c + 1)}>
                    Increment
                  </rx-button>
                  <rx-button palette="danger" @click=${() => setState(c - 1)}>
                    Decrement
                  </rx-button>
                `}>
                </rx-render>
              </rx-monad>
            `}>
            </rx-let>
          </rx-for>
        `}>
        </rx-render>
      </rx-monad>
      <!-- Get all user posts from state and add Increment and Decrement actions again on counter -->
      <rx-monad>
        <rx-state .value=${this.state}></rx-state>
        <rx-lens .get=${['users', 'all', 'posts', 'all']}></rx-lens>
        <rx-render .state=${(posts: [IPost][]) => html`
          <rx-for .of=${posts}>
            <rx-let .item=${(post: IPost[]) => html`
              <rx-monad>
                <rx-state .value=${post[0]}></rx-state>
                <rx-render .state=${(c: IPost, setState: (c: IPost) => void) => html`
                  <p style="color: red">${c.counter}</p>
                  <rx-button palette="primary" @click=${() => setState({ counter: c.counter + 1 })}>
                    Increment
                  </rx-button>
                  <rx-button palette="primary" @click=${() => setState({ counter: c.counter - 1 })}>
                    Decrement
                  </rx-button>
                `}>
                </rx-render>
              </rx-monad>
            `}>
            </rx-let>
          </rx-for>
        `}>
        </rx-render>
      </rx-monad>

      <rx-monad>
        <rx-state .value=${this.state}></rx-state>
        <rx-lens .get=${['users', 0, 'posts', 0, 'counter']}></rx-lens>
        <rx-render .state=${(counter: number, setState: (res: number) => void) => html`
          <p style="color: red">${counter}</p>
          <rx-button palette="warning" @click=${() => setState(counter + 1)}>
            Increment
          </rx-button>
          <rx-button palette="warning" @click=${() => setState(counter - 1)}>
            Decrement
          </rx-button>
        `}>
        </rx-render>
      </rx-monad>

      <markdown-reader
        link="https://raw.githubusercontent.com/rxdi/ui-kit/master/src/operators/README.md"
      ></markdown-reader>
    `;
  }
})
export class OperatorsViewComponent extends ReactiveElement<{
  users?: IUser[];
  randomName?: string;
}> {
  state = new BehaviorSubject({
    users: [
      { posts: [{ counter: 1, name: 'Init name' }] },
      { posts: [{ counter: 1, name: 'Init name2' }] }
    ]
  });
  private changeState = interval(1000).pipe(
    take(10),
    tap(res =>
      this.setState({
        users: [
          ...this.state.getValue().users,
          { posts: [{ counter: res + 5, name: 'new-name' + (res + 1) }] }
        ]
      })
    )
  );

  OnInit() {
    this.changeState.subscribe();
  }
}
