import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const ukOrgchartNodes: IGuideNodes[] = [
  {
    tag: semanticTagKeys.h2,
    text: "Налаштування оргструктури ",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Оргструктура — це схематичне зображення функціональних підрозділів вашої компанії, також порядку їх взаємодії.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Після реєстрації заповніть профіль компанії та виберіть термінологію для вашої оргструктуры. Визначіться, яким терміном в компанії буде називатися результат: наприклад, «ЦКП», «ОКР» або «Результат».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image28.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Далі оберіть, яким чином ви будете створювати оргструктуру — з нуля або на основі класичного шаблону з сімома підрозділами.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image8.gif",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Оргструктура з нуля",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Якщо обрати створення оргструктури з нуля, то сторінка модуля «Оргструктура» буде виглядати так:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image24.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "В робочому полі оргструктури ви побачите функцію «Власник» з даними, котрі ви додали при реєстрації.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Для того щоб внести в оргструктуру всіх керівників, натисніть на значок налаштування біля назви цієї функції.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "В випадаючому меню виберіть команду «Додати під функцію».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image15.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Зверніть увагу: тут відобразиться термін, котрий ви ввели раніше для визначення результату функції.",
    text: "В діалоговому вікні введіть назву під функції і вкажіть її результат — фактичний підсумок виконання робіт. Зверніть увагу: тут відобразиться термін, котрий ви ввели раніше для визначення результату функції.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Наприклад, для функції «Моніторинг ЗМІ» результатом буде «аналитичний звіт про информаційне поле бренду для щонедільної наради». Інший приклад: для функції «Продаж» результат можно описати як «платежі, що надійшли на рахунки компанії»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image17.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Для кожної функції можно обрати колір. Кольорове маркування функції або груп функцій допоможе вам скоріше орієнтуватися в оргструктурі.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image10.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Окрім того, в цьому вікні можна змінити батьківську функцію. Наприклад, якщо виконавчий директор підпорядковується напряму власнику компанії, батьківською функцією повинен стати «Власник».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image4.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Тут також можна обрати розташування під функцій в оргструктурі — вертикальне або горизонтальне.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image7.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Так виглядає вертикальне розташування:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image1.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Так виглядає горизонтальне розташування:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image26.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Ви можете створювати під функції для тих функцій, які вже є в оргструктурі: для цього натисніть на значок налаштування біля відповідної назви та виконайте дії, описані вище.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "За допомогою інших команд випадаючого меню можна виконувати наступні дії:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image5.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "«Перемістити функцію»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Ця команда дозволяє змінити батьківську функцію для обраного елементу оргструктури. Наприклад, в компанії пройшла реструктуризація, і тепер за процес рекрутингу відповідає керівник функції найму. Функцію «Рекрутинг» в цьому випадку слід передати у підпорядкування функції «Найм». Для цього виберіть команду «Перемістити функцію».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image16.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Після цього натисніть на кнопку «Зберегти». Тепер функція «Рекрутинг» зайняла нове місце в оргструктурі.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "«Сортувати під функції»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Ця команда дозволяє змінити порядок відображення під функцій одного рівня. Наприклад, потрібно розмістити підпорядковані «Власнику» функції в наступному порядку: «Асистент» — «Фінансовий директор» — «Генеральний директор».  Для цього виберіть команду «Сортувати під функції».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "В діалоговому вікні, що відкрилося переміщуйте під функції, натиснувши і утримуючи ліву кнопку миші.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image20.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Зверніть увагу: така можливість з’являється тільки при наявності декількох під функцій одного рівня. Наприклад, якщо у функції «Продаж» є під функції — «Первинні продажі» або «Вторичні продажі», — їх можна сортувати. Однак, якщо у функції «Продажі» немає підпорядкованих елементів, ця команда буде неактивною.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Після внесення змін натисніть на кнопку «Зберегти».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "«Відкрити панель функції»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "За допомогою цієї команди ви зможете змінити назву функції, переформулювати її результат, присвоїти їй інший колір або задати вертикальне чи горизонтальне розташування під функцій.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image13.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Ця команда також дозволяє управляти обранною функцією: наприклад, прикріпити до неї співробітника, створити повторюючу задачу або додати дозволи. На етапі створення оргструктури ці можливості не знадобяться, тому більш детально про те, як їх використовувати, ви дізнаєтесь з наступних уроків.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "«Видалити функцію»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Ця команда дозволяє видаляти непотрібні елементи оргструктури.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image21.gif",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Фільтри оргструктури",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "З допомогою фільтрів в правому верхньому куті екрану можна відкрити або сховати описання результатів поруч з заголовками функцій, а також імена співробітників, прикріплених до функцій.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image9.gif",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Друк або видалення ",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Готову оргструктуру ви можете відправити на друк або видалити з системи.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image14.gif",
    },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image18.gif",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Класична оргструктура",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "При виборі класичного шаблону в робочому полі модуля ви побачите готову оргструктуру з сім’ю підрозділами.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image23.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Для того щоб змінити характеристики того чи іншого підрозділу, натисніть на його плашку, а потім вкажіть нову назву, формулювання ЦКП або задайте колір",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image2.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Ви можете створити нові під функції, підпорядковані існуючим функціям:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image19.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "За допомогою інших команд випадаючого меню можна виконувати наступні дії:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "«Перемістити функцію»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Ця команда дозволяє призначити нову батьківську функцію для обраного елементу оргструктури.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image25.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "У діалоговому вікні оберіть нову батьківську функцію.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "«Сортувати під функції»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Ця команда дозволяє змінити послідовність під функцій.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image6.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "У діалоговому вікні, що відкрилося переміщуйте під функції, натиснувши і утримуючи ліву кнопку миші.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Після внесення змін натисніть на кнопку «Зберегти».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "«Відкрити функцію»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image11.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "У вкладці «СПІВРОБІТНИКИ» ви можете змінити назви посад, які відобразяться в оргструктурі.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image3.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Окрім того, тут можна прикріпити співробітників до функції, а в інших вкладках цього вікна — створити для неї повторюючу задачу або додати дозволи. На етапі створення оргструктури ці можливості не знадобляться.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "«Видалити функцію»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Ця команда дозволяє видаляти непотрібні елементи оргструктури.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image22.gif",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Фільтри оргструктури",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "За допомогою фільтрів в правому верхньому куті екрану можна відкрити або сховати опис результатів поруч із заголовками функцій, а також імена співробітників, прикріплених до функцій.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image27.gif",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Друк або видалення",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Ви можете відправити оргструктуру на друк або зберегти її в файлі формату PDF. Якщо оргструктура дуже велика, для коректного відображення на сторінці необхідно змінити масштаб у вікні додаткового налаштування друку.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/orgchart/image12.gif",
    },
  },
];
