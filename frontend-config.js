// Copyright (c) 2020 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import { DamlLfValue } from '@da/ui-core';

export const version = {
  schema: 'navigator-config',
  major: 2,
  minor: 0,
};

export const customViews = (userId, party, role) => ({
  
  currenctToken: {
    type: "table-view",
    title: "Currency Token",
    source: {
      type: "contracts",
      filter: [
        {
          field: "template.id", 
          value: "Tickets:Create_token",
        }
      ],
      search: "",
      sort: [
        {
          field: "id",
          direction: "ASCENDING"
        }
      ]
    },
    columns: [
      {
        key: "id",
        title: "Contract ID",
        createCell: ({rowData}) => ({
          type: "text",
          value: rowData.id
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.organiser",
        title: "Organiser",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).organiser
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.currency_token",
        title: "Currency Token",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).currency_token
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.token_price",
        title: "Token Price",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).token_price
        }),
        sortable: true,
        width: 80,
        weight: 3,
        alignment: "left"
      }
    ]
  },
  organiserWallet: {
    type: "table-view",
    title: "Organiser Wallet",
    source: {
      type: "contracts",
      filter: [
        {
          field: "template.id",
          value: "Tickets:Organiser_ticket",
        }
      ],
      search: "",
      sort: [
        {
          field: "id",
          direction: "ASCENDING"
        }
      ]
    },
    columns: [
      {
        key: "id",
        title: "Contract ID",
        createCell: ({rowData}) => ({
          type: "text",
          value: rowData.id
        }),
        sortable: true,
        width: 50,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.organiser",
        title: "Organiser",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).organiser
        }),
        sortable: true,
        width: 50,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.currency_token",
        title: "Currency Token",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).currency_token
        }),
        sortable: true,
        width: 100,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.token_price",
        title: "Token Price",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).token_price
        }),
        sortable: true,
        width: 50,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.total_tickets",
        title: "Total Tickets",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).total_tickets
        }),
        sortable: true,
        width: 40,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.available_tickets",
        title: "Available Tickets",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).available_tickets
        }),
        sortable: true,
        width: 40,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.total_ticket_price",
        title: "Total Ticket Price",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).total_ticket_price
        }),
        sortable: true,
        width: 50,
        weight: 0,
        alignment: "left"
      }
    ]
  },
  requestForTicket: {
    type: "table-view",
    title: "Ticket Request",
    source: {
      type: "contracts",
      filter: [
        {
          field: "template.id",
          value: "Tickets:Buy_ticket",
        }
      ],
      search: "",
      sort: [
        {
          field: "id",
          direction: "ASCENDING"
        }
      ]
    },
    columns: [
      {
        key: "id",
        title: "Contract ID",
        createCell: ({rowData}) => ({
          type: "text",
          value: rowData.id
        }),
        sortable: true,
        width: 50,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.organiser",
        title: "Organiser",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).organiser
        }),
        sortable: true,
        width: 50,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.organiser",
        title: "Seller",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).organiser
        }),
        sortable: true,
        width: 50,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.owner",
        title: "Receiver",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).owner
        }),
        sortable: true,
        width: 50,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.currency_token",
        title: "Currency Token",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).currency_token
        }),
        sortable: true,
        width: 50,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.quantity",
        title: "Quantity",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).quantity
        }),
        sortable: true,
        width: 50,
        weight: 0,
        alignment: "left"
      },
    ]
  },
  primaryMarket: {
    type: "table-view",
    title: "Primary Market",
    source: {
      type: "contracts",
      filter: [
        {
          field: "template.id",
          value: "Tickets:Primary_Market",
        }
      ],
      search: "",
      sort: [
        {
          field: "id",
          direction: "ASCENDING"
        }
      ]
    },
    columns: [
      {
        key: "id",
        title: "Contract ID",
        createCell: ({rowData}) => ({
          type: "text",
          value: rowData.id
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.organiser",
        title: "Organiser",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).organiser
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.organiser",
        title: "Seller",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).organiser
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.owner",
        title: "Receiver",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).owner
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.currency_token",
        title: "Currency Token",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).currency_token
        }),
        sortable: true,
        width: 120,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.quantity",
        title: "Quantity",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).quantity
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.available_tickets",
        title: "Available Tickets",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).available_tickets
        }),
        sortable: true,
        width: 80,
        weight: 3,
        alignment: "left"
      },
      {
        key: "argument.total_ticket_price",
        title: "Total Price",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).total_ticket_price
        }),
        sortable: true,
        width: 80,
        weight: 3,
        alignment: "left"
      }
    ]
  },
  secondMarket: {
    type: "table-view",
    title: "Second Market",
    source: {
      type: "contracts",
      filter: [
        {
          field: "template.id",
          value: "Tickets:Secondary_Market",
        }
      ],
      search: "",
      sort: [
        {
          field: "id",
          direction: "ASCENDING"
        }
      ]
    },
    columns: [
      {
        key: "id",
        title: "Contract ID",
        createCell: ({rowData}) => ({
          type: "text",
          value: rowData.id
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.organiser",
        title: "Organiser",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).organiser
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.owner",
        title: "Seller",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).owner
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.newowner",
        title: "Receiver",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).newowner
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.currency_token",
        title: "Currency Token",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).currency_token
        }),
        sortable: true,
        width: 120,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.quantity",
        title: "Quantity",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).quantity
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.available_tickets",
        title: "Available Tickets",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).available_tickets
        }),
        sortable: true,
        width: 80,
        weight: 3,
        alignment: "left"
      },
      {
        key: "argument.total_ticket_price",
        title: "Total Price",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).total_ticket_price
        }),
        sortable: true,
        width: 80,
        weight: 3,
        alignment: "left"
      }
    ]
  }
})