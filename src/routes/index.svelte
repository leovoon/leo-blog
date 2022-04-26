<script>
	import CategoryBadge from '$lib/CategoryBadge.svelte';
	import MetaTitle from '$lib/MetaTitle.svelte';
	import SearchPost from '$lib/SearchPost.svelte';
	import { paginate, LightPaginationNav } from 'svelte-paginate';
	import { postStore } from '@/stores';
	import { onMount } from 'svelte';
	import { LazyImage } from 'svelte-lazy-image';

	export let posts;
	let title = '📝 code...';
	let searchText = '';
	let promise;

	onMount(() => {
		$postStore.posts = posts;
	});

	function handleSearchPost(event) {
		const key = event.detail.key;
		if (searchText.trim() === '') return;
		if (key === 'Enter') {
			promise = getSearchPost(searchText);
		}
	}

	async function getSearchPost(text) {
		const res = await fetch('/posts/search/' + text);
		const { posts: result } = await res.json();
		$postStore.posts = result;
		return result;
	}

	// pagination
	let items;
	let currentPage = 1;
	let pageSize = 6;
	$: items = $postStore.posts;
	$: paginatedPosts = paginate({ items, pageSize, currentPage });
</script>

<MetaTitle {title} />
<SearchPost bind:value={searchText} on:search={handleSearchPost} />
{#await promise}
	<p>Searching for {searchText} ...</p>
{:then result}
	{#if result}
		<p class="info-text">
			Found <b>{result.length}</b>
			{result.length > 1 ? 'snippets' : 'snippet'}
		</p>
	{/if}
{/await}
{#if $postStore.posts.length > 0}
	<main>
		{#each paginatedPosts as post}
			<article>
				<a style="text-decoration: none;" sveltekit:prefetch href={`/posts/${post.slug}`}>
					<h2>{@html post.title.rendered}</h2>
					<div class="categories">
						{#each post.categories as category}
							<CategoryBadge {category} />
						{/each}
					</div>
					<div class="post">
						<LazyImage src={post.image} alt={post.title.rendered} options={{ threshold: 0.5 }} />
						<div class="excerpt-wrapper">
							{@html post.excerpt.rendered}
							<a href={`/posts/${post.slug}`}>Read More</a>
						</div>
					</div>
				</a>
			</article>
		{/each}
	</main>
	<LightPaginationNav
		totalItems={items.length}
		{pageSize}
		{currentPage}
		limit={1}
		showStepOptions={true}
		on:setPage={(e) => (currentPage = e.detail.page)}
	/>
{:else if $postStore.posts.length === 0}
	<p class="info-text">No snippet found..</p>
{/if}

<style>
	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1rem;
		margin-bottom: 2rem;
	}
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

	.info-text {
		color: rgba(0, 0, 0, 0.6);
	}

	.post {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	:global(.svelte-lazy-image) {
		opacity: 0;
		transition: opacity 400ms ease-in-out;
	}
	:global(.svelte-lazy-image--loaded) {
		opacity: 1;
	}

	.post .excerpt-wrapper {
		width: 100%;
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	@media (max-width: 768px) {
		main {
			gap: 2rem;
		}
		article h2 {
			font-size: 1.4rem;
		}
	}
</style>
