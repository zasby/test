import { RegulationStatus } from "../constants/regulationStatus";
import { TagLabelColor } from "../types/TagLabel.interface";

export const getStatusLabelColor = (status: RegulationStatus) => {
  switch (status) {
    case RegulationStatus.Draft: {
      return TagLabelColor.primary
    }
    case RegulationStatus.OnReview: {
      return TagLabelColor.warning
    }
    case RegulationStatus.Published: {
      return TagLabelColor.success
    }
    case RegulationStatus.Rejected: {
      return TagLabelColor.error
    }
  }
}
