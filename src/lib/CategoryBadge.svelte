<script>
	export let category;
	let color;
	$: {
		if (category === 'Svelte') color = 'rgb(232, 146, 135)';
		if (category === 'JavaScript') color = '#E8B882';
		if (category === 'CSS') color = '#4AA6F0';
		if (category === 'HTML') color = '#F0D859';
		if (category === 'Animation') color = '#6800b5';
		if (category === 'Backend') color = '#808080';
	}
</script>

<badge style:--badgeBgColor={color}>{category}</badge>

<style>
	badge {
		font-size: 0.8rem;
		border-radius: 13px;
		padding: 0.3rem 1rem;
		background-color: var(--badgeBgColor);
		color: var(--pure-white);
	}
</style>
