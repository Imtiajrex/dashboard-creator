<script lang="ts">
	import type { Writable } from 'svelte/store';
	let type = 'text';
	export let required = false;
	export let label = 'Input';
	export let value: Writable<string>;

	export let placeholder = 'Enter ' + label.toLowerCase();
	const id = label.toLowerCase().replace(' ', '-');
	const handleInput = (e: any) => {
		$value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
	};
</script>

<label for={id} class="label label-text text-slate-200 font-bold">{label}</label>
<input
	{type}
	{required}
	{id}
	{placeholder}
	on:input={handleInput}
	class="input w-full input-bordered text-sm bg-base-300"
/>
