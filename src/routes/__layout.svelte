<script>
	import MetaTitle from '$lib/MetaTitle.svelte';
	import '../app.css';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	import { navigating } from '$app/stores';

	NProgress.configure({
		minimum: 0.16
	});

	$: {
		$navigating && NProgress.start();
		!$navigating && NProgress.done();
	}
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
