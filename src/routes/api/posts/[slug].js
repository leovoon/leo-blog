const url = 'https://public-api.wordpress.com/wp/v2/sites/lihhaur.wordpress.com/posts'

export const get = async (request) => {
  const slug = request.params.slug;
  const res = await fetch(`${url}?slug=${slug}&_embed`);
  const posts = await res.json();
  const post = posts[0];
  post.image = post._embedded["wp:featuredmedia"][0].source_url;
  post.author = post._embedded.author[0].name;
  
  return {
    status: 200,
    body: post,
  };
};