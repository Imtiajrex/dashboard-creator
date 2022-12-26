<script>
	import '../../app.postcss';
	import Footer from '$lib/utils/home/footer.svelte';
	import Navbar from '$lib/utils/home/navbar.svelte';
</script>

<Navbar />
<div class="bg bg-base-300">
	<div class="min-h-screen">
		<slot />
	</div>
	<Footer />
</div>

<style>
	:global(.bg) {
		background-size: 5px 5px;
		background-image: radial-gradient(hsla(var(--bc) / 0.1) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
