<script lang="ts">
	interface Props {
		id: string
		label: string
		value: string
		placeholder?: string
		required?: boolean
		rows?: number
	}

	let {
		id,
		label,
		value = $bindable(),
		placeholder = '',
		required = false,
		rows = 4
	}: Props = $props()
</script>

<div>
	<label for={id} class="mb-1.5 block text-sm font-medium text-neutral-700">
		{label}{#if required}<span class="text-error"> *</span>{/if}
	</label>
	<textarea
		{id}
		bind:value
		{required}
		{rows}
		{placeholder}
		class="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
	></textarea>
</div>
