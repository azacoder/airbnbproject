import React, { Component } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import config from "../../firebase/firebase";
import { initializeApp } from "firebase/app";

initializeApp(config);

// class Signin extends Component {

//   postData() {
//     try {
//       let result = fetch(
//         "http://ec2-3-68-80-211.eu-central-1.compute.amazonaws.com:8000/api/auth/login",
//         {
//           method: "POST",
//           headers: {
//             "content-type": "application/json",
//           },
//           body: JSON.stringify({
//             idToken:
//               "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE1MjU1NWEyMjM3MWYxMGY0ZTIyZjFhY2U3NjJmYzUwZmYzYmVlMGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQmlsYWwgQWtiYWxhZXYiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKd21UcVlxeER2ZlRqWGdQTndJVVhvS3lJcS1uMjRoaHBrN2xLN0xMUT1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9hdXRoLXByb2plY3QtY2U4YmUiLCJhdWQiOiJhdXRoLXByb2plY3QtY2U4YmUiLCJhdXRoX3RpbWUiOjE2MzU3NDc4NjcsInVzZXJfaWQiOiJmVTViSDlHRktIYUh5aDNJZWF2Rm5SN2U1eUMyIiwic3ViIjoiZlU1Ykg5R0ZLSGFIeWgzSWVhdkZuUjdlNXlDMiIsImlhdCI6MTYzNTc0Nzg2NywiZXhwIjoxNjM1NzUxNDY3LCJlbWFpbCI6ImFrYmFsYWV2YmlsYWw4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTE2NzAyMTEyODY3NjUwODA4NDE2Il0sImVtYWlsIjpbImFrYmFsYWV2YmlsYWw4QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.WkcnZ7IEfPHVGtQhEBBETuY-QfQngEv8gs44XvORj9IfhtOuzYdU9tqQVf-g-R_eQ7bKZapaaGsN_J5Qm2IN0-_LLVQWGMBtMFKr8N6NDXqdeDJk3Nb1DtCmg-T2bTRyhOQE0XZa0Duwu97Zn-FRZeE3X8HPdTApMHqs_KCMDrRFH2yVnz38sP39yV_hQtoiZRonm_9MYtQZB4bs8QJOSgPHWX_lDDiyU4xSFfN5HarxrQgLT_emk0ejnE7BteWuIkuKGJmx_sM71G5eTeFjf2djgVQg6FehjBA1E4DgnnJHSIKmWRgt_uzCGudGoATlP4_Xi1aKNzRcq9JhMrQ2sw",
//           }),
//         }
//       );
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   render() {
  const Signin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const func = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          localStorage.setItem('idToken', credential.idToken)
          console.log(credential.idToken);
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
        // this.postData()
    };

    // const funcTwo = () => {
    //   func(); 
    //   this.postData();
    // }
    return (
      <div>
        {/* <button onClick={() => this.postData()}>Post</button> */}
        <button onClick={func}>Sign in</button>
      </div>
    )

}


  }

export default Signin;

