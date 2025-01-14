console.log("Topic: Promises");
// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// let p1 = new Promise(() => {
// console.log('Promise is created')
// })
// console.log(p1)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// const p2 = new Promise((res,rej) => {res('Promise Data')})
// console.log(p2)
// p2.then(console.log)

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// const p3 = Promise.reject('Promise error')
// console.log(p3)
// p3.catch(console.log)

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// const p4 = new Promise((res) => {
//     setTimeout(() => {res('Promise Data')}, 3000)
// })
// console.log(p4)
// p4.then(console.log)

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три кнопки и три обработчика события click для этих кнопок
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый сосзданный промис,
// свойства resolve и reject получают ссылки на сооветствующие функции
// resolve и reject. Следующий два обработчика запускают методы resolve и reject.

const handlePromise = {
  promise: null,
  resolve: null,
  reject: null,
  onSuccess(paramName) {
    console.log(`Promise is resolved with data: ${paramName}`);
    return paramName;
  },
  onError(paramName) {
    console.log(`Promise is rejected with error: ${paramName}`);
  }
};

document.querySelector("#btn-create-promise").addEventListener("click", () => {
  handlePromise.promise = new Promise((res, rej) => {
    console.log("Promise is created");
    handlePromise.resolve = res;
    handlePromise.reject = rej;
  })
    .then(handlePromise.onSuccess, handlePromise.onError)
    .then(handlePromise.onSuccess, handlePromise.onError);
});

document.querySelector("#btn-resolve-promise").addEventListener("click", () => {
  handlePromise.resolve && handlePromise.resolve("some data");
});

document.querySelector("#btn-reject-promise").addEventListener("click", () => {
  handlePromise.resolve && handlePromise.reject("error message");
});

// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then

// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.
// Task 08
// Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения
// Обработайте даное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.

// const p7 = new Promise ((res, rej) => {
//     setTimeout(() => {
//         res(
//             'me name is'
//         )
//     }, 1000)
// })

// function onSuccess(data) {
//     throw new Error('Error msg')
//     return `${data} Ann`
// }

// p7.then(onSuccess).then(console.log)

// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData

// function getPromiseData(p) {
//     p.then(console.log);
// }

// const person = {
//     name: 'Anna'
// }
// getPromiseData(Promise.resolve(person))

// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль

const p10_1 = new Promise(res => {
  setTimeout(() => {
    res({ name: "Anna" });
  }, 2000);
});
const p10_2 = new Promise((res, rej) => {
  setTimeout(() => {
    // res({ age: 16 });
    rej("erorr");
  }, 3000);
});

const p10 = Promise.all([p10_1, p10_2])
  .then(([obj1, obj2]) => {
    console.log({ ...obj1, ...obj2 });
  })
  .catch(console.log);

// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.

// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку. Добавьте обработчик для кнопки.
// Используя метод race организуйте отмену промиса.

const p12_1 = new Promise(res => {
  setTimeout(() => {
    res("Promise data");
  }, 2000);
});

let cansel;

const p12_2 = new Promise((res, rej) => {
  cansel = rej;
});

document.querySelector("#btn-cancel-promise").addEventListener("click", () => {
    cansel('cansel')
  });
  Promise.race([p12_1, p12_2])
    .then(console.log)
    .catch(console.log)