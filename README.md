# Learners - Everlearn Holding Task
👉[Demo](https://learner-app-79c7d.firebaseapp.com/)👈 *Note: Suggested browser to run demo is on **Google Chrome**.*

## What is this project? 🤔
* A Single Page Application (mobile responsive) that allows users to view a list of learners, to edit or create a new learner the user must login.

## How to run the app: 👨‍💻
* Note: If you wish *to not create an account* use the following credentials: **Email: test@test.co.uk Password: test123**
* Note: Please run the demo in a Chrome Browser if you have any issues.
1. The homepage displays the list of learners and allows the user to view each learner's details.
2. The Average Score has **not** been rounded down, thus you may see large decimal numbers, I wasn't sure if I was to round it down so I decided to leave it as it is.
3. View button - displays a custom pop-up Bootstrap card that contains learner's details.
4. In order to edit or create learners, users **must** login.
5. Login - You can either create a new account via Sign up button, or Login with the credentials give above.
6. Create Learner - directs you to a page that contains a form to create new learners, go back to homepage to see new learners.
7. Edit button - displays a custom pop-up Bootstrap card that has a form to edit learner's details.
8. Logging out - once logged in you can log out, this will not allow you to edit or create learners.

## What Improvements I would make: 📝
1. add protected routes, so users cannot manually go to pages without authentication.
2. Although I used middleware for Authentication, I would use a middleware for firebase functions. I didn't implement a middleware for firebase functions since their were really only 3 main functions (get, edit, create) therefore I just done the functions inside the components. In conclusion, to make the firebase functions more reusable it would be best to make a middleware for them.
3. Fix minor warnings cause by useEffect hook regarding memory leak issues.
4. add comments (due to time, I didn't want to spend to much time on comments).
5. add testing/automated testing.

## Technologies used: 🖥
1. React
2. Firebase
3. Bootstrap
4. React-Bootstrap
