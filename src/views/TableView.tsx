import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Navigation } from "../components/Navigation";
import useTable from "../hooks/useTable";
import Table from "../components/Table";
import useRouter from "../hooks/useRouter";
import useTableConfig from "../hooks/useTableConfig";
const useStyles = makeStyles({});

export default function AuthView() {
  const router = useRouter();
  const tableCollection = router.location.pathname.split("/")[2];
  const [tableConfig, tableActions] = useTableConfig(tableCollection);
  const [table, tableDispatch] = useTable({ path: tableCollection });
  console.log("tableConfig", tableConfig);
  const classes = useStyles();
  useEffect(() => {
    tableActions.setTable(tableCollection);
  }, [tableCollection]);

  return (
    <Navigation header={tableCollection}>
      <Table columns={tableConfig.columns} rows={table.rows} />
    </Navigation>
  );
}
