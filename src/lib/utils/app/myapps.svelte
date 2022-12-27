<script lang="ts">
	import { ExternalLink } from 'svelte-heros';
	type appType = {
		backend: 'firebase' | 'pocketbase' | 'mysql' | 'mongodb' | 'postgresql';
		name: string;
		id: string;
		url: string;
	};
	const apps: appType[] = [
		{ backend: 'firebase', name: 'Test Project', id: 'slaskdjfqw', url: '' },
		{ backend: 'pocketbase', name: 'Roging', id: 'pvi3i4poj', url: '' },
		{ backend: 'mysql', name: 'Test Project', id: 'l234j2prk1', url: '' },
		{ backend: 'mongodb', name: 'Test Project', id: 'p2o3ikj23j', url: '' },
		{ backend: 'postgresql', name: 'Test Project', id: 'p23i4po23rpo', url: '' }
	];
</script>

<div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 my-10">
	{#each apps as app}
		<div
			class="relative bg-stone-900 p-5 h-48 rounded-lg shadow-lg hover:-translate-y-1 transition pt-10 flex flex-col"
		>
			<!-- svelte-ignore a11y-missing-content -->
			<a href={`/projects/${app.id}`} class="absolute w-full h-full z-10" />

			<img src={`/brand/${app.backend}.png`} class=" w-10 h-10 object-contain" alt={app.backend} />
			<h3 class="my-2 font-bold text-lg">
				{app.name}
			</h3>
			<a
				href={app.url}
				rel="noopener noreferrer"
				target="_blank"
				class="text-accent z-20 flex items-center font-bold hover:brightness-125 focus:brightness-90 transition"
			>
				Live url <ExternalLink class="ml-2" />
			</a>
		</div>
	{/each}
</div>
