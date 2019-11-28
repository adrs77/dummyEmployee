function getData(url) {
	return fetch(url, {
		method: "GET",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		redirect: "follow",
		referrer: "no-referrer"
	})
		.then(response => {
			if (response.ok) {
				return response.json();
			}
			throw Error(response.status);
		}).catch(error => {
			alert("Something went wrong! Try again");
		  });
}

export default getData;
