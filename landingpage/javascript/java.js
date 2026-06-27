const user = {
  id: 1,
  profile: {
    firstName: "John",
    lastName: "Doe"
  }
};


const {profile:{firstName,lastName}} = user;

// Extract firstName and lastName.

// const {profile} = user;

// const {firstName,lastName} = profile;

console.log(firstName,lastName)

