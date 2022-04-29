<script>
	import PostListItem from './PostListItem.svelte';
	export let posts;
</script>

<div class="post-list">
	{#each posts as post}
		<PostListItem {post} />
	{/each}
</div>

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
