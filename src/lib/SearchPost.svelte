<script>
	import { createEventDispatcher } from 'svelte';

	let placeholder = 'Search snippet...';
	export let value = '';
	const dispatch = createEventDispatcher();
	function searchPost(evt) {
		dispatch('search', evt);
	}
</script>

<input type="text" name="search" on:keyup={searchPost} bind:value {placeholder} />

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

	::placeholder {
		color: rgba(0, 0, 0, 0.4);
		opacity: 1; /* Firefox */
	}
</style>
