import express from "express";
import Event from "../models/EventModel.js";

export const getEvent = async (queryParams) => {
  try {
    const { agency, tiket_id } = queryParams;

    if (!agency && !tiket_id) {res.status(400).json("isi params gan!")}

    const result = await Event.findOne({
      where: {
        ...(agency && { agency }),
        ...(tiket_id && { tiket_id }),
      },
    });

    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching events');
  }
};

export const postEvent = async(req, res) => {
  try {
    const {tiket_id, date, agency, event_name, place, city} = req.body;
    const event = await Event.create({
      tiket_id,
      date,
      agency,
      event_name,
      place,
      city
    })
    return res.status(200).json({msg: "POST Successfully", event})
  } catch (error) {
    console.error(error);
    return res.status(500).json({msg: "Internal Server Error"})
  }
}
