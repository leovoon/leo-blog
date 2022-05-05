<script>
	import PostList from '$lib/PostList.svelte';

	export let posts;
	export let search;
</script>

{#if posts}
	<p class="info-text">
		Found <b>{posts.length}</b>
		{posts.length > 1 ? 'snippets' : 'snippet'}{search ? ` for  ${search}.` : '.'}
	</p>
	<PostList {posts} />
{:else}
	<p>No snippet found for <b>{search}</b>.</p>
{/if}
