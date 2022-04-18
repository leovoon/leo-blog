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
				<div class="img-wrapper">
					<img src={post.image} alt={post.title.rendered} />
				</div>
				<div class="excerpt-wrapper">
					{@html post.excerpt.rendered}
					<a href={`/posts/${post.slug}`}>Read More</a>
				</div>
			</div></a
		>
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
		align-items: flex-start;
	}

	.post .img-wrapper {
		width: 50%;
		margin-right: 1rem;
	}

	.post .excerpt-wrapper {
		width: 50%;
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		margin-top: -1em;
	}

	@media (max-width: 600px) {
		.post {
			flex-direction: column;
		}

    .post .img-wrapper {
      width: 100%;
    }

    .post .excerpt-wrapper {
      width: 100%;
      margin-top: 0;
    }

	}
</style>
