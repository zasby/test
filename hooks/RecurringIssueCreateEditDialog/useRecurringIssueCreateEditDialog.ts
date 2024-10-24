import { useRef, useState } from "react";

export const useRecurringIssueCreateEditDialog = () => {
  const createEditFormRef = useRef<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onFormLoadingChange = (val: boolean) => {
    setIsLoading(val);
  };

  return {
    createEditFormRef,
    onFormLoadingChange,
    isLoading,
  }
}
