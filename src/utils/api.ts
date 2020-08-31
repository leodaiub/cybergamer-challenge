import axios from 'axios';
const api: any = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://dribbble.com',
});

api.interceptors.request.use(config => {
  if (localStorage.getItem('access_token'))
    config.headers.Authorization = `Bearer ${localStorage.access_token}`;
  config.data = {
    client_id:
      '6490b556a1d3d59db567e9c70e3b71a7f07c3034e2093d893116ed70aa0563b0',
    client_secret:
      '9a4343a04969945b043e6c28d1f95c91444372a8f140961e346a331cea7805fd',
    code: window.localStorage.getItem('code'),
  };
  return config;
});

api.interceptors.response.use(null as any, error => {
  if (error.response.status === 401) {
    localStorage.removeItem('access_token');
  }
});

export default api;
