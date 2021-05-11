const addEvent = async (req, res, db) => {
    try{
        const {
            start_date,
            end_date,
            description,
            duration,
            notes,
            location
        } = req.body;

        const data = await db.insert(
            {
                start_date: start_date,
                end_date: end_date,
                description: description,
                duration: duration,
                notes: notes,
                location: location
            }
        ).into('calendar')
        res.status(200).send({post: 'INSERTED'})
    } catch(error){
        console.error(error.message);
    }
}


const assistance = async (req, res, db) => {
    try{
        const {full_name, email, phone, notes} = req.body;
        const data = await db.insert(
            {
                full_name: full_name,
                email: email,
                phone: phone,
                notes: notes
            }).into('assistance')
            res.status(200).send({post:'INSERTED'})    
    }catch(error){
        console.error(error.message);
    }
}

const newPost = async (req, res, db) => {
    try {
        const { aboutinfo } = req.body;
        const data = await db.insert({
            aboutinfo: aboutinfo
        }).into('about')
        res.status(200).send({ post: 'INSERTED' })
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    addEvent,
    assistance,
    newPost
}