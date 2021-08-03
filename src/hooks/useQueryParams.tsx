import { parse, stringify } from 'qs';
import { useHistory, useLocation } from 'react-router-dom';

import { removeNullProperties } from '../utils/object';

export interface QueryParams {
  [key: string]: any;
}

const decoder = (value: any) => {
  if (/^(\d+|\d*\.\d+)$/.test(value)) {
    return parseFloat(value);
  }

  const keywords: any = {
    false: false,
    null: null,
    true: true,
    // tslint:disable-next-line:object-literal-shorthand
    undefined: undefined,
  };

  if (value in keywords) {
    return keywords[value];
  }

  return decodeURIComponent(value);
};

const useQueryParams = () => {
  // Note : this is not tested
  // ToDo
  const location = useLocation();
  const history = useHistory();

  const getQueryParams = (decode = true) =>
    decode
      ? parse(location.search, {
          decoder,
          ignoreQueryPrefix: true,
        })
      : parse(location.search, {
          ignoreQueryPrefix: true,
        });

  const setQueryParams = (
    nextQueryParams: QueryParams | ((qp: QueryParams) => QueryParams),
    append = true,
  ) => {
    history.push({
      ...location,
      search: stringify(
        removeNullProperties(
          append
            ? {
                ...getQueryParams(),
                ...nextQueryParams,
              }
            : nextQueryParams,
        ),
        {
          encode: false,
        },
      ),
    });
  };

  return {
    getQueryParams,
    setQueryParams,
  };
};

export default useQueryParams;
