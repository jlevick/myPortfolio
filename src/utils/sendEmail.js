import axios from "axios";

export const sendEmail = async (data) => {
  try {
    const response = await axios({
      method: "post",
      headers: { "content-type": "application/json" },
      url:
        "https://tryanmg4wsmoauvfzmrud6wphi0wfraf.lambda-url.us-east-1.on.aws/",
      data: JSON.stringify(data),
    }); 

    if (response.ok) {
      // Request was successful
      const result = await response.json();
      console.log("Email sent successfully!", result);
      // Handle success response
    } else {
      // Request failed
      const error = await response.json();
      console.error("Error sending email:", error);
      // Handle error response
    }
  } catch (error) {
    console.error("Error sending email:", error);
    // Handle network or other errors
  }
};
