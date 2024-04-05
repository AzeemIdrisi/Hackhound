import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../component/style.css"
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className="btn">Get started</button>;
};
export const LogoutButton = () => {
    const { logout } = useAuth0();
  
    return (
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="bg-semantics-2">
        Log Out
      </button>
    );
  };