let baseUrl = 'https://dev-api.hlyx.me';

// Update the baseUrl on every environment
// eslint-disable-next-line default-case
switch (window.location.host) {
  case 'dev.hlyx.me':
    baseUrl = 'https://dev-api.hlyx.me';
    break;

  case 'demo.hlyx.me':
    baseUrl = 'https://demo-api.hlyx.me';
    break;

  case 'www.hlyx.me':
    baseUrl = 'https://api.hlyx.me';
    break;

  case 'hlyx.me':
    baseUrl = 'https://api.hlyx.me';
    break;
}

export { baseUrl };
