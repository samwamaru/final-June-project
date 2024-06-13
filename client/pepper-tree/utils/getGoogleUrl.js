function loginWithGoogle() {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URL,
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  const qs = new URLSearchParams(options);

  const googleOAuthURL = `${rootUrl}?${qs.toString()}`;

  window.location.href = googleOAuthURL;
}

export default loginWithGoogle;
