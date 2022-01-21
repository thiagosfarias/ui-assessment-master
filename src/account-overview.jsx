import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faUpload } from '@fortawesome/free-solid-svg-icons';

import './account-overview.css';
import { Card, CardBody, CardHeader, Header, Info, UserInfo, UserSpace } from './style';

export const AccountOverview = ({data}) => {
  console.log(data);

  const linesSaved = (100 * data.salesOverview.linesSaved)/data.salesOverview.linesAttempted;
  const successfulUploads = (100 * data.salesOverview.successfulUploads)/data.salesOverview.uploads;

  return (
    <div className="AccountOverview">
      <Header>
        <h1>Account Overview</h1>
        <UserSpace>
          <p>YOUR FEEFO SUPORT CONTACT</p>
          <UserInfo>
            <div className="symbol"><p><b>S</b></p></div>
            <div className="email">
              <p>{data.supportContact.name}</p>
              <div className="user-stats">
                <FontAwesomeIcon icon={faMailBulk}/>
                <p>{data.supportContact.email}</p>
                <p>{data.salesOverview.lastUploadDate}</p>
              </div>

            </div>
          </UserInfo>
        </UserSpace>
      </Header>
      <Card>
        <CardHeader>
          <div className="title">
            <FontAwesomeIcon icon={faUpload}/>
            <h2>Sales</h2>
          </div>
          <p>You have <b>{data.salesOverview.uploads}</b> uploads and <b>{data.salesOverview.linesAttempted}</b> lines added</p>
        </CardHeader>
        <CardBody>
          <Info>
            <h3>{successfulUploads}%</h3>
            <p className="info-p">UPLOAD SUCESSS</p>
          </Info>
          <Info>
            <div className="right">
              <h3>{linesSaved}%</h3>
              <p className="info-p">LINES SAVED</p>
            </div>

          </Info>
        </CardBody>
      </Card>
    </div>
  )
}

export default AccountOverview;