document.addEventListener("DOMContentLoaded", function() {
    // Ensure Amplify is loaded
    if (typeof Amplify === 'undefined') {
        console.error('Amplify is not defined. Please check that the AWS Amplify libraries are correctly included.');
        return;
    }

    // Configure Amplify
    Amplify.configure(window.awsmobile);

    document.getElementById('signUpForm').addEventListener('submit', async function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;

        try {
            const { user } = await Amplify.Auth.signUp({
                username: email,
                password,
                attributes: {
                    email,
                    given_name: firstName,
                    family_name: lastName
                }
            });
            console.log(user);
            alert('Sign up successful! Please check your email for verification.');
        } catch (error) {
            console.error('Error signing up:', error);
            alert('Error signing up: ' + error.message);
        }
    });
});
