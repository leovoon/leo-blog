<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	import css from 'highlight.js/lib/languages/css';
	import 'highlight.js/styles/atom-one-dark.css';
	import CategoryBadge from '$lib/CategoryBadge.svelte';
	import type { PageServerData } from './$types';
	import { onMount } from 'svelte';

	onMount(() => {
		hljs.registerLanguage('javascript', javascript);
		hljs.registerLanguage('css', css);
		// svelteHighlightRules(hljs); rules are not complete yet
		hljs.highlightAll();
	});

	export let data: PageServerData;
	$: ({ post } = data);
</script>

{#if !post}
	<p>Loading...</p>
{:else}
	<h2>{@html post.title.rendered}</h2>
	<div class="categories">
		{#each post.categories as category}
			<CategoryBadge {category} />
		{/each}
	</div>
	<p>
		<small
			>{new Date(post.date).toLocaleString('en-US', { hour12: true })}</small
		>
	</p>
	<p>by <b>{post.author}</b></p>
	<!-- {#if post.image}
		<img src={post.image} width={300} alt={post.title.rendered} />
	{/if} -->
	<p>{@html post.content.rendered}</p>
{/if}
