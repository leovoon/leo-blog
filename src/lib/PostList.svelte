<script>
	import PostListItem from './PostListItem.svelte';
	import { paginate, LightPaginationNav } from 'svelte-paginate';
	export let posts;

	// pagination
	let items;
	let currentPage = 1;
	let pageSize = 6;
	$: items = posts;
	$: paginatedPosts = paginate({ items, pageSize, currentPage });
</script>

<div class="post-list">
	{#each paginatedPosts as post}
		<PostListItem {post} />
	{/each}
</div>
{#if posts.length > 0}
	<LightPaginationNav
		totalItems={items.length}
		{pageSize}
		{currentPage}
		limit={1}
		showStepOptions={true}
		on:setPage={(e) => (currentPage = e.detail.page)}
	/>
{/if}

<style>
	.post-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1rem;
		margin-bottom: 2rem;
	}

	@media (max-width: 768px) {
		.post-list {
			gap: 2rem;
		}
	}
</style>
