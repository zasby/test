import { Plan2IssueDto } from "../../api";
import { TagDto } from "../../api/models/TagDto";

export const groupingByRoleId = (issues: any) => {
  const map = issues?.reduce((r: any, i: any) => {
    //@ts-ignore
    r[i.roleId] = r[i.roleId] || [];
    //@ts-ignore
    r[i.roleId].push(i);
    return r;
  }, {});
  const resultArr = [];
  for (const key in map) {
    //@ts-ignore
    resultArr.push(map[key]);
  }
  return resultArr;
};

export const groupingByTags = (issues: any) => {
  //@ts-ignore
  const groupedByTags = issues.reduce((acc, item) => {
    if (!item.tags.length) {
      if (!acc[""]) {
        acc[""] = []; // Создаем новый массив для тега, если он еще не существует
      }
      acc[""].push(item);
    }
    else {
      //@ts-ignore
      item.tags.forEach((tag: TagDto) => {
        if (!acc[tag.name]) {
          acc[tag.name] = [];
        }
        acc[tag.name ?? -1].push(item);
      });
    }
    return acc;
  }, {});
  const resultArr = [];
  for (const key in groupedByTags) {
    //@ts-ignore
    resultArr.push({
      name: key,
      list: groupedByTags[key]
    });
  };

  const emptyNameIndex = resultArr.findIndex(({name}) => name === "");
  if (emptyNameIndex !== -1) {
    const emptyEl = resultArr[emptyNameIndex];
    resultArr.splice(emptyNameIndex, 1);
    resultArr.push(emptyEl);
  }
  return resultArr;
};

// const groupedByTags = items.reduce((acc, item) => {
//   item.tags.forEach(tag => {
//     if (!acc[tag]) {
//       acc[tag] = []; // Создаем новый массив для тега, если он еще не существует
//     }
//     acc[tag].push(item); // Добавляем объект в массив по соответствующему тегу
//   });
//   return acc;
// }, {});

export const groupBy = (items: any, key: string) =>
  items.reduce(
    (result: any, item: any) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );

export const groupingByType = (planToIssue: Plan2IssueDto[] | undefined) => {
  const map = planToIssue?.reduce((r, i) => {
    //@ts-ignore
    r[i.type] = r[i.type] || [];
    //@ts-ignore
    r[i.type].push(i);
    return r;
  }, {});
  const resultArr = [];
  for (const key in map) {
    //@ts-ignore
    resultArr.push(map[key]);
  }
  return resultArr;
};
