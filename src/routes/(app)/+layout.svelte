<script>
	import '../../app.postcss';
	import Navbar from '$lib/utils/app/navbar.svelte';
</script>

<div class="min-h-screen bg-base-300">
	<Navbar />
	<slot />
</div>
