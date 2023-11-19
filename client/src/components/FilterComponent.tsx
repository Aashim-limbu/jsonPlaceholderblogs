import DropDown from "./DropDown";
import Inputs from "./Inputs";
export function FilterComponent() {
  return <div className="flex w-full gap-x-4  justify-between">
    <Inputs className="flex-1" name="filterQuery" type="text" label="Query"/>
    <DropDown/>
  </div>;
}
