<script>
	import CategoryBadge from '$lib/CategoryBadge.svelte';
	// import { LazyImage } from 'svelte-lazy-image';
	// import placeholderImage from '$lib/assets/img-placeholder.webp';
	export let post;
</script>

<article>
	<a
		style="text-decoration: none;"
		data-sveltekit-prefetch
		href={`/posts/${post.slug}`}
	>
		<h2>{@html post.title.rendered}</h2>
		<div class="categories">
			{#each post.categories as category}
				<CategoryBadge {category} />
			{/each}
		</div>
		<div class="post">
			<!-- <LazyImage width={300} src={post.image} placeholder={placeholderImage} alt={post.title.rendered} options={{ threshold: 0.5 }} /> -->
			<div class="excerpt-wrapper">
				{@html post.excerpt.rendered}
				<a href={`/posts/${post.slug}`}>Read More</a>
			</div>
		</div>
	</a>
</article>

<style>
	article {
		padding: 1rem;
		border-radius: 13px;
		cursor: pointer;
		transition: box-shadow 0.2s ease-in-out;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
	}

	article:hover {
		box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.3);
	}

	.post {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.post .excerpt-wrapper {
		width: 100%;
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	/* :global(.svelte-lazy-image) {
		min-width: 100%;
		aspect-ratio: 16/9;
		opacity: 0;
		transition: opacity 400ms ease-in-out;
	}
	:global(.svelte-lazy-image--loaded) {
		opacity: 1;
	} */
</style>
