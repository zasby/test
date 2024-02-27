import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const ruOrgchartNodes: IGuideNodes[] = [
  {
    tag: semanticTagKeys.h2,
    text: "Настройка оргструктуры",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Оргструктура — это схематическое изображение функциональных подразделений вашей компании, а также порядка их взаимодействия.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "После регистрации заполните профиль компании и выберите терминологию для вашей оргструктуры. Определите, каким термином в компании будет называться результат: например, «ЦКП», «ОКР» или «Результат».",
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
    text: "Далее выберите, каким образом вы будете создавать оргструктуру — с нуля или на основе классического шаблона с семью подразделениями.",
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
    text: "Оргструктура с нуля",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Если выбрать создание оргструктуры с нуля, то страница модуля «Оргструктура» будет выглядеть так:",
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
    text: "В рабочем поле оргструктуры вы увидите функцию «Владелец» с данными, которые вы ввели при регистрации.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Для того чтобы внести в оргструктуру всех руководителей, нажмите на значок настройки возле названия этой функции.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "В выпадающем меню выберите команду «Создать подфункцию».",
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
    italicPart:
      "Обратите внимание: здесь отобразится термин, который вы ввели ранее для обозначения результата функции.",
    text: "В диалоговом окне введите название подфункции и укажите ее результат — фактический итог выполнения работ. Обратите внимание: здесь отобразится термин, который вы ввели ранее для обозначения результата функции.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Например, для функции «Мониторинг СМИ» результатом будет «аналитический отчет об информационном поле бренда для еженедельного совещания». Другой пример: для функции «Продажи» результат можно описать как «платежи, поступившие на счета компании».",
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
    text: "Для каждой функции можно выбрать цвет. Цветовая маркировка функций или групп функций поможет вам быстрее ориентироваться в оргструктуре.",
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
    text: "Кроме того, в этом окне можно изменить родительскую функцию. Например, если исполнительный директор подчиняется напрямую владельцу компании, родительской функцией должен стать «Владелец».",
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
    text: "Здесь также можно выбрать расположение подфункций в оргструктуре — вертикальное или горизонтальное.",
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
    text: "Так выглядит вертикальное расположение:",
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
    text: "Так выглядит горизонтальное расположение:",
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
    text: "Вы можете создавать подфункции для тех функций, которые уже есть в оргструктуре: для этого нажмите на значок настройки возле соответствующего названия и выполните действия, описанные выше. ",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "С помощью других команд выпадающего меню можно выполнять следующие действия:",
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
    text: "«Переместить функцию»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Эта команда позволяет изменить родительскую функцию для выбранного элемента оргструктуры. Например, в компании прошла реструктуризация, и теперь за процесс рекрутинга отвечает руководитель функции найма. Функцию «Рекрутинг» в этом случае следует передать в подчинение функции «Наем». Для этого выберите команду «Переместить функцию». В диалоговом окне выберите новую родительскую функцию. ",
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
    text: "Затем нажмите на кнопку «Сохранить». Теперь функция «Рекрутинг» заняла новое место в оргструктуре.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "«Сортировать подфункции»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Эта команда позволяет изменить порядок отображения подфункций одного уровня. Например, требуется расположить подчиненные «Владельцу» функции в следующем порядке: «Ассистент» — «Финансовый директор» — «Генеральный директор».  Для этого выберите команду «Сортировать подфункции».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "В открывшемся диалоговом окне перемещайте подфункции, нажав и удерживая левую кнопку мыши.",
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
    text: "Обратите внимание: такая возможность появляется только при наличии нескольких подфункций одного уровня. Например, если у функции «Продажи» есть подфункции — «Первичные продажи» и «Вторичные продажи», — их можно сортировать. Однако если у функции «Продажи» нет подчиненных элементов, эта команда будет неактивна.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "После внесения изменений нажмите на кнопку «Сохранить».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "«Открыть панель функции»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "С помощью этой команды вы сможете изменить название функции, переформулировать ее результат, присвоить ей другой цвет или задать вертикальное или горизонтальное расположение подфункций.",
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
    text: "Эта команда также позволяет управлять выбранной функцией: например, прикрепить к ней сотрудника, создать повторяющуюся задачу или добавить разрешения. На этапе создания оргструктуры эти возможности не понадобятся, поэтому более подробно о том, как их использовать, вы узнаете из следующих уроков.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "«Удалить функцию»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Эта команда позволяет удалять ненужные элементы оргструктуры.",
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
    text: "Фильтры оргструктуры",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "С помощью фильтров в правом верхнем углу экрана можно открыть или спрятать описания результатов рядом с заголовками функций, а также имена сотрудников, прикрепленных к функциям.",
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
    text: "Печать или удаление",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Готовую оргструктуру вы можете отправить на печать или удалить из системы.",
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
    text: "Классическая оргструктура",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "При выборе классического шаблона в рабочем поле модуля вы увидите готовую оргструктуру с семью подразделениями.",
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
    text: "Для того чтобы изменить характеристики того или иного подразделения, нажмите на его плашку, а затем укажите новое название, формулировку ЦКП или задайте цвет:",
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
    text: "Вы можете создавать новые подфункции, подчиненные существующим функциям:",
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
    text: "С помощью других команд выпадающего меню можно выполнять следующие действия:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "«Переместить функцию» ",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Эта команда позволяет назначить новую родительскую функцию для выбранного элемента оргструктуры.",
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
    text: "В диалоговом окне выберите новую родительскую функцию. ",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "«Сортировать подфункции»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Эта команда позволяет изменить последовательность подфункций. ",
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
    text: "В открывшемся диалоговом окне перемещайте подфункции, нажав и удерживая левую кнопку мыши.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "После внесения изменений нажмите на кнопку «Сохранить».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "«Открыть панель функции»",
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
    text: "Во вкладке «СОТРУДНИКИ» вы можете изменить названия должностей, которые отобразятся в оргструктуре.",
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
    text: "Кроме того, здесь можно прикрепить сотрудников к функции, а в других вкладках этого окна — создать для нее повторяющуюся задачу или добавить разрешения. На этапе создания оргструктуры эти возможности не понадобятся.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "«Удалить функцию»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Эта команда позволяет удалять ненужные элементы оргструктуры.",
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
    text: "Фильтры оргструктуры",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "С помощью фильтров в правом верхнем углу экрана можно открыть или спрятать описания результатов рядом с заголовками функций, а также имена сотрудников, прикрепленных к функциям.",
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
    text: "Печать или удаление",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Вы можете отправить оргструктуру на печать или сохранить ее в файле формата PDF. Если оргструктура очень большая, для корректного отображения на листе необходимо поменять масштаб в окне дополнительной настройки печати.",
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
