<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	//TODO complete this type definition
	import type { Person } from '$lib/types/personType';
	import { construct_svelte_component } from 'svelte/internal';
	//TODO get data from endpoint
	export let data:any;
	console.log(data.res);
	//TODO Correctly type the incoming data with the Person type, if you did not manage that step just use any[] as type
</script>

<h1>Technical Assessment Deerns</h1>
<div class="flex justify-center ">
<div class="left  ">
	{#each data.res as person}
	<Card person = { person } />
	{/each}
</div>
</div>
<!-- TODO: use an each block to display multiple cards -->
