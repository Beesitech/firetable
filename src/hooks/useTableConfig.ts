import { useEffect } from "react";
import useDoc from "./useDoc";
const useTableConfig = (tablePath: string) => {
  const [tableConfigState, documentDispatch] = useDoc({
    path: `${tablePath}/_FIRETABLE_`
  });
  useEffect(() => {
    const { doc, columns } = tableConfigState;
    if (doc && columns !== doc.columns) {
      documentDispatch({ columns: doc.columns });
    }
  }, [tableConfigState]);
  const setTable = (table: string) => {
    documentDispatch({ path: `${table}/_FIRETABLE_`, columns: [], doc: null });
  };
  const actions = {
    setTable
  };
  return [tableConfigState, actions];
};

export default useTableConfig;
