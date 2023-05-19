import { createApi } from '@reduxjs/toolkit/query/react';
import { client, constants } from 'helpers';

export const importApi = createApi({
  reducerPath: 'importApi',
  baseQuery: client.baseQuery(),
  tagTypes: ['Import'],
  endpoints: builder => ({
    importData: builder.mutation({
      query: (data) => ({
        url: constants.api.path.importData,
        method: 'POST',
        data
      }),
      invalidatesTags: ['Import']
    }),
  })
});

export const {
  useImportDataMutation,
} = importApi;
