'use strict';

let surveyObject = {
  "survey": {
    "title": "NEW",
  }
};

const setTitle = (data) => {
  surveyObject.survey.title = data.surveys.title;
  $('#survey-title').text(surveyObject.survey.title);
  $('#survey-title-input').hide();
  surveyObject.survey.questions = [];
  return surveyObject;
};


const createPost = (data) => {
  surveyObject.survey.questions.push(data.surveys.questions);
  console.log(surveyObject);
  $('.answer-input').val("");
  return surveyObject;
};

const getPost = () => {
  console.log("getPost was called");
  console.log(surveyObject);
  return surveyObject;
};

module.exports = {
  setTitle,
  createPost,
  getPost,
};
