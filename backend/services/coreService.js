import mongoose from "mongoose";
import coreModel from "../models/coreModel.js";

const updateCoreStock = async (coreId, coreCount) => {
    if (!mongoose.Types.ObjectId.isValid(coreId)) {
        return Promise.resolve({
            success: false,
            message: "Invalid Core Id Specified"
        });
    };
    
    const coreItem = await coreModel.findById(coreId);

    try{
        await coreItem.setCoreCount(coreCount);
        return Promise.resolve({
            success: true,
            message: "Updated successfully"
        })
    }
    catch (error){
        console.log(`Error ${error}`);
        return Promise.resolve({
            success: false,
            message: "An error occurred"
        })
    };
};

export default updateCoreStock;