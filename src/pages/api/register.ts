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
  formData.append("Date_Time", new Date().toLocaleString('en-GB', { timeZone: 'IST' }));
  formData.append("Whatsapp Consent", whatsappConsent === 'on' ? 'Yes' : 'No');

  // append the rest of the data to the form data object
  for (const entry of data.entries()) {
    formData.append(entry[0], entry[1]);
  }
  
  const response = await fetch('https://script.google.com/macros/s/AKfycbzizy-yNaQMfG9kdRCFWWPFkj4V2wKc3NtgpPEvZQG_Ka7I4gsfjwMVwWo-CoKZpqpumA/exec', {
    method: 'POST',
    body: formData
  });
  const host = "api-in21.leadsquared.com";
  const AccessKey = "u$r0bbb532f2d36db95708c26922336eaf0";
  const SecretKey = "5fcb8920684718fbf42802f7c1df394fd231510f";

  const res = fetch(`https://${host}/v2/LeadManagement.svc/Lead.Capture?accessKey=${AccessKey}&secretKey=${SecretKey}`, {
        // const response = await fetch(`https://httpbin.org/post`, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify([
            {
            "Attribute": "mx_Academic_Year",
            "Value": admissionYear
            },
            {
              "Attribute": "FirstName",
              "Value": studentName
              },
            {
            "Attribute": "mx_Mother_Detailsmx_CustomObject_1",
            "Value": parentName
            },
            {
            "Attribute": "Phone",
            "Value": phone
            },
            {
            "Attribute": "EmailAddress",
            "Value": email
            },
            {
            "Attribute": "mx_Branch",
            "Value": campus
            },
            {
            "Attribute": "mx_Grade",
            "Value": grade
            },
            {
            "Attribute": "Source",
            "Value": "Google"
            },
            {
            "Attribute": "mx_I_agree_messages",
            "Value": whatsappConsent
            },
            {
            "Attribute": "SourceMedium",
            "Value": data.get("utm_medium")
            },
            {
            "Attribute": "SourceContent",
            "Value": data.get("utm_content")
            }
        ]),
      });

  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );
};