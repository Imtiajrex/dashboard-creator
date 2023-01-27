<script>
	import AddAppModal from '$lib/utils/app/addAppModal.svelte';
	import Myapps from '$lib/utils/app/myapps.svelte';
	import { PlusCircle } from 'svelte-heros';
	let isModalOpen = false;
</script>

<div class="container mx-auto px-5">
	<div class="mt-10 flex items-center ">
		<h1 class="text-2xl font-bold">Your apps</h1>
		<button
			on:click={() => (isModalOpen = true)}
			class="cursor-pointer ml-3 pt-1 hover:scale-110 active:scale-90 transition-all w-10 h-10"
		>
			<PlusCircle variation="solid" class="text-primary" size={'40px'} />
		</button>
	</div>
	<Myapps />
	<AddAppModal bind:isModalOpen />
</div>
