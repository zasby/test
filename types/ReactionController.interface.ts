import { ApiControllerCrud } from "../api/helpers";

export interface ReactionController<T, TFilter> extends ApiControllerCrud<T, TFilter> {
  reaction: (historyId: number, model: { value: string }) => Promise<T | null>;
}
