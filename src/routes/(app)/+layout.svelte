<script>
	import '../../app.postcss';
	import Navbar from '$lib/utils/app/navbar.svelte';
</script>

<div class="drawer drawer-end ">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<div class="min-h-screen bg-base-300">
			<Navbar />
			<slot />
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-4" class="drawer-overlay" />
		<div class="menu p-4 w-80 bg-base-100 text-base-content rounded-tl-2xl rounded-bl-2xl" />
	</div>
</div>
