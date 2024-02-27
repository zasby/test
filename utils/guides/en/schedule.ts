import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const enScheduleNodes: IGuideNodes[] = [
  // {
  //   tag: semanticTagKeys.h2,
  //   text: "Employees’ Hours",
  //   attrs: {className : "hint-title"},
  // },
  {
    tag: semanticTagKeys.p,
    text: "Tonnus allows users to flexibly configure employees’ work hours. By default, individuals’ schedules are created two weeks in advance, and filled out automatically, in correspondence with the company’s hours of operation.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image15.png",
    },
  },
  {
    tag: semanticTagKeys.b,
    text: "Who can work with employees’ schedules?",
  },
  {
    tag: semanticTagKeys.p,
    text: "Users with schedule editing permissions can make changes to employees’ hours. Those permissions can be granted to an employee in the Org Chart module by selecting that employee’s function and navigating to the PERMISSIONS tab. Then find the Schedules block, and grant access to those permissions.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image2.gif",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Schedule Configuration",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Working Days",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Configuring an employee’s working days:",
  },
  {
    tag: semanticTagKeys.p,
    text: "Find the employee or department you need in the list. For convenience, you can hide the other schedules.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image12.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "In the line corresponding to the relevant employee, press on the cell with the time range in the column for the data you want to change the hours for. In the drop-down menu, select Workday.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image5.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Select the date range you want to set the schedule for. You can select one day, or a longer period",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image11.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Select the start and end times for the workday.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image17.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "If an employee has two or more functions, and you need to make a schedule for all of their functions at once, check the box labeled “Apply to all employee’s functions”. The schedule you create will automatically appear on all the employee’s functions.",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image16.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Indicate the employee’s days off.",
    prefix: { tag: semanticTagKeys.span, text: "6.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image8.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "By default the schedule is based on the company’s time zone. If employees work in different time zones, you’ll need to turn on the “Employee’s time zone” option at the top of the screen: then the hours will be recalculated to take time differences into account.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image1.gif",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Vacation",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.b,
    text: "To set up time off:",
  },
  {
    tag: semanticTagKeys.p,
    text: "Find the employee who is going on vacation on the list, press on the cell underneath the date of their vacation, and select Vacation from the drop-down menu.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image7.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Indicate the date range: set the start and end dates of the vacation time.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image6.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "In the drop-down menu select the name of the employee who will be temporarily taking on the responsibilities of their absent coworker. Now they will automatically receive the routines of their colleague who is on vacation. This will help the company maintain overall efficiency and avoid anyone dropping the ball.\n",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image18.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "If the employee is responsible for several different functions, and their vacation affects all of them, check the box labeled “Apply to all employee’s functions”.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image10.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Now use the same process to assign a substitute for each function.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image9.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Once you have selected someone to step in for the employee who is going on vacation, press Save: now the schedule will reflect the substitute’s new schedule.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image19.gif",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Sick Day",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.b,
    text: "To configure sick leave:",
  },
  {
    tag: semanticTagKeys.p,
    text: "Find the employee on the list, press on the cell in the column for the date their sick leave begins, and select Sick Day from the drop-down menu.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image13.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Indicate the date range for their sick leave.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image3.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "If the employee is responsible for several different functions, and their sick leave prevents them from fulfilling any of them, check the box labeled “Apply to all employee’s functions”",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image14.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "In the drop-down list, select the employee who will take on the responsibilities of their absent coworker. Now they will automatically receive routines during their colleague’s sick leave.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/schedule/image4.gif",
    },
  },
];
