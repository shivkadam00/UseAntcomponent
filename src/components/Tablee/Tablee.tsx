import React from 'react';
import { Table } from 'antd';
import classes from './Tablee.module.scss';
import { render } from '@testing-library/react';

function Tablee() {
  const dataSource = [
    {
      key: '1',
      name: 'shiv',
      address: 'kasar',
      age: 20,
    },
    {
      key: '2',
      name: 'vishal',
      address: 'kasarran',
      age: 30,
    },
    {
      key: '3',
      name: 'rakj',
      address: 'vsvhbhvv',
      age: 50,
    },
  ];
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name) => {
        return <a>{name}</a>;
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Graduated',
      key: 'key',
      render: (payload) => {
        return <p>{payload > 1000 ? 'True' : 'false'}</p>;
      },
    },
  ];
  return (
    <div className={classes.container}>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default Tablee;
