import express from "express";
import { createNetworks, getAllNetworks, getNetworkById, getNetworksInSingle, updateNetwork } from "../controllers/networkControllers.js";
import { networkUpload } from "../configs/networkUpload.js";

const router = express.Router();

router.post("/createNetwork",
    networkUpload.fields([
        { name: "network_logo", maxCount: 1 },
        { name: "network_contract_files", maxCount: 10 },
    ]),
    createNetworks);

router.put("/updateNetwork/:id",
    networkUpload.fields([
        { name: "network_logo", maxCount: 1 },
        { name: "network_contract_files", maxCount: 10 },
    ]),
    updateNetwork);

// router.get("/getAllNetworks", getAllNetworks)

// router.get("/getNetworkById/:id", getNetworkById);
router.get("/getNetworks", getNetworksInSingle);
router.get("/getNetworks/:id", getNetworksInSingle);

export default router;