import { Selector } from 'testcafe';

const developerName = Selector("#developer-name");
const osOption = Selector("#windows");
const submitButton = Selector("#submit-button");

fixture("First Fixture")
  .page("http://devexpress.github.io/testcafe/example/")

test("First Selector", async done => {
  await done
    .typeText(developerName, "TAU")
    .click(osOption)
    .click(submitButton);
})

