// Add your code here

const submitData = (name, email) => {
  const postData = {
    name: name,
    email: email,
  };
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(postData),
  };
  return fetch("http://localhost:3000/users", configObj)
    .then((res) => res.json())
    .then((data) => {
      document.body.innerHTML = `${data.id}`;
    })
    .catch((error) => {
      document.body.innerHTML = `${error.message}`;
    });
};
