import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const enEmployeeGuideNodes: IGuideNodes[] = [
  {
    tag: semanticTagKeys.h2,
    text: "To add an employee to the system",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Go to the Employees module.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/employee/image2.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Press the Invite Employee button in the header.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/employee/image7.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "select one of the two methods for inviting employees.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Method 1: an individual invitation by email",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Enter the email address of the employee you wish to add to the platform, and select the function they will have in the org chart.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Be aware: if the employee is responsible for several functions, that can be addressed under Additional Settings in invitation creation.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/employee/image3.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Once you press the Invite button, the employee will receive an email with a link that will allow them to join Tonnus.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/employee/image9.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "When the employee joins the system, their name will appear in the org chart on an account with the functions you assigned.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Method 2: a reusable invitation code",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Then use any medium you like to give the link and code to all the employees you want to invite. Each person should follow the link and enter their information, including their invitation code, and then continue to sign up.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: ["Be aware", "to assign each new employee their functions individually"],
    text: "Be aware: the link is identical for all the people you send it to. That means you will have to assign each new employee their functions individually.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "To do so, go to the Org Chart module and select a function one of the new employees is responsible for.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/employee/image5.png",
    },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/employee/image6.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Then assign the new employee a performer or manager of function role. This will grant them access to previously created policies for that function (if any exist) as well as routines.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/employee/image8.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Determine the new employee’s role and press the corresponding Add employee.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/employee/image1.png",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Invitations by link can also be individual.",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "For example, suppose you need to invite an employee to the system and automatically attach them to a specific function, but you do not know their email address and do not want to spend the time to find it.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Just press the Invite Employee button in the Employees module. In the window that appears, check the box marked “Reusable invitation code”, and then in the drop-down menu select one or more functions to add to the personal link. Then press the Invite button.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "You can copy the generated link and code and send it to the employee however you want.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/employee/image4.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "When the employee follows the link, enters the code, and completes registration, their name will automatically appear in the org chart, bearing the functions you assigned.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/employee/image11.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "To see all the invitations you’ve sent, and delete some, if need be (once all the employees have registered using the reusable link, for example), simply press on All Invites.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/employee/image10.png",
    },
  },
];
