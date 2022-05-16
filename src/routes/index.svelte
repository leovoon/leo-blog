<script>
	import { postStore } from '@/stores';
	import { onMount } from 'svelte';
	import PostList from '$lib/PostList.svelte';
	import { page } from '$app/stores';
	import { MetaTagsConfig } from '$lib/MetaTagsConfig.svelte';

	export let posts;

	onMount(() => {
		$postStore.posts = posts;
	});

	let title = $page.title;
	let description = 'Helllo, I wrote about Svelte, CSS and JavaScript.';
	let url = $page.url;
</script>

<MetaTagsConfig {title} {description} {url} />

{#if !posts}
	<p class="info-text">Getting snippets ready...</p>
{:else}
	<PostList {posts} />
{/if}
{#if $postStore.posts.length === 0}
	<p class="info-text">No snippet found..</p>
{/if}
