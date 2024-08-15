const mongoose = require("mongoose");


const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
});

const aboutSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },

});

const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    year:{
        type: String,
        required: true,
    },
    period:{
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },

});
const projectSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },

});

const certificationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    issuedate:{
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

});