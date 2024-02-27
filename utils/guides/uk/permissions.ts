import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const ukPermissionsGuideNodes: IGuideNodes[] = [
  {
    tag: semanticTagKeys.h2,
    text: "Як видавати дозволи для функцій",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "За допомогою дозволів можна визначити для кожної функції обсяг прав під час роботи із системою.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Налаштовуйте дозволи, щоб розширити або обмежити можливості користувача, за яким закріплено ту чи іншу функцію.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Після реєстрації компанії на платформі Tonnus всі стандартні дозволи є тільки у власника. Надалі він видає дозволи інших функцій у компанії.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Видача дозволів",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Перейдіть у модуль «Оргструктура».",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Натисніть на функцію, для якої необхідно налаштувати роздільну здатність: наприклад, «Департамент персоналу».",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/permissions/image4.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "У панелі керування функцією перейдіть на вкладку «ДОЗВІЛ».",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/permissions/image3.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "У цій вкладці наведено всі можливі дозволи для цієї функції.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/permissions/image1.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Виберіть потрібні дозволи та активуйте їх за допомогою перемикача.",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/permissions/image2.png",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Опис дозволів",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.b,
    text: "БЛОК «ОРГСТРУКТУРА»",
    anchorId: 1,
    //attrs : {className: "hint-description"}
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/permissions/image9.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Створення – дозволяє створювати нові функції в оргструктурі.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Редагування – дозволяє редагувати оргструктуру.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Сортування — дозволяє змінити порядок підфункцій.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Переміщення — Ви можете змінити порядок функцій.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Видалення - дозволяє видаляти функції з оргструктури.",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Управління співробітниками – дозволяє прикріплювати працівників до функції та скасовувати прикріплення",
    prefix: { tag: semanticTagKeys.span, text: "6.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Керування роздільною здатністю — дозволяє редагувати набір дозволів для функцій.",
    prefix: { tag: semanticTagKeys.span, text: "7.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "БЛОК «ЗАДАЧІ, ЩО ПОВТОРЮЮТЬСЯ»",
    anchorId: 2,
    //attrs : {className: "hint-description"}
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/permissions/image8.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Створення — дозволяє створювати завдання, що повторюються.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Редагування — дозволяє змінювати завдання, що повторюються.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Видалення - дозволяє видаляти завдання, що повторюються, із системи.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Управління паузою — дозволяє призупиняти і відновлювати завдання, що повторюються.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Перегляд історії — дозволяє переглядати історію дій з кожного завдання, що повторюється.",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "БЛОК «СПІВРОБІТНИКИ»",
    anchorId: 3,
    //attrs : {className: "hint-description"}
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/permissions/image10.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Перегляд номера телефону — Ви можете побачити контактні номери працівників у модулі «Співробітники».",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Редагування – дозволяє редагувати профілі працівників у модулі «Співробітники».",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Видалення - дозволяє видаляти профілі співробітників у модулі «Співробітники».",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Створення запрошення - дозволяє додавати співробітників до системи в модулі «Співробітники».",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Видалення запрошення - дозволяє видаляти посилання для запрошення співробітників із системи.",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "БЛОК «КОМПАНІЯ»",
    anchorId: 4,
    //attrs : {className: "hint-description"}
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/permissions/image5.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Назва та опис — дозволяє змінювати назву та опис компанії.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Часовий пояс — Ви можете змінити часовий пояс компанії",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Графік роботи - дозволяє змінювати день початку тижня та графік роботи компанії.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "БЛОК «ЗВІТИ»",
    anchorId: 5,
    //attrs : {className: "hint-description"}
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/permissions/image6.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "По комунікаціях – відкриває доступ до модуля «Звіти – з комунікацій», де відображається інформація щодо роботи із завданнями в компанії.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "По Драйверах - відкриває доступ до модуля «Звіти драйверів», де відображаються дані по роботі з драйверами в компанії. БЛОК «ГРАФІК РОБОТИ»",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "БЛОК «ГРАФИК РАБОТЫ»",
    anchorId: 6,
    //attrs : {className: "hint-description"}
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/permissions/image7.png",
    },
  },
  {
    tag: semanticTagKeys.b,
    text: "Перегляд:",
  },
  {
    tag: semanticTagKeys.p,
    text: "Усі функції – дозволяє переглядати графік роботи всіх функцій на оргструктурі.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Підлеглі функції - дозволяє переглядати графік роботи всіх функцій, які ПІД вами на оргструктурі.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Функції керівників – дозволяє переглядати графік роботи всіх функцій, що знаходяться НАД вами на оргструктурі.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Редагування:",
  },
  {
    tag: semanticTagKeys.p,
    text: "Усі функції – дозволяє редагувати графік роботи всіх функцій на оргструктурі.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Власні функції – дозволяє редагувати графік роботи лише ваших функцій на оргструктурі.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Підлеглі функції – дозволяє редагувати графік роботи всіх функцій, що знаходяться під вами на оргструктурі.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
];
