Det är en applikation där användare kan logga in.
Användade node-paketen express, mongoose, bcrypt och jsonwebtoken

Man måste skriva "npm i" , och snedan "npm start" i terminalen.
Först login (in postman, post option and localhost:5000/api/user/auth)
när du har token du kan använda appen 

Resurser/routes
/users GET Visa alla användare
/users/:id GET Visa info om en användare
/users POST Registrera en användare
/users/:id DELETE Ta bort en användare
/users/:id PUT Uppdatera en användare

User-modell ha egenskapen admin som kan ha värdet true eller false.
Bara den användare som är admin ska kunna ändra eller ta bort andra användare.
När en användare registreras ska lösenordet först krypteras med bcrypt innan det sparas i databasen.
När någon försöker logga in ska en autentisering genomföras (undersök om det är rätt kombination av 
användarnamn och lösenord). Om användaren blir autentiserad ska en token skickas tillbaka. 
I denna ska det finnas information om användaren är admin eller inte.
