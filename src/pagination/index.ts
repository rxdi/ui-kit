import { PaginationComponent } from './pagination.component';

declare global {
  interface HTMLElementTagNameMap {
    'rx-pagination': PaginationComponent;
  }
}

export * from './pagination.component';

export const Paginator = <T>(items: T[], page = 1, per_page = 10) => {
  const offset = (page - 1) * per_page;
  const data = items.slice(offset).slice(0, per_page);
  const total_pages = Math.ceil(items.length / per_page);
  return {
    page,
    per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data,
    pages: [
      ...Array.from(Array(total_pages).keys()).map((item, index) => {
        return {
          active: index + 1 === page,
        };
      }),
    ],
  };
};
