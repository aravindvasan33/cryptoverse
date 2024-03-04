import React from 'react';
// import millify from 'millify';
// import {  Row, Col } from 'antd';
// import HTMLReactParser from 'html-react-parser';

// import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

// const { Text } = Typography;
// const { Panel } = Collapse;

const Exchanges = () => {
  // const { data, isFetching } = useGetExchangesQuery();
  // const exchangesList = data?.data?.exchanges;
 // Note: To access this endpoint you need premium plan
  // if (isFetching) return <Loader />;

  return (
    <>
      <Loader />
    </>
  );
};

export default Exchanges;
