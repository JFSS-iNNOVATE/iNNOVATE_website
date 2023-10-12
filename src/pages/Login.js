import { useEffect } from 'react';

async function Login(){
    function handleCallback(response) {
        console.log("Encoded JWT ID token: " + response.credential);
      }
    
      useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
          cliend_id: "680968852601-6h8k53sd636mg9hfu2eqmvs8vjtg8skj.apps.googleusercontent.com",
          callback: handleCallback
        });
    
        google.accounts.id.renderButton(
          document.getElementById("LoginDiv"), 
          {theme: "outline", size: "large"}
        );
      }, []);

    return (
        <div className="LoginPage">
            <div id="LoginDiv"></div>
        </div>
    )
    
}

export default Login;