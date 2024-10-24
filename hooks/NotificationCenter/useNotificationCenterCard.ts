import { useDateHelpers } from "../useDateHelpers";
import { useRootStore } from "../useRootStore";
import { useEffect, useState } from "react";
import { INotificationCenterCardProps } from "../../types";

export const useNotificationCenterCard = (props: INotificationCenterCardProps) => {
  const { formatDate } = useDateHelpers();
  const { authStore } = useRootStore();

  const [isShowDescription, setIsShowDescription] = useState<boolean>(true);

  const currentCompanyId = authStore.getCurrentCompanyId;

  useEffect(() => {
    if (props.data.contentDto?.description?.startsWith(`{"root":`)) {
      const data = JSON.parse(props.data?.contentDto?.description);
      const [firstChildren = {} ] = data.root?.children || [];
      setIsShowDescription(!!firstChildren.children?.length ?? false);
    } else {
      setIsShowDescription(true);
    }

  }, [props]);

  return {
    currentCompanyId,
    isShowDescription,
  }
}
