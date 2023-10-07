import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const studentName = data.get("studentName");
  const parentName = data.get("parentName");
  const phone = data.get("phone");
  const email = data.get("email");
  const campus = data.get("campus");
  const admissionYear = data.get("admissionYear");
  const grade = data.get("grade");
  const whatsappConsent = data.get("whatsappConsent");
  const formData = new FormData();
  formData.append("Student Name", studentName);
  formData.append("Parent Name", parentName);
  formData.append("Phone", phone);
  formData.append("Email", email);
  formData.append("Campus", campus);
  formData.append("Admission Year", admissionYear);
  formData.append("Grade", grade);
  formData.append("sheetName", 'Users');
  formData.append("Date_Time", new Date().toLocaleString());
  formData.append("Whatsapp Consent", whatsappConsent === 'on' ? 'Yes' : 'No');

  // append the rest of the data to the form data object
  for (const entry of data.entries()) {
    formData.append(entry[0], entry[1]);
  }

  console.log('formdata...', formData)

  const response = await fetch('https://script.google.com/macros/s/AKfycbzizy-yNaQMfG9kdRCFWWPFkj4V2wKc3NtgpPEvZQG_Ka7I4gsfjwMVwWo-CoKZpqpumA/exec', {
    method: 'POST',
    body: formData
  });


  // Validate the data - you'll probably want to do more than this
  // if (!name || !email || !message) {
  //   return new Response(
  //     JSON.stringify({
  //       message: "Missing required fields",
  //     }),
  //     { status: 400 }
  //   );
  // }
  // // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );
};