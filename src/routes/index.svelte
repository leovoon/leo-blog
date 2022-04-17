<script context="module">
	export const prerender = true;
</script>

<script>
	import CategoryBadge from '$lib/CategoryBadge.svelte';
	import MetaTitle from '$lib/MetaTitle.svelte';

	export let posts;
</script>

<MetaTitle title="Home" />

<h2><a href="/"> Leo's Code Snippets </a></h2>
{#each posts as post}
	<article>
		<a style="text-decoration: none;" sveltekit:prefetch href={`/posts/${post.slug}`}>
			<h2>{@html post.title.rendered}</h2>
			<div class="categories">
				{#each post.categories as category}
					<CategoryBadge {category} />
				{/each}
			</div>
      <div class="post">
        <img src={post.image} alt={post.title.rendered} />
        <p>{@html post.excerpt.rendered} <a href={`/posts/${post.slug}`}>Read More</a></p>
        
      </div>
		</a>
	</article>
{/each}

<style>
	article {
		margin-bottom: 4rem;
		padding: 1rem;
		border-radius: 13px;
		cursor: pointer;
		transition: box-shadow 0.2s ease-in-out;
	}

	article:hover {
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
	}

	.categories {
		display: flex;

		gap: 1rem;
		margin-bottom: 1rem;
	}

  .post {
    display: flex;
  }

  @media (max-width: 1024px) {
    .post {
      flex-direction: column;
    }

    .post img {
      width: 100%;
      min-width: 100%;
    }
  }

  .post img {
    width: 50%;
    margin-right: 1rem;
  }

  .post p {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: -.2rem;
  }

</style>
