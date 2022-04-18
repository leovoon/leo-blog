const url = import.meta.env.VITE_WORDPRESS_API_BASE_PATH + '/posts'
export const get = async () => {
  const res = await fetch(`${url}?_embed`);
  const posts = await res.json();
  posts.map((post) => {
    post.image = post?._embedded["wp:featuredmedia"][0].source_url;
    post.categories = post._embedded["wp:term"][0].map((category) => category.name);
  });

  return {
    status: 200,
    body: {posts},
  };
};