fixture("First Fixture")
  .page("http://devexpress.github.io/testcafe/example/")

test("First Test", async done => {
  await done
    .typeText("#developer-name", "TAU")
    .click("#windows")
    .click("#submit-button");
})

