
const serviceProviderController = require('../controller/serviceProviderController')
const router = require('express').Router();

router
    .get("/service-provider",serviceProviderController.getAllServiceProvider )
    .put("/update-service-provider", serviceProviderController.updateProfile)
    .put("/deleted-service-provider", serviceProviderController.deleteServiceProvider)

module.exports = router