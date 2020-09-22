import { Table, Row, Col } from "@geist-ui/react";
import { Issues } from "../utils/types";
import { data } from "../utils/data";

function DataTable({ issue }: { issue: Issues }) {
  const renderedData = data[issue]?.federal;

  return (
    <>
      <Row style={{ marginBottom: "15px" }}>
        <Col style={{ margin: "60px" }}>
          <Table data={renderedData}>
            <Table.Column prop="biden" label="Biden" />
            <Table.Column prop="trump" label="Trump" />
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default DataTable;
