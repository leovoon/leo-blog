<script>
	import MetaTitle from '$lib/MetaTitle.svelte';
	import SearchPost from '$lib/SearchPost.svelte';
	import { paginate, LightPaginationNav } from 'svelte-paginate';
	import { postStore } from '@/stores';
	import { onMount } from 'svelte';
	import PostList from '$lib/PostList.svelte';
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
	<PostList posts={paginatedPosts} />
	<LightPaginationNav
		totalItems={items.length}
		{pageSize}
		{currentPage}
		limit={1}
		showStepOptions={true}
		on:setPage={(e) => (currentPage = e.detail.page)}
	/>
{/if}
{#if $postStore.posts.length === 0}
	<p class="info-text">No snippet found..</p>
{/if}

<style>
	.info-text {
		color: rgba(0, 0, 0, 0.6);
		text-align: center;
	}
</style>
