import axios, { AxiosError, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import {
  User,
  LoginBack,
  StartChat,
  MessageBack,
  TranslateBack,
  PronunciationBack,
  Message,
  GrammarBack,
  Section,
  Hint
} from './interface';

axios.defaults.baseURL = 'http://20.73.114.5';

axios.defaults.timeout = 60000; // 60 seconds for debugging

axios.interceptors.request.use((config) => {
  const token = Cookies.get('access_token'); // Ottieni il token di accesso dal cookie
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    const { data, status, config } = error.response!;
    switch (status) {
      case 400:
        console.error(data);
        break;

      case 401:
        console.error('unauthorized');
        break;

      case 404:
        console.error('/not-found');
        break;

      case 500:
        console.error('/server-error');
        break;
    }
    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  postFormData: <T>(url: string, formData: FormData) =>
    axios
      .post<T>(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(responseBody)
};

const users = {
  login: (credentials: User) => request.post<LoginBack>('/user/login', credentials),
  sections: () => request.get<Section[]>('/user/sections')
};

const chat = {
  firstChat: (difficulty: StartChat, sectionId: number) =>
    request.post<MessageBack>(`/conversation/section/${sectionId}`, difficulty),
  message: (message: FormData, sectionId: number) =>
    request.postFormData<MessageBack>(`/conversation/section/${sectionId}/message`, message),
  pronunciation: (message: FormData) =>
    request.postFormData<PronunciationBack>('/feedback/pronunciation', message),
  grammar: (message: Message) => request.post<GrammarBack>('/feedback/grammar', message),
  translate: (text: string) => request.post<TranslateBack>('/feedback/translate', { text: text }),
  hint: (sectionId: number) => request.get<Hint>(`/feedback/simulate/${sectionId}`)
};

const api = {
  users,
  chat
};

export default api;
