import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Navigation from "../components/Navigation";
import useTable from "../hooks/useTable";
import Table from "../components/Table";
import useRouter from "../hooks/useRouter";
import useTableConfig from "../hooks/useTableConfig";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles({});

export default function AuthView() {
  const router = useRouter();
  const tableCollection = router.location.pathname.split("/")[2];
  const [tableConfig, configActions] = useTableConfig(tableCollection);
  const [table, tableActions] = useTable({
    path: tableCollection
  });
  const classes = useStyles();

  useEffect(() => {
    configActions.setTable(tableCollection);
    tableActions.setTable(tableCollection);
  }, [tableCollection]);
  return (
    <Navigation header={tableCollection}>
      <Table
        columns={tableConfig.columns}
        rows={table.rows}
        addColumn={configActions.addColumn}
        tableActions={tableActions}
      />
      <Button onClick={tableActions.addRow}>Add Row</Button>
    </Navigation>
  );
}
