# Тестове завдання Смолов Кирило Yalantis

## Виконанi завдання
* Профіль містить наступну інформацію:
  * ім'я
  * прізвище
  * email
  * фото профілю
* Фото зберiгається у папку "images", профiль у базу PostgreSQL
* Фото зменшується до 200*200px 
* Повертається id користувача
* Можна отримати данi користувача по id. У даних повертається iм`я, email, назва фото.
* Щоб отримати фото треба перейти по `/images/{назва фото}`
* Використовувався typescript
* Має обробку помилок

## npm scripts
* `start`: лiнтинг i запуск сервера
* `start:dev`: запуск сервера по змiнi файлу
* `prebuild` & `build`: лiнтинг i компiляцiя
* `lint`: лiнтинг з eslint
