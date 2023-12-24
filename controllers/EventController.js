import express from "express";
import Event from "../models/EventModel.js";

const getEvent = async (queryParams) => {
  try {
    const { agency, tiket_id } = queryParams;

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

export { getEvent };
