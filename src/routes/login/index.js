const url = import.meta.env.VITE_WORDPRESS_PUBLIC_BASE_PATH + '/login'
/** @type {import('./login').RequestHandler} */
export const get = async () => {
  // redirect to url
  return {
    status: 302,
    headers: {
      Location: url,
    }
  }
};