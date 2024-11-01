import { allReducers } from "./reducers";
import { mountStore } from "./state";

const reducers = allReducers.map((r) => r.reducer);
const actions = allReducers.map((r) => r.action);

export const { StoreProvider, useStoreActions, useStoreSelects } = mountStore(
  reducers,
  actions,
  []
);
