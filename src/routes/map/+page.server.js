import { MAPBOX_TOKEN } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    return {
      mapbox_token: MAPBOX_TOKEN
    }
  };