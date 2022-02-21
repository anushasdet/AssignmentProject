Feature('MomenthouseFanSignUp');

Scenario('test something', ({ I }) => {
I.amOnPage('/');
I.waitForElement("//*[text()='Sign Up']");
I.see("Sign Up");
I.click("//*[text()='Accept Cookies']");
I.click("//*[text()='Sign Up']");
I.waitForElement("//*[text()='I am a Fan']");
I.click("//*[text()='I am a Fan']");
I.wait(2);
let a = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
I.fillField("#firstName","AdminFN_"+a+"");
I.fillField("#lastName","AdminLN_"+a+"");
I.fillField("#email","A."+a+"@a.com");
I.fillField("//*[@name='password']","Password@3");
I.click("//*[@name='fanConsent']/following-sibling::label/span");
I.click("(//*[text()='Sign Up'])[2]");
I.wait(5);
I.dontSee("Sign Up");
I.wait(5);
});
