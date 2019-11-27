function postData(url, employee_data) {
    const employeeData = {name: "John", salary: "135813", age: "27", profile_image: "https://fedspendingtransparency.github.io/assets/img/user_personas/repurposer_mug.jpg"}
	return fetch(url, {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(employeeData)
	})
		.then(response => {
			if (response.ok) {
				return response.json();
			}
            throw Error(response.status);
            //handle
		})
}

export default postData;
