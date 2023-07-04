const bcrypt = require('bcrypt');

const criptografarSenha = async (senha) => {
    const saltRounds = 10; // Define o número de rounds de criptografia

    // Gera um salt (valor aleatório) para a criptografia
    const salt = await bcrypt.genSalt(saltRounds);

    // Criptografa a senha usando o salt
    const senhaCriptografada = await bcrypt.hash(senha, salt);

    return senhaCriptografada;
}

module.exports = criptografarSenha