import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const ukScheduleNodes: IGuideNodes[] = [
  // {
  //   tag: semanticTagKeys.h2,
  //   text: "Графіки роботи співробітників",
  //   attrs: {className : "hint-title"},
  // },
  {
    tag: semanticTagKeys.p,
    text: "Платформа Tonnus дозволяє гнучко налаштовувати графіки роботи співробітників. За замовчуванням персональний графік створюється на два тижні вперед і заповнюється автоматично відповідно до робочого графіка компанії.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image16.png",
    },
  },
  {
    tag: semanticTagKeys.b,
    text: "Хто може працювати із графіками співробітників",
  },
  {
    tag: semanticTagKeys.p,
    text: "Налаштовувати робочий графік працівників може користувач із правами на редагування графіків. Щоб дати такі права, у модулі «Оргструктура» виберіть функцію співробітника, відповідального за складання графіків, перейдіть на вкладку «ДОЗВОЛИ» і в блоці «Графіки» відкрийте доступ до відповідних можливостей.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image12.gif",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Налаштування графік",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Робочі дні ",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Налаштування робочих днів співробітника:",
  },
  {
    tag: semanticTagKeys.p,
    text: "Знайдіть у списку потрібного співробітника чи підрозділ компанії. Для зручності інші графіки можна згорнути.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image19.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "У рядку вибраного співробітника натисніть на комірку з тимчасовим інтервалом у стовпці бажаної дати або виберіть одразу кілька комірок. У меню, що випадає, виберіть пункт «Робочий день».",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image1.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Вкажіть період, на який ви складаєте графік роботи. Можна вибрати і один день, і триваліший інтервал.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image17.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Вкажіть час початку та закінчення робочого дня.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image13.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Якщо співробітник відповідає за дві функції або більше, а графік роботи потрібно створити для всіх його функцій відразу, поставте галочку в рядку «Застосувати до всіх функцій співробітника». Налаштований вами графік автоматично з'явиться у всіх функцій цього працівника.",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image3.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Вкажіть вихідні дні для співробітника.",
    prefix: { tag: semanticTagKeys.span, text: "6.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image7.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "За замовчуванням графік роботи складено з урахуванням часового поясу компанії. Якщо співробітники працюють у різних часових поясах, потрібно активувати перемикач «Використовувати часовий пояс співробітника» у верхній частині екрана: часові інтервали графіка будуть перераховані з урахуванням різниці часу.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image2.gif",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Відпустка",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Щоб оформити відпустку:",
  },
  {
    tag: semanticTagKeys.p,
    text: "Знайдіть у списку співробітника, який йде у відпустку, натисніть на комірку під відповідною датою та у випадаючому меню виберіть пункт «Відпустка».",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image15.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: " Вкажіть період: визначте дати початку та кінця відпустки.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image5.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "У випадаючому списку виберіть ім'я співробітника, який тимчасово виконуватиме обов'язки відсутнього. Тепер йому будуть автоматично надходити повторювані завдання колеги, який пішов у відпустку. Це допоможе зберегти ефективність роботи компанії та уникнути завалів. ",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image10.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Якщо співробітник відповідає за кілька функцій і його відпустка стосується кожної з них, поставте галочку в рядку «Застосувати до всіх функцій».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image9.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Також призначте заступника для кожної функції.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image18.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Обравши заступника співробітника, що йде у відпустку, натисніть кнопку «Зберегти»: тепер у загальному графіку відобразиться і робочий графік цього заступника.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image14.gif",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Лікарняний",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Щоб оформити період тимчасової непрацездатності:",
  },
  {
    tag: semanticTagKeys.p,
    text: "Знайдіть у списку ім'я співробітника та натисніть на комірку його графіка в стовпці дати, на яку відкрито лікарняний лист. У меню, що випадає, виберіть пункт «Лікарняний».",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image8.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Вкажіть період, який виданий лікарняний лист.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image5.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Якщо працівник прикріплений до кількох функцій і в період тимчасової непрацездатності не може виконувати жодну з них, поставте галочку у рядку «Застосувати до всіх функцій працівника».",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image6.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "У випадаючому списку виберіть співробітника, який буде виконувати обов'язки відсутнього. Тепер йому автоматично почнуть приходити завдання, що повторюються, в період тимчасової непрацездатності колеги.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/schedule/image11.gif",
    },
  },
];
