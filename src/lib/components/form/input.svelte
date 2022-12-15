<script>
	export let type = 'text';
	export let required = false;
	export let label = 'Input';

	export let placeholder = 'Enter ' + label;
	const id = label.toLowerCase().replace(' ', '-');
</script>

<label for={id} class="label label-text text-slate-200">{label}</label>
<input {type} {required} {id} {placeholder} class="input w-full input-bordered " />
