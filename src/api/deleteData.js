function deleteData(url) {
	return fetch(url, {
		method: "DELETE",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		redirect: "follow",
        referrer: "no-referrer",
	})
		.then(response => {
			if (response.ok) {
				return response.json();
			}
            throw Error(response.status);
            //handle
		}).catch(error => {
			alert("Something went wrong! Try again");
		  });
}

export default deleteData;
