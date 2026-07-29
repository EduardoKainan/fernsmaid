export const META_PIXEL_ID = '2190299461321101';

export const trackMetaEvent = (eventName, params = {}) => {
  if (typeof window === 'undefined') return;
  if (typeof window.fbq !== 'function') return;

  window.fbq('track', eventName, params);
};

export const trackContact = (params = {}) => {
  trackMetaEvent('Contact', params);
};

export const trackLead = (params = {}) => {
  trackMetaEvent('Lead', params);
};
