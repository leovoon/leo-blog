<script>
	import PostList from '$lib/PostList.svelte';

	export let posts;
</script>

{#if posts}
	<p class="info-text">
		Found <b>{posts.length}</b>
		{posts.length > 1 ? 'snippets' : 'snippet'}.
	</p>
	<PostList {posts} />
{:else}
	<p>No snippet found.</p>
{/if}
