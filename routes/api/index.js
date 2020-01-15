require("./node_modules/dotenv");
const router = require("./node_modules/express").Router();
const userController = require("../../controllers/userController");
const wellController = require("../../controllers/wellController");
const prodController = require("../../controllers/prodController");
const reportController = require("../../controllers/reportController");
const recompletionController = require("../../controllers/recompletionController");
const passport = require('../../config/passport.js')
// const { google } = require("googleapis")
// const google = require("googleapis").google
// const db = require("../../models")
// const googleConfig = {
//     clientId: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     redirect: process.env.GOOGLE_REDIRECT_URI
// }

// const defaultScope = [
//     'https://www.googleapis.com/auth/userinfo.email'
// ]

// function createConnection() {
//     return new google.auth.OAuth2(
//         googleConfig.clientId,
//         googleConfig.clientSecret,
//         googleConfig.redirect
//     )
// }
// function getConnectionUrl() {
//     return createConnection().generateAuthUrl({
//         access_type: 'offline',
//         prompt: 'consent',
//         scope: defaultScope
//     })
// }

// /api/addUser
router.route("/addUser")
    .get(userController.findAll)
    .post(userController.create);

router.post('/login', passport.authenticate("local"), (req, res) => {
    res.json(req.user)
})

router.get('/logout', (req, res) => {
    // console.log("logging out");
    req.logout();
    // res.redirect("/")
    res.sendStatus(200);
});

router.get('/user/me', function (req, res) {
    if (req.user) {
        res.json({
            email: req.user.email,
            username: req.user.username
        })
    } else {
        res.sendStatus(401)
    }
})

// router.get('/google/url', (req, res) => {
//     res.json({ url: getConnectionUrl() })
// })

// function getGoogleAccountFromCode(code) {
//     console.log("CODE");
//     console.log(code);
//     return createConnection().getToken(code).then(data => {
//         console.log("DATA");
//         console.log(data.tokens)
//         return Promise.resolve(data.tokens)
//     })
// }

// router.post('/google/code', (req, res) => {
//     const { code } = req.body;
//     getGoogleAccountFromCode(code).then(tokens => {
//         console.log(tokens)
//         const userConnection = createConnection()
//         userConnection.setCredentials(tokens)
//         userConnection.getTokenInfo(tokens.access_token).then(data => {
//             console.log("TOKEN INFO");
//             console.log(data);
//             const { email, sub } = data;
//             db.User.findOne({ email }).then(dbUser => {
//                 if (!dbUser) {
//                     // create a new user!
//                     db.User.create({
//                         email,
//                         authType: "google",
//                         googleId: sub
//                     }).then(finalDbUser => {
//                         req.login(finalDbUser, () => {
//                             res.json(true)
//                         })
//                     }).catch(err => {
//                         console.log(err)
//                         res.sendStatus(500)
//                     })
//                 } else {
//                     // Check the type and googleId
//                     // if it matches, great! Login the user!
//                     // if not, something odd is up, reject it
//                     console.log(dbUser);
//                     if (dbUser.authType === "google" && dbUser.googleId === sub + "") {
//                         req.login(dbUser, () => {
//                             res.json(true)
//                         });
//                     } else {
//                         res.sendStatus(500)
//                     }
//                 }
//             })
//         }).catch(() => {
//             res.sendStatus(500)
//         })
//     })
// })

// router.get('/google/callback', function (req, res) {
//     const code = req.query.code
//     getGoogleAccountFromCode(code).then(tokens => {
//         const userConnection = createConnection()
//         userConnection.setCredentials(tokens)
//         userConnection.getTokenInfo(tokens.access_token).then(data => {
//             const { email, sub } = data;
//             console.log("DATA-WE-GET");
//             console.log(data)
//             db.User.findOne({ email }).then(dbUser => {
//                 console.log(dbUser);
//                 if (!dbUser) {
//                     console.log("NEW USER");
//                     // create a new user!
//                     console.log(email, sub)
//                     // CHeck my list of names that are okay
//                     // if they are on the list, proceed as normal
//                     // otherwise 

//                     db.User.create({
//                         email: email,
//                         authType: "google",
//                         googleId: sub
//                     }).then(finalDbUser => {
//                         req.login(finalDbUser, () => {
//                             res.redirect(process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000/");
//                         })
//                     }).catch(err => {
//                         console.log(err)
//                         res.sendStatus(500)
//                     })
//                 } else {
//                     if (dbUser.authType === "google" && dbUser.googleId === sub + "") {
//                         req.login(dbUser, () => {
//                             res.redirect(process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000/");
//                         })
//                     } else {
//                         res.sendStatus(500)
//                     }
//                 }
//             }).catch(err => console.log(err))
//         }).catch(err => {
//             console.log(err)
//             res.sendStatus(500)
//         })
//     })
// })

// /api/user/:id
router.route("/user/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

// GET - data - all wells
router.route("/well-data").get(wellController.findAll);

// POST - data - individual wells
router.route("/create-well-data").post(wellController.create);
router.route("/welltable/:id/prod/new").post(prodController.create);
router.route("/welltable/:id/report/new").post(reportController.create);
router.route("/welltable/:id/recomp/new").post(recompletionController.create);

// PUT - data - individual well/report
router.route("/well/:id/update").put(wellController.update);
router.route("/well/:id/report/update").put(reportController.update);

// select specific well
router.route("/well/:id")
    .get(wellController.findById)
    .put(wellController.update)
    .delete(wellController.remove);

// /api/well/:tankid
// change to tankController
router.route("/well/:tankid")
    .get(wellController.findById)
    .put(wellController.update)
    .delete(wellController.remove);

module.exports = router;