const emitRouteChange = () => {
  window.dispatchEvent(new Event('popstate'));
};

export const navigateTo = (path: string) => {
  if (window.location.pathname !== path) {
    window.history.pushState({}, '', path);
    emitRouteChange();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const scrollToSection = (href: string, offset = 82) => {
  const scroll = () => {
    const element = document.querySelector(href);
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  if (window.location.pathname !== '/') {
    window.history.pushState({}, '', '/');
    emitRouteChange();
    window.setTimeout(scroll, 80);
    return;
  }

  scroll();
};
