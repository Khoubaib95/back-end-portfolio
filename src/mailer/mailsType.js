const content = {
  en: {
    1: "Dear",
    2: "I have just received your message, i will check it at the earliest chance.",
    3: "Thanks again",
  },
  fr: {
    1: "Cher",
    2: "Je viens de recevoir votre message, je le vérifierai dans les plus brefs délais.",
    3: "Merci encore",
  },
  de: {
    1: "Lieber",
    2: "Ich habe gerade deine Nachricht erhalten, ich werde sie schnellstmöglich prüfen.",
    3: "Danke noch einmal ",
  },
};

module.exports = {
  conntactNotifcation: (fullName, email, text) => `
  <div style="padding: 50px 0;width: 100%;background-color: #ededed;">
  <div  style="width: 65%;background-color: white;margin: 0 auto;padding: 15px;">
    <h3 style="color: #26d0ce;
    margin: 0;text-align:center"> Hello there, you have new message !</h3>
    <hr style="border: none;background-color: #ededed;height: 2px;">
    <div style="display:flex;">  
      <h4 style="margin:5px 60px 5px 0">Full Name : ${fullName} </h4>
      <h4 style="margin:5px 0">Email : ${email}</h4>
    </div>
    <h4  style="margin:0">Message</h4>
    <p style="margin:5px 0;text-align: justify;" >
      ${text}
    </p>
  </div>
  </div>
  `,
  conntactUserNotifcation: (language, fullName) => {
    console.log(language);
    if (language !== "en" && language !== "fr" && language !== "de") {
      language = "en";
      console.log(language);
    }
    return `
  <div style="padding: 50px 0;width: 100%;background-color: #ededed;">
  <div  style="width: 45%;border-left:6px solid blueviolet ;text-align:center;background-color: white;margin: 0 auto;padding: 15px;">
  <h2 style="color: #26d0ce;
  margin: 0;"> ${content[language][1]} ${fullName} !</h2>
<hr style="
border: none;
background-color: #ededed;
height: 2px;">
 
 <h3 style="margin:5px 0">${content[language][2]}</h3>
  <p style="margin:0;text-align: center;" >
  ${content[language][3]} </p></div>
  </div>`;
  },
};
