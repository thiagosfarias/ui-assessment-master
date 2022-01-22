import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload , faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card, CardBody, CardHeader, Info } from './style';

export const CardAccount = ({data}) => {

    const linesSaved = (100 * data?.salesOverview?.linesSaved)/data?.salesOverview?.linesAttempted;
    const successfulUploads = (100 * data?.salesOverview?.successfulUploads)/data?.salesOverview?.uploads;

    return (
        <Card>
        <CardHeader>
          <div className="title">
            <FontAwesomeIcon icon={faUpload} className="upload"/>
            <h2>Sales</h2>
            <FontAwesomeIcon icon={faInfoCircle} className="info-circle"/>
          </div>
          <p>You have <b>{data?.salesOverview?.uploads}</b> uploads and <b>{data?.salesOverview?.linesAttempted}</b> lines added</p>
        </CardHeader>
        <CardBody>
          <Info>
            <h3 data-testid="upload-percentage">{successfulUploads}%</h3>
            <p className="info-p">UPLOAD SUCESSS</p>
          </Info>
          <Info>
            <div className="right">
              <h3 data-testid="lines-percentage">{linesSaved}%</h3>
              <p className="info-p">LINES SAVED</p>
            </div>

          </Info>
        </CardBody>
      </Card>
    )

}