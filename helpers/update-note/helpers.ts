import { UpdateNoteDto } from "../../api";
import { IInitialUpdateNotes, initialNotes, publishedSelectKeys } from "../../../components/modules/pages/update-note/misc/constants";
import { LocalesKeys } from "../../constants/localesKeys";

export const convertNotesDtoToCustomNotes = (noteDto: UpdateNoteDto): IInitialUpdateNotes => ({
  en: noteDto?.contents?.find((item) => item.cultureKey === LocalesKeys.en) ?? initialNotes.en,
  ru: noteDto?.contents?.find((item) => item.cultureKey === LocalesKeys.ru) ?? initialNotes.ru,
  uk: noteDto?.contents?.find((item) => item.cultureKey === LocalesKeys.uk) ?? initialNotes.uk,
  zh: noteDto?.contents?.find((item) => item.cultureKey === LocalesKeys.zh) ?? initialNotes.zh,
});

export const convertIsPublishedToSelectKeys = (isPublished?: boolean | null): publishedSelectKeys =>
  isPublished ? publishedSelectKeys.published : publishedSelectKeys.notPublished;
export const convertSelectKeysToIsPublished = (key: publishedSelectKeys): boolean => !!publishedSelectKeys.published;
