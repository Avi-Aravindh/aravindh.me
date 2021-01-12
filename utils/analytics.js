import ReactGA from 'react-ga';
export const initGA = () => {
  console.log('GA init');
  // ReactGA.initialize('G-V25B8YLCYF');
  // ReactGA.initialize('UA-187162579-1');
  ReactGA.initialize('UA-187162579-2');
};
export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
