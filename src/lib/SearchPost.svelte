<script>
	import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';

	export let value = '';
	let placeholder = 'Search snippet...';
	let form;
	const action = '/posts';
	const dispatch = createEventDispatcher();

	function searchPost(evt) {
		const formData = new FormData(form);
		goto(`${action}?search=${formData.get('search')}`, { keepfocus: true, noscroll: true });
	}

	function handleEnter(event) {
		const key = event.key;
		if (value.trim() === '') return;
		if (key === 'Enter') {
			searchPost();
		}
	}
</script>

<form bind:this={form} {action} on:keydown={handleEnter} on:submit|preventDefault={searchPost}>
	<input type="text" autocomplete="on" name="search" bind:value {placeholder} />
</form>

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
