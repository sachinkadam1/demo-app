import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

export default function Home() {

  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments/')
      .then(response => response.json())
      .then(json => setdata(json))
  }, []);

  return (
    <div>
      <div className='header'><h2>Home</h2></div>
      <div style={{ width: '100%', padding: 15 }}>
          <Table columns={[
            { key: "id", dataIndex: "id", title: "id" },
            { key: "name", dataIndex: "name", title: "name" },
            { key: "postId", dataIndex: "postId", title: "postId" },
            { key: "email", dataIndex: "email", title: "email" },
            { key: "body", dataIndex: "body", title: "postId" }
          ]} dataSource={data} />
      </div>
    </div>
  )
}