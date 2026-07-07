import axios from 'axios';
// import { envVars } from '@/config/env';
import { apiErrorHandler } from '@/utils/api';
import { isClientSideComponent } from '@/utils/general';
import { showToast } from '../toaster';

const api = axios.create({
  baseURL: '',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// const publicApiPaths = [];

api.interceptors.request.use(
  async (config) => {
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
  },
  async (error) => {
    await apiErrorHandler({ debugText: 'Request Error:', error });
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  async (response) => {
    if (
      isClientSideComponent() &&
      response.config.method !== 'get' &&
      response.data.message &&
      typeof response.data.message === 'string'
    ) {
      showToast({ text: response.data.message, type: 'success' });
    }
    return response;
  },
  async (error) => {
    if (error.response) {
      await apiErrorHandler({ debugText: 'Response Error:', error });
    } else if (error.request) {
      await apiErrorHandler({ debugText: 'Request Error:', error });
    } else {
      await apiErrorHandler({ debugText: 'Error:', error });
    }
    return Promise.reject(error);
  }
);

export default api;
