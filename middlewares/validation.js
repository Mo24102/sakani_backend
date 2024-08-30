const { body } = require("express-validator")

const validation = () => {
    return [
        body('kind')
            .notEmpty()
            .withMessage("kind is required"),
        body('type')
            .notEmpty()
            .withMessage("type is required"),
        body('propertyaddress')
            .notEmpty()
            .withMessage("propertyaddress is required"),
        body('price')
            .notEmpty()
            .withMessage("price is required"),
        body('PhoneNmber')
            .notEmpty()
            .withMessage("PhoneNmber is required"),
        body('moreDetails')
            .notEmpty()
            .withMessage("moreDetails is required"),
        body('rentDuration')
            .notEmpty()
            .withMessage("rentDuration is required")
    ]
}

module.exports =
{
    validation
}