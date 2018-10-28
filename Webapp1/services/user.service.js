class UserService
{
    constructor()
    {
        this.Users = new Map();
        this.Users.set("Bharat@live.com",{email:"bharat@live.com",password:"pass@123",name:"Bharat",age:34, phose:"12345"});
        this.Users.set("Bharat1@live.com",{email:"bharat1@live.com",password:"pass@123",name:"Bharat",age:34, phose:"12345"});
        
    }

    authenticate (email,passowrd)
    {
        if (this.Users.has(email))
        {
            let user = this.Users.get(email);
            let pass = user.password;
            console.log(`Pasword : ${passowrd}  user: ${pass} `);
            
            if ( pass == passowrd)
            {
                console.log(`Pasword : ${passowrd}  user: ${pass} `);
                return user;
            } else
            {
                return null;
            }

        }

        return null;
    }

    getUsersList (email)
    {
        if (this.Users.has(email))
        {
            let user = this.Users.get(email);
            return user;
        }
    }

}


module.exports = new UserService();
