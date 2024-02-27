import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const enRoutineTasks: IGuideNodes[] = [
  // {
  //   tag: semanticTagKeys.h2,
  //   text: "Policy on Routine Creation",
  //   attrs: {className : "hint-title"},
  // },
  {
    tag: semanticTagKeys.p,
    text: "Routines are special type of task that must be completed on a recurring basis, such as:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Daily",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Weekly",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Monthly",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Yearly",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "It is enough to establish the parameters of such a task, after which point it will automatically go to the selected performers at the designated time.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "There are two different methods for creating routines.",
    boldPart: "two different methods",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Method One:",
  },
  {
    tag: semanticTagKeys.p,
    text: "In the “Communications” module, press the arrow to the right of the “Create task” button.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "From the dropdown menu, select the “Create routine” command.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image11.png",
    },
  },
  {
    tag: semanticTagKeys.b,
    text: "Method Two:",
  },
  {
    tag: semanticTagKeys.p,
    text: "Head to the “Org Chart” module.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Select the function you want to create a routine to.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image14.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "In the window that appears, select “Routines”",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/en/routine/image9.png" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Press the “Add Routine” button.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Determine to whom this routine will be directed: the function manager or one of the performers subordinate to this function",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image19.png",
    },
  },
  {
    tag: semanticTagKeys.b,
    text: "What’s the difference between function managers and performers?",
  },
  {
    tag: semanticTagKeys.p,
    text: "The manager is responsible for the activities of the function as a whole, whereas the performer works under the manager. For example, if in the sales department, there are a number of managers and one head manager, then in the org chart it would make sense to label the latter as function manager, and the rest as performers.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "If there is only one worker responsible for the function in the org chart, then it  makes sense to appoint them as manager, since they are taking on full responsibility for the completion of tasks and the final results.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "How do I know who is a manager and who is a performer?",
  },
  {
    tag: semanticTagKeys.p,
    text: "To see how statuses are distributed within a function, go to the “Employees” tab.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image21.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "In the window that appears, set up the parameters of your routine.",
    prefix: { tag: semanticTagKeys.span, text: "6.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image26.png",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Routine Settings",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    anchorId: 1,
    text: "The “Performers” field will automatically display the function you’ve selected from the org chart and the recipient of the task (performer or manager).",
    boldPart: "“Performers”",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "If you’ve created a task using the first method (in the Communication module), you’ll need to fill in this field yourself. Press the Add button. In the pop-up, you can select the function and role—”Function manager” or “Function performer.”",
    boldPart: "Add",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/en/routine/image8.png" },
  },
  {
    tag: semanticTagKeys.p,
    text: "At this stage, you can select the category of who will receive the task. Options:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "All (sends the task to all company employees, without exception)",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "All manager (sends the task to all company employees in the role of Manager of any function)",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "All performers (sends the task to all company employees in the role of Performer of any function)",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Manager (allows you to select one or more functions, the managers of which will receive the task once it’s created)",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Performer (allows you to select one or more functions, the performers of which will receive the task once it’s created)",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "You can also add new recipients from the drop-down list, for example, when you need to send a routine to several functions or groups of employees. To do so, simply press Add again.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image13.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    anchorId: 2,
    text: "Establish the timeframe for the routine in the dropdown menu, which contains the following options:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Day: with a designated time (default 12:00). You can change the hours and minutes by left pressing with your mouse.",
    boldPart: "Day:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Week: with a designated day of the week and time.",
    boldPart: "Week:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Month: with a designated date and time (for example, the first of each month at 12:00).",
    boldPart: "Month:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "N Days: with a designated number of days between repetitions, and a time (for example, every three days at 11:00).",
    boldPart: "N Days:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image16.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Example 1. The “Reply in the tech support chat” task must be completed daily, three times a day. To set up the necessary timeframe:",
    isItalic: true,
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Select the ”Day” option and choose a time for the task to first launch.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Place your cursor over the ”Press to Select” box below, and specify the time for the second task to launch.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/en/routine/image6.png" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Repeat the previous action for the third launch of the task.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image27.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Example 2. The ”Purchasing” function must, according to its daily work schedule (Wednesday to Sunday), complete the task of ”Buying the Requested Goods.” To set the desired frequency:",
    isItalic: true,
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Choose the ”Weekly” option, enter ”Wednesday” for the day of the week, and add a time for the task to launch.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Place your cursor over the ”Press to Select” box below.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Repeat the actions from the previous steps for Thursday, Friday, Saturday, and Sunday.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image18.png",
    },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image15.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Example 3. The ”Calculate Wages” task must be performed on the 5th and 20th of each month. To set the desired frequency:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Choose the ”Month” option, and set the date and time for the task's first run.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Place your cursor over the ”Press to Select” box below, and then repeat the previous steps for the second monthly run of the task.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image28.png",
    },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/en/routine/image1.png" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Example 4. The “Submit a Tax Declaration” task must be completed each quarter. To set the desired frequency:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Choose the “Month” option, set the month to “March,” and add the date and time for the launch of the task.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Place your cursor over the “Press to Select” button below.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Repeat the actions from the previous steps for the months of June, September, and December.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image17.png",
    },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image12.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "The option ”Create on Weekends” is active by default. If it is deactivated, employees will not receive tasks on the weekend.",
    boldPart: "”Create on Weekends”",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Consider Work Schedule",
    text: "The “Consider Work Schedule” option is off by default. If you turn it on, employees will receive tasks according to their work schedule. For example, suppose an employee works two days and then has two days off; if this option is active, they will only get tasks on their working days.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/en/routine/image7.png" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "”Deadline”",
    anchorId: 3,
    text: "The following option allows you to set deadlines for tasks. There are two options in the ”Deadline” field:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "During:",
    text: "During: You can set the number of hours/minutes/days/months during which the performer can work on the task.For example, with a given frequency of “Every Day at 10:00,“ an interval of 10 hours means that the employee has ten hours to complete the task, and must turn it in by 20:00 of the same day.\n",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/en/routine/image2.png" },
  },
  {
    tag: semanticTagKeys.p,
    text: 'Until: You can set a specific day and time by which the task must be completed. If the employee hasn\'t marked the task finished by this moment, the task will be labeled overdue. For example, select the values "Friday, 17:00" if you want the employee to account for the task no later than 17:00 every Friday.',
    boldPart: "Until:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image20.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "You can also configure the following settings for routines:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    anchorId: 4,
    boldPart: "”Performer Cannot Change Deadline”",
    text: "”Performer Cannot Change Deadline”: Disable this option if you want to allow employees to extend deadlines on tasks at their own discretion.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "”Needs Sender Review”",
    anchorId: 5,
    text: "”Needs Sender Review”: This allows you to send the completed task back to the person who assigned it. They will evaluate the result and either approve it or return the task for revision. Disable this setting if you would like the task to be marked finished as soon as the employee has labeled it complete.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/en/routine/image5.png" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Additional Settings",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "This menu is hidden by default, but you can view it by pressing the banner.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/en/routine/image4.png" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "“Create for the nearest manager if there are no employees with working hours”",
    text: "The “Create for the nearest manager if there are no employees with working hours” option is enabled by default. For example, if the janitor works from Monday to Saturday, with Sundays off, a task for them should arrive according to that schedule. However, if you leave this option on, then on Sunday that task will go to the janitor’s manager, and they will be asked to mop the floor. If you disable this option, no one will receive the task on the janitor’s day off.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: { className: "hint-image", alt: "my-issues", src: window.location.origin + "/guides/en/routine/image3.png" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "“What to do if the sender is NOT working”",
    anchorId: 6,
    text: "In the “What to do if the sender is NOT working” block, you can set what to do with tasks and oversee their completion when the original assigner has the day off, is sick, or is on vacation.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Create anyway",
    text: "Create anyway — the performer will receive the task from the sender, even when the sender is out.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Create from the closest manager",
    text: "Create from the closest manager — the employee will receive the task from the closest manager to the original sender who is working during that time.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Create from performer",
    text: "Create from performer — the employee will receive the task from themself.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Do not create",
    text: "Do not create — the performer will not receive the task while the sender is off.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image24.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    anchorId: 7,
    boldPart: "“Sender“",
    text: "In the “Sender“ section, you can specify on whose behalf the task will be delegated, and who will supervise it. Choose from three options",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Direct Manager:",
    text: "Direct Manager: An employee will receive a task on behalf of their immediate supervisor.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Performer of function:",
    text: "Performer of function: An employee will receive a task on behalf of another employee in the status of performer.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "For example, a company has a function that directs staff to familiarize themselves with regulations. In this instance, the sender of the routine to study regulations can also be one of the performers of this function.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Manager of function",
    text: "Manager of function: An employee will receive a task on behalf of the manager of some function. If the selected function doesn't have a manager, then the sender will be the upper manager to whom the function is subordinated.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image10.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "“Use Timezone“",
    anchorId: 8,
    text: "The “Use Timezone“ section will help make working in the system more convenient if employees work in different timezones and company policy takes a flexible approach to work schedules. Choose one of three options for setting the timezone in which the work will take place:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Performer:",
    text: "Performer: The task will appear in the system according to the timezone of the employee who must complete it. For example, let's say your company is in Britain, and you set the frequency of the task to be everyday at 12:00 PM London time. However, if the employee works in Reykjavik, the task will arrive to them at 11:00 AM local time.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Company:",
    text: "Company: The task will appear in the system according to the timezone of the company. For example, that everyday task scheduled for 12:00 PM London time, will appear to a Parisian employee at 1:00 AM local time.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image25.png",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Task Elements",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image22.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Name.",
    text: "Name. In order to get the desired result, the name of the task must begin with a verb. The name ought to be an answer to the question “What must be done?”",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Example: “Conduct a Coordinated Meeting.”",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Description.",
    text: "Description. In this field, you can describe in detail just what needs to be done and how to do it, add instructions, checklists, and links to related resources. When writing a description, have in mind an employee who’s just starting on their first day: everything should be so clear that they could complete the task without asking a single question. ",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Example: “Coordinated Meeting Agenda",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Discuss completed tasks and acknowledge those responsible.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Discuss outstanding tasks, clarify the causes behind errors, get answers to the following questions…”",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Result.",
    text: "Result. Clearly define just what outcome you expect for this task. If this field has been populated, before the task is marked finished, the system will ask the performer if the result has been achieved.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Example: “Tasks imported into the platform.”",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Attachments.",
    text: "Attachments. In this field, you can add any file, including video clips, graphic or animated images (in the .gif format), and so on—anything that might be helpful to the employee in the execution of the task.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: "Example: A template for a weekly plan.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Proof.",
    text: 'Proof. In this field, you can specify the type of confirmation the performer must provide on completion of the task, or mark that such confirmation is not required. It is not required by default, but you can select between two misc of confirmation: "Text" or "Image"',
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "For each type, specify the desired number or volume and describe the eligibility criteria.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "For the “Text“ option, we recommend you provide a short description and specify a minimum number of characters.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "For the “Image“ option, you can specify any characteristics for the file that you'd like.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    isItalic: true,
    text: 'Example: A screenshot from the Communication module displaying the "Supervised Tasks" tab.',
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "In order to mark the task finished, the employee must attach the required files. If they don't, the task card will receive a violation label.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: 'In order to save a routine, press the "Create" button in the bottom lefthand corner of the screen.',
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/routine/image23.png",
    },
  },
];