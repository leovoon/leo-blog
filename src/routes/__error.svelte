<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}`
			}
		};
	}
</script>

<script>
	import MetaTitle from '$lib/MetaTitle.svelte';

	export let title;
</script>

<MetaTitle title="Opps.." />
<h1>
	{title}
</h1>

<p style="text-align: center">
	{#if title === '500'}
		Something went wrong.
	{:else if title === '403'}
		This page does not appear on the website map.
	{/if}
</p>
