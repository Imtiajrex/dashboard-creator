<script lang="ts">
	import { ExternalLink } from 'svelte-heros';
	type appType = {
		backend: 'firebase' | 'pocketbase' | 'mysql' | 'mongodb' | 'postgresql';
		name: string;
		id: string;
		url: string;
	};
	const apps: appType[] = [
		{ backend: 'firebase', name: 'Test Project', id: '', url: '' },
		{ backend: 'pocketbase', name: 'Roging', id: '', url: '' },
		{ backend: 'mysql', name: 'Test Project', id: '', url: '' },
		{ backend: 'mongodb', name: 'Test Project', id: '', url: '' },
		{ backend: 'postgresql', name: 'Test Project', id: '', url: '' }
	];
</script>

<div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 my-10">
	{#each apps as app}
		<a
			href={`projects/${app.id}`}
			class=" bg-stone-900 p-5 h-48 rounded-lg shadow-lg hover:-translate-y-1 transition pt-10 flex flex-col"
		>
			<img src={`/brand/${app.backend}.png`} class=" w-10 h-10 object-contain" alt={app.backend} />
			<h3 class="my-2 font-bold text-lg">
				{app.name}
			</h3>
			<a
				href={app.url}
				rel="noopener noreferrer"
				target="_blank"
				class="text-accent flex items-center font-bold hover:brightness-125 focus:brightness-90 transition"
			>
				Live url <ExternalLink class="ml-2" />
			</a>
		</a>
	{/each}
</div>
