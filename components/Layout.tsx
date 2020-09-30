import DataTable from "./DataTable";
import Blurb from "./Blurb";

function Layout({ issue }) {
  return (
    <div>
      <Blurb issue={issue} />
      {issue && <DataTable issue={issue} />}
    </div>
  );
}

export default Layout;
