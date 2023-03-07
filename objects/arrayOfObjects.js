let texts = [
    {
      patientId: 1001,
      messageText: "This is a reminder",
      id: "1"
    },
    {
      patientId: 1002,
      messageText: "This is a reminder 2",
      id: "2"
    },
    {
      patientId: 1003,
      messageText: "This is a reminder 3",
      id: "3"
    }
  ];
  
  let messages = [];
  
  texts.forEach((obj, index, arr) => {
    console.log(obj.id);
    console.log(obj.messageText);
  });
  
  texts.push({ patientId: 1004, messageText: "This is a reminder 4", id: "4" });
  
  texts.splice(texts.length - 1, 0, {
    patientId: 1005,
    id: "5",
    messageText: "This is a reminder 5"
  });
  
  for (let index in texts) {
    console.log(index);
  }
  
  for (let obj of texts) {
    console.log(obj.id);
  }
  
  let text = texts.find((t) => t.id == "5");
  console.log(text.messageText);
  
  let filtered = texts.filter((t) => t.id > 3);
  console.log(filtered.length);
  let textsOnly = filtered.map(p =>  { return p.messageText });
  console.log(textsOnly);

  