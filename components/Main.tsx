import { useState } from "react";
import DataTable from "./DataTable";
import Blurb from "./Blurb";
import { Issues } from "../utils/types";

function Main() {
  const [issue, setIssue] = useState<Issues | null>();

  return (
    <div>
      <Blurb issue={issue} setIssue={setIssue} />
      {issue && <DataTable issue={issue} />}
    </div>
  );
}

export default Main;
