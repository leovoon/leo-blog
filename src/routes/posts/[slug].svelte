<script context="module">
</script>

<script>
	import MetaTitle from '$lib/MetaTitle.svelte';

	export let post;
</script>

<MetaTitle title={post.title.rendered} />

<h2>{@html post.title.rendered}</h2>
<p><small>{new Date(post.date).toLocaleString('en-US', { hour12: true })}</small></p>
<p>by <b>{post.author}</b></p>
{#if post.image}
	<img src={post.image} alt={post.title.rendered} />
{/if}
<p>{@html post.content.rendered}</p>

<style>
  b {
    color: var(--accent-color);
  }
</style>