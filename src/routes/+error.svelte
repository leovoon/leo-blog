<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error, status }) {
		return {
			props: {
				title: `${status} : ${error.message}`
			}
		};
	}
</script>

<script>
	export let title;
</script>

<h1>
	{title}
</h1>

<p style="text-align: center">
	{title === '404' ? 'This page does not appear on the website map.' : 'Something went wrong.'}
</p>
