// https://medium.com/chrisburgin/rewriting-javascript-replacing-the-switch-statement-cfff707cf045
export const titleForCurrentUrl = (pathname) =>
  ({
    '/bebidas': 'Bebidas',
    '/comidas': 'Comidas',
    '/explorar': 'Explorar',
    '/explorar/comidas': 'Explorar Comidas',
    '/explorar/bebidas': 'Explorar Bebidas',
    '/receitas-favoritas': 'Receitas Favoritas',
    '/perfil': 'Perfil',
    '/receitas-feitas': 'Receitas Feitas',
    '/explorar/bebidas/area': 'Explorar Origem',
    '/explorar/comidas/area': 'Explorar Origem',
    '/explorar/bebidas/ingredientes': 'Explorar Ingredientes',
    '/explorar/comidas/ingredientes': 'Explorar Ingredientes',
  }[pathname]);

export const isSearchBtnOnTheCurrentPageAllowed = (pathname) => {
  if (
    pathname === '/bebidas' ||
    pathname === '/comidas' ||
    pathname === '/explorar/comidas/area' ||
    pathname === '/explorar/bebidas/area'
  ) {
    return true;
  } else {
    return false;
  }
};
