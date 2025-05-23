function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const timestamp = new Date();
  const name = e.parameter.name;
  const email = e.parameter.email;
  const phone = e.parameter.phone;
  const message = e.parameter.message;

  sheet.appendRow([timestamp, name, email, phone, message]);

  return ContentService.createTextOutput("Success").setMimeType(
    ContentService.MimeType.TEXT
  );
}
