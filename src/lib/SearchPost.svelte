<script>
	import { goto } from '$app/navigation';

	export let value = '';
	let placeholder = 'Search snippet...';
	let form;
	let searchPromise;
	const action = '/posts';

	function handleEnter(e) {
		const key = e.key;
		if (value.trim() === '') return;
		if (key === 'Enter') {
			searchPromise = submitSearch();
		}
	}
	async function submitSearch() {
		const formData = new FormData(form);
		await goto(`${action}?search=${formData.get('search')}`, {
			keepFocus: true,
			noScroll: true
		});
	}
</script>

<form
	bind:this={form}
	{action}
	on:keydown={handleEnter}
	on:submit|preventDefault={submitSearch}
>
	<input type="text" autocomplete="on" name="search" bind:value {placeholder} />
</form>

{#await searchPromise}
	<p class="info-text">Searching for {value} ...</p>
{:catch}
	<p>Something went wrong.</p>
{/await}

<style>
	input {
		width: calc(100% - 2rem);
		margin-block: 2rem;
		padding-block: 1.2rem;
		padding-inline: 1rem;
		outline: var(--primary-color);
		border: transparent;
		border-radius: 3px;
	}

	::placeholder {
		color: rgba(0, 0, 0, 0.4);
		opacity: 1; /* Firefox */
	}
</style>
