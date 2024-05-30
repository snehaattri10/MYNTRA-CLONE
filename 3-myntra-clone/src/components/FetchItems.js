import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../Store/itemsSlice";
import { FetchStatusActions } from "../Store/FetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(FetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(FetchStatusActions.markFetchDone());
        dispatch(FetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      })

      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.error('Fetch error:', error);
          dispatch(FetchStatusActions.markFetchingFinished());
        }
      });


    return () => {
      controller.abort();
    };
  }, [fetchStatus,dispatch]);

  return <></>;
};

export default FetchItems;
