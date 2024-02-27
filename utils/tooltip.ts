import { LocalesKeys } from "../constants/localesKeys";

export enum routineIssueTooltipKeys {
  name = "name",
  description = "description",
  result = "result",
  proof = "proof",
}

export const getRoutineIssueTooltip =
  (localeKey: LocalesKeys) =>
  (tooltipKey: routineIssueTooltipKeys): string => {
    switch (localeKey) {
      case LocalesKeys.ru: {
        switch (tooltipKey) {
          case routineIssueTooltipKeys.name:
            return "Задачу необходимо формулировать с глагола, то есть, в названии задачи должен быть ответ на вопрос “Что сделать?”. Именно это поможет нам четко поставить задачу и получить нужный результат.";
          case routineIssueTooltipKeys.description:
            return "Здесь необходимо как можно подробнее объяснить, что именно и как нужно сделать, добавить все ссылки на ресурсы, инструкции, чек-листы. При формулировки описания нужно опираться на идеальную картину - сотрудник, который работает первый день в компании, получив задачу, выполняет ее и не задает ни одного вопроса.";
          case routineIssueTooltipKeys.result:
            return "Здесь важно сформировать сотруднику, какой именно результат от выполнения этой задачи вы ожидаете. Кроме того, если результат сформулирован, то при закрытии задачи система спросит у сотрудника “Результат получен?”";
          case routineIssueTooltipKeys.proof:
            return "По умолчанию стоит “Не требуется”, но вы также можете выбрать: “Текст” или “Изображение (например,фото или скриншот)”. Это значит, что при закрытии этой задачи, если сотрудник не приложит доказательство выполненной им работы и полученного результата, он сможет ее закрыть только с отметкой “Результат не произведен”.";
          default:
            return "";
        }
      }
      case LocalesKeys.en: {
        switch (tooltipKey) {
          case routineIssueTooltipKeys.name:
            return "The task must be formulated with a verb, that is, in the name of the task there must be an answer to the question “What to do?”. This is what will help us to clearly set the task and get the desired result.";
          case routineIssueTooltipKeys.description:
            return "Here it is necessary to explain in as much detail as possible what exactly and how to do it, add all links to resources, instructions, checklists. When formulating a description, you need to rely on an ideal picture - an employee who works for the first day in the company, having received a task, performs it and does not ask a single question.";
          case routineIssueTooltipKeys.result:
            return "Here it is important to inform the employee what kind of result you expect from completing this task. In addition, if the result is formulated, then when the task is closed, the system will ask the employee “Has the result been received?”";
          case routineIssueTooltipKeys.proof:
            return 'By default, it is “Not required”, but you can also choose: “Text“ or "Image (for example, photo or screenshot)”. This means that when closing this task, if the employee does not attach proof of the work he has done and the result obtained, he will be able to close it only with the mark “Result not produced”.';
          default:
            return "";
        }
      }
      case LocalesKeys.uk: {
        switch (tooltipKey) {
          case routineIssueTooltipKeys.name:
            return 'Завдання необхідно формулювати з дієслова, тобто, в назві завдання повинен бути відповідь на питання " що зробити?”. Саме це допоможе нам чітко поставити завдання і отримати потрібний результат.';
          case routineIssueTooltipKeys.description:
            return "Тут необхідно якомога докладніше пояснити, що саме і як потрібно зробити, додати всі посилання на ресурси, інструкції, чек-листи. При формулювання опису потрібно спиратися на ідеальну картину - співробітник, який працює перший день в компанії, отримавши завдання, виконує її і не задає жодного питання.";
          case routineIssueTooltipKeys.result:
            return 'Тут важливо сформувати співробітнику, який саме результат від виконання цього завдання ви очікуєте. Крім того, якщо результат сформульований, то при закритті завдання система запитає у співробітника " Результат отриманий?”';
          case routineIssueTooltipKeys.proof:
            return 'За замовчуванням стоїть "Не потрібно", але ви також можете вибрати: "Текст" або "зображення (наприклад, фото або скріншот)". Це означає, що при закритті цього завдання, якщо співробітник не докладе доказ виконаної ним роботи і отриманого результату, він зможе її закрити тільки з відміткою "Результат не проведений".';
          default:
            return "";
        }
      }
      case LocalesKeys.zh: {
        switch (tooltipKey) {
          case routineIssueTooltipKeys.name:
            return "任務的名稱必須包含一個動詞，也就是說，在任務的名稱中必須回答到「要做什麼？」的問題。這將有助於我們明確設定任務並獲得所期望的結果。";
          case routineIssueTooltipKeys.description:
            return "在這裡，需要盡可能詳細地解釋要做什麼，以及如何做，並添加所有資源、指示和檢查清單的連結。在撰寫描述時，需要依據一個理想的情景 。例如一位在公司第一天工作的員工收到任務後能夠執行並不問任何問題。";
          case routineIssueTooltipKeys.result:
            return "在這裡，重要的是告知員工您對完成此任務期望的結果是什麼。此外，如果結果已經明確表述，那麼在任務關閉時，系統將會問員工「是否已收到結果？」。";
          case routineIssueTooltipKeys.proof:
            return "默認情況下，選項是「不需要」，但您也可以選擇：「文字」或「圖像（例如，照片或截圖）」。這意味著當關閉此任務時，如果員工未附上所完成工作和獲得結果的證明，他只能使用「未產生結果」的標記來關閉任務。";
          default:
            return "";
        }
      }
      default: {
        switch (tooltipKey) {
          case routineIssueTooltipKeys.name:
            return "The task must be formulated with a verb, that is, in the name of the task there must be an answer to the question “What to do?”. This is what will help us to clearly set the task and get the desired result.";
          case routineIssueTooltipKeys.description:
            return "Here it is necessary to explain in as much detail as possible what exactly and how to do it, add all links to resources, instructions, checklists. When formulating a description, you need to rely on an ideal picture - an employee who works for the first day in the company, having received a task, performs it and does not ask a single question.";
          case routineIssueTooltipKeys.result:
            return "Here it is important to inform the employee what kind of result you expect from completing this task. In addition, if the result is formulated, then when the task is closed, the system will ask the employee “Has the result been received?”";
          case routineIssueTooltipKeys.proof:
            return 'By default, it is “Not required”, but you can also choose: “Text“ or "Image (for example, photo or screenshot)”. This means that when closing this task, if the employee does not attach proof of the work he has done and the result obtained, he will be able to close it only with the mark “Result not produced”.';
          default:
            return "";
        }
      }
    }
  };

export const getPermissionsTooltips = (localeKey: LocalesKeys) => {
  switch (localeKey) {
    case LocalesKeys.ru:
      return ruPermissionTooltips;
    case LocalesKeys.en:
      return enPermissionTooltips;
    case LocalesKeys.uk:
      return uaPermissionTooltips;
    default:
      return [];
  }
};

export const ruPermissionTooltips = [
  {
    id: 1,
    key: "orgchart.role.add",
    text: "Создание  - предоставляет возможность создавать новые функции на оргструктуре",
  },
  {
    id: 2,
    key: "orgchart.role.edit",
    text: "Редактирование - предоставляет возможность редактировать оргструктуру",
  },
  {
    id: 3,
    key: "orgchart.role.sort",
    text: "Сортировка - предоставляет возможность изменять порядок подфункций",
  },
  {
    id: 4,
    key: "orgchart.role.move",
    text: "Перемещение - предоставляет возможность изменять порядок функций",
  },
  {
    id: 5,
    key: "orgchart.role.delete",
    text: "Удаление - предоставляет возможность удалять функции из оргструктуры",
  },
  {
    id: 6,
    key: "orgchart.role.users_edit",
    text: "Управление сотрудниками - позволяет ставить и снимать сотрудников на функции",
  },
  {
    id: 7,
    key: "orgchart.role.permissions_edit",
    text: "Управления разрешениями - позволяет редактировать разрешения на функциях",
  },
  {
    id: 8,
    key: "recurring_issue.add",
    text: "Создание - предоставляет возможность создавать повторяющиеся задачи",
  },
  {
    id: 9,
    key: "recurring_issue.edit",
    text: "Редактирование - предоставляет возможность изменять повторяющиеся задачи",
  },
  {
    id: 10,
    key: "recurring_issue.delete",
    text: "Удаление - предоставляет возможность удалять функции из оргструктуры",
  },
  {
    id: 11,
    key: "recurring_issue.pause_manage",
    text: "Управление паузой - предоставляет возможность приостанавливать и снимать с паузы повторяющиеся задачи",
  },
  {
    id: 12,
    key: "recurring_issue.view_history",
    text: "Просмотр истории - позволяет просматривать историю действий по каждой повторяющейся задаче.",
  },
  {
    id: 13,
    key: "user.show_phone_number",
    text: "Просмотр номера телефона - позволяет видеть контактный номер сотрудников, в модуле “сотрудники”",
  },
  {
    id: 14,
    key: "user.edit",
    text: "Редактирование - позволяет редактировать профили сотрудников, в модуле “сотрудники”",
  },
  {
    id: 15,
    key: "user.delete",
    text: "Удаление -  позволяет удалять сотрудников, в модуле “сотрудники”",
  },
  {
    id: 16,
    key: "user.company_invite.add",
    text: "Создание приглашения - позволяет добавлять сотрудников в систему, в модуле “сотрудники“",
  },
  {
    id: 17,
    key: "user.company_invite.delete",
    text: "Удаление приглашения - позволяет удалять ссылки для приглашения сотрудников из системы, в модуле “сотрудники”",
  },
  {
    id: 18,
    key: "company.edit.name_and_desc",
    text: "Название и описание - позволяет менять название и описание компании",
  },
  {
    id: 19,
    key: "company.edit.timezone",
    text: "Часовой пояс - позволяет менять часовой пояс комании",
  },
  {
    id: 20,
    key: "company.edit.schedule",
    text: "График работы - позволяет изменять день начала недели и график работы компании.",
  },
  {
    id: 21,
    key: "r.cm",
    text: "По коммуникациям - доступ для появление модуля  “Отчеты - по коммуникациям”. В данном отчете отображается информация по работе с задачами в компании.",
  },
  {
    id: 22,
    key: "r.dr",
    text: "По драйверам - доступ для модуля “Отчеты - по драйверам”. В данном отчете отображаются данные по работе с драйвером в компании.",
  },
];

export const enPermissionTooltips = [
  {
    id: 1,
    key: "orgchart.role.add",
    text: "Creation - provides an opportunity to create new functions on the organizational structure",
  },
  {
    id: 2,
    key: "orgchart.role.edit",
    text: "Editing - provides the ability to edit the organizational structure",
  },
  {
    id: 3,
    key: "orgchart.role.sort",
    text: "Sorting - provides the ability to change the order of subfunctions",
  },
  {
    id: 4,
    key: "orgchart.role.move",
    text: "Moving - provides the ability to change the order of functions",
  },
  {
    id: 5,
    key: "orgchart.role.delete",
    text: "Deletion - provides the ability to delete functions from the organizational structure",
  },
  {
    id: 6,
    key: "orgchart.role.users_edit",
    text: "Employee Management - allows you to put and remove employees on functions",
  },
  {
    id: 7,
    key: "orgchart.role.permissions_edit",
    text: "Permissions Management - allows you to edit permissions on functions",
  },
  {
    id: 8,
    key: "recurring_issue.add",
    text: "Creation - provides the ability to create recurring tasks",
  },
  {
    id: 9,
    key: "recurring_issue.edit",
    text: "Editing - provides the ability to change recurring tasks",
  },
  {
    id: 10,
    key: "recurring_issue.delete",
    text: "Deletion - provides the ability to delete functions from the organizational structure",
  },
  {
    id: 11,
    key: "recurring_issue.pause_manage",
    text: "Pause Management - provides the ability to pause and un-pause recurring tasks",
  },
  {
    id: 12,
    key: "recurring_issue.view_history",
    text: "View History - allows you to view the history of actions for each recurring task.",
  },
  {
    id: 13,
    key: "user.show_phone_number",
    text: "View History - allows you to view the history of actions for each recurring task.",
  },
  {
    id: 14,
    key: "user.edit",
    text: "Editing - allows you to edit employee profiles, in the “employees” module",
  },
  {
    id: 15,
    key: "user.delete",
    text: "Delete - allows you to delete employees, in the “employees” module",
  },
  {
    id: 16,
    key: "user.company_invite.add",
    text: "Creating an invitation - allows you to add employees to the system, in the “employees“ module",
  },
  {
    id: 17,
    key: "user.company_invite.delete",
    text: "Deleting an invitation - allows you to delete links for inviting employees from the system, in the “employees” module",
  },
  {
    id: 18,
    key: "company.edit.name_and_desc",
    text: "Name and description - allows you to change the name and description of the company",
  },
  {
    id: 19,
    key: "company.edit.timezone",
    text: "Time zone - allows you to change the company's time zone",
  },
  {
    id: 20,
    key: "company.edit.schedule",
    text: "Work schedule - allows you to change the start day of the week and the company's work schedule.",
  },
  {
    id: 21,
    key: "r.cm",
    text: 'On communications - access for the appearance of the module “Reports - on communications". This report displays information on working with tasks in the company.',
  },
  {
    id: 22,
    key: "r.dr",
    text: 'On communications - access for the appearance of the module “Reports - on communications". This report displays information on working with tasks in the company.',
  },
];

export const uaPermissionTooltips = [
  {
    id: 1,
    key: "orgchart.role.add",
    text: "Редагування-надає можливість редагувати оргструктуру",
  },
  {
    id: 2,
    key: "orgchart.role.edit",
    text: "Редагування-надає можливість редагувати оргструктуру",
  },
  {
    id: 3,
    key: "orgchart.role.sort",
    text: "Сортування-надає можливість змінювати порядок підфункцій",
  },
  {
    id: 4,
    key: "orgchart.role.move",
    text: "Переміщення-надає можливість змінювати порядок функцій",
  },
  {
    id: 5,
    key: "orgchart.role.delete",
    text: "Видалення-надає можливість видаляти функції з оргструктури",
  },
  {
    id: 6,
    key: "orgchart.role.users_edit",
    text: "Управління співробітниками-дозволяє ставити і знімати співробітників на функції",
  },
  {
    id: 7,
    key: "orgchart.role.permissions_edit",
    text: "Управління дозволами-дозволяє редагувати дозволу на функціях",
  },
  {
    id: 8,
    key: "recurring_issue.add",
    text: "Створення-надає можливість створювати повторювані завдання",
  },
  {
    id: 9,
    key: "recurring_issue.edit",
    text: "Редагування-надає можливість змінювати повторювані завдання",
  },
  {
    id: 10,
    key: "recurring_issue.delete",
    text: "Видалення-надає можливість видаляти функції з оргструктури",
  },
  {
    id: 11,
    key: "recurring_issue.pause_manage",
    text: "Управління паузою-надає можливість призупиняти і знімати з паузи повторювані завдання",
  },
  {
    id: 12,
    key: "recurring_issue.view_history",
    text: "Перегляд історії-дозволяє переглядати історію дій по кожній повторюваної задачі.",
  },
  {
    id: 13,
    key: "user.show_phone_number",
    text: 'Перегляд номера телефону-дозволяє бачити контактний номер співробітників, в модулі "співробітники"',
  },
  {
    id: 14,
    key: "user.edit",
    text: 'Редагування-дозволяє редагувати профілі співробітників, в модулі "співробітники"',
  },
  {
    id: 15,
    key: "user.delete",
    text: 'Видалення-дозволяє видаляти співробітників, в модулі "співробітники"',
  },
  {
    id: 16,
    key: "user.company_invite.add",
    text: 'Створення запрошення-дозволяє додавати співробітників в систему, в модулі " співробітники“',
  },
  {
    id: 17,
    key: "user.company_invite.delete",
    text: 'Видалення запрошення-дозволяє видаляти посилання для запрошення співробітників з системи, в модулі "співробітники"',
  },
  {
    id: 18,
    key: "company.edit.name_and_desc",
    text: "Назва та опис-дозволяє змінювати назву та опис компанії",
  },
  {
    id: 19,
    key: "company.edit.timezone",
    text: "Часовий пояс-дозволяє змінювати часовий пояс компанії",
  },
  {
    id: 20,
    key: "company.edit.schedule",
    text: "Графік роботи-дозволяє змінювати день початку тижня і графік роботи компанії.",
  },
  {
    id: 21,
    key: "r.cm",
    text: 'З комунікацій-доступ для появи модуля"звіти - з комунікацій". В даному звіті відображається інформація по роботі з завданнями в компанії.',
  },
  {
    id: 22,
    key: "r.dr",
    text: 'По драйверам-доступ для модуля"звіти - по драйверам". В даному звіті відображаються дані по роботі з драйвером в компанії.',
  },
];
