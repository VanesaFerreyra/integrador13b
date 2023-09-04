const { User } = require('../DB_connection')

module.exports = async (req, res) => {
    const { email, password } = req.query

    try {
        if(!email || !password) return res.status(400).json({error: 'Faltan datos'})
        const logUser = await User.findOne({
            where:{email}
        })

        if(!logUser) return res.status(404).json({error:'Usuario no encontrado'})

        return logUser.password === password ? res.status(202).json({access: true}) : res.status(403).json({error: "Contraseña incorrecta"})
    
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}