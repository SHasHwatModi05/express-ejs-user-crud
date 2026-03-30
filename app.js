const express = require('express');
const app = express();
const path = require('path')
const userModel = require('./models/user');

require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
        res.render("index");
})

app.get('/read', async (req, res) => {
        let users = await userModel.find()
        res.render("read", { users: users });
})

app.get('/edit/:userid', async (req, res) => {
        let user = await userModel.findById({_id: req.params.userid});
        res.render("edit", {user});
})

app.post('/update/:userid', async (req, res) => {
        let{image, name, email}= req.body;

        let user = await userModel.findOneAndUpdate({_id: req.params.userid}, {image, name, email}, {returnDocument: "after"});
        res.redirect("/read");
})

app.get('/delete/:id', async (req, res) => {
        let users = await userModel.findOneAndDelete({ _id: req.params.id });
        res.redirect("/read");
})

app.post('/create', async (req, res) => {
        let { name, email, image } = req.body;

        let createdUser = await userModel.create({
                name,
                email,
                image
        });

        res.redirect("/read");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});