import React, {Fragment} from "react";

const CreationDate = ({date}) => {

    const formatizedDateByLocal = new Date(date).toLocaleDateString("nl", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    });


    return (
        <Fragment>
            {formatizedDateByLocal}
        </Fragment>
    );
};

export default CreationDate;