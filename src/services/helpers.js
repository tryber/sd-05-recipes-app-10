export const titleAndIsPageSearchBtnAllowed = (pathname) => {
  let title = '';
  let pageSearchAllowed = false;

  switch (pathname) {
    case '/bebidas':
      title = 'Bebidas';
      pageSearchAllowed = true;
      break;
    case '/comidas':
      title = 'Comidas';
      pageSearchAllowed = true;
      break;
    case '/explorar':
      title = 'Explorar';
      break;
    case '/explorar/comidas':
      title = 'Explorar Comidas';
      break;
    case '/explorar/bebidas':
      title = 'Explorar Bebidas';
      break;
    case '/receitas-favoritas':
      title = 'Receitas Favoritas';
      break;
    case '/perfil':
      title = 'Perfil';
      break;
    case '/receitas-feitas':
      title = 'Receitas Feitas';
      break;
    case '/explorar/bebidas/area':
      title = 'Explorar Origem';
      pageSearchAllowed = true;
      break;
    case '/explorar/comidas/area':
      title = 'Explorar Origem';
      pageSearchAllowed = true;
      break;
    case '/explorar/bebidas/ingredientes':
      title = 'Explorar Ingredientes';
      break;
    case '/explorar/comidas/ingredientes':
      title = 'Explorar Ingredientes';
      break;
    default:
      return null;
  }

  return {
    title,
    pageSearchAllowed,
  }
}