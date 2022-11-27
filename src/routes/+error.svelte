<script>
	import { page } from '$app/stores';
</script>

<h1>
	{$page.status}
</h1>

<p style="text-align: center">
	{$page.error?.message}
</p>
