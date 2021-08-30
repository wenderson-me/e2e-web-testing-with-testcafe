import { Selector } from "testcafe";

const iframe = Selector("iframe#mce_0_ifr");
const textArea = Selector("body#tinymce p");

fixture("Iframe Fixture")
  .page("http://the-internet.herokuapp.com/iframe")

test("iframe test", async t => {
  await t
    .switchToIframe(iframe)
    .click(textArea)
    .pressKey('ctrl+a delete')
    .typeText(textArea, 'Hello guys')
    .expect(textArea.innerText).contains('Hello')
    .switchToMainWindow();
})