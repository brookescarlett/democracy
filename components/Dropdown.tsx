import { Select } from "@geist-ui/react";
import { Issues } from "../utils/types";

interface DropdownInterface {
  selectHandler: (value: Issues) => void;
}

function Dropdown({ selectHandler }: DropdownInterface) {
  return (
    <Select placeholder="Choose one" onChange={selectHandler}>
      <Select.Option value="coronavirus">Coronavirus</Select.Option>
      <Select.Option value="criminalJustice">Criminal Justice</Select.Option>
      <Select.Option value="economy">Economy</Select.Option>
      <Select.Option value="education">Education</Select.Option>
      <Select.Option value="environment">Environment</Select.Option>
      <Select.Option value="gunRights">Gun Rights</Select.Option>
      <Select.Option value="gayRights">Gay Rights</Select.Option>
      <Select.Option value="healthCare">Healthcare</Select.Option>
      <Select.Option value="immigration">Immigration</Select.Option>
      <Select.Option value="racialEquality">Racial Equality</Select.Option>
      <Select.Option value="womensRights">Women's Rights </Select.Option>
    </Select>
  );
}

export default Dropdown;
