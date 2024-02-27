import { ApiControllerGet } from "./apiControllerGet";
import { IApiControllerCrud } from "../interfaces/iApiControllerCrud";
import { AxiosInstance } from "axios";
import * as jsonpatch from "fast-json-patch";

export abstract class ApiControllerCrud<T, TFilter>
  extends ApiControllerGet<T, TFilter>
  implements IApiControllerCrud<T>
{
  protected constructor(cl: AxiosInstance, v: string, controllerName: string) {
    super(cl, v, controllerName);
  }

  async create(m: T): Promise<T | null> {
    return await this.process<T>(this.post("", { data: m }));
  }

  async del(id: number): Promise<boolean | null> {
    return await this.process<boolean>(
      this.delete(id.toString()),
      () => true,
      () => false
    );
  }

  async edit(id: number, m: T, params?: any): Promise<T | null> {
    return await this.process<T>(this.put(id.toString(), { data: m, params: params }));
  }

  async editPartially(
    id: number,
    currentState: T,
    beforeState: T,
    params?: any,
    sendEmpty: boolean = false
  ): Promise<T | null> {
    // TODO: Check later
    const data = jsonpatch.compare({ ...(beforeState as any) }, { ...(currentState as any) });
    if (!sendEmpty && (!data || data.length == 0)) {
      return null;
    }
    return await this.process<T>(this.patch(id.toString(), { data: data, params: params }));
  }
}
