<script context="module">
	/** @type {import("@sveltejs/kit").Load} */
	export const load = async ({props}) => {
	  return {
		props,
		stuff: { title: "Home" }
	  }
	}
</script>

<script>
	import { postStore } from '@/stores';
	import { onMount } from 'svelte';
	import PostList from '$lib/PostList.svelte';
	import { page } from '$app/stores';

	export let posts;

	onMount(() => {
		$postStore.posts = posts;
	});

	let title = $page.title;
	let description = 'Helllo, I wrote about Svelte, CSS and JavaScript.';
	let url = $page.url;
</script>



{#if !posts}
	<p class="info-text">Getting snippets ready...</p>
{:else}
	<PostList {posts} />
{/if}
{#if $postStore.posts.length === 0}
	<p class="info-text">No snippet found..</p>
{/if}
