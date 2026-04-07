// import twilio from "twilio";

// const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// export const sendMessage = async (phone, message) => {
//   try {
//     await client.messages.create({
//       from: process.env.TWILIO_WHATSAPP_NUMBER, // <-- CORRECT

//       to: `whatsapp:+91${phone}`,
//       body: message,
//     });

//     console.log("WhatsApp message sent →", phone);
//   } catch (err) {
//     console.log("WhatsApp Error:", err.message);
//   }
// };








import twilio from "twilio";

let client = null;

// ✅ Initialize ONLY if valid credentials
if (process.env.TWILIO_SID?.startsWith("AC")) {
  client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
} else {
  console.log("⚠️ Twilio disabled (invalid credentials)");
}

export const sendMessage = async (phone, message) => {
  try {
    // ✅ Skip if Twilio not configured
    if (!client) {
      console.log("📴 WhatsApp skipped (Twilio not configured)");
      return;
    }

    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:+91${phone}`,
      body: message,
    });

    console.log("✅ WhatsApp message sent →", phone);
  } catch (err) {
    console.log("❌ WhatsApp Error:", err.message);
  }
};