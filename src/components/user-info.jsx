import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { UserInfo, UserSpace } from './style';

export const User = ({data}) => {
    return (
    <UserSpace>
        <p>YOUR FEEFO SUPORT CONTACT</p>
        <UserInfo>
          <div className="symbol"><p><b>{data?.supportContact?.name.charAt(0)}</b></p></div>
          <div className="email">
            <p data-testid="user-name"><b>{data?.supportContact?.name}</b></p>
            <div className="user-stats">
              <FontAwesomeIcon icon={faEnvelope} className="email-icon"/>
              <p data-testid="user-email">{data?.supportContact?.email}</p>
              <p>{data?.salesOverview?.lastUploadDate}</p>
            </div>

          </div>
        </UserInfo>
      </UserSpace>)
}