fixture.meta('version', '1')("First Fixture")
  .page("http://devexpress.github.io/testcafe/example/")

test.meta('env', 'development')
  ("First Test", async t => {
    await t
      .typeText("#developer-name", "TAU")
      .click("#windows")
      .click("#submit-button");
  })

test("Second Test", async t => {
  await t
    .typeText("#developer-name", "TAU")
    .click("#windows")
    .click("#submit-button");
})

