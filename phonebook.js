const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const fs = require("fs");
const { name, email, mobile, operation } = argv;

const filepath = "./phonebook.json";

switch (operation) {
  case "add": {
    fs.readFile(filepath, "utf-8", (err, data) => {
      if (err) {
        throw "File read error occured";
      }
      const content = JSON.parse(data);
      content.push({ name, email, mobile });
      fs.writeFile(filepath, JSON.stringify(content), () => {
        console.log("New user added to phonebook.");
      });
    });

    break;
  }

  case "list": {
    fs.readFile(filepath, "utf-8", (err, data) => {
      if (err) {
        throw "File read error occured";
      }
      const content = JSON.parse(data);

      content.forEach((person) => {
        console.log(`---------------------------------------`);
        console.log(`Name: ${person.name}`);
        console.log(`Email: ${person.email}`);
        console.log(`Mobile: ${person.mobile}`);
        console.log(`---------------------------------------`);
      });
    });

    break;
  }
  

  default:
    break;
}