import { FilterArguments } from "https://deno.land/x/ddu_vim@v3.10.2/base/filter.ts";
import {
  BaseFilter,
  DduItem,
} from "https://deno.land/x/ddu_vim@v3.10.2/types.ts";

export type Params = {
  filterCallbackId: string;
};

export class Filter extends BaseFilter<Params> {
  async filter(args: FilterArguments<Params>): Promise<DduItem[]> {
    if (args.filterParams.filterCallbackId === "") {
      return args.items;
    }
    const filteredItems = await args.denops.call(
      "denops#callback#call",
      args.filterParams.filterCallbackId,
      args,
    );
    return filteredItems as DduItem[];
  }
  params(): Params {
    return {
      filterCallbackId: "",
    };
  }
}
