import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const enCommunicationsGuideNodes: IGuideNodes[] = [
  /*{
    tag: semanticTagKeys.h2,
    text: "Communication Policy",
    attrs: {className : "hint-title hint-title__center"}
  },*/
  {
    tag: semanticTagKeys.p,
    text: "Communication is the process of exchanging information on the Tonnus platform; that includes all messages about tasks, events in the company, as well as employee questions, leadership decisions, and so on. Each of these misc of messages falls under the umbrella of communication.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "The communication policy permits:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Abiding by deadlines for completing tasks, thereby accelerating the company's development.\n",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Utilizing a single protocol for the entire company.\n",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Decisively resolving issues and improving the efficiency of company operations.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Avoiding the accumulation of unfinished or overdue tasks that slow down the work of the team.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Task processing is available in the main menu of the Communications module.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "My",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.p,
    text: "All tasks assigned to a particular employee can be found in the “My” dashboard. This is the primary workspace for each user of the platform.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image16.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Any task in the “My” dashboard should be performed in accordance with the following policy:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "A task that needs to be processed will be added to the “Incoming” list.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image12.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "If there are no questions regarding the content and deadline for the task, move it to the “Accepted” list. Complete the task in the “Accepted” list no later than the specified deadline.\n",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image11.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Move tasks that the sender has set a timeframe for to the  “Pending list“ Tasks from the “Pending“ list must be completed no later than the specified deadline.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image9.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Completed tasks in need of manager review will fall under the “Verification” list.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image18.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "If the manager approves the result, the completed task will be added to the “Done” list. Tasks that a manager hasn’t approved will be returned to “Pending” list for further work.",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image24.png",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Supervised Tasks - “On control”",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Tasks that you’ve assigned to someone within the system, as well as any tasks assigned to your subordinates will fall into the “On control” dashboard.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image6.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "All tasks and routines created on your behalf will be displayed here. For example, if you manage a structural division, you will see all the tasks that you’ve assigned and your employees are performing in this list.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: 'Lists in the "On control" dashboard are arranged according to the same principles as those in the “My“ dashboard. Tasks that assignees haven\'t yet processed go to the “Incoming" list. In the "Accepted" and "Pending" lists, you can see the tasks that employees are currently working on. Pay special attention to the "Verification" list. If it includes any tasks that require your review and approval, these must be processed within three days.',
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image17.png",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Watching",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.p,
    text: "The “Watching” dashboard includes tasks in which you’re participating as an observer.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image25.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Lists in this dashboard are just like those in the ”On control” dashboard.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Sort and Filter",
  },
  {
    tag: semanticTagKeys.p,
    text: "To find any created task, use the search bar in the top part of the screen.\n",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image21.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Enter key words from the task name and choose the desired task from the list of search results.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image14.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "In the upper righthand corner of the screen, there is a button you can use to edit how tasks are displayed in the “My”, ”On control,” and “Watching” dashboard.\n",
    boldPart: "сортировки задач.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image2.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "On pressing this button, a dropdown menu will appear with three different sorting methods",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image19.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "New First",
    text: "New First: The newest tasks will be displayed at the top, while the oldest will appear at the bottom of the list.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Old First",
    text: "Old First: The oldest tasks will be displayed at the top, while the newest will appear at the bottom of the list",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Close deadline First",
    text: "Close deadline First: The tasks with the closest approaching deadlines will appear at the top, while each subsequent task will be listed in a descending order of urgency.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "You can also use filters when searching tasks.",
    boldPart: "filters",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image13.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "When you press the funnel icon, a panel of filter settings will appear.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image23.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Sender:",
    text: "Sender: This filter allows you to select one sender out of all those who have sent you tasks, such that when you look again at the “My” dashboard, you will only see tasks from the selected sender displayed.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    italicPart: "Tasks with Violations:",
    text: "Tasks with Violations: This filter shows overdue tasks, tasks with a message that hasn't been answered within three hours, and tasks marked complete without proof of execution (as in, the results of these have not been received).",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image7.png",
    },
  },
  {
    tag: semanticTagKeys.h2,
    anchorId: 1,
    text: "Label Meanings",
    attrs: { className: "hint-title hint-title__center" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image1.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "When a task is not in progress, a yellow label will display on its card that says “Pending Acceptance.”",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image8.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "If a task has not been completed within the specified deadline, a red label reading “Expired” will be displayed on its card.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image22.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "If a task has been marked complete with a violation (results not received, proof of execution not attached), a red icon with an exclamation point will appear on the card. In such cases, check to make sure that the task has, in fact, been completed, and, as necessary, send it back for revision. DO NOT APPROVE tasks that have been performed with a violation of the communication policy!",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image20.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "If the sender has attached a message to the task, an envelope icon will appear on the card. A response to the message must be sent within three hours of receipt.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image4.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "If the sender has attached a message to the task, an envelope icon will appear on the card.",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image3.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Labels when a task is not in progress.",
    prefix: { tag: semanticTagKeys.span, text: "6.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image15.png",
    },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image10.png",
    },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/communications/image5.png",
    },
  },
];
