import Tour from "../models/tour.model.js";

// create new tour
export const createTour = async (req, res) => {
        const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();
        res.status(200).json({
        success: true,
        message: "Successfully Created",
        data: savedTour,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create. Try again!"
        });
    }
};

// view tour
export const views = async (req, res) => {
    try {
        const TourExists = await Tour.findOne({ title: req.query.title });
        if (TourExists) {
        return res.send(TourExists);
        }else {
        res.status(200).send({
          success: false,
          message: "Destination Not Found! Please Choose a Right Destination!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  
