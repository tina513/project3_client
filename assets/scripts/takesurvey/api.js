'use strict';

const app = require('../app.js');

const getSurveys = () => {
  return $.ajax({
    url: app.host + '/surveys',
    method: "GET",
  });
};

const deleteSurvey = (id) => {
      return $.ajax({
        url: app.host + '/surveys/' + id,
        method: 'DELETE',
        headers: {
          Authorization: 'Token token=' + app.user.token,
          },
      });
};


module.exports = {
  getSurveys,
  deleteSurvey,
};
