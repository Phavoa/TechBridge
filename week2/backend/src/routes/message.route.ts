import express from "express";

const router = express.Router()
router.get("/conversation", (req, res) => {
    res.send("conversation routes")
})

export default router;