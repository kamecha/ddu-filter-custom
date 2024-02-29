import { FilterArguments } from "https://deno.land/x/ddu_vim@v3.10.2/base/filter.ts";
import {
  BaseFilter,
  DduItem,
} from "https://deno.land/x/ddu_vim@v3.10.2/types.ts";

export type Params = Record<never, never>;

export class Filter extends BaseFilter<Params> {
  filter({}: FilterArguments<Params>): Promise<DduItem[]> {
    throw new Error("Method not implemented.");
  }
  params(): Params {
    throw new Error("Method not implemented.");
  }
}
