import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseAnimeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_ANIME_API_URL}`,
  }),
  endpoints: () => ({}),
});
