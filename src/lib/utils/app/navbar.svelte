<script>
	const menuBtnClass = 'btn btn-ghost normal-case text-md';
	const menus = ['Projects', 'Domains', 'Settings'];
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<!-- svelte-ignore a11y-missing-attribute -->
<div class="container navbar mx-auto py-5">
	<div class="flex-1">
		{#each menus as menu}
			<a class={menuBtnClass} href={menu.toLowerCase()}>{menu}</a>
		{/each}
	</div>
	<div class="flex-none">
		<div class="dropdown dropdown-end">
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img src="https://placeimg.com/80/80/people" />
				</div>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-stone-900 rounded-box w-52"
			>
				<li>
					<a>Profile </a>
				</li>
				<li><a>Settings</a></li>
				<li><a>Logout</a></li>
			</ul>
		</div>
	</div>
</div>
