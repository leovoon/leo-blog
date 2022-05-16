<script>
	import 'nprogress/nprogress.css';
	import '../app.css';
	import NProgress from 'nprogress';
	import { navigating, page } from '$app/stores';
	import SearchPost from '$lib/SearchPost.svelte';
	import { MetaTags } from 'svelte-meta-tags';

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
	let description = 'Helllo web frontend, I wrote about Svelte, CSS and JavaScript.';
	let title = $page.title;
	let url = $page.url;
</script>

<MetaTags
	title="lecs"
	titleTemplate="%s | Leo's FE Code Snippet"
	{description}
	canonical="https://leocs.netlify.app"
	openGraph={{
		url,
		title,
		description,
		site_name: 'Lecs'
	}}
	twitter={{
		handle: '@handle',
		site: '@site',
		cardType: 'summary_large_image',
		title,
		description,
		image: 'https://generative-placeholders.glitch.me/image?width=100&height=100',
		imageAlt: title
	}}
/>
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
