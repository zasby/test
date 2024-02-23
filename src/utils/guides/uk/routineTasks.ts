import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const ukRoutineTasks: IGuideNodes[] = [
  // {
  //   tag: semanticTagKeys.h2,
  //   text: "Правила створення повторюваних завдань",
  //   attrs: {className : "hint-title"},
  // },
  {
    tag: semanticTagKeys.p,
    text: "Завдання, що повторюються - особливий тип завдань, які необхідно виконувати з певною періодичністю, наприклад:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "щодня",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "щотижня",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "щомісяця",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "щорічно",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Достатньо один раз задати параметри такого завдання, і воно автоматично надійде до вибраних виконавців у вказаний час.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Ви можете додати завдання, що повторюється, двома способами.",
    boldPart: "two different methods",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Перший спосіб:",
  },
  {
    tag: semanticTagKeys.p,
    text: "У модулі «Комунікації» натисніть на стрілку праворуч від кнопки «Створити завдання».",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "З меню, що випливає, виберіть команду «Створити завдання, що повторюється»",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image11.png",
    },
  },
  {
    tag: semanticTagKeys.b,
    text: "Другий спосіб:",
  },
  {
    tag: semanticTagKeys.p,
    text: "Перейдіть у модуль «Оргструктура».",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Натисніть на функцію, для якої хочете поставити завдання, що повторюється.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/ru/routine/image3.png" },
  },
  {
    tag: semanticTagKeys.p,
    text: "У вікні виберіть «Повторювані завдання».",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/ru/routine/image9.png" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Натисніть на кнопку «Додати завдання».",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Визначте, кому буде спрямоване завдання, що повторюється: керівнику функції або кому-небудь з виконавців, прикріплених до цієї функції.",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image13.png",
    },
  },
  {
    tag: semanticTagKeys.b,
    text: "У чому різниця між керівником та виконавцем функції?",
  },
  {
    tag: semanticTagKeys.p,
    text: "Керівник відповідає за діяльність функції загалом, а виконавці працюють під його контролем. Наприклад, якщо у відділі продажів кілька менеджерів та один старший менеджер, то в оргструктурі його слід призначити керівником функції, а інших виконавцями.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Якщо за функцію оргструктури відповідає один співробітник, його доцільно призначити керівником, оскільки він несе повну відповідальність за виконання завдань та кінцевий результат.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Як дізнатися хто керівник, а хто виконавець?",
  },
  {
    tag: semanticTagKeys.p,
    text: "Щоб переглянути, як розподілені статуси в рамках функції, перейдіть на вкладку «Співробітники».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image25.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "У вікні, що з'явилося,  налаштуйте параметри завдання, що повторюється.",
    prefix: { tag: semanticTagKeys.span, text: "6.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image10.png",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Налаштування завдання, що повторюється",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    anchorId: 1,
    text: "У полі «Кому» автоматично з'явиться функція, яку ви обрали в оргструктурі, та адресат завдання (виконавець або керівник).",
    boldPart: "«Кому»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Якщо ви створили завдання першим способом (тобто у модулі «Комунікація»), це поле потрібно буде заповнити самостійно. Натисніть кнопку «Додати». У вікні виберіть необхідну функцію та роль — «керівник» або «виконавець» функції.",
    boldPart: "«Добавить»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image16.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "На даному етапі можна вибрати категорію адресатів зі списку. У списку доступні:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Усі",
    text: "Усі (адресує завдання всім співробітникам компанії без винятку)",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Усі",
    text: "Усі керівники (адресує завдання всім співробітникам компанії, які виконують роль керівника будь-якої функції)",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Керівник (дозволяє вибрати одну або кілька функцій, керівники яких отримуватимуть створене завдання)",
    italicPart: "Керівник",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Виконавець",
    text: "Виконавець (дозволяє вибрати одну або кілька функцій, виконавці яких отримуватимуть створене завдання)",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "«Додати».",
    text: "Також можна додавати нових адресатів зі списку, що випадає — наприклад, коли необхідно направити завдання, що повторюється, кільком функціям або групам співробітників. Для цього ще раз натисніть кнопку «Додати».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image27.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Встановіть періодичність повторення завдання у меню, в якому є наступні варіанти:",
    anchorId: 2,
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    text: "День – із зазначенням часу (за замовчуванням 12:00). Змінювати години або хвилини можна натисканням лівої кнопки миші.",
    boldPart: "День",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    text: "Тиждень — із зазначенням дня тижня та часу",
    boldPart: "Тиждень",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Місяць — із зазначенням дати та часу (наприклад, 1-го числа кожного місяця о 12:00).",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    boldPart: "Місяць",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "N днів — із зазначенням кількості днів між повторами та часом (наприклад, кожні три дні об 11:00).",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    boldPart: "N днів",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/ru/routine/image6.png" },
  },
  {
    tag: semanticTagKeys.p,
    text: 'Приклад 1. Завдання "Відповідати в чаті техпідтримки" в компанії необхідно виконувати щодня, тричі на день. Щоб налаштувати потрібну періодичність:',
    isItalic: true,
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Виберіть «День» та вкажіть час першого запуску завдання.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Поставте курсор у поле «Натисніть, щоб вибрати», розташоване нижче, а потім вкажіть час другого запуску завдання.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/ru/routine/image8.png" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Повторіть попередню дію третього запуску завдання.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image19.png",
    },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image20.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: 'Приклад 2. Функція "Закупівлі" щодня за своїм робочим графіком (з середи до неділі) повинна виконувати завдання "Закупити замовлений товар". Щоб налаштувати потрібну періодичність:',
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Виберіть «Тиждень», задайте день тижня «Середа» та встановіть час запуску завдання.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Поставте курсор у поле «Натисніть, щоб вибрати», розташоване нижче.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Повторіть кроки з попередніх пунктів для днів тижня «Четвер», «П'ятниця», «Субота» та «Неділя».",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/ru/routine/image4.png" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image23.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Приклад 3. Завдання «Розрахувати заробітну плату» необхідно виконувати 5-го та 20-го числа кожного місяця. Щоб налаштувати потрібну періодичність:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Виберіть «Місяць», встановіть число та час першого щомісячного запуску завдання.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Поставте курсор у поле «Натисніть для вибору», розташоване нижче, а потім повторіть кроки з попереднього пункту для другого щомісячного запуску завдання.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image24.png",
    },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image22.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Приклад 4. Завдання «Подати декларацію до податкової» необхідно виконувати щокварталу. Щоб налаштувати потрібну періодичність:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: 'Виберіть "Місяць", вкажіть місяць "Березень", число та час запуску завдання.',
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Поставте курсор у поле «Натисніть, щоб вибрати», розташоване нижче.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Повторіть кроки з попередніх пунктів для місяців «Червень», «Вересень» та «Грудень».",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image18.png",
    },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image21.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Параметр «Створювати у вихідні дні» за умовчуванням активний. Якщо вимкнути його, співробітники не отримуватимуть завдання у неробочі дні.",
    boldPart: "«Створювати у вихідні дні»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "«Враховувати графік роботи»",
    text: "Параметр «Враховувати графік роботи» за умовчуванням є неактивним. Якщо увімкнути його, співробітники будуть отримувати завдання відповідно до свого робочого графіка. Наприклад, співробітник два дні працює та два дні відпочиває. Якщо активувати цей параметр, завдання надходитиме працівникові тільки в його робочі дні.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Наступний параметр дозволяє встановити термін виконання завдання. У полі «Зробити до» є два варіанти:",
    anchorId: 3,
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Через термін: можна задати кількість годин/хвилин/днів/місяців для роботи над завданням.",
    boldPart: "Через термін:",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Наприклад, при заданій періодичності «Щодня о 10:00» часовий інтервал 10 годин означає, що співробітнику відведено на завдання десять годин, і впоратися він повинен до 20:00 того ж дня.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/ru/routine/image1.png" },
  },
  {
    tag: semanticTagKeys.p,
    text: "До дня тижня: можна встановити конкретний день і час, не пізніше якого завдання необхідно виконати. Якщо працівник не закрив завдання до цього моменту, воно отримує статус простроченого.",
    boldPart: "До дня тижня:",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Наприклад, виберіть значення «П'ятниця» — «17:00», якщо хочете, щоб співробітник звітував за завданням не пізніше п'ятої години вечора кожної п'ятниці.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image17.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Також налаштуйте наступні параметри для завдання, що повторюється: ",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "«Виконавець не може змінювати термін»",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    anchorId: 4,
    text: "«Виконавець не може змінювати термін» - увімкніть цей параметр, якщо не хочете, щоб співробітник на власний розсуд продовжував час виконання завдання",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "«Вимагає перевірки постановника»",
    anchorId: 5,
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    text: "«Вимагає перевірки постановника» — дозволяє надсилати виконане завдання тому, хто його поставив: він оцінить результат, а потім схвалить, або поверне завдання на доопрацювання. Якщо залишити цей параметр вимкненим, завдання буде вважатися закритим одразу після того, як співробітник поставить позначку про його виконання.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/ru/routine/image5.png" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Додаткове налаштування",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "За умовчуванням це меню приховано, його можна побачити при натисканні на заголовок.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image15.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "«Направити найближчому керівнику, якщо немає співробітників, які працюють на даний момент»",
    text: "Параметр «Направити найближчому керівнику, якщо немає співробітників, які працюють на даний момент» за умовчуванням активний.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Наприклад, прибиральниця працює з понеділка по суботу, а в неділю має вихідний. Завдання для неї має приходити відповідно до цього робочого графіка. Однак якщо ви залишите цей параметр увімкненим, то в неділю завдання надійде керівнику прибиральниці, і він повинен буде помити підлогу. Якщо вимкнути цей параметр, у вихідний день завдання не отримає ніхто.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/ru/routine/image7.png" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "«Що робити із завданням, якщо відправник НЕ працює»",
    anchorId: 6,
    text: "У блоці «Що робити із завданням, якщо відправник НЕ працює» визначте, як потрібно вчинити із завданням та контролювати його виконання, коли у того, хто спочатку його поставив, вихідний, лікарняний чи чергова відпустка.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Створити у будь-якому разі - виконавець отримає завдання від імені відправника, навіть у період його відсутності.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Створити від найближчого керівника – співробітник отримає завдання від імені найближчого керівника, який працює відповідно до графіка.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Створити від виконавця - співробітник отримає завдання від свого імені.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Не створювати – у період відсутності відправника виконавець не отримає завдання.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/ru/routine/image2.png" },
  },
  {
    tag: semanticTagKeys.p,
    anchorId: 7,
    boldPart: "«Відправник»",
    text: "У блоці «Відправник» можна вказати, від імені кого надходитиме завдання і хто його контролюватиме. Виберіть один із трьох варіантів:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    italicPart: "Найближчий керівник",
    text: "Найближчий керівник – співробітник отримає завдання від імені свого безпосереднього начальника",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    italicPart: "Виконавець функції",
    text: "Виконавець функції – співробітник отримає завдання від імені іншого співробітника у статусі виконавця.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Наприклад, у компанії є функція щодо ознайомлення персоналу з регламентами. У цьому випадку відправником завдання, що повторюється, з вивчення регламентів можна вказати будь-кого з виконавців цієї функції.Наприклад, у компанії є функція щодо ознайомлення персоналу з регламентами. У цьому випадку відправником завдання, що повторюється, з вивчення регламентів можна вказати будь-кого з виконавців цієї функції.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    italicPart: "Керівник функції",
    text: "Керівник функції – співробітник отримає завдання від імені керівника якоїсь із функцій. Якщо у вибраної функції немає керівника, то відправником стане найближчий керівник, у якого ця функція знаходиться в підпорядкуванні.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image12.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "«Використовувати часовий пояс»",
    anchorId: 8,
    text: "Блок «Використовувати часовий пояс» допоможе зробити роботу в системі зручнішою, якщо часові пояси працівників не співпадають, а політика вашої компанії припускає гнучкий підхід до робочих графіків. Виберіть один із трьох варіантів встановлення часового поясу для роботи над завданням:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    italicPart: "Виконавця",
    text: "Виконавця – завдання з'явиться в системі за часовим поясом працівника, який має її виконати. Наприклад, ваша компанія розташована в Британії, і ви встановили періодичність завдання – щодня о 12:00 за лондонським часом. Однак якщо співробітник працює в Рейк'явіку, завдання надходитиме йому об 11:00 за місцевим часом.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    italicPart: "Відправника",
    text: "Відправника – завдання з'явиться в системі часового поясу відправника.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    italicPart: "Компанії",
    text: "Компанії – завдання з'явиться в системі часового поясу компанії. Наприклад, щоденне завдання, заплановане на 12:00 у Лондоні, надійде співробітнику-парижанину о 13:00 за місцевим часом.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image26.png",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Характеристики задачі",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image28.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Назва.",
    text: "Назва. Щоб отримати потрібний результат, завдання необхідно формулювати, починаючи з дієслова. Назва завдання має відповідати питанням «Що зробити?»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: 'Наприклад: "Провести координаційну нараду".',
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Опис.",
    text: "Опис. У цьому полі детально поясніть, що саме і як потрібно зробити, додайте інструкції, чек-листи, посилання на ресурси мережі. При складанні опису орієнтуйтеся на співробітника, який працює в компанії перший день: все має бути настільки ясно, щоб він зміг виконати завдання, не поставивши жодного питання.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Наприклад: «Порядок денний координаційної наради:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Обговорити виконані завдання та заохотити відповідальних.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Обговорити невиконані завдання та з'ясувати причини, отримати відповіді на такі питання…»",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Результат.",
    text: "Результат. Точно сформулюйте, який саме результат виконання завдання ви очікуєте. Якщо це поле заповнено, під час закриття завдання система запитає у виконавця: «Результат отримано?»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: 'Наприклад: "Завдання, внесені на платформу".',
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Вкладення.",
    text: "Вкладення. У це поле можна додати будь-який файл, у тому числі відеоролик, графічне або анімоване зображення (у форматі gif) і так далі - все, що може стати в нагоді співробітнику для виконання завдання.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Наприклад, документ-шаблон плану на тиждень.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Доведення.",
    text: 'Доведення. У цьому полі можна задати вид підтвердження, яке виконавець повинен надати після завершення роботи над завданням, або встановити, що таке підтвердження не потрібне. За умовчуванням запропоновано значення "Не потрібно", але ви можете вибрати варіанти "Текст" або "Зображення". Для кожного виду підтвердження вкажіть потрібну кількість або обсяг та опишіть критерії відповідності.',
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Для варіанта «Текст» рекомендуємо дати короткий опис та вказати мінімальну кількість символів.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Для параметра «Зображення» можна вказати будь-які бажані характеристики файлу.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Наприклад: «Знімок екрана модуля комунікації – розділ «контролю».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Щоб закрити завдання, співробітник має прикріпити потрібні файли. Якщо цього не зробити, картка завдання отримає позначку про порушення.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Щоб зберегти завдання, що повторюється, натисніть на кнопку «Зберегти» у лівому нижньому куті вікна.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/ru/routine/image14.png",
    },
  },
];
