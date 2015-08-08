AccountsTemplates.addField({
  _id: "name",
  type: "text",
  displayName: "Name",
  required: true,
})

AccountsTemplates.removeField('email');
AccountsTemplates.addField({
  _id: 'email',
  type: 'email',
  required: true,
  displayName: "email",
  re: /.+@(.+){2,}\.(.+){2,}/,
  errStr: 'error.accounts.Invalid email',
  trim: true,
  lowercase: true,
})

AccountsTemplates.removeField('password');
AccountsTemplates.addField({
  _id: 'password',
  type: 'password',
  displayName: {
    signIn: "Password"
  },
  placeholder: {
    signUp: "at least six characters"
  },
  required: true,
  minLength: 6,
  errStr: 'At least six characters',
})

AccountsTemplates.configure({
  confirmPassword: true,
  // enablePasswordChange: true,
  overrideLoginErrors: true,
  sendVerificationEmail: false,

  forbidClientAccountCreation: true,
  showAddRemoveServices: true,
  showForgotPasswordLink: true,
  showLabels: true,
  showPlaceholders: true,

  // privacyUrl: '/privacyPolicy',
  // termsUrl: '/termsOfUse',

  continuousValidation: true,
  negativeFeedback: true,
  positiveFeedback: true,
  negativeValidation: true,
  positiveValidation: true,
  homeRoutePath: '/',
})

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin',
  // redirect: '/dashboard'
})

// AccountsTemplates.configureRoute('changePwd' /*, {layoutTemplate: 'simpleLayout'}*/)
AccountsTemplates.configureRoute('resetPwd' /*, {layoutTemplate: 'simpleLayout'}*/)
AccountsTemplates.configureRoute('forgotPwd' /*, {layoutTemplate: 'simpleLayout'}*/)
AccountsTemplates.configureRoute('enrollAccount' /*, {layoutTemplate: 'simpleLayout'}*/)
AccountsTemplates.configureRoute('verifyEmail' /*, {layoutTemplate: 'simpleLayout'}*/)
