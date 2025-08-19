import { useCallback, useEffect, useState, useMemo } from "react";
import { Params, UseBasicTableFilterHelperOptions } from "../../types";
import useDebounce from "./useDebounce";

const useBasicTableFilterHelper = ({ initialParams, debounceDelay = 300, sortKey = "userFilter" }: UseBasicTableFilterHelperOptions = {}) => {
  const [pageNumber, setPageNumber] = useState(initialParams?.page ?? 1);
  const [pageSize, setPageSize] = useState(initialParams?.limit ?? 10);
  const [searchTerm, setSearchTerm] = useState(initialParams?.search ?? "");
  const [isActive, setActive] = useState(true);
  const [sortBy, setSortBy] = useState<string | null>(initialParams?.[sortKey] ?? null);

  const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);

  const [params, setParams] = useState<Params>({
    page: pageNumber,
    limit: pageSize,
    search: searchTerm,
    blockFilter: isActive,
    ...initialParams,
  });

  // Sync search with debounce
  useEffect(() => {
    setParams((prev) => ({
      ...prev,
      search: debouncedSearchTerm,
      page: 1,
    }));
    setPageNumber(1);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    setParams((prev) => ({
      ...prev,
      blockFilter: isActive,
      page: 1, // reset to first page when filter changes
    }));
    setPageNumber(1);
  }, [isActive]);

  // Sync sort with dynamic key
  useEffect(() => {
    setParams((prev) => {
      const updatedParams = { ...prev };
      if (sortBy) {
        updatedParams[sortKey] = sortBy; // <-- dynamic key name
      } else {
        delete updatedParams[sortKey];
      }
      return updatedParams;
    });
  }, [sortBy, sortKey]);

  const handlePaginationChange = useCallback((newPage: number, newPageSize: number) => {
    setPageNumber(newPage);
    setPageSize(newPageSize);
    setParams((prev) => ({
      ...prev,
      page: newPage,
      limit: newPageSize,
    }));
  }, []);

  const handleSetSearch = useCallback((value: string) => setSearchTerm(value), []);
  const handleSetSortBy = useCallback((value: string) => setSortBy(value || null), []);

  return useMemo(
    () => ({
      pageNumber,
      pageSize,
      searchTerm,
      sortBy,
      isActive,
      params,
      setParams,
      setActive,
      handleSetSearch,
      handleSetSortBy,
      handlePaginationChange,
    }),
    [pageNumber, pageSize, searchTerm, sortBy, params, handlePaginationChange]
  );
};

export default useBasicTableFilterHelper;
