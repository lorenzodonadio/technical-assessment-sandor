
<script lang="ts">
import type { Person } from "../types/personType" ;
export let person: Person; 
let date = new Date(person.created_at).toLocaleDateString("nl-NL");
</script>

<div id="card" class="rounded shadow-md border border-gray-500">
  <div class="px-5 w-full">
  {#if person.avatar}<img src={ person.avatar } alt="">{/if}

   { person.first_name } { person.last_name } 
  
  </div>
<div class="px-1 py-1  w-full"> { person.ip_address } </div>
<div class="px-1 py-1  w-full"> { person.country } </div>
<div class="px-1 py-1  w-full"> { person.email } </div>
<div class="px-1 py-1  w-full"> { date } </div>
</div>

<style>
</style>
