<script lang="ts">
	interface Props {
		id: string
		label: string
		value: string
		options: string[]
		placeholder?: string
		required?: boolean
	}

	let {
		id,
		label,
		value = $bindable(),
		options,
		placeholder = '',
		required = false
	}: Props = $props()
</script>

<div>
	<label for={id} class="mb-1.5 block text-sm font-medium text-neutral-700">
		{label}{#if required}<span class="text-error"> *</span>{/if}
	</label>
	<select
		{id}
		bind:value
		{required}
		class="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
	>
		{#if placeholder}
			<option value="">{placeholder}</option>
		{/if}
		{#each options as opt}
			<option value={opt}>{opt}</option>
		{/each}
	</select>
</div>
