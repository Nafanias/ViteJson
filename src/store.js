import { writable } from 'svelte/store';

// Функция для получения имени из Local Storage
const getNameFromLocalStorage = () => {
  return localStorage.getItem('name') || ''; // Возвращаем имя или пустую строку
};

// Создаем хранилище с начальным значением из Local Storage
export const nameStore = writable(getNameFromLocalStorage());

// Подписываемся на изменения в хранилище и сохраняем имя в Local Storage
nameStore.subscribe(value => {
  localStorage.setItem('name', value); // Сохраняем имя в Local Storage
});