const url = 'https://lihhaur.wordpress.com/login'
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