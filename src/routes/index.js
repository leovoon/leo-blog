const url = 'https://public-api.wordpress.com/wp/v2/sites/lihhaur.wordpress.com/posts'

export const get = async () => {
  const res = await fetch(`${url}?_embed`);
  const posts = await res.json();
  posts.map((post) => {
    post.image = post._embedded["wp:featuredmedia"][0].source_url;
  });

  return {
    status: 200,
    body: {posts},
  };
};