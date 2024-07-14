"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_node_1 = require("./list-node");
const linked_list_1 = require("./linked-list");
let node4 = new list_node_1.default(50);
let node3 = new list_node_1.default(15, node4);
let node2 = new list_node_1.default(15, node3);
let head = new list_node_1.default(12, node2);
console.log((0, linked_list_1.listLength)(head));
