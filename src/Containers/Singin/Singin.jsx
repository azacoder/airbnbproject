// export const Singin = () =>{
//     return(
//         <div>Singin page</div>
//     )
// }

import React, { Component } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import config from "./firebase";
import { initializeApp } from "firebase/app";
initializeApp(config);

class Singin extends Component {
  postData() {
    try {
      let result = fetch(
        "http://ec2-3-68-80-211.eu-central-1.compute.amazonaws.com:8000/api/auth/login",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            idToken:
              "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1ODI4YzU5Mjg0YTY5YjU0YjI3NDgzZTQ4N2MzYmQ0NmNkMmEyYjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODA3OTY3MzQ1Nzg5LXVwaWdtMGdkbWI0dWtyOWoyZXFwYmlhNGZiaWdnYWRpLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODA3OTY3MzQ1Nzg5LXVwaWdtMGdkbWI0dWtyOWoyZXFwYmlhNGZiaWdnYWRpLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE2NzAyMTEyODY3NjUwODA4NDE2IiwiZW1haWwiOiJha2JhbGFldmJpbGFsOEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Il9GNUZHby1JbWc1c2dteTc4bTdHQWciLCJpYXQiOjE2MzU2NjQwOTQsImV4cCI6MTYzNTY2NzY5NH0.lKizQCAw3glHq9fjQ1-KWkbp1foRhi_blSHcWrU11Eon8tw_9khWN48-7H12vL1GC3hT9Ts1g1XnEpet5MrxeQNGx0laTH_vOI2MM81gTUt8lc1P0aPueo1A70Aq4I9vIogszrFx2BUpBtUPdy1dwAvhlON33TdbIRQtWWRl-nkcFjzBCnaA_ERbH_WE-RPpXXT1qTbAUPAGeO9xDAg8y33zttBcDqQwZCbVQCvpXFK6kssM3FCLzKBz4emL7eEdCbt31uOM4tBWLxCXEGRBByHVucXtyjVLzyuimptSmRP_Xxdh0qCWzzB7YyK2H5jYDGZMdNyQC5GgnSMVd6PRGg",
          }),
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const func = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          console.log(credential.idToken);
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    };
    return (
      <div className="App">
        <button onClick={() => this.postData()}>Post</button>
        <button onClick={func} >Sign in</button>
      </div>
    );
  }
}

export default Singin;