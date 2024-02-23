import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const ruPermissionsGuideNodes: IGuideNodes[] = [
  {
    tag: semanticTagKeys.h2,
    text: "Как выдавать разрешения для функций",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "С помощью разрешений можно определить для каждой функции объем прав при работе с системой.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Настраивайте разрешения, чтобы расширить или ограничить возможности пользователя, за которым закреплена та или иная функция.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "После регистрации компании на платформе Tonnus все разрешения по умолчанию есть только у владельца. В дальнейшем он выдает разрешения для других функций в компании.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Выдача разрешений",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Перейдите в модуль «Оргструктура».",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Нажмите на функцию, для которой необходимо настроить разрешения: например, «Департамент персонала».",
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
    text: "В появившейся панели управления функцией перейдите на вкладку «РАЗРЕШЕНИЯ».",
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
    text: "В этой вкладке перечислены все возможные разрешения для данной функции.",
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
    text: "Выберите нужные разрешения и активируйте их при помощи переключателя.",
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
    text: "Описание разрешений",
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
    text: "Создание — позволяет создавать новые функции в оргструктуре.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Редактирование — позволяет редактировать оргструктуру.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Сортировка — позволяет изменять порядок подфункций.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Перемещение — позволяет изменять порядок функций.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Удаление — позволяет удалять функции из оргструктуры.",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Управление сотрудниками — позволяет прикреплять сотрудников к функции и отменять прикрепление.",
    prefix: { tag: semanticTagKeys.span, text: "6.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Управления разрешениями — позволяет редактировать набор разрешений для функций.",
    prefix: { tag: semanticTagKeys.span, text: "7.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "БЛОК «ПОВТОРЯЮЩИЕСЯ ЗАДАЧИ»",
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
    text: "Создание — позволяет создавать повторяющиеся задачи.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Редактирование — позволяет изменять повторяющиеся задачи.\n",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Удаление — позволяет удалять повторяющиеся задачи из системы.\n",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Управление паузой — позволяет приостанавливать и возобновлять повторяющиеся задачи.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Просмотр истории — позволяет просматривать историю действий по каждой повторяющейся задаче.",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "БЛОК «СОТРУДНИКИ»",
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
    text: "Просмотр номера телефона — делает видимыми контактные номера сотрудников в модуле «Сотрудники».",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Редактирование — позволяет редактировать профили сотрудников в модуле «Сотрудники».",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Удаление — позволяет удалять профили сотрудников в модуле «Сотрудники».",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Создание приглашения — позволяет добавлять сотрудников в систему в модуле «Сотрудники».",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Удаление приглашения — позволяет удалять ссылки для приглашения сотрудников из системы.",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "БЛОК «КОМПАНИЯ»",
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
    text: "Название и описание — позволяет изменять название и описание компании.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Часовой пояс — позволяет изменять часовой пояс компании.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "График работы — позволяет изменять день начала недели и график работы компании.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "БЛОК «ОТЧЕТЫ»",
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
    text: "По коммуникациям — открывает доступ к модулю «Отчеты — по коммуникациям», где отображается информация по работе с задачами в компании.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "По драйверам — открывает доступ к модулю «Отчеты — по драйверам», где отображаются данные по работе с драйверами в компании.",
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
    text: "Просмотр:",
  },
  {
    tag: semanticTagKeys.p,
    text: "Все функции - позволяет просматривать график работы всех функций на оргструктуре.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Подчиненные функции - позволяет просматривать график работы всех функций, которые ПОД вами на оргструктуре.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Функции руководителей - позволяет просматривать график работы всех функций, которые находятся НАД вами на оргструктуре. ",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Редактирование:",
  },
  {
    tag: semanticTagKeys.p,
    text: "Все функции - позволяет редактировать график работы всех функций на оргструктуре.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Собственные функции - позволяет редактировать график работы только ваших  функций на оргструктуре.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Подчиненные функции - позволяет редактировать график работы всех функций, которые находятся под вами на оргструктуре.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
];
