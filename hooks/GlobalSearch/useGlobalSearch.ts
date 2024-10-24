import React, { useEffect, useState } from "react";
import { usePagingWithController } from "../usePaging";
import { api } from "../../services";
import { useDebounce } from "../useDebounce";

export const useGlobalSearch = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [searchIssueText, setSearchIssueText] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleOpenDropdown = () => setIsOpen(true);
  const handleCloseDropdown = () => setIsOpen(false);

  const handleChangeSearchText = (newValue: string) => setSearchIssueText(newValue);

  const handleToggleFocus = (value: boolean) => () => setIsFocus(value);

  // @ts-ignore
  const foundItems = usePagingWithController(
    api.issue,
    undefined,
    {
      // boardId: authStore.getCurrentBoardId ?? 0,
      // @ts-ignore
      query: searchIssueText,
      pageSize: searchIssueText.trim().length === 0 ? 0 : 10,
      // userRelation: RelationsKeys.Any,

    },
    undefined,
    undefined,
    undefined,
    undefined,
    'search'
  );

  const debouncedItems = useDebounce(searchIssueText, 500);

  const handleBlur = () => {
    setTimeout(() => {
      handleToggleFocus(false)();
      handleCloseDropdown();
      handleChangeSearchText("");
    }, 210);
  };

  useEffect(() => {
    foundItems.reset();
    if (searchIssueText.length !== 0) foundItems.restart();
  }, [debouncedItems]);

  useEffect(() => {
    if (searchIssueText.trim().length === 0 && isOpen) handleCloseDropdown();
    else if (searchIssueText.trim().length > 0 && !isOpen) handleOpenDropdown();
  }, [searchIssueText]);

  return {
    isOpen,
    isFocus,
    handleOpenDropdown,
    handleCloseDropdown,
    handleBlur,
    foundItems,
    handleToggleFocus,
    searchIssueText,
    handleChangeSearchText,
  }
}
