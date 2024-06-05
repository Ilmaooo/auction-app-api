const AllureReporter = require("jasmine-allure-reporter");

jasmine.getEnv().addReporter(
  new AllureReporter({
    resultsDir: "allure-results",
  }),
);

afterEach(function (done) {
  if (this.currentTest && this.currentTest.failedExpectations.length > 0) {
    browser.takeScreenshot().then(function (png) {
      allure.createAttachment(
        "Screenshot",
        function () {
          return new Buffer.from(png, "base64");
        },
        "image/png",
      )();
      done();
    });
  } else {
    done();
  }
});
