import { ICustomUpdateNoteContent } from "../../../components/modules/dialogs/showUpdateNoteDialog/ShowUpdateNoteDialog.interface";
import { UpdateNoteDto } from "../../api";
import { LocalesKeys } from "../../constants/localesKeys";

export const convertNotesToNoCheckedContents = (
  notes: UpdateNoteDto[],
  currentLocale: LocalesKeys,
  lastCheckedVersion: number
): ICustomUpdateNoteContent[] => {
  return notes
    .filter((item) => {
      const currentContent
        = item.contents!.find((content) => content.cultureKey === currentLocale);
      return (item.version ?? 0) > lastCheckedVersion && !!currentContent?.name && item.showUpdateModal
    })
    .map((item) => ({
      ...item.contents!.find((content) => content.cultureKey === currentLocale)!,
      version: item.version ?? 0,
    }))
    .filter((item) => !!item);
}
