import { UserContactDto } from "../api";

const TELEGRAM_KEY = 't';

export const getContactLinkByType = (contact: UserContactDto | null) => {
  const { deepLink, key, uriLink } = contact ?? {};
  const link = key === TELEGRAM_KEY ? uriLink : deepLink;
  return link ?? "/#";
};
