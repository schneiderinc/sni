import {createSelector} from 'reselect';

const selectData = (state:any) => state.carrier;

export const makeSelectHome = () => createSelector([selectData], carrier => carrier.loads);
const getIdParam = (_state: any, props: any) => {
    const stringParam = props.match.params['id'];
    return stringParam;
  }
export const getLoad = createSelector(
    selectData, getIdParam,
    (loads, id) => loads.loads.find((x:any) => x.schneider_loads_id === id)
  );