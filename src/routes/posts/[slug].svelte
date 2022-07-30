<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ props }) {
		return {
			props,
			stuff: {
				title: props.post.title.rendered
			}
		};
	}
</script>

<script>
	import hljs from 'highlight.js/lib/core';
	// import svelteHighlightRules from 'highlightjs-svelte'
	import html from 'highlight.js/lib/languages/html';
	import javascript from 'highlight.js/lib/languages/javascript';
	import css from 'highlight.js/lib/languages/css';
	import 'highlight.js/styles/atom-one-dark.css';
	import CategoryBadge from '$lib/CategoryBadge.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		hljs.registerLanguage('html', html);
		hljs.registerLanguage('javascript', javascript);
		hljs.registerLanguage('css', css);
		// svelteHighlightRules(hljs); rules are not complete yet
		hljs.highlightAll();
	});
	export let post;
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
	<p><small>{new Date(post.date).toLocaleString('en-US', { hour12: true })}</small></p>
	<p>by <b>{post.author}</b></p>
	<!-- {#if post.image}
		<img src={post.image} width={300} alt={post.title.rendered} />
	{/if} -->
	<p>{@html post.content.rendered}</p>
{/if}
