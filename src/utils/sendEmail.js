import axios from "axios";

export const sendEmail = async (data) => {
  try {
    const response = await axios.post(
      "https://7bisjwnw7nol2c3dex4arnpei40ixmmp.lambda-url.us-east-1.on.aws/",
      data,
      {
        headers: {
          "Content-Type": "*/*",
        },
      }
    );

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
