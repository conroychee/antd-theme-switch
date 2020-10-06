import React from 'react';
import { Col, Button, TreeSelect } from 'antd';
import { Table, Tag, Space } from 'antd';

const Persons = [
    {
        value: '1', title: 'Person', checked: true, children: [
            { value: 'Lucy', title: 'Lucy' },
            { value: 'Michael', title: 'Michael' },
        ]
    },

]

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

function AntComponent() {
    return (
        <div>
            <Col xs={24}><Button type="primary" >Antd Button</Button></Col>
            <TreeSelect
                showSearch
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                multiple
                treeCheckable
                maxTagCount={10}

                treeData={Persons}
            />

            <Table dataSource={dataSource} columns={columns} />;
        </div>
    )
}

export default AntComponent




