<script context="module">
	export const prerender = true;
</script>

<script>
	import CategoryBadge from '$lib/CategoryBadge.svelte';
	import MetaTitle from '$lib/MetaTitle.svelte';

	export let posts;
</script>

<MetaTitle title="Home" />

<h1><a href="/"> Leo's Code Snippets </a></h1>
{#each posts as post}
	<article>
		<a style="text-decoration: none;" sveltekit:prefetch href={`/posts/${post.slug}`}>
			<h2>{@html post.title.rendered}</h2>
			<div class="categories">
				{#each post.categories as category}
					<CategoryBadge {category} />
				{/each}
			</div>
			<img src={post.image} alt={post.title.rendered} />
			<p>{@html post.excerpt.rendered}</p>
			<a href={`/posts/${post.slug}`}>Read More</a>
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
</style>
