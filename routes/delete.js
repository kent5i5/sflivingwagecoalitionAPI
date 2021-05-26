const deleteEvent = async (req, res, db) => {
    try {
        const { event_id } = req.params;
        const deleteData = await db('calendar').where({ id: event_id }).del()
        res.status(200).send({ data: 'Event Deleted' })
    } catch (error) {
        console.error(error.message);
    }
}

const deleteArt = async (req, res, db) => {
    try {
        const { art_id } = req.params;
        const deleteData = await db('art').where({ id: art_id }).del()
        res.status(200).send({ data: 'delete' })
    } catch (error) {
        console.error(error.message);
    }
}

const deleteAssistance = async (req, res, db) => {
    try {
        const { assis_id } = req.params;
        const deleteData = await db('assistance').where({ id: assis_id }).del()
        res.status(200).send({ data: 'delete' })
    } catch (error) {
        console.error(error.message);
    }
}

const deleteCd = async (req, res, db) => {
    try{
        const {cd_id} = req.params;
        const deleteCd = await db('cds').where({id: cd_id}).del();
        res.status(200).send({data: "delete"})
    }catch(error){
        console.error(error.message);
    }
}

const deleteDvd = async (req, res, db) => {
    try{
        const {dvd_id} = req.params;
        const deleteDvd = await db('dvds').where({id: dvd_id}).del();
        res.status(200).send({data: "delete"})
    }catch(error){
        console.error(error.message);
    }
}

const deletePhoto = async (req, res, db) => {
    try{
        const {photo_id} = req.params;
        const deletePhoto = await db('photos').where({id: photo_id}).del();
        res.status(200).send({data: "delete"})
    }catch(error){
        console.error(error.message);
    }
}

const deletePicture = async (req, res, db) => {
    try{
        const {picture_id} = req.params;
        const deletePhoto = await db('pictures').where({id: picture_id}).del();
        res.status(200).send({data: "delete"})
    }catch(error){
        console.error(error.message);
    }
}

module.exports = {
    deleteEvent,
    deleteArt,
    deleteAssistance,
    deleteCd,
    deleteDvd,
    deletePhoto,
    deletePicture
}