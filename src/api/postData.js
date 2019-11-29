function postData(url, employee_data) {
  return fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(employee_data)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw Error(response.status);
    })
    .catch(error => {
      alert("Something went wrong! Try again");
    });
}

export default postData;
