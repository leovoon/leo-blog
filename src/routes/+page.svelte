<script lang="ts">
	import { postStore } from '@/stores';
	import { onMount } from 'svelte';
	import PostList from '$lib/PostList.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	$: ({ posts } = data);

	onMount(() => {
		$postStore.posts = posts;
	});
</script>

{#if !posts}
	<p class="info-text">Getting snippets ready...</p>
{:else}
	<PostList {posts} />
	<div style:text-align="center">
		<a href="/posts" data-sveltekit-prefetch data-sveltekit-noscroll
			><button>Show previous posts</button></a
		>
	</div>
{/if}
{#if $postStore.posts.length === 0}
	<p class="info-text">No snippet found..</p>
{/if}
