<script>
	import { MetaTags } from 'svelte-meta-tags';
	export let title;
	export let description;
	export let url;
</script>

<MetaTags
	{title}
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
		image: 'https://generative-placeholders.glitch.me/image?width=50&height=50',
		imageAlt: title
	}}
/>
