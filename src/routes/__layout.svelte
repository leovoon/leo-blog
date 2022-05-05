<script>
	import MetaTitle from '$lib/MetaTitle.svelte';
	import 'nprogress/nprogress.css';
	import '../app.css';
	import NProgress from 'nprogress';
	import { navigating, page } from '$app/stores';
	import SearchPost from '$lib/SearchPost.svelte';

	// Top loading bar
	NProgress.configure({
		minimum: 0.75
	});

	$: {
		if ($navigating) {
			NProgress.start();
			$navigating.to.origin !== $page.url.origin && NProgress.done();
		}
		!$navigating && NProgress.done();
	}

	let searchText = '';
	let wpLoginUrl = 'https://wordpress.com/log-in';
</script>

<MetaTitle title="Leo's code snippets" />
<SearchPost bind:value={searchText} />
<!-- {#await searchPromise}
	<p class="info-text">Searching for {searchText} ...</p>
{:catch}
	<p>Something went wrong. Please come back later.</p>
{/await} -->

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
