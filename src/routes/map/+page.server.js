import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    return {
      mapbox_token: env.MAPBOX_TOKEN
    }
  };