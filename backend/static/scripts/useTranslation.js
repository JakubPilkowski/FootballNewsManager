const translations = {
  pl: {
    register_complete: 'Rejestracja zakończona',
    register_complete_message:
      'Brawo! Twoja rejestracja została pomyślnie ukończona. Możesz teraz zalogować się do aplikacji.',
    move_to_login_view: 'Przejdź do ekranu logowania',
    register_failure: 'Rejestracja nieudana',
    register_failure_message: 'Coś poszło nie tak. Spróbuj ponownie klikając w przycisk poniżej.',
    send_activation_link: 'Wyślij link aktywacyjny',
    resend_activation_link_success: 'Wysłano email z linkiem aktywacyjnym',
    resend_activation_link_success_message:
      'Na podany adres e-mail został wysłany link aktywacyjny. Jeśli nie otrzymałeś maila kliknij w przycisk poniżej',
    resend_activation_link_failure: 'Nie udało się wysłać e-maila z linkiem aktywacyjnym',
    resend_activation_link_failure_message:
      'Coś poszło nie tak. Spróbuj ponownie klikając w przycisk poniżej.',
  },
  en: {
    register_complete: 'Registration complete',
    register_complete_message:
      'Way to go! Your registration has been successfully completed. You can login to the application now.',
    move_to_login_view: 'Go to the login screen',
    register_failure: 'Registration failed',
    register_failure_message:
      'Something went wrong. Please try again by clicking the button below.',
    send_activation_link: 'Send the activation link',
    resend_activation_link_success: 'An email with an activation link has been sent',
    resend_activation_link_success_message:
      'An activation link has been sent to the e-mail address provided. If you have not received the e-mail, click the button below',
    resend_activation_link_failure: 'The email with the activation link could not be sent',
    resend_activation_link_failure_message:
      'Something went wrong. Please try again by clicking the button below.',
  },
  it: {
    register_complete: 'Registrazione completa',
    register_complete_message:
      "Ben fatto! La tua registrazione è stata completata con successo. È possibile accedere all'applicazione ora.",
    move_to_login_view: 'Vai alla schermata di accesso',
    register_failure: 'Registrazione fallita',
    register_failure_message:
      'Qualcosa è andato storto. Riprova facendo clic sul pulsante in basso.',
    send_activation_link: 'Invia il link di attivazione',
    resend_activation_link_success: "È stata inviata un'e-mail con un link di attivazione",
    resend_activation_link_success_message:
      "È stato inviato un link di attivazione all'indirizzo e-mail fornito. Se non hai ricevuto l'e-mail, clicca sul pulsante qui sotto",
    resend_activation_link_failure:
      "Non è stato possibile inviare l'e-mail con il link di attivazione",
    resend_activation_link_failure_message:
      'Qualcosa è andato storto. Riprova facendo clic sul pulsante in basso.',
  },
  es: {
    register_complete: 'Registro completo',
    register_complete_message:
      '¡Camino a seguir! Su registro se ha completado con éxito. Puede iniciar sesión en la aplicación ahora.',
    move_to_login_view: 'Ir a la pantalla de inicio de sesión',
    register_failure: 'Registro fallido',
    register_failure_message:
      'Algo salió mal. Vuelva a intentarlo haciendo clic en el botón de abajo.',
    send_activation_link: 'Enviar el enlace de activación',
    resend_activation_link_success:
      'Se ha enviado un correo electrónico con un enlace de activación.',
    resend_activation_link_success_message:
      'Se ha enviado un enlace de activación a la dirección de correo electrónico proporcionada. Si no ha recibido el correo electrónico, haga clic en el botón de abajo',
    resend_activation_link_failure:
      'No se pudo enviar el correo electrónico con el enlace de activación',
    resend_activation_link_failure_message:
      'Algo salió mal. Vuelva a intentarlo haciendo clic en el botón de abajo.',
  },
  fr: {
    register_complete: 'Inscription complète',
    register_complete_message:
      "Marche à suivre! Votre inscription a été complétée avec succès. Vous pouvez vous connecter à l'application maintenant.",
    move_to_login_view: "Aller à l'écran de connexion",
    register_failure: "Échec de l'enregistrement",
    register_failure_message:
      "Quelque chose s'est mal passé. Veuillez réessayer en cliquant sur le bouton ci-dessous.",
    send_activation_link: "Envoyer le lien d'activation",
    resend_activation_link_success: "Un e-mail avec un lien d'activation a été envoyé",
    resend_activation_link_success_message:
      "Un lien d'activation a été envoyé à l'adresse e-mail fournie. Si vous n'avez pas reçu l'e-mail, cliquez sur le bouton ci-dessous",
    resend_activation_link_failure: "L'e-mail avec le lien d'activation n'a pas pu être envoyé",
    resend_activation_link_failure_message:
      "Quelque chose s'est mal passé. Veuillez réessayer en cliquant sur le bouton ci-dessous.",
  },
  de: {
    register_complete: 'Registrierung abgeschlossen',
    register_complete_message:
      'Weiter so! Ihre Registrierung wurde erfolgreich abgeschlossen. Sie können sich jetzt bei der Anwendung anmelden.',
    move_to_login_view: 'Gehen Sie zum Anmeldebildschirm',
    register_failure: 'Registrierung fehlgeschlagen',
    register_failure_message:
      'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut, indem Sie auf die Schaltfläche unten klicken.',
    send_activation_link: 'Senden Sie den Aktivierungslink',
    resend_activation_link_success: 'Eine E-Mail mit einem Aktivierungslink wurde gesendet',
    resend_activation_link_success_message:
      'Ein Aktivierungslink wurde an die angegebene E-Mail-Adresse gesendet. Wenn Sie die E-Mail nicht erhalten haben, klicken Sie auf die Schaltfläche unten',
    resend_activation_link_failure:
      'Die E-Mail mit dem Aktivierungslink konnte nicht versendet werden',
    resend_activation_link_failure_message:
      'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut, indem Sie auf die Schaltfläche unten klicken.',
  },
};

const availableLanguages = Object.keys(translations);

function convertLocaleToLanguage(locale) {
  // there are exceptions which length is 3 for example 'sma'
  if (locale.length === 2 || locale.length === 3) return locale;
  const language = locale.split(/_|-/)[0];
  return language;
}

function getLocale() {
  const found = [];
  if (typeof navigator !== 'undefined') {
    if (navigator.languages) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < navigator.languages.length; i++) {
        found.push(navigator.languages[i]);
      }
    }
    if (navigator?.userLanguage) {
      found.push(navigator?.userLanguage);
    }
    if (navigator.language) {
      found.push(navigator.language);
    }
  }

  const locales = found.reduce((last, curr) => {
    const language = convertLocaleToLanguage(curr);
    if (availableLanguages.includes(language)) {
      return [...last, language];
    }
    return last;
  }, []);

  return locales.length > 0 ? locales[0] : 'en';
}

export function useTranslation() {
  const locale = getLocale();
  console.log('locale', locale);
  return {
    translate: (key) => {
      return translations[locale][key];
    },
  };
}

// window.onload = useTranslation;
