import React from 'react';
import ReqItem from './ReqItem';
import requestersList from '../data/requestersList';
import '../css/ReqItem.css';

const RequesterList = () => (<div>
    <h2 style={{ textAlign: "center", paddingTop: "22px" }}>Featured Requesters</h2>
    <div className="row">
        {requestersList.map((staff) =>
            <ReqItem
                key={staff.key}
                avatar={staff.avatar}
                name={staff.name}
                position={staff.position}
            />
        )}
    </div>
</div>
)

export default RequesterList;
