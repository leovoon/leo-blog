<script>
	import 'nprogress/nprogress.css';
	import '../app.css';
	import NProgress from 'nprogress';
	import { navigating, page } from '$app/stores';
	import { fly } from 'svelte/transition';
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

	export let data;
	let searchText = '';
	let wpLoginUrl = 'https://wordpress.com/log-in';
	let description = 'Helllo, I wrote about Svelte, CSS and JavaScript.';
	$: url = data.url;
	$: isHome = $page.url.pathname === '/';
	$: title =
		!isHome && $page.data.post ? $page.data.post.title.rendered : 'Home';
</script>

<MetaTagsConfig {title} {description} {url} />
<SearchPost bind:value={searchText} />

<main>
	{#key url}
		<div in:fly|local={{ x: 20, duration: 300 }}>
			<slot />
		</div>
	{/key}
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
