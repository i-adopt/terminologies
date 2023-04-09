export function load({ params }) {
  return {
    CURRENT_PAGE: params.slug || 'all',
  };
}

export const trailingSlash = 'always';
