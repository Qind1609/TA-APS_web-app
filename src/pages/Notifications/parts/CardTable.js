import React from 'react';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';

const columns = ['Time', 'Type Notifiction', 'Status', 'Percent'];

const message = [
  ['11:27:44', 'Năng lượng tăng bất thường', 'Tăng', '10%'],
  ['11:27:46', 'Năng lượng tăng bất thường', 'Tăng', '34%'],
  ['11:29:11', 'Năng lượng tăng bất thường', 'Tăng', '69%'],
  ['14:27:40', 'Năng lượng tăng bất thường', 'Tăng', '32%'],
  ['11:27:44', 'Năng lượng tăng bất thường', 'Tăng', '12%'],
  ['11:27:44', 'Năng lượng tăng bất thường', 'Tăng', '14%'],
  ['11:27:44', 'Năng lượng tăng bất thường', 'Tăng', '23%'],
  ['12:27:44', 'Năng lượng tăng bất thường', 'Tăng', '45%'],
  ['11:27:44', 'Năng lượng tăng bất thường', 'Tăng', '37%'],
  ['11:27:44', 'Năng lượng tăng bất thường', 'Tăng', '76%'],
  ['11:27:44', 'Năng lượng tăng bất thường', 'Tăng', '5%'],
  ['11:27:44', 'Năng lượng tăng bất thường', 'Tăng', '1%'],
  ['11:27:44', 'Năng lượng tăng bất thường', 'Tăng', '167%'],
  ['11:27:44', 'Năng lượng tăng bất thường', 'Tăng', '45%'],
  ['11:27:44', 'Năng lượng tăng bất thường', 'Tăng', '67%'],
  ['11:27:44', 'Năng lượng tăng bất thường', 'Tăng', '12%'],
  ['11:27:44', 'Năng lượng tăng bất thường', 'Tăng', '1%'],
  ['11:27:44', 'Năng lượng tăng bất thường', 'Tăng', '14%'],
  ['11:27:44', 'Năng lượng tăng bất thường', 'Tăng', '78%'],
  ['11:27:44', 'Năng lượng tăng bất thường', 'Tăng', '34%']
];

const options = {
  filterType: 'checkbox'
};

export default function CardTable({ color }) {
  return (
    <>
      <MUIDataTable
        className={
          'relative table-h-screen flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
          (color === 'light' ? 'bg-white' : 'bg-blueGray-700 text-white')
        }
        title={'Notification'}
        data={message}
        columns={columns}
        options={options}
      />
    </>
  );
}

CardTable.defaultProps = {
  color: 'light'
};

CardTable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark'])
};
