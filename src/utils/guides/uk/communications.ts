import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const ukCommunicationsGuideNodes: IGuideNodes[] = [
  // {
  //   tag: semanticTagKeys.h2,
  //   text: "Правила комунікації",
  //   attrs: {className : "hint-title"}
  // },
  {
    tag: semanticTagKeys.p,
    text: "Комунікація — це процес передачі інформації на платформі Tonnus, який охоплює будь-які повідомлення про задачі та події в компанії, а також питання від співробітників, рішення керівництва і тому подібне. Кожне з таких повідомлень враховується як частина комунікації.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Правила комунікації дозволяють:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Дотримуватись термінам виконання задач і тим самим прискорювати розвиток компанії.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Використовувати єдиний для всієї компанії порядок дій.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Оперативно вирішувати питання і підвищувати ефективність роботи компанії.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Уникати появи невиконаних або прострочених задач, які гальмують роботу команди",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Обробка задач доступна в модулі головного меню «Комунікації».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Мої",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Всі задачі, що були поставлені конкретному співробітнику, знаходяться в розділі  «Мої». Це основний робочий простір кожного користувача платформи.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image14.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Будь-яку задачу, в розділі «Мої» слід обробити згідно наступним правилам:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Задача, яку необхідно обробити потрапляє в список «Вхідні».",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image4.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Якщо у вас немає питань за змістом та терміном виконання задачі, перенесіть її в список «Прийнято». Обробити задачу із списку «Прийнято» необхідно не пізніше вказаного крайнього терміну.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image17.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "В список «В роботі» перенесіть задачі,  для виконання яких відправник визначив час. При цьому виконати задачу із списку «В роботі» необхідно не пізніше вказаного крайнього терміну.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image1.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Задачі, результат виконання яких повинен оцінити керівник, потрапляють в список «На перевірці».",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image8.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Якщо керівник схвалює результат, завершені задачі потрапляють до списку «Виконано».  Задачі, які керівник не схвалив, повернуться на доопрацювання і знову відобразяться в списку «В роботі».",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image12.png",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "На контролі",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.p,
    text: "В розділі «На контролі» знаходяться всі задачі ваших підопічних.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image15.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Тут відображаються всі разові і повторюючі задачі, створені від вашого імені. Наприклад, якщо ви керуєте структурним підрозділом, то побачите тут абсолютно всі задачі поставлені вами, які виконують ваші підопічні.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Переліки в розділі «На контролі» влаштовані по тому ж принципу, що і в розділі «Моє». Задачі, які виконавці поки не опрацювали, потрапляють в список «Вхідні». В списках «Прийнято» і «В роботі» ви зможете побачити задачі, над якими співробітники працюють в поточний момент часу. Особливу увагу приділіть списку «На перевірці»: якщо в нього потрапили задачі, які потребують вашої перевірки та схвалення, опрацювати їх необхідно впродовж трьох днів.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image6.png",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Приймаю участь",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Розділ «Приймаю участь» включає задачі, в яких ви виступаєте спостерігачем.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image2.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Переліки в цьому розділі такі ж, як і в розділі «На контролі».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Сортування і фільтри",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Для того, щоб знайти будь-яку створену задачу, використовуйте рядок пошуку в верхній частині екрану.\n",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image3.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Введіть ключові слова з назви задачі та виберіть потрібну задачу із переліку знайдених.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image5.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "В правому верхньому кутку екрану знаходиться кнопка сортування задач. З її допомогою можна вибрати принцип відображення задач в розділах «Мої», «На контролі» та «Спостерігаю».",
    boldPart: "сортировки задач.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image13.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "При натисненні на цю кнопку з’явиться випадаюче меню з трьома способами сортування.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image18.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Спочатку нові",
    text: "Спочатку нові — зверху будуть відображатися задачі, котрі надійшли останніми, а більш старі задачі опиняться наприкінці списку.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Спочатку старі",
    text: "Спочатку старі — першими будуть відображатися задачі, котрі надійшли раніше, а за ними опиняться більш свіжі.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Спочатку з близьким терміном",
    text: "Спочатку з близьким терміном — зверху списку опиняться ті задачі, термін виконання яких закінчується швидше, а отже їх потрібно виконати в першу чергу.\n",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "При пошуку задач також можна використовувати фільтри.",
    boldPart: "фільтри",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image19.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "При натисненні на кнопку із значком воронки з’явиться панель налаштування фільтрів.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image10.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Відправник",
    text: "Відправник — цей фільтр дозволяє з випадаючого списку вибрати одного з ініціаторів направлених вам задач, і тоді на панелі «Моє» відобразяться тільки задачі, що надійшли від нього.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Задачи с нарушением",
    text: "Задачі з порушенням — цей фільтр показує задачі з простроченим терміном, задачі з повідомленням, на яке не відповіли впродовж трьох годин, а також задачі, зачинені без доказу виконання (результат по ним не отриманий).\n",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Значення індикаторів",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Поки задача не оброблена, на картці стоїть жовтий індикатор «Очікує прийняття».",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image16.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Якщо задача не виконана у встановлений термін, на картці з’явиться червоний індикатор «Прострочено».",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image20.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Якщо задача закрита з порушенням (результат не отриманий, доказ не прикріплено), на її картці з’явиться червоний значок із знаком оклику. В цьому випадку перевірте, чи дійсно задача виконана, і при необхідності поверніть її на доопрацювання. НЕ СХВАЛЮЙТЕ задачі, оброблені з порушенням правил комуникації!",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image7.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Якщо відправник задачі прикріпив до неї повідомлення, на картці з’являється значок листа. На повідомлення необхідно відповісти впродовж трьох годин. ",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image11.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Якщо через три години відповідь на таке повідомлення не відправили, про це повідомить індикатор на картці.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/communications/image9.png",
    },
  },
];
