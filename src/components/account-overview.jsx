import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faUpload } from '@fortawesome/free-solid-svg-icons';

import '../css/account-overview.css';
import { Header } from './style';
import { User } from './user-info';
import { CardAccount } from './card-account-overview';

export const AccountOverview = ({data}) => {
  console.log(data);

  return (
    <div className="AccountOverview">
      <Header>
        <h1>Account Overview</h1>
        <User data={data}/>
      </Header>
      <CardAccount data={data}/>
    </div>
  )
}

export default AccountOverview;