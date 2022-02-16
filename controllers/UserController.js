const User = require("../models/User")
const bcrypt = require("bcrypt");


class UserController {
    static async paginaLogin(req, res){
        res.render("login");
    }

    static async paginaSignup(req, res){
        res.render("signup");
    }

    static async loginUser(req, res) {
        const { email, password } = req.body;

        if(email && password){ //email e senha são válidos?
            const user = await User.findOne({ email });

            if(user){ //usuário consta no banco de dados?
                const equals = await bcrypt.compare(password, user.password);

                if(!equals){ //as senhas batem?
                    res.render("login", { error: "Senha incorreta" })
                }else{
                    req.session.user = { _id: user._id };
                    res.redirect("/");
                }

            }else{
                res.render("login", { error: "Usuário não existe" });
            }

        }else{
            res.render("login", { error: "Campos inválidos" });
        }
    }
  
    static async signupUser(req, res) {
        const { name, email, birthdate, password } = req.body;

        if(name && email && birthdate && password){ //todos os campos foram preenchidos?
            const userExists = await User.findOne({ email });

            if(userExists){ //usuário já existe no banco de dados?
                res.render("signup", { error: "Usuário já existe" });

            }else{
                //aqui poderiam existir regras de validação
                const salt = await bcrypt.genSalt(12); //criptografia da senha que será salva no cookie
                const hash = await bcrypt.hash(password, salt);
                const user = User({ name, email, birthdate, password: hash });

                const saved = await user.save(); //aqui o usuário já está logado

                req.session.loggedUser = { _id: saved._id }; //loggerUser é a variável que vai armazenar o id do usuário como cookie

                res.redirect("/");
            }

        }else{
            res.render("signup", { error: "Informações obrigatórias" });
        }
    }
  
    static async logoutUser(req, res) {
        //como o que determina se o usuário está logado ou não, é a existência de uma sessão, basta encerrar a sessão
        req.session.destroy();
        res.redirect("/login");  
    }
}

module.exports = UserController;