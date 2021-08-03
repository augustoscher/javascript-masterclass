function registerGaEvent(eventCategory, eventAction, eventLabel, eventValue) {
  window.dataLayer = window.dataLayer || [];
  const data = {
    event: 'gaEvent',
    event_category: eventCategory,
    event_action: eventAction,
    event_label: eventLabel,
    event_value: eventValue,
  };
  window.dataLayer.push(data);
}

export default registerGaEvent;
