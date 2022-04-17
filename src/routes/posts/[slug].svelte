<script context="module">
	export const prerender = true;
</script>

<script>
	import MetaTitle from '$lib/MetaTitle.svelte';

	export let post;
</script>

<MetaTitle title={post.title.rendered} />

<h1>{@html post.title.rendered}</h1>
<p><small>{new Date(post.date)}</small></p>
<p><b>by {post.author}</b></p>
{#if post.image}
	<img src={post.image} alt={post.title.rendered} />
{/if}
<p>{@html post.content.rendered}</p>
