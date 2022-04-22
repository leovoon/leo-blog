<script>
	let placeholder = 'Search snippet...';
	export let value = '';
</script>

<form action="/" method="get">
	<input type="text" name="search" bind:value {placeholder} />
</form>

<style>
	input {
		width: calc(100% - 2rem);
		margin-block: 2rem;
		padding-block: 0.5rem;
		padding-inline: 1rem;
		outline: var(--primary-color);
		border: transparent;
		border-radius: 3px;
	}
</style>
