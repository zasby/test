import { IGuideNodes, semanticTagKeys } from "../guideNodes.interface";

export const enOrgchartNodes: IGuideNodes[] = [
  {
    tag: semanticTagKeys.h2,
    text: "Org Chart Settings",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "An org chart is a schematic representation of the functional units of your company and the ways in which they interact.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "After registering, fill out the company profile and select the terminology for your org chart. Determine what term your company will use for a result, like VFP, Expected Outcome, or Result.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image14.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Next, choose how you want to create your org chart — from scratch or using a classic template with seven departments.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image22.gif",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Org Chart from Scratch",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "If you choose to create from scratch, the Org Chart module page will look like this:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image26.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "In the working field of the org chart, you’ll see the Owner function with the data you entered during registration.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "To add all managers to the org chart, press the settings icon next to the name of this function:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Add Child",
    text: "In the dropdown menu, select the Add Child command.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image27.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "In the dialogue window, enter the name of the child function and determine its result, the actual outcome of the completed job. Be aware: the term you entered earlier to refer to the result of a function will be used here.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "For example, if the function is 'Media monitoring,' then the result will be 'An analytical report on brand sentiment for the weekly meeting.' Another example: for the 'Sales' function, the result could be described as 'Payments received on company accounts.'",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image5.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "You can assign a color to each function. Color coding functions or groups will help you orient yourself faster in the org chart.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image16.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "You can also change the parent function in this window. For example, if you want to assign the executive director directly to the owner of the company, the parent function should be 'Owner.'",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image8.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Here you can select the structure of child functions in the org chart: vertical or horizontal.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image1.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "This is how the vertical structure looks:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image15.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "And here is the horizontal structure:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image7.png",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "You can add child functions for parent functions that already exist within the org chart. To do so, press the settings icon next to the corresponding name and perform the actions described above.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "Other commands in the dropdown menu let you perform the following actions:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image d-stack",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image4.gif",
    },
  },
  {
    tag: semanticTagKeys.b,
    text: "Move",
  },
  {
    tag: semanticTagKeys.p,
    text: 'This command allows you to change the parent function for the selected org chart element. For example, let\'s say the company was restructured, and now the manager of the hiring function is responsible for recruiting as well. The “Recruiting” function, in this scenario, should be transferred and made subordinate to the "Hiring" function. To make this change, choose the Move Function command.',
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "In the dialogue window, select the new parent function.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image21.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Then press the Save button. Now the “Recruiting” function has taken up a new spot in the org chart.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Reorder children",
  },
  {
    tag: semanticTagKeys.p,
    boldPart: "Reorder children",
    text: "This command allows you to change the display order of child functions on one level. For example, you want to arrange the functions subordinate to the 'Owner' in the following sequence: 'Assistant' — 'Financial Director' — 'General Manager.' To do so, select the Reorder children command.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "In the open dialogue window, rearrange the child functions by pressing and holding the left mouse button.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image9.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Note that this option only appears if there are several child functions on the same level. For example, if the Sales function has the child functions Primary Sales and Secondary Sales, you can sort them. However, if the Sales function has no subordinate items, this command will be disabled.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "After making all the desired changes, press the Save button.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Settings",
  },
  {
    tag: semanticTagKeys.p,
    text: "Using this command, you can change the name, the result description, assign the function another color, or toggle the vertical or horizontal structure of child functions.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image23.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "This command also allows you to manage the selected function. For example, you can use it to assign an employee, create a routine, or add permissions. At the time of creating your org chart, you won't need these features, so you'll learn more about how to use them in later lessons.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Delete ",
  },
  {
    tag: semanticTagKeys.p,
    text: "This command allows you to delete unnecessary items from the org chart.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image18.gif",
    },
  },
  {
    tag: semanticTagKeys.b,
    text: "Org Chart Filters",
  },
  {
    tag: semanticTagKeys.p,
    text: "The filters in the upper right corner of the screen allow you to expand and hide the result descriptions next to the function headers, as well as the names of the employees attached to the functions.\n",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image2.gif",
    },
  },
  {
    tag: semanticTagKeys.b,
    text: "Printing and Deleting",
  },
  {
    tag: semanticTagKeys.p,
    text: "You can print a finished org chart or delete it from the system.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image17.png",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Classic Org Chart",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "When you select the classic org chart, you will see a pre-made org chart with seven departments in the working field in the module.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image25.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "To change the characteristics of a division, press on its tile, then provide its new name, VFP formulation, or color:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image6.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "You can create new child functions for the existing functions:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image25.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Other commands in the dropdown menu let you perform the following actions:",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Move",
  },
  {
    tag: semanticTagKeys.p,
    text: "This command allows you to change the parent function for the selected org chart element.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image10.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "In the dialogue window, select the new parent function.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Reorder children",
  },
  {
    tag: semanticTagKeys.p,
    text: "This command allows you to change the display order of child functions on one level.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image13.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "In the open dialogue window, rearrange the child functions by pressing and holding the left mouse button.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.p,
    text: "After making all the desired changes, press the Save button.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Settings",
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image20.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "In the EMPLOYEES tab, you can change the names of the jobs displayed in the org chart.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image24.gif",
    },
  },
  {
    tag: semanticTagKeys.p,
    text: "Furthermore, you can also attach employees to the function here, and in this window’s other tabs, you can create routines or add permissions for the function. At the org chart creation step, you don’t need to use these features.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.b,
    text: "Delete",
  },
  {
    tag: semanticTagKeys.p,
    text: "This command allows you to delete unnecessary items from the org chart.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image19.gif",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Org Chart Filters",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "The filters in the upper right corner of the screen allow you to expand and hide the result descriptions next to the function headers, as well as the names of the employees attached to the functions.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image11.gif",
    },
  },
  {
    tag: semanticTagKeys.h2,
    text: "Printing and Deleting",
    attrs: { className: "hint-title" },
  },
  {
    tag: semanticTagKeys.p,
    text: "You can print a finished org chart or save it as a PDF. If the org chart is very large, you’ll need to configure the scale in the printing dialog box for it to display properly.",
    attrs: { className: "hint-description" },
  },
  {
    tag: semanticTagKeys.img,
    attrs: {
      className: "hint-image",
      alt: "my-issues",
      src: window.location.origin + "/guides/en/orgchart/image3.gif",
    },
  },
];
