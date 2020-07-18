const bcrypt = require("bcrypt")


async function main() {

  try {


    const saltrounds = 10
    const originalPassword = "Password123"
    const password = "Password123"

    //We can also have bycrypt generate a salt and then pass it to .hash instead of saltrounds

    //const salt = await bcrypt.genSalt(saltrounds)

    //Hash the password

    const hashPassword = await bcrypt.hash(originalPassword,saltrounds)

    //Output the hash

    console.log(hashPassword)

    //Now let's decrypt our password

    const isTrue = await bcrypt.compare(password,hashPassword)

    console.log(isTrue)

  } catch(error) {
      console.log(error)
  }
    
}

main()