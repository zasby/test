import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const ruRoutineTasks: IGuideNodes[] = [
  // {
  //   tag: semanticTagKeys.h2,
  //   text: "Правила создания повторяющихся задач",
  //   attrs: {className : "hint-title"},
  // },
  {
    tag: semanticTagKeys.p,
    text: "Повторяющиеся задачи — особый тип задач, которые необходимо выполнять с определенной периодичностью, например:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "каждый день",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "каждую неделю",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "каждый месяц",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "каждый год",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Достаточно один раз задать параметры такой задачи, и она автоматически поступит к выбранным исполнителям в указанное время.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Вы можете добавить повторяющуюся задачу двумя способами.",
    boldPart: "two different methods",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Первый способ: ",
  },
  {
    tag: semanticTagKeys.p,
    text: "В модуле «Коммуникации» нажмите на стрелку справа от кнопки «Создать задачу». ",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Из выпадающего меню выберите команду «Создать повторяющуюся задачу».",
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
    text: "Второй способ:",
  },
  {
    tag: semanticTagKeys.p,
    text: "Перейдите в модуль «Оргструктура».",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Нажмите на функцию, для которой хотите поставить повторяющуюся задачу.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/ru/routine/image3.png" },
  },
  {
    tag: semanticTagKeys.p,
    text: "В появившемся окне выберите «Повторяющиеся задачи».",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/ru/routine/image9.png" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Нажмите на кнопку «Добавить задачу».",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Определите, кому будет направлена повторяющаяся задача: руководителю функции или кому-либо из исполнителей, прикрепленных к этой функции.",
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
    text: "В чем разница между руководителем и исполнителем функции?\n",
  },
  {
    tag: semanticTagKeys.p,
    text: "Руководитель отвечает за деятельность функции в целом, а исполнители работают под его контролем. Например, если в отделе продаж несколько менеджеров и один старший менеджер, то в оргструктуре его следует назначить руководителем функции, а остальных — исполнителями. ",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Если за функцию оргструктуры отвечает единственный сотрудник, его целесообразно назначить руководителем, так как он несет полную ответственность за исполнение задач и конечный результат.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Как узнать, кто руководитель, а кто исполнитель?",
  },
  {
    tag: semanticTagKeys.p,
    text: "Чтобы увидеть, как распределены статусы в рамках функции, перейдите во вкладку «Сотрудники».",
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
    text: "В появившемся окне настройте параметры повторяющейся задачи.",
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
    text: "Настройка повторяющейся задачи",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    anchorId: 1,
    text: "В поле «Кому» автоматически отобразится функция, которую вы выбрали в оргструктуре, и адресат задачи (исполнитель или руководитель). ",
    boldPart: "«Кому»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Если вы создали задачу первым способом (то есть в модуле «Коммуникация»), это поле нужно будет заполнить самостоятельно. Нажмите на кнопку «Добавить». В появившемся окне выберите необходимую функцию и роль — «руководитель» или «исполнитель» функции.\n",
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
    text: "На данном этапе можно выбрать категорию адресатов из выпадающего списка. В списке доступны:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Все",
    text: "Все (адресует задачу всем сотрудникам компании без исключения)",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Все руководители",
    text: "Все руководители (адресует задачу всем сотрудникам компании, которые выполняют роль руководителя какой-либо функции)",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Руководитель (позволяет выбрать одну или несколько функций, руководители которых будут получать созданную задачу)",
    italicPart: "Руководитель",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Исполнитель",
    text: "Исполнитель (позволяет выбрать одну или несколько функций, исполнители которых будут получать созданную задачу)",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "«Добавить».",
    text: "Также можно добавлять новых адресатов из выпадающего списка — например, когда необходимо направить повторяющуюся задачу нескольким функциям или группам сотрудников. Для этого еще раз нажмите на кнопку «Добавить».",
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
    text: "Установите периодичность повторения задачи в выпадающем меню, в котором есть следующие варианты:",
    anchorId: 2,
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    text: "День — с указанием времени (по умолчанию 12:00). Изменять часы или минуты можно нажатием левой кнопки мыши.",
    boldPart: "День ",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    text: "Неделю — с указанием дня недели и времени.",
    boldPart: "Неделю",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Месяц — с указанием числа и времени (например, 1-го числа каждого месяца в 12:00).",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    boldPart: "Месяц",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "N дней — с указанием количества дней между повторами и времени (например, каждые три дня в 11:00).",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    boldPart: "N дней",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/ru/routine/image6.png" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Пример 1. Задачу «Отвечать в чате техподдержки» в компании необходимо выполнять ежедневно, три раза в день. Чтобы настроить нужную периодичность:",
    isItalic: true,
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Выберите параметр «День» и укажите время первого запуска задачи.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Поставьте курсор в поле «Нажмите для выбора», расположенное ниже, а затем укажите время второго запуска задачи.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/ru/routine/image8.png" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Повторите предыдущее действие для третьего запуска задачи.",
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
    text: "Пример 2. Функция «Закупки» ежедневно по своему рабочему графику (со среды до воскресенья) должна выполнять задачу «Закупить заказанный товар». Чтобы настроить нужную периодичность:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Выберите параметр «Неделю», задайте день недели «Среда» и установите время запуска задачи.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Поставьте курсор в поле «Нажмите для выбора», расположенное ниже.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Повторите действия из предыдущих пунктов для дней недели «Четверг», «Пятница», «Суббота» и «Воскресенье».",
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
    text: "Пример 3. Задачу «Рассчитать заработную плату» необходимо выполнять 5-го и 20-го числа каждого месяца. Чтобы настроить нужную периодичность: ",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Выберите параметр «Месяц», установите число и время первого ежемесячного запуска задачи.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Поставьте курсор в поле «Нажмите для выбора», расположенное ниже, а затем повторите действия из предыдущего пункта для второго ежемесячного запуска задачи.",
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
    text: "Пример 4. Задачу «Подать декларацию в налоговую» необходимо выполнять ежеквартально. Чтобы настроить нужную периодичность:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Выберите параметр «Месяц», укажите месяц «Март», число и время запуска задачи.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Поставьте курсор в поле «Нажмите для выбора», расположенное ниже.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Повторите действия из предыдущих пунктов для месяцев «Июнь», «Сентябрь» и «Декабрь».",
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
    text: "Параметр «Создавать в выходные дни» по умолчанию активен. Если выключить его, сотрудники не будут получать задачу в нерабочие дни.",
    boldPart: "«Создавать в выходные дни»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "«Учитывать график работы»",
    text: "Параметр «Учитывать график работы» по умолчанию неактивен. Если включить его, сотрудники будут получать задачу в соответствии со своим рабочим графиком. Например, сотрудник два дня работает и два дня отдыхает. Если активировать этот параметр, задача будет поступать сотруднику только в его рабочие дни.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Следующий параметр позволяет установить срок исполнения задачи. В поле «Сделать до» есть два варианта:",
    anchorId: 3,
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Спустя срок: можно задать количество часов/минут/дней/месяцев для работы над задачей.",
    boldPart: "Спустя срок",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Например, при заданной периодичности «Каждый день в 10:00» временной интервал 10 часов означает, что сотруднику отведено на задачу десять часов, и справиться он должен до 20:00 того же дня.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/ru/routine/image1.png" },
  },
  {
    tag: semanticTagKeys.p,
    text: "До дня недели: можно установить конкретный день и время, не позднее которого задачу необходимо выполнить. Если сотрудник не закрыл задачу до этого момента, она получает статус просроченной. Например, выберите значения «Пятница» — «17:00», если хотите, чтобы сотрудник отчитывался по задаче не позднее пяти часов вечера каждой пятницы.",
    boldPart: "До дня недели",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
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
    text: "Также настройте следующие параметры для повторяющейся задачи:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "«Исполнитель не может менять срок»",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    anchorId: 4,
    text: "«Исполнитель не может менять срок» — включите этот параметр, если не хотите, чтобы сотрудник по своему усмотрению продлевал время выполнения задачи.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "«Требует проверки постановщика»",
    anchorId: 5,
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    text: "«Требует проверки постановщика» — позволяет отправлять выполненную задачу тому, кто ее поставил: он оценит результат, а затем либо одобрит, либо вернет задачу на доработку. Если оставить этот параметр выключенным, задача будет считаться  закрытой сразу после того, как сотрудник поставит отметку о ее выполнении.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/ru/routine/image5.png" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Дополнительная настройка",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "По умолчанию это меню скрыто, увидеть его можно при нажатии на заголовок.",
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
    boldPart: "«Направить ближайшему руководителю, если нет работающих в данный момент сотрудников»",
    text: "Параметр «Направить ближайшему руководителю, если нет работающих в данный момент сотрудников» по умолчанию активен. Например, уборщица трудится с понедельника по субботу, а в воскресенье у  нее выходной. Задача для нее должна приходить в соответствии с этим рабочим графиком. Однако если вы оставите этот параметр включенным, то в воскресенье задача поступит руководителю уборщицы, и он должен будет помыть полы. Если отключить этот параметр, в выходной день задачу не получит никто.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/ru/routine/image7.png" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "«Что делать с задачей, если отправитель НЕ работает»",
    anchorId: 6,
    text: "В блоке «Что делать с задачей, если отправитель НЕ работает» определите, как нужно поступить с задачей и контролировать ее выполнение, когда у того, кто изначально ее поставил, выходной, больничный или очередной отпуск.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Создать в любом случае — исполнитель получит задачу от имени отправителя даже в период его отсутствия.\n",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Создать от ближайшего руководителя — сотрудник получит задачу от имени ближайшего руководителя, который работает в соответствии с графиком.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Создать от исполнителя — сотрудник получит задачу от собственного имени.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Не создавать — в период отсутствия отправителя исполнитель не получит задачу.",
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
    boldPart: "«Отправитель»",
    text: "В блоке «Отправитель» можно указать, от чьего имени будет поступать задача и кто ее будет контролировать. Выберите один из трех вариантов:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    italicPart: "Ближайший руководитель",
    text: "Ближайший руководитель — сотрудник получит задачу от имени своего непосредственного начальника.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    italicPart: "Исполнитель функции",
    text: "Исполнитель функции — сотрудник получит задачу от имени другого сотрудника в статусе исполнителя.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Например, в компании есть функция по ознакомлению персонала с регламентами. В этом случае отправителем повторяющейся задачи по изучению регламентов можно указать кого-либо из исполнителей этой функции.\n",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    italicPart: "Руководитель функции",
    text: "Руководитель функции  — сотрудник получит задачу от имени руководителя какой-то из функций. Если у выбранной функции отсутствует руководитель, то отправителем станет ближайший руководитель, у которого  эта функция находится в подчинении.",
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
    boldPart: "«Использовать часовой пояс»",
    anchorId: 8,
    text: "Блок «Использовать часовой пояс» поможет сделать работу в системе удобнее, если часовые пояса сотрудников не совпадают, а политика вашей компании допускает гибкий подход к рабочим графикам. Выберите один из трех вариантов установки часового пояса для работы над задачей:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    italicPart: "Исполнителя",
    text: "Исполнителя — задача появится в системе по часовому поясу сотрудника, который должен ее выполнить. Например, ваша компания расположена в Британии, и вы установили периодичность задачи — каждый день в 12:00 по лондонскому времени. Однако если сотрудник работает в Рейкьявике, задача будет поступать ему в 11:00 по местному времени.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    italicPart: "Отправителя",
    text: "Отправителя — задача появится в системе по часовому поясу отправителя.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    italicPart: "Компании",
    text: "Компании — задача появится в системе по часовому поясу компании. Например, ежедневная задача, запланированная на 12:00 в Лондоне, поступит сотруднику-парижанину в 13:00 по местному времени.",
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
    text: "Характеристики задачи",
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
    boldPart: "Название.",
    text: "Название. Чтобы получить нужный результат, задачу необходимо формулировать, начиная с глагола. Название задачи должно быть ответом на вопрос «Что сделать?»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Например: «Провести координационное совещание».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Описание.",
    text: "Описание.  В этом поле подробно объясните, что именно и как нужно сделать, добавьте инструкции, чек-листы, ссылки на сетевые ресурсы. При составлении описания ориентируйтесь на сотрудника, который работает в компании первый день: все должно быть настолько ясно, что он смог бы выполнить задачу, не задав ни одного вопроса.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Например: «Повестка координационного совещания:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Обсудить выполненные задачи и поощрить ответственных.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Обсудить невыполненные задачи и выяснить причины, получить ответы на следующие вопросы…»",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Результат.",
    text: "Результат. Точно сформулируйте, какой именно итог выполнения задачи вы ожидаете. Если это поле заполнено, при закрытии задачи система спросит у исполнителя: «Результат получен?»",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Например: «Задачи, внесенные на платформу».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Вложение.",
    text: "Вложение. В это поле можно добавить любой файл, в том числе видеоролик, графическое или анимированное изображение (в формате gif) и так далее — все, что может пригодиться сотруднику для выполнения задачи.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Например, документ-шаблон плана на неделю.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Доказательство.",
    text: "Доказательство.  В этом поле можно задать вид подтверждения, которое исполнитель должен предоставить по завершении работы над задачей, либо установить, что такое подтверждение не нужно. По умолчанию предложено значение «Не требуется», но вы можете выбрать варианты «Текст» или «Изображение». Для каждого вида подтверждения укажите нужное количество или объем и опишите критерии соответствия.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Для варианта «Текст» рекомендуем дать краткое описание и указать минимальное количество символов.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Для варианта «Изображение» можно указать любые желаемые характеристики файла. ",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Например: «Снимок экрана модуля коммуникации — раздел «на контроле».",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Чтобы  закрыть задачу, сотрудник должен прикрепить затребованные файлы. Если он этого не сделает, карточка задачи получит отметку о нарушении.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Чтобы сохранить повторяющуюся задачу, нажмите на кнопку «Создать» в левом нижнем углу окна.",
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
