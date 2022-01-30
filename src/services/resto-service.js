export default class RestoServis {
	getResource = async (url) => {
		const res = await fetch(`http://localhost:3000${url}`);
		if (!res.ok){
			throw new Error(`Could not fetch ${url}` +
			`, received ${res.status}`);
		}

		return await res.json();
	}
	getMenuItems = async () => {
		const res = await this.getResource('/menu/')
		return res;
	}
}