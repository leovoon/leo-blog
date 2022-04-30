<script>
	import MetaTitle from '$lib/MetaTitle.svelte';
	import { postStore } from '@/stores';
	import { onMount } from 'svelte';
	import PostList from '$lib/PostList.svelte';
	export let posts;
	let title = '📝 code...';

	onMount(() => {
		$postStore.posts = posts;
	});
</script>

<MetaTitle {title} />

{#if posts.length > 0}
	<PostList {posts} />
{/if}
{#if $postStore.posts.length === 0}
	<p class="info-text">No snippet found..</p>
{/if}
