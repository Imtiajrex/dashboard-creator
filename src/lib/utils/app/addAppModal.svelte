<script>
	// @ts-nocheck

	import Input from '$lib/components/form/input.svelte';
	export let isModalOpen = false;
	let name = '';
	let backend = '';
	const backends = ['Firebase', 'Mysql', 'Pocketbase', 'MongoDB', 'PostgreSql'];

	const closeModal = () => {
		isModalOpen = false;
	};
</script>

<div class="modal backdrop-blur-md" class:modal-open={isModalOpen}>
	<div class="modal-box w-full max-w-3xl p-5 md:p-10 shadow-lg">
		<h3 class="font-bold text-xl">Create App</h3>
		<div class="my-8">
			<Input label="Project name" bind:value={name} />
			<div class="mt-4">
				<label for="" class="font-bold text-sm  "> Choose a Backend </label>
				<div class="flex items-center gap-5 flex-wrap mt-3">
					{#each backends as bcend}
						<button
							class={`w-28 h-28 rounded-3xl flex flex-col p-3 ${
								bcend.toLowerCase() == backend ? 'bg-secondary' : 'bg-neutral'
							}`}
							on:click={() => (backend = bcend.toLowerCase())}
						>
							<div class="w-12 h-12 rounded-full bg-black flex items-center justify-center">
								<img
									src={`/brand/${bcend.toLowerCase()}.png`}
									class="w-6 h-6 object-contain"
									alt={bcend}
								/>
							</div>
							<p class="font-bold text-sm mt-2">{bcend}</p>
						</button>
					{/each}
				</div>
			</div>
		</div>
		<div class="modal-action flex items-center justify-center">
			<button on:click={closeModal} class="btn btn-primary ">Create The App</button>
		</div>
	</div>
</div>
