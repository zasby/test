import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const enPermissionsGuideNodes: IGuideNodes[] = [
  {
    tag: semanticTagKeys.h2,
    text: "How to grant permissions to functions",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Permissions can be set for each function, determining what actions users with a given function can take within the system.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Configuring permissions allows you to grant certain users access and restrict others based on their function.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "When the company is first registered on Tonnus, by default, the owner has all permissions, and no one else has any. The owner then grants permissions to other functions in the company.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Granting permissions",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Go to the Org Chart module",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/permissions/image3.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Press on the function you want to configure permissions for: for example, HR Department.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/permissions/image9.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "In the function management panel that appears, go to the PERMISSIONS tab.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/permissions/image1.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "In this tab, all possible permissions for the function are enumerated.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/permissions/image8.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Select the required permissions and activate them using the toggles.",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Description of Permissions",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/permissions/image11.png",
    },
  },
  {
    tag: semanticTagKeys.b,
    text: "ORG CHART BLOCK",
    anchorId: 1,
    //attrs : {className: "hint-description"}
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/permissions/image10.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Create — allow users to create new functions in the org chart.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Edit — allow users to edit the org chart.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Sort — allow users to change the order of child functions.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Move — allow users to change the order of functions.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Delete — allow users to delete functions from the org chart.",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Manage employees — allow users to attach employees to and detach them from functions.",
    prefix: { tag: semanticTagKeys.span, text: "6.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Manage permissions — allow users to edit function permissions.",
    prefix: { tag: semanticTagKeys.span, text: "7.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "ROUTINES BLOCK",
    anchorId: 2,
    //attrs : {className: "hint-description"}
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/permissions/image7.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Create — allow users to create routines.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Edit — allow users to make changes to routines.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Delete — allow users to delete routines from the chart.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Manage pause — allow users to pause and resume routines.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "View history — allow users to see the history of actions taken on each routine.",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "EMPLOYEES BLOCK",
    anchorId: 3,
    //attrs : {className: "hint-description"}
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/permissions/image2.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "View phone number — make the contact phone numbers of employees visible in the Employees module",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Edit — allow users to edit employee profiles in the Employees module.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Delete — allow users to delete employee profiles in the Employees module.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Create invitations — allow users to add employees to the platform in the Employees module.",
    prefix: { tag: semanticTagKeys.span, text: "4.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Delete invitations — allow users to delete employee invitation links from the system.",
    prefix: { tag: semanticTagKeys.span, text: "5.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "COMPANY BLOCK",
    anchorId: 4,
    //attrs : {className: "hint-description"}
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/permissions/image4.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Name and description — allow users to change the name and description of the company.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Time zone — allow users to change the company’s time zone.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Schedule — allow users to change the day the week starts on and the company’s hours of operation.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "REPORTS BLOCK",
    anchorId: 5,
    //attrs : {className: "hint-description"}
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/permissions/image5.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Communications — grant access to the Communications Reports module, where users can find information about the company’s work on tasks.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Drivers — grant access to the Drivers Reports module, where users can find information about the company’s work with drivers.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "SCHEDULE BLOCK ",
    anchorId: 6,
    //attrs : {className: "hint-description"}
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/permissions/image6.png",
    },
  },
  {
    tag: semanticTagKeys.b,
    text: "View:",
  },
  {
    tag: semanticTagKeys.p,
    text: "All functions — allows this function to view the work schedules of all functions in the org chart.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Subordinate functions — allows this function to view the schedules of all functions it governs in the org chart.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Manager functions — allows this function to view the schedules of all functions above it in the chart.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Edit:",
  },
  {
    tag: semanticTagKeys.p,
    text: "All functions — allows to edit the work schedules of all functions in the org chart.",
    prefix: { tag: semanticTagKeys.span, text: "1.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Own functions — allows to edit the work schedules of its own functions.",
    prefix: { tag: semanticTagKeys.span, text: "2.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Subordinate functions — allows to edit the work schedules of all functions it governs in the org chart.",
    prefix: { tag: semanticTagKeys.span, text: "3.", attrs: { className: "hint-marker" } },
    attrs: { className: "hint-description" },
  },
];
