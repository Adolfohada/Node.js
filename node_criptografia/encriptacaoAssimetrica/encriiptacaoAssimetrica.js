import { generateKeyPairSync } from 'crypto'

const {privateKey, publicKey } = generateKeyPairSync('rsa',
    {
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    }
)
//console.log (publicKey)
//console.log (privateKey)

import { publicEncrypt, privateDecrypt } from 'crypto'

const dadosCriptgrafados = publicEncrypt(
    publicKey, Buffer.from("Mensagem super secreta")
)

console.log(dadosCriptgrafados.toString('hex'))

//--------------------Transmissão -----------------

const dadosDecifrados = privateDecrypt(
    privateKey, dadosCriptgrafados
)

console.log(`Dados decifrados: ${dadosDecifrados.toString('utf-8')}`)