export const permissionKeys = {
  // Компания
  company: {
    // Редактирование
    edit: {
      nameAndDesc: "company.edit.name_and_desc", // Название и описание
      timeZone: "company.edit.timezone", // Часовой пояс
      schedule: "company.edit.schedule", // График времени
      modules: "company.edit.mi", // Модули
    },
    notifications: {
      manageViolations: "company.notifications.manage_violations_notifications", // Управление уведомлениями о нарушениях
    },
    // Сотрудники компании
    employees: {
      managePermissionsForResendRegulation: "company.employees.manage_permissions_for_resend_regulation", // Управление правами на повторную отправку регламента
    },
  },

  // Оргструктура
  orgchart: {
    viewAll: "o.va", // Просмотр всех оргструктур
    add: "o.a", // Добавление оргструктуры
    edit: "o.e", // Редактирование оргструктуры
    delete: "o.d", // Удаление оргструктуры

    // Функции
    role: {
      add: "orgchart.role.add", // Добавление функций
      edit: "orgchart.role.edit", // Редактирование функций
      sort: "orgchart.role.sort", // Сортировка функций
      move: "orgchart.role.move", // Перемещение функций
      delete: "orgchart.role.delete", // Удаление функций
      usersEdit: "orgchart.role.users_edit", // Управление сотрудниками
      permissionsEdit: "orgchart.role.permissions_edit", // Управление разрешениями
    },

    template: {
      edit: "orgchart.template.edit" //редактирование шаблона оргструктуры
    }
  },

  // Повторяющиеся задачи
  recurringIssue: {
    add: "recurring_issue.add", // Создание повторяющихся задачи
    edit: "recurring_issue.edit", // Редактирование повторяющихся задач
    delete: "recurring_issue.delete", // Удаление повторяющихся задач
    pauseManage: "recurring_issue.pause_manage", // Управление паузой повторяющейся задачи
    viewHistory: "recurring_issue.view_history", // Просмотр истории повторяющейся задачи
  },

  // Отчёты
  report: {
    communication: "r.cm", // По коммуникациям
    driver: "r.dr", // По драйверам
  },

  // Сотрудники
  user: {
    viewUserPhoneNumber: "user.show_phone_number", // Просмотр номеров телефонов сотрудников
    edit: "user.edit", // Редактирование сотрудников
    delete: "user.delete", // Удаление сотрудников

    // Приглашения в компанию
    companyInvite: {
      add: "user.company_invite.add", // Создание приглашений в компанию
      delete: "user.company_invite.delete", // Удаление приглашений в компанию
    },
  },

  // График работы пользователей
  userSchedule: {
    // Просмотр
    view: {
      allRoles: "s.v.a", // Все функции
      childRoles: "s.v.c", // Функции-дети
      parentRoles: "s.v.p", // Родительские функции
    },

    // Изменение
    update: {
      allRoles: "s.u.a", // Все функции
      childRoles: "s.u.c", // Функции-дети
      parentRoles: "s.u.p", // Родительские функции
    },
  },
};
