<script>
	const menuBtnClass = 'btn btn-ghost normal-case text-md';
	const menus = ['App', 'Domains', 'Settings'];
	let isDropdownOpen = false;
	const toggleOpen = () => {
		isDropdownOpen = !isDropdownOpen;
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<!-- svelte-ignore a11y-missing-attribute -->
<div class="container navbar mx-auto py-5">
	<div class="flex-1">
		{#each menus as menu}
			<a class={menuBtnClass} href={`/${menu.toLowerCase()}`}>{menu}</a>
		{/each}
	</div>
	<div class="flex-none">
		<button
			on:click={toggleOpen}
			title="Hamburger button"
			tabindex="0"
			class="btn btn-ghost btn-circle avatar"
		>
			<div class="w-10 rounded-full">
				<img src="https://placeimg.com/80/80/people" />
			</div>
		</button>
		<div
			class="dropdown dropdown-end "
			class:dropdown-open={isDropdownOpen}
			class:dropdown-close={!isDropdownOpen}
		>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-10 p-2 shadow-lg bg-base-100 rounded-box w-52"
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
