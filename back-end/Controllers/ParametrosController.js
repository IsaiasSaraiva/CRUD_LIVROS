const {parametros} = require('../models')

class ParametrosController{
    static async store(req,res){
        try {
            const novoParametro = await parametros.create({
                espessura: req.body.espessura,
                potencia: req.body.potencia,
                tempo: req.body.tempo,
                pressao: req.body.pressao
            })
            res.json(novoParametro)
        } catch (e) {
            console.log(e)
            res.status(500).json({
                error: 'Erro ao cadastrar novo parametro'
            })
        }
    }
}

module.exports = ParametrosController;