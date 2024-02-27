import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const ukEmployeeGuideNodes: IGuideNodes[] = [
  {
    tag: semanticTagKeys.h2,
    text: "Щоб додати співробітника до системи:",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Зайдіть у модуль «Співробітники».",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/employee/image10.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "На верхній панелі натисніть кнопку «Запросити співробітника».",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/employee/image1.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Виберіть один із двох способів запрошення працівників:",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Перший спосіб: особисте запрошення електронною поштою",
  },
  {
    tag: semanticTagKeys.p,
    text: "Введіть електронну адресу співробітника, якого потрібно запросити на платформу, та виберіть його функцію в оргструктурі.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Увага: якщо працівник відповідає за кілька функцій, це можна вказати під час додаткових налаштувань, коли створюється запрошення.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/employee/image12.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Після цього натисніть кнопку «Запросити». Співробітник отримає листа з посиланням для приєднання до платформи Tonnus.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/employee/image4.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "При успішній реєстрації співробітника у системі, його ім'я відобразиться в оргструктурі з урахуванням призначених функцій.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Другий спосіб: багаторазовий код запрошення",
  },
  {
    tag: semanticTagKeys.p,
    text: "Цей варіант дозволяє запросити на платформу відразу кількох співробітників за допомогою унікального посилання та коду, який кожен новий користувач повинен буде вказати під час реєстрації в системі.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Щоб згенерувати посилання та код, поставте галочку у рядку «Багаторазовий код запрошення».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/employee/image2.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Для підтвердження натисніть кнопку «Запросити». У вікні, що з'явиться, скопіюйте посилання і код запрошення в буфер обміну, натиснувши на відповідні значки.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/employee/image7.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Надішліть цю інформацію всім співробітникам будь-яким зручним для вас способом. Кожен із запрошених повинен перейти за посиланням, ввести свої дані, у тому числі код запрошення, а потім завершити реєстрацію в системі самостійно.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Увага: посилання спільне для всіх. Це означає, що надалі вам потрібно прикріпити нових співробітників до функцій вручну.",
    boldPart: "Увага:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Для цього зайдіть у модуль «Оргструктура» та натисніть на функцію, за яку повинен відповідати будь-хто з нових співробітників.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/employee/image11.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Далі виберіть роль керівника або виконавця функції для нового співробітника. Надалі це дозволить йому отримати раніше створені для цієї функції регламенти (за їх наявності) і завдання, що повторюються.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Визначте роль нового співробітника та натисніть на відповідну кнопку «Додати».",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/employee/image9.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Ви можете змінити або редагувати назву посад. ",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/employee/image5.png",
    },
  },
  {
    tag: semanticTagKeys.b,
    text: "Запрошення на посилання можуть бути і персональними.\n",
  },
  {
    tag: semanticTagKeys.p,
    text: "Наприклад, потрібно запросити співробітника в систему з автоматичним прикріпленням до конкретної функції, але ви не знаєте адресу його електронної пошти та не хочете витрачати час на з'ясування.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/employee/image6.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "У цьому випадку натисніть кнопку «Запросити співробітника» у модулі «Співробітники». У вікні, що з'явиться, поставте галочку в рядку «Багаторазовий код запрошення», а нижче у списках, що випадають, виберіть одну або кілька функцій, для яких буде створено персональне посилання. Потім натисніть кнопку «Запросити».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Згенероване посилання та код можна скопіювати та надіслати співробітнику будь-яким зручним способом.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/employee/image8.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Коли співробітник перейде за посиланням, введе код і завершить реєстрацію в системі, його ім'я автоматично відобразиться в оргструктурі з урахуванням призначених функцій.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Щоб переглянути всі надіслані запрошення та при необхідності видалити деякі з них (наприклад, після реєстрації всіх потрібних співробітників за багаторазовим посиланням), натисніть кнопку «Список запрошень».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/employee/image3.png",
    },
  },
];
