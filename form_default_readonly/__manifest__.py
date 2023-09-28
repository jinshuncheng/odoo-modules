# -*- coding: utf-8 -*-
##############################################################################
#
# Copyright (C) 2018 jinshuncheng <jinshuncheng@hotmail.com>
# All Rights Reserved
#
##############################################################################
{
    'author': 'jinshuncheng@hotmail.com',
    'website': '',
	'license': 'OPL-1',
    'version': '16.0.0.1.0',
    'category': 'Extra Tools',
    'license': 'AGPL-3.0',
    'support': '',
    'price': 0,
    'currency': 'EUR',
    'name': 'Form Control Panel',
    'summary': 'Revert form control panel to previous version',

    'depends': [
        'base_setup',
        'web_editor',
        'mail',
    ],
    'excludes': [
    ],
    'data': [
    ],
    'assets': {
        'web.assets_backend': [
            'form_default_readonly/static/src/css/form_control_panel.scss',
            'form_default_readonly/static/src/js/form_controller.js',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
}
