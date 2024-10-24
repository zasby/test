import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useGetCommunicationsAccess } from "../useGetCommunicationsAccess";
import { useEffect, useState } from "react";
import { IssueQueryKeys, IssueTypeKeys } from "../../constants/issueTypeKeys";
import {
  checkIsOpenCreateRoutine,
  handleParseIssueTypeToQP,
  IssueCommonOptionsArr, removeQueryIssueRoutine
} from "../../helpers/commonDialogWrapperByQP/helpers";

export const useCommonDialogByQP = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { getCommunicationsAccess } = useGetCommunicationsAccess();

  const [search, setSearch] = useSearchParams();

  const [currentIssueCommonType, setCurrentIssueCommonType] = useState<IssueTypeKeys | null>(null);
  const [isOpenCommonIssueDialog, setIsOpenCommonIssueDialog] = useState<boolean>(false);
  const [isOpenCreateRoutine, setIsOpenCreateRoutine] = useState<boolean>(false);

  const handleCheckOpenIssueByQPKey = (QPKey: IssueQueryKeys): boolean => !!search.get(QPKey);

  const handleCloseIssueCommonDialog = () => {
    const deleteQP = currentIssueCommonType ? handleParseIssueTypeToQP(currentIssueCommonType) : null;
    if (deleteQP && search.has(deleteQP)) {
      setIsOpenCommonIssueDialog(false);
      setCurrentIssueCommonType(null);
      search.delete(deleteQP);
      setSearch(search);
    }
  };

  const handleTrackingOpenCommonIssueDialog = () => {
    const isHaveAccessCommunications = getCommunicationsAccess();

    for (let i = 0; i < IssueCommonOptionsArr.length; i++) {
      if (handleCheckOpenIssueByQPKey(IssueCommonOptionsArr[i].queryParam) && isHaveAccessCommunications) {
        setIsOpenCommonIssueDialog(true);
        return setCurrentIssueCommonType(IssueCommonOptionsArr[i].issueType);
      }
    }
  };

  const handleCheckOpenCreateRoutine = () => {
    const isOpen: boolean = checkIsOpenCreateRoutine(location.search);
    isOpen && !isOpenCreateRoutine && setIsOpenCreateRoutine(isOpen);
  };

  const handleCloseCreateRoutine = () => {
    navigate({ search: removeQueryIssueRoutine(location.search) });
    setIsOpenCreateRoutine(false);
  };

  useEffect(() => {
    if (!location.search.length) return;
    handleCheckOpenCreateRoutine();
    handleTrackingOpenCommonIssueDialog();
  }, [location.search]);

  return {
    isOpenCreateRoutine,
    handleCloseCreateRoutine,
    isOpenCommonIssueDialog,
    currentIssueCommonType,
    handleCloseIssueCommonDialog,
  }
}
