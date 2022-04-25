<script>
	import CategoryBadge from '$lib/CategoryBadge.svelte';
	import MetaTitle from '$lib/MetaTitle.svelte';
	import SearchPost from '$lib/SearchPost.svelte';
	import { fade } from 'svelte/transition';
	import { paginate, LightPaginationNav } from 'svelte-paginate';
	import { postStore } from '@/stores';
	import { onMount } from 'svelte';

	export let posts;
	let searchText = '';
	let promise;

	onMount(() => {
		$postStore.posts = posts;
	});

	function handleSearchPost(event) {
		const key = event.detail.key;
		if (searchText === '') return;
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
	let pageSize = 4;
	$: items = $postStore.posts;
	$: paginatedPosts = paginate({ items, pageSize, currentPage });
</script>

<MetaTitle title="Home" />
<h2><a href="/"> Leo's Code Snippets </a></h2>
<SearchPost bind:value={searchText} on:search={handleSearchPost} />
{#await promise}
	<p>Searching for {searchText} ...</p>
{:then result}
	{#if result}
		<p class="info-text">
			Found <b>{result.length}</b>
			{result.length > 0 ? 'snippets' : 'snippet'}
		</p>
	{/if}
{/await}
{#if $postStore.posts.length > 0}
	<main transition:fade>
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
						<div class="img-wrapper">
							<img src={post.image} alt={post.title.rendered} />
						</div>
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
	article {
		margin-bottom: 4rem;
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
