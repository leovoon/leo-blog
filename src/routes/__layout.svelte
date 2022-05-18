<script>
	import 'nprogress/nprogress.css';
	import '../app.css';
	import NProgress from 'nprogress';
	import { navigating, page } from '$app/stores';
	import SearchPost from '$lib/SearchPost.svelte';
	import MetaTagsConfig from '$lib/MetaTagsConfig.svelte';

	// Top loading bar
	NProgress.configure({
		minimum: 0.75
	});

	$: {
		$navigating && NProgress.start();
		$navigating?.to.origin !== $page.url.origin && NProgress.done();
		!$navigating && NProgress.done();
	}

	let searchText = '';
	let wpLoginUrl = 'https://wordpress.com/log-in';
	$: title = $page.title;
	let description = 'Helllo, I wrote about Svelte, CSS and JavaScript.';
	let url = $page.url;
</script>

<MetaTagsConfig {title} {description} {url} />
<SearchPost bind:value={searchText} />

<main>
	<slot />
</main>
<footer>
	Built with <a href="https://kit.svelte.dev/">SvelteKit</a> by
	<a href="https://github.com/leovoon">leovoon</a>.
	<p>
		<a href="/">Home</a>
		|
		<a href={wpLoginUrl}>Login</a>
	</p>
</footer>
