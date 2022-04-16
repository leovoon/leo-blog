<script context="module">
    export const load = async ({ fetch }) => {
      const res = await fetch("/api/posts");
      const posts = await res.json();
      return {
        props: {
          posts,
        },
      };
    };
  </script>
  
  <script>
    export let posts;
  </script>
  
  <h1>Leo's Blog</h1>
  {#each posts as post}
  <article>
    <h2>{@html post.title.rendered}</h2>
    <img src="{post.image}" alt="{post.title.rendered}">
    <p>{@html post.excerpt.rendered}</p>
    <a href={`/posts/${post.slug}`}>Read More</a>
  </article>
  {/each}

  <style>
    article {
      margin-bottom: 4rem;
    }

  </style>