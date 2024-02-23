import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const ruScheduleNodes: IGuideNodes[] = [
  // {
  //   tag: semanticTagKeys.h2,
  //   text: "Графики работы сотрудников",
  //   attrs: {className : "hint-title"},
  // },
  {
    tag: semanticTagKeys.p,
    text: "Платформа Tonnus позволяет гибко настраивать график работы сотрудников. По умолчанию персональный график создается на две недели вперед и заполняется автоматически — в соответствии с рабочим графиком компании.",
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
    text: "Кто может работать с графиками сотрудников",
  },
  {
    tag: semanticTagKeys.p,
    text: "Настраивать рабочий график сотрудников может пользователь с правами на редактирование графиков. Чтобы дать такие права, в модуле «Оргструктура» выберите функцию сотрудника, ответственного за составление графиков, перейдите на вкладку «РАЗРЕШЕНИЯ» и в блоке «Графики» откройте доступ к соответствующим возможностям.",
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
    text: "Настройка графика",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Рабочие дни",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Настройка рабочих дней сотрудника:",
  },
  {
    tag: semanticTagKeys.p,
    text: "Найдите в списке нужного сотрудника или подразделение компании. Для удобства другие графики можно свернуть.",
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
    text: "В строке выбранного сотрудника нажмите на ячейку с временным интервалом в столбце желаемой даты или выберите сразу несколько ячеек. В выпадающем меню выберите пункт «Рабочий день».",
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
    text: "Укажите период, на который составляете график работы. Можно выбрать и один день, и более продолжительный интервал.",
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
    text: "Укажите время начала и окончания рабочего дня.",
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
    text: "В случае если сотрудник отвечает за две функции или более, а график работы нужно создать для всех его функций сразу, поставьте галочку в строке «Применить ко всем функциям сотрудника». Настроенный вами график автоматически появится у всех функций данного сотрудника.",
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
    text: "Укажите выходные дни для сотрудника.",
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
    text: "По умолчанию график работы составлен на основе часового пояса компании. Если сотрудники работают в разных часовых поясах, нужно активировать переключатель «Использовать часовой пояс сотрудника» в верхней части экрана: временные интервалы графика будут пересчитаны с учетом разницы во времени.",
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
    text: "Отпуск",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Чтобы оформить отпуск:",
  },
  {
    tag: semanticTagKeys.p,
    text: "Найдите в списке сотрудника, который уходит в отпуск, нажмите на ячейку под соответствующей датой и в выпадающем меню выберите пункт «Отпуск».",
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
    text: "Укажите период: назначьте даты начала и окончания отпуска.",
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
    text: "В выпадающем списке выберите имя сотрудника, который будет временно исполнять обязанности отсутствующего. Теперь ему будут автоматически поступать повторяющиеся задачи коллеги, ушедшего в отпуск. Это поможет сохранить эффективность работы компании и избежать завалов. ",
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
    text: "Если сотрудник отвечает сразу за несколько функций и его отпуск касается каждой из них, поставьте галочку в строке «Применить ко всем функциям сотрудника».",
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
    text: "Также назначьте заместителя для каждой из функций.",
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
    text: "Выбрав заместителя сотрудника, уходящего в отпуск, нажмите на кнопку «Сохранить»: теперь в общем графике отобразится и рабочий график этого заместителя.",
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
    text: "Больничный",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Чтобы оформить период временной нетрудоспособности:",
  },
  {
    tag: semanticTagKeys.p,
    text: "Найдите в списке имя сотрудника и нажмите на ячейку его графика в столбце даты, на которую открыт больничный лист. В выпадающем меню выберите пункт «Больничный».",
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
    text: "Укажите период, на который выдан больничный лист.",
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
    text: "Если сотрудник прикреплен к нескольким функциям и в период временной нетрудоспособности не может выполнять ни одну из них, поставите галочку в строке «Применить ко всем функциям сотрудника».",
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
    text: "В выпадающем списке выберите сотрудника, который будет выполнять обязанности отсутствующего. Теперь ему автоматически начнут приходить повторяющиеся задачи в период временной нетрудоспособности коллеги.",
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
