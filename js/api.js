const BASE_URL = 'https://28.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET_POST: 'GET',
  SEND_POST: 'POST',
};
const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу.',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте еще раз.',
};

const load = (route, errorText, method = Method.GET_POST, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA);

const sendData = (body) => load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.SEND_POST, body);

export { getData, sendData };
