import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const ruCommunicationsGuideNodes: IGuideNodes[] = [
  // {
  //   tag: semanticTagKeys.h2,
  //   text: "Правила коммуникации",
  //   attrs: {className : "hint-title"}
  // },
  {
    tag: semanticTagKeys.p,
    text: "Коммуникация — это процесс передачи информации на платформе Tonnus, который охватывает любые сообщения о задачах и событиях в компании, а также вопросы от сотрудников, решения руководства и тому подобное. Каждое из таких сообщений считается частью коммуникации.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Правила коммуникации позволяют:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Соблюдать сроки выполнения задач и тем самым ускорять развитие компании.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Использовать единый для всей компании порядок действий.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Оперативно решать вопросы и повышать эффективность работы компании.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Избегать появления невыполненных или просроченных задач, которые тормозят работу команды.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Обработка задач доступна в модуле главного меню «Коммуникации».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Мои",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Все задачи, поставленные конкретному сотруднику, находятся в разделе  «Мои». Это основное рабочее пространство каждого пользователя платформы.",
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
    text: "Любую задачу, в разделе «Мои» следует обработать согласно следующим правилам:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Задача, которую необходимо обработать попадает в список «Входящие».",
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
    text: "Если у вас нет вопросов по содержанию и сроку исполнения задачи, перенесите ее в список «Принято». Обработать задачу из списка «Принято» необходимо не позднее указанного крайнего срока.",
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
    text: "В список «В работе» переносите задачи,  для выполнения которых отправитель определил время. При этом выполнить задачу из списка «В работе» необходимо не позднее указанного крайнего срока.",
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
    text: "Задачи, результат исполнения которых должен оценить руководитель, попадают в список «На проверке».",
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
    text: "Если руководитель одобряет результат, завершенные задачи попадают в список «Выполнено».  Задачи, которые руководитель не одобрил, вернутся на доработку и снова отобразятся в списке «В работе».",
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
    text: "На контроле",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.p,
    text: "В разделе «На контроле» находятся все задачи ваших подчиненных.",
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
    text: "Здесь отображаются все разовые и повторяющиеся задачи, созданные от вашего имени. Например, если вы руководите структурным подразделением, то увидите здесь абсолютно все задачи поставленные вами, которые выполняют ваши подчиненные.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Списки в разделе «На контроле» устроены по тому же принципу, что и в разделе «Мои». Задачи, которые исполнители пока не обработали, поступают в список «Входящие». В списках «Принято» и «В работе» вы сможете увидеть задачи, над которыми сотрудники работают в текущий момент времени. Особое внимание уделите списку «На проверке»: если в него попали задачи, которые требуют вашей проверки и одобрения, обработать их необходимо в течение трех дней.",
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
    text: "Участвую",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Раздел «Участвую» включает задачи, в которых вы выступаете наблюдателем.",
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
    text: "Списки в этом разделе такие же, как и в разделе «На контроле».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Сортировка и фильтры",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Для того чтобы найти любую созданную задачу, используйте строку поиска в верхней части экрана.",
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
    text: "Введите ключевые слова из названия задачи и выберите нужную задачу из списка найденных.",
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
    text: "В правом верхнем углу экрана находится кнопка сортировки задач. С ее помощью можно выбрать принцип отображения задач в разделах «Мои», «На контроле» и «Участвую».",
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
    text: "При нажатии на эту кнопку появится выпадающее меню с тремя способами сортировки.",
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
    italicPart: "Сначала новые",
    text: "Сначала новые — вверху будут отображаться задачи, которые поступили последними, а более старые задачи окажутся в конце списка.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Сначала старые",
    text: "Сначала старые — первыми будут отображаться задачи, которые поступили раньше, а за ними последуют более свежие.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Сначала с близким сроком",
    text: "Сначала с близким сроком — вверху списка окажутся те задачи, срок исполнения которых истекает быстрее, а следовательно, их нужно выполнить в первую очередь.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "При поиске задач также можно использовать фильтры.",
    boldPart: "фильтры",
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
    text: "При нажатии на кнопку со значком воронки появится панель настройки фильтров.",
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
    italicPart: "Отправитель",
    text: "Отправитель — этот фильтр позволяет из выпадающего списка выбрать одного из инициаторов направленных вам задач, и тогда на панели «Мое» отобразятся только задачи, поступившие от него. ",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Задачи с нарушением",
    text: "Задачи с нарушением — этот фильтр показывает просроченные задачи, задачи с сообщением, на которое не ответили в течение трех часов, а также задачи, закрытые без доказательства исполнения (результат по ним не получен).",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Значение индикаторов",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Пока задача не обработана, на карточке стоит желтый индикатор «Ожидает принятия».",
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
    text: "Если задача не выполнена в установленный срок, на карточке появится красный индикатор «Просрочено».",
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
    text: "Если задача закрыта с нарушением (результат не получен, доказательство не прикреплено), на ее карточке появится красный значок с восклицательным знаком. В этом случае проверьте, действительно ли задача выполнена, и при необходимости верните ее на доработку. НЕ ОДОБРЯЙТЕ задачи, обработанные с нарушением правил коммуникации!",
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
    text: "Если отправитель задачи прикрепил к ней сообщение, на карточке появляется значок письма. На сообщение необходимо ответить в течение трех часов. ",
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
    text: "Если через три часа ответ на такое сообщение не отправили, об этом уведомит индикатор на карточке.",
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
