import {  notification } from 'antd';

export const openBadNotif= type => {
  notification[type]({
    message: 'Что-то пошло не так :(',
    description:
      'Возможно,вы неправильно ввели название',
  });
};
export const openGoodNotif = type => {
  notification[type]({
    message: 'Все получилось!',
    description:
      'Успешно добавлено в библиотеку',
  });
};