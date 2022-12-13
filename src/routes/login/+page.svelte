<div class="flex bg min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="w-full max-w-md space-y-8">
		<div>
			<img
				class="mx-auto h-12 w-auto"
				src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
				alt="Your Company"
			/>
			<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
				Sign in to your account
			</h2>
		</div>
		<form class="mt-8 space-y-6" action="#" method="POST">
			<input type="hidden" name="remember" value="true" />
			<div class="-space-y-px rounded-md shadow-sm">
				<div>
					<label for="email-address" class="label label-text">Email</label>
					<input
						type="email"
						required
						id="email-address"
						placeholder="Enter Email"
						class="input w-full input-bordered "
					/>
				</div>
				<div>
					<label for="password" class="label label-text">Password</label>
					<input
						type="password"
						required
						id="password"
						placeholder="Enter Password"
						class="input w-full  input-bordered "
					/>
				</div>
			</div>

			<div class="flex items-center justify-between">
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Remember me</span>
						<input type="checkbox" class="checkbox ml-2" />
					</label>
				</div>

				<div class="text-sm">
					<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
						>Forgot your password?</a
					>
				</div>
			</div>

			<div>
				<button type="submit" class="btn btn-active w-full relative">
					<span class="absolute inset-y-0 left-0 flex items-center pl-3">
						<!-- Heroicon name: mini/lock-closed -->
					</span>
					Sign in
				</button>
			</div>
			<div class="divider">OR</div>
			<div>
				<button class="btn btn-outline w-full my-2">
					<img src="/brand/google.png" alt="Google Logo" class="w-6 mr-3" />
					Sign in with Google
				</button>
				<button class="btn btn-outline w-full my-2">
					<img src="/brand/github.png" alt="Google Logo" class="w-6 mr-3" />
					Sign in with Github
				</button>
			</div>
		</form>
	</div>
</div>

<style>
	:root {
		--bc: 215 28% 17%;
		--b2: 0 0% 95%;
	}
	.bg {
		background-size: 5px 5px;
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
