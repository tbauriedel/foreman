import React from 'react';

let ForemanContext = null;

const createForemanContext = metadata => {
  ForemanContext = React.createContext(metadata);
  return ForemanContext;
};

export const getForemanContext = metadata =>
  ForemanContext || createForemanContext(metadata);

export const useForemanContext = () => React.useContext(ForemanContext);

export const useForemanVersion = () => useForemanContext().version;
export const useForemanSettings = () => useForemanContext().UISettings;
export const usePaginationOptions = () => useForemanSettings().perPageOptions;
export const useForemanDocUrl = () => useForemanContext().docUrl;
