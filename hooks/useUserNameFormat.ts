import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const useUserNameFormat = () => {
  const { i18n } = useTranslation();

  const isEngFormat = useMemo(() => {
    const { language } = i18n;
    return language === 'en' || language === 'zh';
  }, [i18n?.language])

  const getFullName = (lastName: string, firstName: string, middleName?: string | null) => {
    if (isEngFormat) {
      return firstName
        ? `${firstName}${middleName ? ` ${middleName}` : ''} ${lastName}`
        :  lastName;
    }
    return lastName
      ? `${lastName} ${firstName}${middleName ? ` ${middleName}` : ''}`
      : `${firstName}${middleName ? ` ${middleName}` : ''}`;
  }

  const getAvatarText = (lastName: string, firstName: string) => {
    if (isEngFormat) {
      return [firstName, lastName];
    }
    return [lastName, firstName];
  }

  const getUserShortFullName = (
    lastName: string | null | undefined,
    firstName: string | null | undefined,
    middleName?: string | null
  ): string => {

    return isEngFormat
      ? [
        (firstName ?? "").trim().length > 0 ? ([...(firstName ?? "").trim()]?.[0] ?? "") + "." : "",
        (middleName ?? "").trim().length > 0 ? ([...(middleName ?? "").trim()]?.[0] ?? "") + "." : "",
        lastName ?? "",
        ].join(" ")
      : [
        lastName ?? "",
        (firstName ?? "").trim().length > 0 ? ([...(firstName ?? "").trim()]?.[0] ?? "") + "." : "",
        (middleName ?? "").trim().length > 0 ? ([...(middleName ?? "").trim()]?.[0] ?? "") + "." : "",
      ].join(" ");
  };

  return {
    getFullName,
    getAvatarText,
    getUserShortFullName,
  }
}