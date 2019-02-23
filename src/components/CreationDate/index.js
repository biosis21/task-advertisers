import React from "react";

const LOCALE = "nl";

const CreationDate = ({date}) => {

    const formatizedDateByLocale = new Date(date).toLocaleDateString(LOCALE, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    });

    return (
        <>
            {formatizedDateByLocale}
        </>
    );
};

export default CreationDate;