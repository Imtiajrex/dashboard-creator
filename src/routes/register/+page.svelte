<script>
	import Input from '$lib/components/form/input.svelte';
	import Brand from '$lib/components/login/brand.svelte';
	import Social from '$lib/components/login/social.svelte';
	import ForgotPassword from '$lib/components/login/forgot-password.svelte';
	import Checkbox from '$lib/components/form/checkbox.svelte';
</script>

<svelte:head>
	<title>Sign up for Dashgen</title>
</svelte:head>
<div class="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="w-full max-w-lg p-6 md:p-10 space-y-8 bg-base-300 ">
		<Brand />
		<form class="mt-8 space-y-6" action="#" method="POST">
			<div>
				<Input label="Name" required type="text" />
				<Input label="Email" required type="email" />
				<Input label="Password" required type="password" />
			</div>

			<button type="submit" class="btn btn-primary w-full relative">Sign up</button>

			<div class="divider">OR</div>
			<div>
				<Social />
			</div>
		</form>
	</div>
</div>
