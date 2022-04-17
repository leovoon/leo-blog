<script>
	import MetaTitle from '$lib/MetaTitle.svelte';
	import '../app.css';
	
</script>

<MetaTitle title="Leo's code snippets" />

<div class="wrapper">
	<slot />
</div>
<footer>
	Built by leovoon.
	<a href="/">Home</a>
	|
	<a href="/login">Login</a>
</footer>

<style>
	.wrapper {
		width: 50vw;
		margin: 0 auto;
	}
	:global(.more-link) {
		display: none;
	}
	:global(img) {
		max-width: 100%;
	}
	@media (max-width: 768px) {
		.wrapper {
			width: 90vw;
		}
	}
</style>
