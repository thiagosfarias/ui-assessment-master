import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { UserInfo, UserSpace } from './style';

export const User = ({data}) => {
    return (<UserSpace>
        <p>YOUR FEEFO SUPORT CONTACT</p>
        <UserInfo>
          <div className="symbol"><p><b>S</b></p></div>
          <div className="email">
            <p>{data.supportContact.name}</p>
            <div className="user-stats">
              <FontAwesomeIcon icon={['far', 'mailbox']}/>
              <p>{data.supportContact.email}</p>
              <p>{data.salesOverview.lastUploadDate}</p>
            </div>

          </div>
        </UserInfo>
      </UserSpace>)
}