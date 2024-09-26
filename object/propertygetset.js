function User(email, password){
       this._emailemail =email
       this._password = password

       Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
       })

    }

    const Ankit = new User("ankit@gmail.com","avb")
    console.log(Ankit.email);