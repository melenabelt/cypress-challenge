const formLocators = {
  firstNameInput: "#firstName",
  lastNameInput: "#lastName",
  emailInput: "input#userEmail",
  genderRadio: "#genterWrapper",
  mobileInput: "#userNumber",

  dateOfBirthDateContainer: "#dateOfBirthInput",
  dateofBirthDateMonthSel: ".react-datepicker__month-select",
  dateofBirthDateYearSel: ".react-datepicker__year-select",
  dateofBirthDateDayList: ".react-datepicker__week",

  hobbiesCheckbox: "#hobbiesWrapper",
  currentAddressInput: "#currentAddress",
  citySelector: "#stateCity-wrapper > :nth-child(3) :nth-child(3)",
  submitButton: "button[id='submit']",

  formSentModalTitle: "#example-modal-sizes-title-lg",
};

const uploadDownloadLocators = {
  downloadButton: "#downloadButton",
};

export { formLocators, uploadDownloadLocators };
