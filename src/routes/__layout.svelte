<script>
	import MetaTitle from '$lib/MetaTitle.svelte';
	import 'nprogress/nprogress.css';
	import '../app.css';
	import NProgress from 'nprogress';
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
<slot />
<footer>
	Built with <a href="https://kit.svelte.dev/">SvelteKit</a> by
	<a href="https://github.com/leovoon">leovoon</a>.
	<p>
		<a href="/">Home</a>
		|
		<a href="/login">Login</a>
	</p>
</footer>
