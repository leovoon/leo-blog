<script context="module">
	/** @type {import("@sveltejs/kit").Load} */
	export const load = async ({ props }) => {
		return {
			props,
			cache: { maxage: 60 },
			stuff: { title: 'Home' }
		};
	};
</script>

<script>
	import { postStore } from '@/stores';
	import { onMount } from 'svelte';
	import PostList from '$lib/PostList.svelte';
	import { goto } from '$app/navigation';

	export let posts;

	onMount(() => {
		$postStore.posts = posts;
	});
</script>

{#if !posts}
	<p class="info-text">Getting snippets ready...</p>
{:else}
	<PostList {posts} />
	<div style:text-align="center">
		<a href="/posts" sveltekit:prefetch sveltekit:noscroll><button>Show previous posts</button></a>
	</div>
{/if}
{#if $postStore.posts.length === 0}
	<p class="info-text">No snippet found..</p>
{/if}
