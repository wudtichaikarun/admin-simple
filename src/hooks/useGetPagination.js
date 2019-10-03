import { useState, useEffect } from "react";
import * as R from "ramda";
import { useDebounce } from ".";

function useGetPagination(model) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isInfinite, setIsInfinite] = useState(false);
  const [filters, setFilters] = useState({});
  const [refetch, setRefetch] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const _getMoreData = async () => {
    setLoading(true);
    const res = await model({ filter: searchTerm, limit, page: page + 1, ...filters, }) // prettier-ignore
    setLoading(false);

    if (res.status === 200) {
      setPage(p => p + 1);
      setTotal(res.data.total);
      setHasNext(res.data.hasNext);
      setResults(r => [...r, ...res.data.data]);
    }
  };

  const _getNewPage = async p => {
    setLoading(true);
    try {
      const res = await model({ filter: searchTerm, limit, page: p, ...filters }) // prettier-ignore
      setPage(p);
      const response = R.path(["data", "data"], res);
      const data = R.path(["data"], response);
      const total = R.path(["total"], response);
      const hasNext = R.path(["hasNext"], response);
      setLoading(false);
      setResults(data);
      setTotal(total);
      setHasNext(hasNext);
    } catch {
      setPage(p);
    }
    setLoading(false);
  };

  const _getData = async () => {
    setLoading(true);
    try {
      const res = await model({ filter: searchTerm, limit, page, ...filters });
      const response = R.path(["data", "data"], res);
      console.log("response", response);
      const data = R.path(["data"], response);
      const total = R.path(["total"], response);
      const hasNext = R.path(["hasNext"], response);
      setLoading(false);
      setResults(data);
      setTotal(total);
      setHasNext(hasNext);
    } catch {
      setResults([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    let didCancel = false;

    if (!didCancel && model) {
      _getData();
    }

    return () => {
      didCancel = true;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm, limit, isInfinite, refetch]);

  const pageData = {
    loading,
    results,
    searchTerm,
    limit,
    page,
    total,
    hasNext,
    isInfinite,
    filters
  };

  const pageMethod = {
    setLoading,
    setResults,
    setSearchTerm,
    setLimit,
    setPage,
    setTotal,
    setHasNext,
    setIsInfinite,
    _getNewPage,
    _getMoreData,
    setFilters,
    setRefetch
  };

  return [pageData, pageMethod];
}

export default useGetPagination;
