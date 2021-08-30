fixture('Navegate Example')
  .page("http://devexpress.github.io/testcafe/example/")

test('navegate test', async t => {
  await t
    .navigateTo("http://www.google.com");
})