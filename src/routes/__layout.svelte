<script>
	import MetaTitle from '$lib/MetaTitle.svelte';
	import 'nprogress/nprogress.css';
	import '../app.css';
	import NProgress from 'nprogress';
	import { navigating, page } from '$app/stores';
	import SearchPost from '$lib/SearchPost.svelte';
	import { goto } from '$app/navigation';

	// Top loading bar
	NProgress.configure({
		minimum: 0.16
	});
	$: {
		$navigating === null && NProgress.done();
		$navigating && NProgress.start();
		NProgress.isStarted() && !$navigating && NProgress.done();
	}

	let searchText = '';
	let searchPromise;

	// Top search bar
	function handleSearchPost(event) {
		const key = event.detail.key;
		if (searchText.trim() === '') return;
		if (key === 'Enter') {
			searchPromise = getSearchPost(searchText);
		}
	}

	async function getSearchPost(text) {
		await goto('/posts/search/' + text);
		return;
	}

	let wpLoginUrl = 'https://wordpress.com/log-in';
</script>

<MetaTitle title="Leo's code snippets" />
<SearchPost bind:value={searchText} on:search={handleSearchPost} />
{#await searchPromise}
	<p class="info-text">Searching for {searchText} ...</p>
{:catch}
	<p>Something went wrong. Please come back later.</p>
{/await}

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
