const userCoordinatesDetailsSchema = require('../models/userCoordinatesDetailsSchema');

const storeGeoLocation=async(req,res)=>{
    try {
        const userId = req.user.userId;
        const { location } = req.body;

        // optional: extract values
        const [lng, lat] = location.coordinates;

        const updated = await userCoordinatesDetailsSchema.findOneAndUpdate(
        { userId },
        { location },
        { upsert: true, new: true }
        );

        res.json({
        success: true,
        userId,
        location,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error saving location" });
    }

}

module.exports = { storeGeoLocation };