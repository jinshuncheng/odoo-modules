# -*- coding: utf-8 -*-
##############################################################################
#
# Copyright (C) 2023 jinshuncheng <jinshuncheng@hotmail.com>
# All Rights Reserved
#
##############################################################################
{
    'author': 'jinshuncheng@hotmail.com',
    'website': '',
    'version': '16.0.0.1.0',
    'category': 'Extra Tools',
    'license': 'AGPL-3',
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
            'form_control_panel/static/src/css/form_control_panel.scss',
            'form_control_panel/static/src/js/*',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
}