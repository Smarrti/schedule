import React from "react";
import { MyTag } from "@ui";
import classes from "@features/customization/style.module.css";

export const setRowStyleByType = (type, table) => {
  switch (type) {
    case "Лекция":
      return [
        classes[table.lecture.background],
        classes[table.lecture.fontColor],
      ];
    case "Практическое занятие":
      return [
        classes[table.practice.background],
        classes[table.practice.fontColor],
      ];
    default:
      return null;
  }
};

export const columns = [
  {
    title: "Дата",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Время начала",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Длительность",
    dataIndex: "duration",
    key: "duration",
  },
  {
    title: "Название",
    dataIndex: "name",
    key: "name",
    render: (name) => <a href="/#">{name}</a>,
  },
  {
    title: "Лектор",
    dataIndex: "author",
    key: "author",
    render: (author) => <a href="/#">{author}</a>,
  },
  {
    title: "Формат",
    dataIndex: "type",
    key: "type",
    filters: [
      {
        text: "Лекция",
        value: "Лекция",
      },
      {
        text: "Практическое задание",
        value: "Практическое",
      },
    ],
    onFilter: (value, record) => record.type.indexOf(value) === 0,
    sorter: (a, b) => a.type.length - b.type.length,
  },

  {
    title: "Теги",
    dataIndex: "tags",
    key: "tags",
    render: (tags) => <MyTag tags={tags} />,
  },
  {
    title: "Доп. материалы",
    dataIndex: "optional",
    key: "optional",
    render: (optional) => <a href="/#">{optional}</a>,
  },
];
