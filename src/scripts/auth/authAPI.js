const loginUrl = 'https://webapi-grupp-7.azurewebsites.net/login';
const registerUrl = 'https://webapi-grupp-7.azurewebsites.net/register';
//const apiKey = "";

const handleRegister = async (e) => {
    e.preventDefault();

    const user = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        phoneNumber: e.target.phoneNumber.value,
        password: e.target.password.value,
    }

    const result = await fetch(registerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)

    })
    if (result.status === 201) {
        const data = await result.json();
        console.log(data);
    }

} 

const handleLogin = async (e) => {
    e.preventDefault();
  
    const user = {
        email: e.target.email.value,
        password: e.target.password.value,
        rememberMe: e.target.elements.rememberMe.checked
    }
  
    try {
      const result = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      })
  
      if (result.status === 200) {
        const accessToken = await result.text();
        localStorage.setItem('accessToken', accessToken);
        console.log(accessToken);
      } 
      else {
        throw new Error("Invalid credentials");
      }
    } 
    catch (error) {
      const errorMessageElement = document.getElementById("error-message");
      errorMessageElement.textContent = error.message;
    }
  }
  
  



export { handleRegister, handleLogin };