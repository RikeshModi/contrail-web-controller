/*
 * Copyright (c) 2015 Juniper Networks, Inc. All rights reserved.
 */

define([
    'underscore',
    'contrail-model'
], function (_, ContrailModel) {
    var interfacesModel = ContrailModel.extend({

        defaultConfig: {
            interfaceType: "",
            virtualNetwork: null,
            interfaceIndex: -1,
            interfaceData: null,
            allVNListData: []
        },

        validateAttr: function (attributePath, validation, data) {
            var model = data.model().attributes.model(),
                attr = cowu.getAttributeFromPath(attributePath),
                errors = model.get(cowc.KEY_MODEL_ERRORS),
                attrErrorObj = {}, isValid;

            isValid = model.isValid(attributePath, validation);

            attrErrorObj[attr + cowc.ERROR_SUFFIX_ID] = (isValid == true) ? false : isValid;
            errors.set(attrErrorObj);
        },

       validations: {
            interfacesValidation: {
                'virtualNetwork': function(val, attr, obj) {
                    if (null == val) {
                        return 'Virtual network is required';
                    }
                }
            }
        }
    });

    return interfacesModel;
});

