import express from "express";
import { getEvent, postEvent } from "../controllers/EventController.js";

const router = express.Router();

router.get('/event/search', async (req, res) => {
  try {
    const result = await getEvent(req.query);
    console.log(req.query)
    res.json(result);

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.post('/event', postEvent)

export default router;
