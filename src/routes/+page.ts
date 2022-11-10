/* TODO
    -modify this function to get this json data -> https://api.npoint.io/7116b399239c3967fad5 
    -return it as data in place of the empty array */

export async function load() {
	const res = await fetch ("https://api.npoint.io/7116b399239c3967fad5")
		.then((r) => r.json());

		return {res};
	}
