import { createApi } from '@reduxjs/toolkit/query/react';
import { client, constants } from 'helpers';

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: client.baseQuery(),
  tagTypes: ['Home'],
  endpoints: builder => ({
    getHomeData: builder.mutation({
      query: () => ({
        url: constants.api.path.getHomeData,
        method: 'GET'
      }),
      providesTags: ['Home']
    }),
  })
});

export const {
  useGetHomeDataMutation,
} = homeApi;
