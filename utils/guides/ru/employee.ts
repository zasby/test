import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const ruEmployeeGuideNodes: IGuideNodes[] = [
  {
    tag: semanticTagKeys.h2,
    text: "Чтобы добавить сотрудника в систему:",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Зайдите в модуль «Сотрудники».",
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
    text: "На верхней панели нажмите на кнопку «Пригласить сотрудника».",
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
    text: "Выберите один из двух способов приглашения сотрудников.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Первый способ: личное приглашение по электронной почте",
  },
  {
    tag: semanticTagKeys.p,
    text: "Введите электронный адрес сотрудника, которого нужно пригласить на платформу, и выберите его функцию в оргструктуре.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Внимание: если сотрудник отвечает за несколько функций, это можно указать в ходе дополнительной настройки при создании приглашения.",
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
    text: "После этого нажмите на кнопку «Пригласить». Сотрудник получит письмо со ссылкой для присоединения к платформе Tonnus",
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
    text: "При успешной регистрации сотрудника в системе его имя отобразится в оргструктуре с учетом назначенных функций.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Второй способ: многоразовый код приглашения",
  },
  {
    tag: semanticTagKeys.p,
    text: "Этот вариант позволяет пригласить на платформу сразу нескольких сотрудников с помощью уникальной ссылки и кода, который каждый новый пользователь должен будет указать при регистрации в системе.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Чтобы сгенерировать ссылку и код, поставьте галочку в строке «Многоразовый код приглашения».",
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
    text: "Для подтверждения нажмите на кнопку «Пригласить». В появившемся окне скопируйте ссылку и код приглашения в буфер обмена, нажав на соответствующие значки.",
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
    text: "Отправьте эту информацию всем сотрудникам любым удобным вам способом. Каждый из приглашенных должен перейти по ссылке, ввести свои данные, в том числе код приглашения, а затем завершить регистрацию в системе самостоятельно",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Внимание: ссылка общая для всех. Это означает, что в дальнейшем вам потребуется прикрепить новых сотрудников к функциям вручную.",
    boldPart: "Внимание",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Для этого зайдите в модуль «Оргструктура» и нажмите на функцию, за которую должен отвечать кто-либо из новых сотрудников.",
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
    text: "Далее выберите для нового сотрудника роль руководителя или исполнителя функции. В дальнейшем это позволит ему получить ранее созданные для этой функции регламенты (при их наличии) и повторяющиеся задачи.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Определите роль нового сотрудника и нажмите на соответствующую кнопку «Добавить».",
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
    text: "Вы можете изменить или отредактировать название должностей. ",
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
    text: "Приглашения по ссылке могут быть и персональными.",
  },
  {
    tag: semanticTagKeys.p,
    text: "Например, нужно пригласить сотрудника в систему с автоматическим прикреплением к конкретной функции, но вы не знаете адрес его электронной почты и не хотите тратить время на выяснение.",
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
    text: "В этом случае нажмите на кнопку «Пригласить сотрудника» в модуле «Сотрудники». В появившемся окне поставьте галочку в строке «Многоразовый код приглашения», а ниже в выпадающих списках выберите одну или несколько функций, для которых будет создана персональная ссылка. Затем нажмите на кнопку «Пригласить».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Сгенерированную ссылку и код можно скопировать и отправить сотруднику любым удобным способом.",
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
    text: "Когда сотрудник перейдет по ссылке, введет код и успешно завершит регистрацию в системе, его имя автоматически отобразится в оргструктуре с учетом назначенных функций.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Чтобы просмотреть все отправленные приглашения и при необходимости удалить некоторые из них (например, после регистрации всех нужных сотрудников по многоразовой ссылке), нажмите на кнопку «Список приглашений».",
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
