const verifyAccountMutation = `
mutation VerifyAccount($token: String!) {
    verifyAccount(token: $token){
      success
      errors
    }
  }  
`;

const resendActivationEmailMutation = `
mutation ResendActivationEmail($email: String!){
    resendActivationEmail(email: $email){
      success
      errors
    }
  }  
`;

function getGraphqlUrl() {
  const origin = window.location.origin;
  return origin.concat('/graphql');
}

function createVerifyAccountForm(success) {
  document.getElementById('loader').style.visibility = 'hidden';
  document.getElementById('content').style.visibility = 'visible';
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const link = document.getElementById('link');
  if (success) {
    title.innerText = 'Rejestracja zakończona';
    description.innerText =
      'Brawo! Twoja rejestracja została pomyślnie ukończona. Możesz teraz zalogować się do aplikacji.';
    link.innerText = 'Przejdź do ekranu logowania';
    link.setAttribute('href', 'exp://192.168.1.108:19000/--/login');
  } else {
    const origin = window.location.origin;
    console.log(origin);
    title.innerText = 'Rejestracja nieudana';
    description.innerText = 'Coś poszło nie tak. Spróbuj ponownie klikając w przycisk poniżej.';
    link.innerText = 'Wyślij link aktywacyjny';
    link.onclick = resendActivationEmail;
  }
}

function createResendEmailForm(success) {
  document.getElementById('loader').style.visibility = 'hidden';
  document.getElementById('content').style.visibility = 'visible';
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const link = document.getElementById('link');
  if (success) {
    title.innerText = 'Wysłano email z linkiem aktywacyjnym';
    description.innerText =
      'Na podany adres e-mail został wysłany link aktywacyjny. Jeśli nie otrzymałeś maila kliknij w przycisk poniżej';
    link.innerText = 'Wyślij link aktywacyjny';
    link.onclick = resendActivationEmail;
  } else {
    title.innerText = 'Nie udało się wysłać e-maila z linkiem aktywacyjnym';
    description.innerText = 'Coś poszło nie tak. Spróbuj ponownie klikając w przycisk poniżej.';
    link.innerText = 'Wyślij link aktywacyjny';
    link.onclick = resendActivationEmail;
  }
}

function verifyAccount() {
  console.log('verify account');
  // const { translate } = useTranslation();

  const params = new URLSearchParams(window.location.search);
  const graphqlUrl = getGraphqlUrl();

  const token = params.get('token');
  document.getElementById('loader').style.visibility = 'visible';
  document.getElementById('content').style.visibility = 'hidden';

  fetch(graphqlUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: verifyAccountMutation,
      variables: {
        token,
      },
    }),
  })
    .then((response) => response.json())
    .then((jsonResponse) => {
      console.log('data', jsonResponse);
      const success = jsonResponse.data.verifyAccount.success;
      createVerifyAccountForm(success);
    })
    .catch((err) => {
      console.log('err', err);
      createVerifyAccountForm(false);
    });
}
function resendActivationEmail() {
  const params = new URLSearchParams(window.location.search);
  const graphqlUrl = getGraphqlUrl();

  const email = params.get('email');

  document.getElementById('loader').style.visibility = 'visible';
  document.getElementById('content').style.visibility = 'hidden';

  fetch(graphqlUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: resendActivationEmailMutation,
      variables: {
        email,
      },
    }),
  })
    .then((response) => response.json())
    .then((jsonResponse) => {
      const success = jsonResponse.data.verifyAccount.success;
      createResendEmailForm(success);
    })
    .catch((err) => {
      createResendEmailForm(false);
    });
}

window.onload = verifyAccount;
